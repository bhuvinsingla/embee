"use client";

import { useMemo, useState } from "react";
import { sowColumns, sowRecords } from "@/lib/sow";

export function SowBoard() {
  const [client, setClient] = useState("All");
  const [approval, setApproval] = useState("All");
  const [query, setQuery] = useState("");

  const clients = ["All", ...new Set(sowRecords.map((row) => row.client))];
  const approvals = ["All", ...new Set(sowRecords.map((row) => row.approval))];

  const rows = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return sowRecords.filter((row) => {
      if (client !== "All" && row.client !== client) return false;
      if (approval !== "All" && row.approval !== approval) return false;
      if (!needle) return true;
      return sowColumns.some((column) =>
        String(row[column.key]).toLowerCase().includes(needle),
      );
    });
  }, [approval, client, query]);

  return (
    <div className="grid gap-4">
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="grid gap-1.5 text-sm font-medium">
          Client
          <select
            value={client}
            onChange={(event) => setClient(event.target.value)}
            className="rounded-2xl border border-line bg-surface px-4 py-3 font-normal"
          >
            {clients.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Approval / signature
          <select
            value={approval}
            onChange={(event) => setApproval(event.target.value)}
            className="rounded-2xl border border-line bg-surface px-4 py-3 font-normal"
          >
            {approvals.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Search records
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Scope, owner, risk…"
            className="rounded-2xl border border-line bg-surface px-4 py-3 font-normal"
          />
        </label>
      </div>
      <p className="text-sm text-muted">
        {rows.length} {rows.length === 1 ? "engagement" : "engagements"}
      </p>
      {rows.length === 0 ? (
        <p className="rounded-[20px] border border-line bg-surface px-5 py-8 text-sm text-muted">
          No records match this filter.
        </p>
      ) : (
        <ul className="grid gap-4 lg:grid-cols-2">
          {rows.map((row, index) => (
            <li key={row.id}>
              <article
                className="listing-card grid h-full gap-5 rounded-[20px] border border-line bg-surface p-6 hover:border-crimson"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <header className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.14em] text-crimson uppercase">
                      {row.client}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-light tracking-tight">
                      {row.project}
                    </h2>
                  </div>
                  <p className="shrink-0 rounded-full bg-tint px-3 py-1 text-xs font-semibold text-crimson">
                    {row.approval}
                  </p>
                </header>
                <p className="text-sm text-muted">{row.scope}</p>
                <dl className="grid grid-cols-3 gap-3 text-sm">
                  <div className="rounded-2xl bg-tint px-3 py-3">
                    <dt className="text-xs tracking-[0.08em] text-faint uppercase">Budgeted</dt>
                    <dd className="mt-1 font-medium">{row.budgetedHours}h</dd>
                  </div>
                  <div className="rounded-2xl bg-tint px-3 py-3">
                    <dt className="text-xs tracking-[0.08em] text-faint uppercase">Actual</dt>
                    <dd className="mt-1 font-medium">{row.actualHours}h</dd>
                  </div>
                  <div className="rounded-2xl bg-tint px-3 py-3">
                    <dt className="text-xs tracking-[0.08em] text-faint uppercase">Balance</dt>
                    <dd className="mt-1 font-medium">{row.balanceHours}h</dd>
                  </div>
                </dl>
                <dl className="grid gap-3 text-sm sm:grid-cols-2">
                  <Field label="Deliverables" value={row.deliverables} />
                  <Field label="Value" value={row.sowValue} />
                  <Field label="Billing" value={row.billingTerms} />
                  <Field label="Window" value={`${row.start} to ${row.end}`} />
                  <Field label="Milestones" value={row.milestones} />
                  <Field label="Owners" value={`${row.projectOwner} / ${row.deliveryOwner}`} />
                  <Field label="Allocation" value={row.allocation} />
                  <Field label="Invoicing" value={row.invoicing} />
                  <Field label="Payment" value={row.payment} />
                  <Field label="Renewal" value={row.renewal} />
                  <Field label="Risks" value={row.risks} />
                  <Field label="Pending" value={row.pending} />
                </dl>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold tracking-[0.08em] text-faint uppercase">{label}</dt>
      <dd className="mt-1 text-ink">{value}</dd>
    </div>
  );
}
