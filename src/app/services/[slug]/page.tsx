import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    <article className="shell shell-narrow py-12 sm:py-16">
      <p className="text-sm text-muted">
        <Link href="/services" className="hover:text-teal">Services</Link> / {service.title}
      </p>
      <h1 className="prose-title mt-4 font-semibold text-navy">{service.title}</h1>
      <p className="mt-4 text-lg text-muted">{service.short}</p>

      <h2 className="mt-10 text-xl font-semibold text-navy">Business challenges</h2>
      <ul className="mt-3 grid gap-2 text-sm text-muted">
        {service.challenges.map((item) => <li key={item}>{item}</li>)}
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-navy">Capabilities</h2>
      <ul className="mt-3 grid gap-2 text-sm text-muted">
        {service.capabilities.map((item) => <li key={item}>{item}</li>)}
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-navy">Common use cases</h2>
      <ul className="mt-3 grid gap-2 text-sm text-muted">
        {service.useCases.map((item) => <li key={item}>{item}</li>)}
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-navy">Implementation approach</h2>
      <p className="mt-3 text-sm text-muted">{service.approach}</p>

      <h2 className="mt-10 text-xl font-semibold text-navy">Technologies</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {service.technologies.map((item) => (
          <li key={item} className="rounded-md bg-paper px-2.5 py-1 text-sm">{item}</li>
        ))}
      </ul>

      <Link href="/contact" className="mt-10 inline-flex rounded-md bg-teal px-5 py-3 text-sm font-semibold text-white hover:bg-[#6b0f0f]">
        Discuss this service
      </Link>
    </article>
  );
}
