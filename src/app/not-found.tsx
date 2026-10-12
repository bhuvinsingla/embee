import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell shell-narrow py-16 sm:py-24">
      <p className="text-xs font-semibold tracking-wide text-teal uppercase">404</p>
      <h1 className="prose-title mt-3 font-semibold text-navy">This page is not on the site.</h1>
      <Link href="/" className="mt-8 inline-flex text-sm font-semibold text-teal">Back to the homepage</Link>
    </div>
  );
}
