import type { Metadata } from "next";
import Link from "next/link";
import { DataTable } from "@/components/data-table";

export const metadata: Metadata = {
  title: "CM Welding",
  description:
    "Sprint 2 status for CM Welding: GCP and IAM access, environment dependencies, and open training and support.",
};

export default function CmWeldingPage() {
  return (
    <article className="px-[clamp(1.25rem,0.6rem+3vw,3.5rem)] py-16">
      <div className="mx-auto grid w-full max-w-[980px] gap-12">
        <header>
          <p className="text-sm text-faint">
            <Link href="/work" className="hover:text-crimson">Work</Link> / CM Welding
          </p>
          <p className="mt-6 text-xs font-semibold tracking-[0.14em] text-olive uppercase">
            Sprint 2 · in progress
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.25rem,1.5rem+3vw,4rem)] font-light tracking-tight">
            CM Welding
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Shop software for welding and fabrication. Sprint 2 covers access, the
            environment dependency list, and the status report.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <StatusCard title="Completed" items={["Sprint 2 is scoped to access, environment notes, and support.", "The status report format is set: pending actions, owners by role, target dates."]} />
          <StatusCard title="Pending" items={["GCP and IAM access is being set up and must be documented.", "Environment dependencies are in progress and must be written down.", "Training and support requirements are still open."]} />
          <StatusCard title="Blockers" items={["The environment is not ready until IAM and the dependency list exist as notes.", "Support cannot close until the client engineer and delivery lead agree what training is required."]} />
        </section>

        <section>
          <h2 className="font-display text-3xl font-light tracking-tight">Sprint status</h2>
          <p className="mt-2 mb-4 text-sm text-muted">
            Pending actions, owners, and dates.
          </p>
          <DataTable
            caption="CM Welding Sprint 2 status"
            columns={["Action", "State", "Owner", "Target"]}
            rows={[
              ["Document GCP project access and IAM roles", "In progress", "Platform engineer", "17 Oct 2026"],
              ["Write the environment dependency list", "In progress", "Platform engineer", "17 Oct 2026"],
              ["Confirm training and support requirements", "Open", "Delivery lead, with the client engineer", "24 Oct 2026"],
              ["Issue the sprint status report", "Pending", "Delivery lead", "20 Oct 2026"],
            ]}
          />
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-light">Deliverables</h2>
            <ul className="mt-3 grid gap-2 text-sm text-muted">
              <li>Environment dependency note, including IAM.</li>
              <li>Sprint status report: pending actions, role owners, target dates.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-light">Next steps</h2>
            <ul className="mt-3 grid gap-2 text-sm text-muted">
              <li>Platform engineer writes the IAM and dependency notes.</li>
              <li>Client engineer confirms access and what training is needed.</li>
              <li>Delivery lead issues the status report once those notes exist.</li>
            </ul>
          </div>
        </section>
      </div>
    </article>
  );
}

function StatusCard({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-[20px] border border-line bg-surface p-5">
      <h2 className="text-xs font-semibold tracking-[0.14em] text-crimson uppercase">{title}</h2>
      <ul className="mt-3 grid gap-2 text-sm text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
