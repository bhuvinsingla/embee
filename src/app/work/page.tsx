import type { Metadata } from "next";
import Link from "next/link";
import { Activity, ClipboardList, Clock, Factory, type LucideIcon } from "lucide-react";
import { IconTile, PageIntro } from "@/components/page-frame";
import { projects } from "@/lib/marketing";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Completed Embee Finsoft delivery: CM Welding, Sunbridge, Hour Tracker, and SOW Tracker.",
};

const projectIcons: Record<string, LucideIcon> = {
  "cm-welding": Factory,
  sunbridge: Activity,
  "hour-tracker": Clock,
  "sow-tracker": ClipboardList,
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        crumbs={[{ href: "/", label: "Home" }, { label: "Our Work" }]}
        title="Our Work"
        lead="CM Welding, Sunbridge, the Hour Tracker, and the SOW Tracker. Access credentials and commercial figures stay off these pages."
      />
      <div className="shell py-12 sm:py-16">
        <ul className="grid gap-4 sm:grid-cols-2">
          {projects.map((item, index) => (
            <li key={item.slug}>
              <Link
                href={`/work/${item.slug}`}
                className="listing-card flex h-full flex-col rounded-md border border-line bg-surface p-5 sm:p-6"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <IconTile icon={projectIcons[item.slug] ?? Factory} />
                  <p className="text-xs font-semibold tracking-wide text-teal uppercase">{item.status}</p>
                </div>
                <p className="mt-4 text-xs font-semibold tracking-wide text-muted uppercase">{item.category}</p>
                <h2 className="mt-1 text-2xl font-semibold text-navy">{item.title}</h2>
                <p className="mt-3 text-sm text-muted">{item.challenge}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
