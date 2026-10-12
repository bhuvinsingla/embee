import {
  BarChart3,
  Bot,
  Cloud,
  Code2,
  LayoutGrid,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "ai-agents": Bot,
  "microsoft-solutions": LayoutGrid,
  "custom-software": Code2,
  automation: Workflow,
  "data-analytics": BarChart3,
  "cloud-integration": Cloud,
};

export function ServiceIcon({ slug }: { slug: string }) {
  const Icon = icons[slug] ?? LayoutGrid;
  return <Icon aria-hidden="true" className="h-5 w-5 text-teal" strokeWidth={1.75} />;
}
