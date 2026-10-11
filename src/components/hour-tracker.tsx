"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type Billable = "billable" | "non-billable";
type Approval = "draft" | "submitted" | "approved";

type Entry = {
  id: string;
  date: string;
  person: string;
  project: string;
  client: string;
  hours: number;
  task: string;
  billable: Billable;
  approval: Approval;
};

const STORAGE_KEY = "embee-hour-tracker-v2";
const PROJECTS = [
  { project: "CM Welding", client: "CM Welding" },
  { project: "Sunbridge", client: "Sunbridge" },
  { project: "Embee FinSoft", client: "Embee Group" },
  { project: "Internal", client: "Embee Group" },
];

function today() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

function sum(entries: Entry[]) {
  return entries.reduce((total, entry) => total + entry.hours, 0);
}

function group(entries: Entry[], key: "project" | "person") {
  const totals = new Map<string, number>();
  for (const entry of entries) {
    totals.set(entry[key], (totals.get(entry[key]) ?? 0) + entry.hours);
  }
  return [...totals.entries()].sort((a, b) => b[1] - a[1]);
}

function loadEntries(): Entry[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.flatMap((item) => {
      if (!item || typeof item !== "object") return [];
      const row = item as Partial<Entry>;
      if (!row.id || !row.date || !row.person || !row.project) return [];
      const hours = Number(row.hours);
      if (!Number.isFinite(hours)) return [];
      return [
        {
          id: row.id,
          date: row.date,
          person: row.person,
          project: row.project,
          client: row.client || row.project,
          hours,
          task: row.task || "",
          billable: row.billable === "non-billable" ? "non-billable" : "billable",
          approval:
            row.approval === "submitted" || row.approval === "approved"
              ? row.approval
              : "draft",
        } satisfies Entry,
      ];
    });
  } catch {
    return [];
  }
}

