import Link from "next/link";
import { ServiceIcon } from "@/components/service-icon";
import { projects, services } from "@/lib/marketing";

export default function HomePage() {
  const featured = services.filter((item) => item.featured);
  const rest = services.filter((item) => !item.featured);

  return (
    <>
      <section className="bg-surface">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="rise min-w-0 max-w-3xl">
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
        </div>
      </section>

      <section className="shell py-12 sm:py-16">
        <h2 className="section-title max-w-3xl font-semibold text-navy">Technology That Understands Your Business.</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Embee Finsoft is the technology business associated with Embee Group. The company page covers how the work is delivered.
        </p>
        <Link href="/about" className="mt-6 inline-flex text-sm font-semibold text-teal">
          About Embee Finsoft
        </Link>
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
        <h2 className="section-title font-semibold text-navy">Completed Projects.</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {projects.map((item) => (
            <li key={item.slug}>
              <Link href={`/work/${item.slug}`} className="listing-card block h-full rounded-md border border-line bg-surface p-6" style={{ animationDelay: `${projects.indexOf(item) * 50}ms` }}>
                <p className="text-xs font-semibold tracking-wide text-teal uppercase">{item.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.challenge}</p>
                <p className="mt-4 text-xs font-medium text-gold">{item.status}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-navy">
        <div className="shell flex flex-col gap-6 py-12 sm:py-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <h2 className="section-title font-semibold text-white">Have a Business Challenge in Mind?</h2>
            <p className="mt-3 max-w-xl text-sm text-white/75">
              Tell us what you need to change in the operation.
            </p>
          </div>
          <Link href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-md bg-teal px-5 py-3 text-sm font-semibold text-white hover:bg-[#6b0f0f]">Let&apos;s Talk</Link>
        </div>
      </section>
    </>
  );
}
