import type { Metadata } from "next";
import Link from "next/link";
import { Activity, ClipboardList, Clock, Factory, type LucideIcon } from "lucide-react";
import { IconTile, PageIntro } from "@/components/page-frame";
import { verticals } from "@/lib/marketing";

export const metadata: Metadata = {
  title: "Verticals",
  description: "Embee Finsoft delivery areas from the completed work: CM Welding, Sunbridge, Hour Tracker, and SOW Tracker.",
};

const verticalIcons: Record<string, LucideIcon> = {
  "cm-welding": Factory,
  sunbridge: Activity,
  "hour-tracker": Clock,
  "sow-tracker": ClipboardList,
};

export default function VerticalsPage() {
  return (
    <>
      <PageIntro
        crumbs={[{ href: "/", label: "Home" }, { label: "Verticals" }]}
        title="Verticals"
        lead="CM Welding, Sunbridge, Hour Tracker, and SOW Tracker."
      />
      <div className="shell grid gap-4 py-12 sm:gap-6 sm:py-16 sm:grid-cols-2">
        {verticals.map((item) => (
          <section key={item.slug} id={item.slug} className="scroll-mt-24 rounded-md border border-line bg-surface p-5 sm:p-6">
            <IconTile icon={verticalIcons[item.slug] ?? Factory} />
            <h2 className="mt-4 text-xl font-semibold text-navy">{item.title}</h2>
            <p className="mt-3 text-sm text-muted">{item.text}</p>
            <Link href={item.href} className="mt-4 inline-flex text-sm font-semibold text-teal">
              View the project
            </Link>
          </section>
        ))}
      </div>
    </>
  );
}
