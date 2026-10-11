import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Embee Financial Services Ltd, Chandigarh, and the shift into technology delivery through Embee FinSoft.",
};

export default function AboutPage() {
  return (
    <article className="px-[clamp(1.25rem,0.6rem+3vw,3.5rem)] py-16">
      <div className="mx-auto w-full max-w-[760px]">
        <p className="text-sm text-faint">Home / About</p>
        <h1 className="mt-4 font-display text-[clamp(2.25rem,1.5rem+3.4vw,4.25rem)] leading-[1.08] font-light tracking-tight">
          A finance firm building the systems around the work.
        </h1>
        <p className="mt-6 text-lg text-muted">
          {brand.legalName} is the Embee Group company in Chandigarh. The advisory
          practice stays on the existing group site. This site is the technology
          shift: {brand.platform}, the digital front door for delivery.
        </p>
        <p className="mt-4 text-muted">
          Office: {brand.address.line1}, {brand.address.line2}, {brand.address.city}.
          {" "}
          <a href={`mailto:${brand.email}`} className="font-semibold text-crimson">
            {brand.email}
          </a>
          {" · "}
          <a href={`tel:${brand.phoneTel}`} className="font-semibold text-crimson">
            {brand.phoneDisplay}
          </a>
          .
        </p>
        <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
          <Link href="/work" className="text-crimson">
            Technical work →
          </Link>
          <a href={brand.advisorySite} className="text-crimson" rel="noopener noreferrer">
            Advisory site →
          </a>
        </div>
      </div>
    </article>
  );
}