function csvCell(value: string | number) {
  const text = String(value);
  if (/[",\n]/.test(text)) return `"${text.replaceAll('"', '""')}"`;
  return text;
}

export function HourTracker() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [ready, setReady] = useState(false);
  const [todayIso, setTodayIso] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [date, setDate] = useState("");
  const [person, setPerson] = useState("");
  const [project, setProject] = useState(PROJECTS[0].project);
  const [client, setClient] = useState(PROJECTS[0].client);
  const [hours, setHours] = useState("1");
  const [task, setTask] = useState("");
  const [billable, setBillable] = useState<Billable>("billable");
  const [approval, setApproval] = useState<Approval>("draft");

  /* eslint-disable react-hooks/set-state-in-effect -- browser-only date and saved entries cannot be read during prerender */
  useEffect(() => {
    const current = today();
    setTodayIso(current);
    setDate((value) => value || current);
    setEntries(loadEntries());
    setReady(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (ready) localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries, ready]);

  const monthEntries = useMemo(() => {
    if (!todayIso) return [];
    const month = todayIso.slice(0, 7);
    return entries.filter((entry) => entry.date.startsWith(month));
  }, [entries, todayIso]);

  function resetForm() {
    setEditingId(null);
    setDate(today());
    setPerson("");
    setProject(PROJECTS[0].project);
    setClient(PROJECTS[0].client);
    setHours("1");
    setTask("");
    setBillable("billable");
    setApproval("draft");
  }

  function onProject(nextProject: string) {
    setProject(nextProject);
    const match = PROJECTS.find((item) => item.project === nextProject);
    if (match) setClient(match.client);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsedHours = Number(hours);
    if (person.trim().length < 2) {
      setError("Add the resource name.");
      return;
    }
    if (!date) {
      setError("Add a date.");
      return;
    }
    if (!Number.isFinite(parsedHours) || parsedHours <= 0 || parsedHours > 24) {
      setError("Hours must be greater than 0 and no more than 24.");
      return;
    }
    if (task.trim().length < 3) {
      setError("Add a short task description.");
      return;
    }

    const next: Entry = {
      id: editingId ?? crypto.randomUUID(),
      date,
      person: person.trim(),
      project,
      client: client.trim() || project,
      hours: Math.round(parsedHours * 100) / 100,
      task: task.trim(),
      billable,
      approval,
    };

    setEntries((current) => {
      if (editingId) {
        return current.map((entry) => (entry.id === editingId ? next : entry));
      }
      return [next, ...current];
    });
    setError("");
    resetForm();
  }

  function edit(entry: Entry) {
    setEditingId(entry.id);
    setDate(entry.date);
    setPerson(entry.person);
    setProject(entry.project);
    setClient(entry.client);
    setHours(String(entry.hours));
    setTask(entry.task);
    setBillable(entry.billable);
    setApproval(entry.approval);
    setError("");
  }

  function remove(id: string) {
    setEntries((current) => current.filter((entry) => entry.id !== id));
    if (editingId === id) resetForm();
  }

  function exportCsv() {
    const header =
      "date,resource,project,client,hours,task,billable,approval";
    const rows = [...entries]
      .sort((a, b) => a.date.localeCompare(b.date))
      .map((entry) =>
        [
          entry.date,
          entry.person,
          entry.project,
          entry.client,
          entry.hours,
          entry.task,
          entry.billable,
          entry.approval,
        ]
          .map(csvCell)
          .join(","),
      );
    const blob = new Blob([[header, ...rows].join("\n")], {
      type: "text/csv;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "embee-hour-tracker.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  const fieldClass =
    "rounded-2xl border border-line bg-paper px-4 py-3 font-normal";

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <form onSubmit={onSubmit} className="grid h-fit gap-4 rounded-[20px] border border-line bg-surface p-6">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-crimson uppercase">
            {editingId ? "Edit entry" : "New entry"}
          </p>
          <h2 className="mt-2 font-display text-3xl font-light tracking-tight">Log hours</h2>
          <p className="mt-2 text-sm text-muted">
            Record the resource, project, hours, and whether the time is billable.
          </p>
        </div>
        <label className="grid gap-1.5 text-sm font-medium">
          Date
          <input type="date" value={date} onChange={(event) => setDate(event.target.value)} required className={fieldClass} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Resource name
          <input value={person} onChange={(event) => setPerson(event.target.value)} required className={fieldClass} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Project
          <select value={project} onChange={(event) => onProject(event.target.value)} className={fieldClass}>
            {PROJECTS.map((item) => (
              <option key={item.project}>{item.project}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Client
          <input value={client} onChange={(event) => setClient(event.target.value)} required className={fieldClass} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Hours
          <input type="number" min="0.25" max="24" step="0.25" value={hours} onChange={(event) => setHours(event.target.value)} required className={fieldClass} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Task description
          <textarea value={task} onChange={(event) => setTask(event.target.value)} required rows={3} className={fieldClass} />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1.5 text-sm font-medium">
            Billing
            <select value={billable} onChange={(event) => setBillable(event.target.value as Billable)} className={fieldClass}>
              <option value="billable">Billable</option>
              <option value="non-billable">Non-billable</option>
            </select>
          </label>
          <label className="grid gap-1.5 text-sm font-medium">
            Approval status
            <select value={approval} onChange={(event) => setApproval(event.target.value as Approval)} className={fieldClass}>
              <option value="draft">Draft</option>
              <option value="submitted">Submitted</option>
              <option value="approved">Approved</option>
            </select>
          </label>
        </div>
        {error ? (
          <p role="alert" className="text-sm font-medium text-crimson">{error}</p>
        ) : null}
        <div className="flex flex-wrap gap-3">
          <button type="submit" className="rounded-full bg-gradient-to-br from-crimson-bright via-crimson to-[#5e0d10] px-5 py-3 text-sm font-semibold text-white">
            {editingId ? "Save entry" : "Add entry"}
          </button>
          {editingId ? (
            <button type="button" onClick={resetForm} className="rounded-full border border-line px-5 py-3 text-sm font-semibold">
              Cancel
            </button>
          ) : null}
        </div>
      </form>

      <div className="grid gap-6">
        <div className="grid gap-3 sm:grid-cols-3">
          <Stat label="This month" value={sum(monthEntries)} />
          <Stat label="All logged" value={sum(entries)} />
          <Stat label="Entries" value={entries.length} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Breakdown title="This month by person" rows={group(monthEntries, "person")} />
          <Breakdown title="This month by project" rows={group(monthEntries, "project")} />
        </div>
        <div className="rounded-[20px] border border-line bg-surface">
          <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4">
            <h2 className="font-display text-2xl font-light tracking-tight">Entries</h2>
            <button type="button" onClick={exportCsv} disabled={entries.length === 0} className="rounded-full border border-line px-4 py-2 text-sm font-semibold disabled:opacity-40">
              Export CSV
            </button>
          </div>
          {entries.length === 0 ? (
            <p className="px-5 py-10 text-sm text-muted">No hours logged yet.</p>
          ) : (
            <ul className="grid gap-3 p-4">
              {entries.map((entry, index) => (
                <li
                  key={entry.id}
                  className="listing-card grid gap-3 rounded-[16px] border border-line bg-paper px-4 py-4 sm:grid-cols-[1fr_auto] hover:border-crimson"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div>
                    <p className="font-medium">
                      {entry.project}
                      <span className="text-muted"> · {entry.person}</span>
                    </p>
                    <p className="text-sm text-muted">
                      {entry.date} · {entry.client} · {entry.hours}h · {entry.billable} · {entry.approval}
                      {entry.task ? ` · ${entry.task}` : ""}
                    </p>
                  </div>
                  <div className="flex gap-3 text-sm font-semibold">
                    <button type="button" onClick={() => edit(entry)} className="text-crimson">Edit</button>
                    <button type="button" onClick={() => remove(entry.id)} className="text-muted">Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-[20px] border border-line bg-surface px-5 py-4">
      <p className="font-display text-3xl font-light tracking-tight text-crimson">
        {Number.isInteger(value) ? value : value.toFixed(2)}
      </p>
      <p className="text-sm text-muted">{label}</p>
    </div>
  );
}

function Breakdown({ title, rows }: { title: string; rows: [string, number][] }) {
  return (
    <div className="rounded-[20px] border border-line bg-surface px-5 py-4">
      <h3 className="text-sm font-semibold tracking-[0.08em] text-faint uppercase">{title}</h3>
      {rows.length === 0 ? (
        <p className="mt-3 text-sm text-muted">Nothing logged this month.</p>
      ) : (
        <ul className="mt-3 grid gap-2">
          {rows.map(([name, hours]) => (
            <li key={name} className="flex items-baseline justify-between gap-4 text-sm">
              <span>{name}</span>
              <span className="font-medium tabular-nums">{hours}h</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
