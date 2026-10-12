import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro, PointList } from "@/components/page-frame";
import { serviceIcon } from "@/components/service-icon";
import { getService, services } from "@/lib/marketing";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return { title: service.title, description: service.short };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageIntro
        crumbs={[{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, { label: service.title }]}
        title={service.title}
        lead={service.short}
        icon={serviceIcon(service.slug)}
        label="Service"
      />
      <div className="shell grid items-start gap-8 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-10">
        <div className="min-w-0">
          <section>
            <h2 className="text-xl font-semibold text-navy sm:text-2xl">Business challenges</h2>
            <PointList items={service.challenges} />
          </section>
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-navy sm:text-2xl">Capabilities</h2>
            <PointList items={service.capabilities} />
          </section>
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-navy sm:text-2xl">Common use cases</h2>
            <PointList items={service.useCases} />
          </section>
          <section className="mt-10 rounded-md border border-line bg-surface p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-navy">Implementation approach</h2>
            <p className="mt-3 text-sm text-muted">{service.approach}</p>
          </section>
        </div>
        <aside className="rounded-md border border-line bg-surface p-5 lg:sticky lg:top-24">
          <h2 className="text-sm font-semibold tracking-wide text-muted uppercase">Technologies</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {service.technologies.map((item) => (
              <li key={item} className="rounded-md border border-line bg-paper px-2.5 py-1 text-sm text-navy">{item}</li>
            ))}
          </ul>
          <Link href="/contact" className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-teal px-5 py-3 text-sm font-semibold text-white hover:bg-[#6b0f0f]">
            Discuss this service
          </Link>
        </aside>
      </div>
    </>
  );
}
