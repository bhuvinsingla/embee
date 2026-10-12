import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bot, Building2, Compass, Hammer, Rocket, Search, Target, TrendingUp } from "lucide-react";
import { IconTile, PageIntro } from "@/components/page-frame";
import { brand, steps } from "@/lib/marketing";

export const metadata: Metadata = {
  title: "About Us",
  description: "Embee Finsoft is the technology business associated with Embee Group, focused on Microsoft solutions, AI agents, and enterprise software.",
};

const stepIcons = [Search, Compass, Hammer, Rocket, TrendingUp] as const;

const principles = [
  {
    title: "Vision and mission",
    text: "Understand the business problem, then apply Microsoft solutions, AI, automation, or custom software where that problem gets smaller.",
    icon: Target,
  },
  {
    title: "Business-first technology",
    text: "A platform is chosen after the workflow, the people, and the system of record are clear. The technology follows that decision.",
    icon: Building2,
  },
  {
    title: "AI and Microsoft",
    text: "The priority is Microsoft technologies, AI agents, intelligent automation, and enterprise application development. Product names describe delivery tools. They are not a claim of partnership or certification.",
    icon: Bot,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        crumbs={[{ href: "/", label: "Home" }, { label: "About Us" }]}
        title="About Embee Finsoft"
        lead="Practical technology for organisations that need clearer workflows, connected systems, and software that matches how the business actually runs."
        icon={Building2}
        label="Technology with Embee Group"
      />
      <div className="shell py-12 sm:py-16">
        <ul className="grid gap-4 lg:grid-cols-3">
          {principles.map((item) => (
            <li key={item.title} className="rounded-md border border-line bg-surface p-5 sm:p-6">
              <IconTile icon={item.icon} />
              <h2 className="mt-4 text-lg font-semibold text-navy">{item.title}</h2>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </li>
          ))}
        </ul>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-navy sm:text-2xl">How delivery works</h2>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-md border border-line bg-surface p-4">
                <IconTile icon={stepIcons[index] ?? Search} />
                <p className="mt-4 text-xs font-semibold tracking-wide text-teal uppercase">{index + 1}. {step.title}</p>
                <p className="mt-2 text-sm text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <section className="rounded-md border border-line bg-surface p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-navy">Leadership</h2>
            <p className="mt-3 text-sm text-muted">
              Finsoft leadership profiles will be added when they are approved for publication. Names from the Embee Group advisory practice are not listed here as the technology team.
            </p>
          </section>
          <section className="rounded-md border border-line bg-surface p-5 sm:p-6">
            <Image src="/embee-logo.webp" alt="Embee" width={140} height={54} className="h-9 w-auto" />
            <h2 className="mt-4 text-lg font-semibold text-navy">Relationship with Embee Group</h2>
            <p className="mt-3 text-sm text-muted">
              Embee Finsoft is the technology business associated with {brand.groupName}. {brand.legalName} is the finance firm. Its advisory history stays on the group site and is not an IT delivery result.
            </p>
            <a href={brand.groupSite} className="mt-4 inline-flex text-sm font-semibold text-teal">Embee Group website</a>
            <p className="mt-4 text-sm text-muted">
              {brand.address.line1}, {brand.address.line2}, {brand.address.city}. {brand.email}. {brand.phoneDisplay}.
            </p>
          </section>
        </div>

        <Link href="/contact" className="mt-10 inline-flex min-h-11 items-center justify-center rounded-md bg-teal px-5 py-3 text-sm font-semibold text-white hover:bg-[#6b0f0f]">
          Discuss a project
        </Link>
      </div>
    </>
  );
}
