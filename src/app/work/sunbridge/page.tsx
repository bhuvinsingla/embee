import type { Metadata } from "next";
import Link from "next/link";
import { DataTable } from "@/components/data-table";

export const metadata: Metadata = {
  title: "Sunbridge",
  description:
    "Sprint 2 status for Sunbridge: SCADA fetching, API integration, partial data, hourly retry, and notifications.",
};

export default function SunbridgePage() {
  return (
    <article className="px-[clamp(1.25rem,0.6rem+3vw,3.5rem)] py-16">
      <div className="mx-auto grid w-full max-w-[980px] gap-12">
        <header>
          <p className="text-sm text-faint">
            <Link href="/work" className="hover:text-crimson">Work</Link> / Sunbridge
          </p>
          <p className="mt-6 text-xs font-semibold tracking-[0.14em] text-olive uppercase">
            Sprint 2 · in progress
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.25rem,1.5rem+3vw,4rem)] font-light tracking-tight">
            Sunbridge
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            SCADA data fetching and the API that receives it. Partial records and
            refresh timing are still open. The working response is an hourly retry,
            after the database source and tables are validated.
          </p>
        </header>

        <section className="rounded-[20px] border border-line bg-tint p-6">
          <h2 className="font-display text-2xl font-light">Data flow</h2>
          <p className="mt-3 text-sm text-muted">
            SCADA source → fetch job → API → check against the database source and
            tables → stored record. If the payload is partial or the cycle fails,
            the job retries on the hour and a proactive email is still to be switched on.
            Screenshot review and the partial-fetch email are the remaining Sprint 2 items.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl font-light tracking-tight">Sprint status</h2>
          <p className="mt-2 mb-4 text-sm text-muted">
            Progress, open issues, how each one is being resolved, and the next step.
          </p>
          <DataTable
            caption="Sunbridge Sprint 2 status"
            columns={["Workstream", "Progress", "Open issue", "Resolution", "Next step"]}
            rows={[
              [
                "SCADA fetch",
                "In progress",
                "Some cycles return partial data",
                "Validate the database source and tables before mapping fields",
                "Platform engineer rechecks the source tables",
              ],
              [
                "API integration",
                "In progress",
                "Incomplete records on some cycles",
                "Hourly retry while the gap stays open",
                "Confirm the retry covers the partial window",
              ],
              [
                "Refresh timing",
                "Open",
                "Lag between pulls",
                "Hourly retry until a tighter interval is justified",
                "Delivery lead confirms the acceptable lag with the client engineer",
              ],
              [
                "Screenshots",
                "Pending",
                "Not yet in the status pack",
                "Capture after a clean fetch",
                "Client engineer reviews the shots",
              ],
              [
                "Email notification",
                "Pending",
                "Proactive mail is not on",
                "Send when a fetch is partial or a retry fails",
                "Platform engineer wires the notification",
              ],
            ]}
          />
        </section>

        <section>
          <h2 className="font-display text-2xl font-light">Pending fixes</h2>
          <ul className="mt-3 grid gap-2 text-sm text-muted">
            <li>Source database and table names confirmed in the integration note.</li>
            <li>Hourly retry proven against a partial payload, not only a failed call.</li>
            <li>Screenshot pack attached after one clean cycle.</li>
            <li>Email sent to the delivery lead and client engineer when a cycle is partial.</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
