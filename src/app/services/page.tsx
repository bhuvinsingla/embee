import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-frame";
import { ServiceIcon } from "@/components/service-icon";
import { services } from "@/lib/marketing";

export const metadata: Metadata = {
  title: "Services",
  description: "Microsoft solutions, AI agents, custom software, automation, data, and integration services from Embee Finsoft.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        crumbs={[{ href: "/", label: "Home" }, { label: "Services" }]}
        title="Services"
        lead="Microsoft solutions and AI agents lead the practice. The other services cover the software, automation, data, and integration work around them."
      />
      <div className="shell py-12 sm:py-16">
        <ul className="grid gap-4 lg:grid-cols-2">
          {services.map((item, index) => (
            <li key={item.slug} className={item.featured ? "lg:col-span-2" : undefined}>
              <Link
                href={item.href}
                className="listing-card flex h-full flex-col rounded-md border border-line bg-surface p-5 sm:p-6"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ServiceIcon slug={item.slug} />
                <h2 className="mt-4 text-xl font-semibold text-navy sm:text-2xl">{item.title}</h2>
                <p className="mt-2 max-w-3xl text-sm text-muted">{item.short}</p>
                <span className="mt-5 text-sm font-semibold text-teal">{item.cta}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
