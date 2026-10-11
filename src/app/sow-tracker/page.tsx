import type { Metadata } from "next";
import Link from "next/link";
import { SowBoard } from "@/components/sow-board";

export const metadata: Metadata = {
  title: "SOW Tracker",
  description:
    "Statement-of-work records for CM Welding and Sunbridge.",
};

export default function SowTrackerPage() {
  return (
    <article className="px-[clamp(1.25rem,0.6rem+3vw,3.5rem)] py-16">
      <div className="mx-auto w-full max-w-[1400px]">
        <p className="text-sm text-faint">
          <Link href="/work/sow-tracker" className="hover:text-crimson">Work</Link> / SOW Tracker
        </p>
        <h1 className="mt-4 font-display text-[clamp(2.25rem,1.5rem+3.4vw,4.25rem)] font-light tracking-tight">
          SOW Tracker
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Engagement records for CM Welding and Sunbridge. Filter by client, approval, or keyword.
        </p>
        <div className="mt-8">
          <SowBoard />
        </div>
      </div>
    </article>
  );
}
