import Link from "next/link";
import { brand, proof } from "@/lib/content";

const builds = [
  {
    title: "Operational systems",
    text: "Job, feed, and status software for a live client workflow - starting with CM Welding and Sunbridge.",
  },
  {
    title: "Delivery controls",
    text: "Hour Tracker and SOW Tracker keep time, scope, owners, and billing state in one record.",
  },
  {
    title: "Embee FinSoft",
    text: "The digital front door for project status, time, and statements of work.",
  },
];

const projects = [
  {
    href: "/work/cm-welding",
    name: "CM Welding",
    text: "Sprint 2: GCP and IAM, environment dependencies, training and support still open.",
  },
  {
    href: "/work/sunbridge",
    name: "Sunbridge",
    text: "Sprint 2: SCADA fetch, API integration, partial data, hourly retry, and notifications.",
  },
  {
    href: "/work/hour-tracker",
    name: "Hour Tracker",
    text: "Time records with resource, client, billable flag, approval, and monthly totals.",
  },
  {
    href: "/work/sow-tracker",
    name: "SOW Tracker",
    text: "Scope, milestones, hours, invoicing, and risks for each engagement.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden px-[clamp(1.25rem,0.6rem+3vw,3.5rem)] pt-16 pb-20 sm:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_100%_0%,rgba(139,26,26,0.14),transparent_55%)]"
        />
        <div className="relative mx-auto grid w-full max-w-[1180px] gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)] lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-crimson uppercase">
              Embee Group · Chandigarh
            </p>
            <h1 className="mt-5 max-w-[12ch] font-display text-[clamp(3rem,1.6rem+5.2vw,6.25rem)] leading-[1.02] font-light tracking-[-0.035em]">
              Digitizing the work.
            </h1>
            <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-muted">
              {brand.legalName} is the finance firm. This site is the technology
              practice: the systems under delivery, and the status of that work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="rounded-full bg-gradient-to-br from-crimson-bright via-crimson to-[#5e0d10] px-5 py-3 text-sm font-semibold text-white"
              >
                See the work
              </Link>
              <Link
                href="/platform"
                className="rounded-full border border-line bg-surface px-5 py-3 text-sm font-semibold"
              >
                Embee FinSoft
              </Link>
            </div>
          </div>
          <aside className="grid gap-3">
            <p className="text-xs font-semibold tracking-[0.16em] text-crimson uppercase">
              In delivery
            </p>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {projects.map((project, index) => (
                <li key={project.href}>
                  <Link
                    href={project.href}
                    className="listing-card block rounded-[20px] border border-line bg-surface px-5 py-4 hover:border-crimson"
                    style={{ animationDelay: `${index * 70}ms` }}
                  >
                    <span className="block font-medium">{project.name}</span>
                    <span className="mt-1 block text-sm text-muted">{project.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="px-[clamp(1.25rem,0.6rem+3vw,3.5rem)] pb-16">
        <div className="mx-auto w-full max-w-[1180px]">
          <h2 className="font-display text-[clamp(1.75rem,1.25rem+2.2vw,3rem)] font-light tracking-tight">
            What we build
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {builds.map((item, index) => (
              <li
                key={item.title}
                className="listing-card rounded-[20px] border border-line bg-surface p-6 hover:border-crimson"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <h3 className="font-display text-2xl font-light">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink px-[clamp(1.25rem,0.6rem+3vw,3.5rem)] py-16 text-paper">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[clamp(1.75rem,1.25rem+2.2vw,3rem)] font-light tracking-tight">
              Selected technical projects
            </h2>
            <Link href="/work" className="text-sm font-semibold text-[#e4b15a]">
              All work →
            </Link>
          </div>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <li key={project.href}>
                <Link
                  href={project.href}
                  className="listing-card group block h-full rounded-[20px] border border-white/10 bg-white/5 p-6 hover:border-[#e4b15a] hover:bg-white/10"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <h3 className="font-display text-2xl font-light">{project.name}</h3>
                  <p className="mt-3 text-sm text-[#d7c7bf]">{project.text}</p>
                  <span className="mt-5 inline-block text-sm font-semibold text-[#e4b15a] transition-transform duration-200 group-hover:translate-x-1">
                    View project
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-[clamp(1.25rem,0.6rem+3vw,3.5rem)] py-16">
        <div className="mx-auto w-full max-w-[1180px]">
          <p className="text-xs font-semibold tracking-[0.16em] text-crimson uppercase">
            The firm
          </p>
          <dl className="mt-6 grid overflow-hidden rounded-[26px] border border-line bg-surface sm:grid-cols-2 lg:grid-cols-4">
            {proof.map((item) => (
              <div key={item.label} className="border-line px-6 py-6 not-first:border-t lg:not-first:border-t-0 lg:not-first:border-l">
                <dt className="text-xs font-semibold tracking-[0.12em] text-faint uppercase">
                  {item.label}
                </dt>
                <dd className="mt-2 font-medium">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
