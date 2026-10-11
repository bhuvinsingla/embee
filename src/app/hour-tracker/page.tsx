import type { Metadata } from "next";
import Link from "next/link";
import { HourTracker } from "@/components/hour-tracker";

export const metadata: Metadata = {
  title: "Hour Tracker",
  description:
    "Log delivery hours by person and project, with monthly totals and CSV export.",
};

export default function HourTrackerPage() {
  return (
    <article className="px-[clamp(1.25rem,0.6rem+3vw,3.5rem)] py-16">
      <div className="mx-auto w-full max-w-[1180px]">
        <p className="text-sm text-faint">
          <Link href="/work/hour-tracker" className="hover:text-crimson">
            Data model
          </Link>{" "}
          / Hour Tracker
        </p>
        <h1 className="mt-4 font-display text-[clamp(2.25rem,1.5rem+3.4vw,4.25rem)] font-light tracking-tight">
          Hour Tracker
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Log a resource, project, client, hours, task, billable flag, and approval
          status. Person and project totals update for the current month.
        </p>
        <div className="mt-10">
          <HourTracker />
        </div>
      </div>
    </article>
  );
}
