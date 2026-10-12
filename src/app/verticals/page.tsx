import type { Metadata } from "next";
import { verticals } from "@/lib/marketing";

export const metadata: Metadata = {
  title: "Verticals",
  description: "Proposed industries and business functions for Embee Finsoft technology work. Not a list of completed client industries.",
};

export default function VerticalsPage() {
  return (
    <article className="shell py-12 sm:py-16">
      <p className="text-sm text-muted">Home / Verticals</p>
      <h1 className="prose-title mt-4 font-semibold text-navy">Verticals</h1>
      <p className="mt-4 text-muted">
        These are proposed markets and business functions. They describe the kinds of problems the technology can address. They are not a record of completed projects in each industry.
      </p>
      <div className="mt-10 grid gap-4 sm:gap-6 lg:grid-cols-2">
        {verticals.map((item) => (
          <section key={item.slug} id={item.slug} className="scroll-mt-24 rounded-md border border-line bg-surface p-6">
            <h2 className="text-2xl font-semibold text-navy">{item.title}</h2>
            <p className="mt-3 text-sm text-muted">{item.text}</p>
            <ul className="mt-4 grid gap-2 text-sm">
              {item.solutions.map((solution) => <li key={solution}>{solution}</li>)}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
