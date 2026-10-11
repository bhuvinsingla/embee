import { redirect } from "next/navigation";

export function generateStaticParams() {
  return [{ slug: "retired" }];
}

export default function ClientSlugRedirect() {
  redirect("/work");
}
