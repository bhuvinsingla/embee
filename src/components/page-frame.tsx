import Link from "next/link";
import { Check, type LucideIcon } from "lucide-react";

export function Crumb({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {item.href ? (
              <Link href={item.href} className="hover:text-teal">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function IconTile({
  icon: Icon,
  tone = "paper",
  size = "md",
}: {
  icon: LucideIcon;
  tone?: "paper" | "dark";
  size?: "md" | "lg";
}) {
  const toneClass = tone === "dark" ? "bg-white/10 text-white" : "bg-[#f6e3de] text-teal";
  const box = size === "lg" ? "h-14 w-14" : "h-11 w-11";
  const glyph = size === "lg" ? "h-7 w-7" : "h-5 w-5";
  return (
    <span className={`inline-flex shrink-0 items-center justify-center rounded-md ${box} ${toneClass}`}>
      <Icon aria-hidden="true" className={glyph} strokeWidth={1.75} />
    </span>
  );
}

export function PageIntro({
  crumbs,
  eyebrow,
  title,
  lead,
}: {
  crumbs: { href?: string; label: string }[];
  eyebrow?: string;
  title: string;
  lead: string;
}) {
  return (
    <header className="border-b border-line bg-surface">
      <div className="shell py-10 sm:py-14">
        <div className="max-w-4xl">
        <Crumb items={crumbs} />
        {eyebrow ? <p className="mt-6 text-xs font-semibold tracking-wide text-teal uppercase">{eyebrow}</p> : null}
        <h1 className="prose-title mt-3 max-w-3xl font-semibold text-navy">{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">{lead}</p>
        </div>
      </div>
    </header>
  );
}

export function PageFallback() {
  return (
    <div className="border-b border-line bg-surface" aria-busy="true">
      <div className="shell py-10 sm:py-14">
        <div className="max-w-4xl">
        <p className="text-sm text-muted">Loading</p>
        <div className="mt-4 h-10 max-w-xl rounded-md bg-line" />
        <div className="mt-4 h-16 max-w-2xl rounded-md bg-line" />
        </div>
      </div>
    </div>
  );
}

export function PointList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <li
          key={item}
          className="listing-card flex items-start gap-3 rounded-md border border-line bg-surface p-4 text-sm text-ink"
          style={{ animationDelay: `${index * 40}ms` }}
        >
          <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-teal" strokeWidth={2} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
