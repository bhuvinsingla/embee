import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "Technical delivery in progress: CM Welding, Sunbridge, Hour Tracker, SOW Tracker, and Embee FinSoft.",
};

const items = [
  {
    href: "/work/cm-welding",
    kicker: "Sprint 2",
    name: "CM Welding",
    text: "GCP and IAM access, environment dependencies, and open training and support requirements.",
  },
  {
    href: "/work/sunbridge",
    kicker: "Sprint 2",
    name: "Sunbridge",
    text: "SCADA fetching, API integration, partial data, hourly retry, and pending notifications.",
  },
  {
    href: "/work/hour-tracker",
    kicker: "Product",
    name: "Hour Tracker",
    text: "Data model for time: resource, project, client, billable flag, approval, monthly totals.",
  },
  {
    href: "/work/sow-tracker",
    kicker: "Product",
    name: "SOW Tracker",
    text: "Statement-of-work register for scope, hours, invoicing, and risk.",
  },
  {
    href: "/platform",
    kicker: "Platform",
    name: "Embee FinSoft",
    text: "The digital front door for project status, time, and statements of work.",
  },
];

export default function WorkPage() {
  return (
    <article className="px-[clamp(1.25rem,0.6rem+3vw,3.5rem)] py-16">
      <div className="mx-auto w-full max-w-[1180px]">
        <p className="text-sm text-faint">Home / Work</p>
        <h1 className="mt-4 max-w-[16ch] font-display text-[clamp(2.25rem,1.5rem+3.4vw,4.25rem)] leading-[1.08] font-light tracking-tight">
          Technology in delivery.
        </h1>
        <p className="mt-5 max-w-2xl text-muted">
          Current technical work: what is underway, what is open, and what happens next.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((item, index) => (
            <li key={item.href} className={index === items.length - 1 ? "sm:col-span-2" : undefined}>
              <Link
                href={item.href}
                className="listing-card group flex h-full flex-col rounded-[20px] border border-line bg-surface p-6 hover:border-crimson"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-crimson uppercase">
                  {item.kicker}
                </span>
                <span className="mt-3 block font-display text-3xl font-light">{item.name}</span>
                <span className="mt-2 block flex-1 text-sm text-muted">{item.text}</span>
                <span className="mt-6 inline-block text-sm font-semibold text-crimson transition-transform duration-200 group-hover:translate-x-1">
                  Open
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
