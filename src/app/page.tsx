import Link from "next/link";
import { HeroVisual } from "@/components/hero-visual";
import { ServiceIcon } from "@/components/service-icon";
import {
  differentiators,
  insightTopics,
  projects,
  services,
  steps,
  technologyGroups,
  verticals,
} from "@/lib/marketing";

export default function HomePage() {
  const featured = services.filter((item) => item.featured);
  const rest = services.filter((item) => !item.featured);

  return (
    <>
      <section className="bg-surface">
        <div className="shell grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:py-24">
          <div className="rise min-w-0">
            <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">Embee Finsoft</p>
            <h1 className="prose-title mt-4 max-w-xl font-semibold text-navy">
              Transforming Business Through Technology, AI & Automation.
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
              From intelligent AI agents to Microsoft-powered workflows and enterprise applications, we help organizations simplify operations, connect systems, and unlock new possibilities.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-md bg-teal px-5 py-3 text-sm font-semibold text-white hover:bg-[#6b0f0f]">
                Discuss Your Project
              </Link>
              <Link href="/services" className="inline-flex min-h-11 items-center justify-center rounded-md border border-line bg-surface px-5 py-3 text-sm font-semibold text-navy">
                Explore Our Solutions
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full min-w-0 max-w-xl lg:max-w-none">
            <HeroVisual />
          </div>
        </div>
      </section>

      <section className="shell grid gap-8 py-12 sm:py-16 lg:grid-cols-2">
        <div className="min-w-0">
          <h2 className="section-title font-semibold text-navy">Technology That Understands Your Business.</h2>
          <p className="mt-4 text-muted">
            Embee Finsoft is a technology solutions business. The work starts with the operational problem, then uses software, AI, and automation where they shorten that work.
          </p>
          <Link href="/about" className="mt-6 inline-flex text-sm font-semibold text-teal">
            About Embee Finsoft
          </Link>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {[
            ["Overview", "A technology practice associated with Embee Group, focused on business applications rather than financial advice."],
            ["Approach", "Name the workflow, the people, and the system of record before choosing a platform."],
            ["Focus", "Microsoft solutions and AI agents, with custom software and integrations where they are needed."],
            ["What we confirm first", "Leadership names, headcount, and a Finsoft founding year stay unpublished until they are confirmed."],
          ].map(([title, text]) => (
            <li key={title} className="rounded-md border border-line bg-surface p-4">
              <h3 className="text-sm font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm text-muted">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-surface py-12 sm:py-16">
        <div className="shell min-w-0">
          <h2 className="section-title font-semibold text-navy">Technology Solutions for a Smarter Enterprise.</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {featured.map((item) => (
              <article key={item.slug} className="rounded-md border border-navy/15 bg-paper p-6">
                <ServiceIcon slug={item.slug} />
                <h3 className="mt-3 text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.short}</p>
                <Link href={item.href} className="mt-5 inline-flex text-sm font-semibold text-teal">{item.cta}</Link>
              </article>
            ))}
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {rest.map((item) => (
              <article key={item.slug} className="rounded-md border border-line bg-paper p-5">
                <ServiceIcon slug={item.slug} />
                <h3 className="mt-3 font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.short}</p>
                <Link href={item.href} className="mt-4 inline-flex text-sm font-semibold text-teal">{item.cta}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-12 sm:py-16">
        <h2 className="section-title font-semibold text-navy">More Than Technology. A Partner in Transformation.</h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, index) => (
            <li key={item.title} className="rounded-md border border-line bg-surface p-5">
              <p className="text-xs font-semibold text-gold">0{index + 1}</p>
              <h3 className="mt-2 font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-navy py-12 text-white sm:py-16">
        <div className="shell">
          <h2 className="section-title font-semibold">Technology Solutions Across Business Functions and Industries.</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/70">Proposed target markets. This list is not a claim of completed projects in each industry.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {verticals.map((item) => (
              <li key={item.slug}>
                <Link href={`/verticals#${item.slug}`} className="block h-full rounded-md border border-white/10 p-5 hover:border-teal-bright">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.solutions.join(" · ")}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="shell py-12 sm:py-16">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="section-title font-semibold text-navy">Solutions Built Around Real Business Challenges.</h2>
          <Link href="/work" className="text-sm font-semibold text-teal">All work</Link>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {projects.map((item) => (
            <li key={item.slug}>
              <Link href={`/work/${item.slug}`} className="block h-full rounded-md border border-line bg-surface p-6 hover:border-navy">
                <p className="text-xs font-semibold tracking-wide text-teal uppercase">{item.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.challenge}</p>
                <p className="mt-4 text-xs font-medium text-gold">{item.status}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="shell py-10">
          <h2 className="text-lg font-semibold text-balance text-navy sm:text-xl">Building Technology Solutions With Our Clients.</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Approved client marks will be placed here. None are shown until Embee confirms the relationship and supplies the logo.
          </p>
        </div>
      </section>

      <section className="shell py-12 sm:py-16">
        <h2 className="section-title font-semibold text-navy">From Business Challenge to Business Impact.</h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-md border border-line bg-surface p-4">
              <p className="text-xs font-semibold text-teal">{index + 1}</p>
              <h3 className="mt-2 font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-paper pb-12 sm:pb-16">
        <div className="shell">
          <h2 className="section-title font-semibold text-navy">Technology That Connects Your Business.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {technologyGroups.map((group) => (
              <article key={group.title} className="rounded-md border border-line bg-surface p-5">
                <h3 className="font-semibold text-navy">{group.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-md bg-paper px-2.5 py-1 text-sm text-ink">{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted">Microsoft product names describe platforms used in delivery. They are not a statement of partnership or certification.</p>
        </div>
      </section>

      <section className="shell py-12 sm:py-16">
        <h2 className="section-title font-semibold text-navy">Perspectives on AI, Automation & Enterprise Technology.</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">Topics being prepared. These are not published articles, and no authors or dates are attached.</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {insightTopics.map((topic) => (
            <li key={topic} className="rounded-md border border-line bg-surface px-4 py-3 text-sm">{topic}</li>
          ))}
        </ul>
        <Link href="/insights" className="mt-6 inline-flex text-sm font-semibold text-teal">See the list</Link>
      </section>

      <section className="bg-navy">
        <div className="shell flex flex-col gap-6 py-12 sm:py-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <h2 className="section-title font-semibold text-white">Have a Business Challenge in Mind?</h2>
            <p className="mt-3 max-w-xl text-sm text-white/75">
              Let&apos;s explore how Microsoft solutions, AI agents, automation, or custom software can help your organization move forward.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Link href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-md bg-teal px-5 py-3 text-sm font-semibold text-white hover:bg-[#6b0f0f]">Let&apos;s Talk</Link>
            <Link href="/services" className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white">Explore Our Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
