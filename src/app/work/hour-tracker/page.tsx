import type { Metadata } from "next";
import Link from "next/link";
import { DataTable } from "@/components/data-table";

export const metadata: Metadata = {
  title: "Hour Tracker",
  description:
    "Hour Tracker data model: resource, project, client, date, hours, task, billable flag, approval, and monthly totals.",
};

export default function HourTrackerWorkPage() {
  return (
    <article className="px-[clamp(1.25rem,0.6rem+3vw,3.5rem)] py-16">
      <div className="mx-auto grid w-full max-w-[980px] gap-12">
        <header>
          <p className="text-sm text-faint">
            <Link href="/work" className="hover:text-crimson">Work</Link> / Hour Tracker
          </p>
          <p className="mt-6 text-xs font-semibold tracking-[0.14em] text-olive uppercase">
            Operations
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.25rem,1.5rem+3vw,4rem)] font-light tracking-tight">
            Hour Tracker
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Time records for delivery work: resource, project, client, billable flag,
            and approval. Monthly totals follow the same entries.
          </p>
          <Link
            href="/hour-tracker"
            className="mt-6 inline-flex rounded-full bg-gradient-to-br from-crimson-bright via-crimson to-[#5e0d10] px-5 py-3 text-sm font-semibold text-white"
          >
            Open the tracker
          </Link>
        </header>

        <section>
          <h2 className="font-display text-3xl font-light">Data model</h2>
          <div className="mt-4">
            <DataTable
              caption="Hour Tracker fields"
              columns={["Field", "What it holds"]}
              rows={[
                ["Resource name", "The person who did the work"],
                ["Project", "CM Welding, Sunbridge, Embee FinSoft, or internal"],
                ["Client", "The client the hours are logged against"],
                ["Date", "The day the work was done"],
                ["Hours", "Time on that task, up to 24"],
                ["Task description", "What was done"],
                ["Billable", "Billable or non-billable"],
                ["Approval status", "Draft, submitted, or approved"],
              ]}
            />
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[20px] border border-line bg-surface p-6">
            <h2 className="font-display text-2xl font-light">Totals</h2>
            <p className="mt-3 text-sm text-muted">
              The tracker rolls the current month up twice: person-wise and
              project-wise. Those totals update when an entry is added.
            </p>
          </div>
          <div className="rounded-[20px] border border-line bg-surface p-6">
            <h2 className="font-display text-2xl font-light">Submission rhythm</h2>
            <p className="mt-3 text-sm text-muted">
              Resources submit the week&apos;s entries. The delivery lead marks them
              approved on that same weekly cycle.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-light">Flow</h2>
          <p className="mt-3 text-sm text-muted">
            Resource writes a draft → marks it submitted → delivery lead sets
            approved. Monthly person and project totals read the same records.
          </p>
        </section>
      </div>
    </article>
  );
}
