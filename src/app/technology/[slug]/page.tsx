import { redirect } from "next/navigation";

const routes: Record<string, string> = {
  "cm-welding": "/work/cm-welding",
  sunbridge: "/work/sunbridge",
  "hour-tracker": "/work/hour-tracker",
  "sow-tracker": "/work/sow-tracker",
};

export function generateStaticParams() {
  return Object.keys(routes).map((slug) => ({ slug }));
}

export default async function TechnologySlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(routes[slug] ?? "/work");
}
