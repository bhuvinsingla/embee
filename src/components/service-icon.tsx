import {
  BarChart3,
  Bot,
  Cloud,
  Code2,
  LayoutGrid,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { IconTile } from "@/components/page-frame";

const icons: Record<string, LucideIcon> = {
  "ai-agents": Bot,
  "microsoft-solutions": LayoutGrid,
  "custom-software": Code2,
  automation: Workflow,
  "data-analytics": BarChart3,
  "cloud-integration": Cloud,
};

export function serviceIcon(slug: string) {
  return icons[slug] ?? LayoutGrid;
}

export function ServiceIcon({ slug }: { slug: string }) {
  return <IconTile icon={serviceIcon(slug)} />;
}
