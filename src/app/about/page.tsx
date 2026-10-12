import type { Metadata } from "next";
import Link from "next/link";
import { brand, steps } from "@/lib/marketing";

export const metadata: Metadata = {
  title: "About Us",
  description: "Embee Finsoft is the technology business associated with Embee Group, focused on Microsoft solutions, AI agents, and enterprise software.",
};

export default function AboutPage() {
  return (
    <article className="shell shell-narrow py-12 sm:py-16">
      <p className="text-sm text-muted">Home / About Us</p>
      <h1 className="prose-title mt-4 font-semibold text-navy">About Embee Finsoft</h1>
      <p className="mt-5 text-lg text-muted">
        Embee Finsoft builds practical technology for organisations that need clearer workflows, connected systems, and software that matches how the business actually runs.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-navy">Vision and mission</h2>
      <p className="mt-3 text-muted">
        The aim is straightforward: understand the business problem, then apply Microsoft solutions, AI, automation, or custom software where that problem gets smaller.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-navy">Business-first technology</h2>
      <p className="mt-3 text-muted">
        A platform is chosen after the workflow, the people, and the system of record are clear. The technology follows that decision.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-navy">AI and Microsoft</h2>
      <p className="mt-3 text-muted">
        The priority is Microsoft technologies, AI agents, intelligent automation, and enterprise application development. Microsoft product names on this site describe delivery tools. They are not a claim of partnership or certification.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-navy">How delivery works</h2>
      <ol className="mt-4 grid gap-3">
        {steps.map((step, index) => (
          <li key={step.title} className="rounded-md border border-line bg-surface p-4">
            <span className="text-xs font-semibold text-teal">{index + 1}. {step.title}</span>
            <p className="mt-1 text-sm text-muted">{step.text}</p>
          </li>
        ))}
      </ol>

      <h2 className="mt-10 text-2xl font-semibold text-navy">Leadership</h2>
      <p className="mt-3 text-muted">
        Finsoft leadership profiles will be added when they are approved for publication. Names from the Embee Group advisory practice are not listed here as the technology team.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-navy">Relationship with Embee Group</h2>
      <p className="mt-3 text-muted">
        Embee Finsoft is the technology business associated with {brand.groupName}. {brand.legalName} is the finance firm. Its advisory history, client relationships, and financial credentials stay on the group site and are not IT delivery results.
      </p>
      <p className="mt-3 text-sm">
        <a href={brand.groupSite} className="font-semibold text-teal">Embee Group website</a>
      </p>
      <p className="mt-3 text-sm text-muted">
        Office used for enquiries: {brand.address.line1}, {brand.address.line2}, {brand.address.city}. {brand.email}. {brand.phoneDisplay}.
      </p>

      <Link href="/contact" className="mt-10 inline-flex rounded-md bg-teal px-5 py-3 text-sm font-semibold text-white hover:bg-[#6b0f0f]">
        Discuss a project
      </Link>
    </article>
  );
}
