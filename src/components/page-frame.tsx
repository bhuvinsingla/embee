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
  title,
  lead,
  icon,
  label,
}: {
  crumbs: { href?: string; label: string }[];
  title: string;
  lead: string;
  icon: LucideIcon;
  label: string;
}) {
  return (
    <header className="border-b border-line bg-surface">
      <div className="shell grid items-end gap-8 py-10 sm:py-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(14rem,18rem)] lg:gap-12">
        <div className="min-w-0">
          <Crumb items={crumbs} />
          <h1 className="prose-title mt-4 max-w-3xl font-semibold text-navy">{title}</h1>
          <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">{lead}</p>
        </div>
        <figure className="relative flex min-h-52 flex-col justify-between overflow-hidden rounded-md bg-navy p-6 text-white">
          <span aria-hidden="true" className="pointer-events-none absolute -top-8 -right-8 h-36 w-36 rounded-full border border-white/15" />
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-10 -left-8 h-28 w-28 rounded-full bg-teal" />
          <IconTile icon={icon} tone="dark" size="lg" />
          <figcaption className="relative mt-10 text-lg font-semibold">{label}</figcaption>
        </figure>
      </div>
    </header>
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
