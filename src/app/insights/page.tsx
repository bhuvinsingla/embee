import type { Metadata } from "next";
import { Bell, BookOpen, Bot, Cable, Scale, Workflow, type LucideIcon } from "lucide-react";
import { IconTile, PageIntro } from "@/components/page-frame";
import { insightTopics } from "@/lib/marketing";

export const metadata: Metadata = {
  title: "Insights",
  description: "Topics Embee Finsoft is preparing on AI, automation, and enterprise technology. Not published articles.",
};

const topicIcons: LucideIcon[] = [Workflow, Bot, BookOpen, Scale, Cable, Bell];

export default function InsightsPage() {
  return (
    <>
      <PageIntro
        crumbs={[{ href: "/", label: "Home" }, { label: "Insights" }]}
        title="Insights"
        lead="These topics are in preparation. There are no articles, authors, or publication dates on this page yet."
        icon={BookOpen}
        label="Topics in preparation"
      />
      <div className="shell py-12 sm:py-16">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {insightTopics.map((topic, index) => (
            <li
              key={topic}
              className="listing-card flex h-full flex-col rounded-md border border-line bg-surface p-5"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <IconTile icon={topicIcons[index] ?? BookOpen} />
              <p className="mt-4 text-sm font-medium text-navy">{topic}</p>
              <p className="mt-auto pt-4 text-xs font-semibold tracking-wide text-muted uppercase">Not published</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
