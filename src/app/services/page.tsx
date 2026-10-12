import type { Metadata } from "next";
import Link from "next/link";
import { ServiceIcon } from "@/components/service-icon";
import { services } from "@/lib/marketing";

export const metadata: Metadata = {
  title: "Services",
  description: "Microsoft solutions, AI agents, custom software, automation, data, and integration services from Embee Finsoft.",
};

export default function ServicesPage() {
  return (
    <article className="shell py-12 sm:py-16">
      <p className="text-sm text-muted">Home / Services</p>
      <h1 className="prose-title mt-4 max-w-3xl font-semibold text-navy">Services</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Microsoft solutions and AI agents lead the practice. The other services cover the software, automation, data, and integration work around them.
      </p>
      <ul className="mt-10 grid gap-4 lg:grid-cols-2">
        {services.map((item) => (
          <li key={item.slug} className={item.featured ? "lg:col-span-2" : undefined}>
            <Link href={item.href} className="block h-full rounded-md border border-line bg-surface p-5 hover:border-navy sm:p-6">
              <ServiceIcon slug={item.slug} />
              <h2 className="mt-3 text-2xl font-semibold text-navy">{item.title}</h2>
              <p className="mt-2 max-w-3xl text-sm text-muted">{item.short}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-teal">{item.cta}</span>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
