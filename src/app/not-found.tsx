import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { IconTile } from "@/components/page-frame";

export default function NotFound() {
  return (
    <div className="shell py-16 sm:py-24">
      <IconTile icon={FileQuestion} />
      <p className="mt-6 text-xs font-semibold tracking-wide text-teal uppercase">404</p>
      <h1 className="prose-title mt-3 max-w-xl font-semibold text-navy">This page is not on the site.</h1>
      <Link href="/" className="mt-8 inline-flex min-h-11 items-center text-sm font-semibold text-teal">
        Back to the homepage
      </Link>
    </div>
  );
}
