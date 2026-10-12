import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/marketing";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Capability demonstrations and proposed solutions from Embee Finsoft. Client names are shown only when disclosure is approved.",
};

export default function WorkPage() {
  return (
    <article className="shell py-12 sm:py-16">
      <p className="text-sm text-muted">Home / Our Work</p>
      <h1 className="prose-title mt-4 font-semibold text-navy">Our Work</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Each item is labelled as a demonstration, a proposed solution, or an internal concept. Client names and commercial details stay off this site until they are approved.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {projects.map((item) => (
          <li key={item.slug}>
            <Link href={`/work/${item.slug}`} className="block h-full rounded-md border border-line bg-surface p-6 hover:border-navy">
              <p className="text-xs font-semibold tracking-wide text-teal uppercase">{item.category}</p>
              <h2 className="mt-2 text-2xl font-semibold text-navy">{item.title}</h2>
              <p className="mt-3 text-sm text-muted">{item.challenge}</p>
              <p className="mt-4 text-xs font-medium text-gold">{item.status}</p>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
