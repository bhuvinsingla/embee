import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-[clamp(1.25rem,0.6rem+3vw,3.5rem)] py-24">
      <div className="mx-auto max-w-xl">
        <p className="text-xs font-semibold tracking-[0.16em] text-crimson uppercase">
          404
        </p>
        <h1 className="mt-3 font-display text-5xl font-light tracking-tight">
          This page is not on the site.
        </h1>
        <Link href="/" className="mt-8 inline-flex text-sm font-semibold text-crimson">
          Back to the homepage →
        </Link>
      </div>
    </div>
  );
}
