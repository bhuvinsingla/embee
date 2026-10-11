import type { Metadata } from "next";
import Link from "next/link";
import { DataTable } from "@/components/data-table";

export const metadata: Metadata = {
  title: "SOW Tracker",
  description:
    "Statement-of-work register: scope, value, milestones, owners, hours, invoicing, renewal, and risks.",
};

export default function SowWorkPage() {
  return (
    <article className="px-[clamp(1.25rem,0.6rem+3vw,3.5rem)] py-16">
      <div className="mx-auto grid w-full max-w-[980px] gap-10">
        <header>
          <p className="text-sm text-faint">
            <Link href="/work" className="hover:text-crimson">Work</Link> / SOW Tracker
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.25rem,1.5rem+3vw,4rem)] font-light tracking-tight">
            SOW Tracker
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            One row per statement of work, covering scope, owners, hours, invoicing, and risk.
          </p>
          <Link
            href="/sow-tracker"
            className="mt-6 inline-flex rounded-full bg-gradient-to-br from-crimson-bright via-crimson to-[#5e0d10] px-5 py-3 text-sm font-semibold text-white"
          >
            Open the register
          </Link>
        </header>
        <DataTable
          caption="SOW Tracker fields"
          columns={["Field", "Used for"]}
          rows={[
            ["Client / project", "Who the work is for, and which job"],
            ["Scope / deliverables", "What was agreed, and what must be handed over"],
            ["SOW value / billing terms", "Commercial terms for the engagement"],
            ["Start / end / milestones", "The window and the checkpoint"],
            ["Approval / signature", "Whether the record is signed"],
            ["Project owner / delivery owner", "Client-side and Embee-side roles"],
            ["Resource allocation", "Who is assigned"],
            ["Budgeted, actual, balance hours", "Hours planned against hours used"],
            ["Invoicing / payment", "Whether a bill has gone out, and whether it is paid"],
            ["Renewal date", "When the record needs a decision"],
            ["Risks / pending actions", "What can slip, and what is still open"],
          ]}
        />
      </div>
    </article>
  );
}
