import type { Metadata } from "next";
import Link from "next/link";
import { DataTable } from "@/components/data-table";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Embee FinSoft",
  description:
    "Embee FinSoft is the technology platform for Embee Group delivery: project status, time, and statements of work.",
};

export default function PlatformPage() {
  return (
    <article className="px-[clamp(1.25rem,0.6rem+3vw,3.5rem)] py-16">
      <div className="mx-auto grid w-full max-w-[980px] gap-12">
        <header>
          <p className="text-sm text-faint">Home / Platform</p>
          <p className="mt-6 text-xs font-semibold tracking-[0.14em] text-crimson uppercase">
            Technology platform
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.25rem,1.5rem+3vw,4rem)] font-light tracking-tight">
            {brand.platform}
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            The technology platform for {brand.name}. Project status, Hour Tracker,
            and SOW Tracker sit in one place for delivery teams and clients.
          </p>
        </header>

        <DataTable
          caption="Embee FinSoft capabilities"
          columns={["Capability", "What it covers"]}
          rows={[
            ["Project status", "Sprint progress, open items, owners, and dates"],
            ["Hour Tracker", "Person-wise and project-wise time, with approval"],
            ["SOW Tracker", "Scope, milestones, hours, invoicing, and risk"],
            ["Client enquiry", `Messages reach ${brand.email}`],
          ]}
        />

        <p className="text-sm">
          <Link href="/work" className="font-semibold text-crimson">
            Back to the work →
          </Link>
        </p>
      </div>
    </article>
  );
}
