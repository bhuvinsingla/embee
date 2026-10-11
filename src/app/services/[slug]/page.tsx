import { redirect } from "next/navigation";

export function generateStaticParams() {
  return [{ slug: "retired" }];
}

export default function ServiceSlugRedirect() {
  redirect("/work");
}
