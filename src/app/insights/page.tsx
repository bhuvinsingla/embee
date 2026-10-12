import type { Metadata } from "next";
import { insightTopics } from "@/lib/marketing";

export const metadata: Metadata = {
  title: "Insights",
  description: "Topics Embee Finsoft is preparing on AI, automation, and enterprise technology. Not published articles.",
};

export default function InsightsPage() {
  return (
    <article className="shell shell-narrow py-12 sm:py-16">
      <p className="text-sm text-muted">Home / Insights</p>
      <h1 className="prose-title mt-4 font-semibold text-navy">Insights</h1>
      <p className="mt-4 text-muted">
        These topics are in preparation. There are no articles, authors, or publication dates on this page yet.
      </p>
      <ol className="mt-8 grid gap-3">
        {insightTopics.map((topic) => (
          <li key={topic} className="rounded-md border border-line bg-surface px-4 py-3 text-sm">{topic}</li>
        ))}
      </ol>
    </article>
  );
}
