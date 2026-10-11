import Image from "next/image";
import Link from "next/link";
import { brand, nav, policies } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-[clamp(1.25rem,0.6rem+3vw,3.5rem)] py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/embee-logo.webp"
            alt="Embee - Growth Catalyst"
            width={593}
            height={231}
            className="h-12 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm text-muted">
            {brand.legalName} is the finance group. This site is the technology
            practice, {brand.platform}.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-crimson uppercase">
            Technology
          </p>
          <ul className="mt-4 grid gap-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted hover:text-crimson">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/about" className="text-muted hover:text-crimson">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-crimson uppercase">
            Office
          </p>
          <address className="mt-4 text-sm text-muted not-italic">
            {brand.legalName}
            <br />
            {brand.address.line1}
            <br />
            {brand.address.line2}
            <br />
            {brand.address.city}
          </address>
          <p className="mt-4 text-sm">
            <a href={`tel:${brand.phoneTel}`} className="hover:text-crimson">
              {brand.phoneDisplay}
            </a>
            <br />
            <a href={`mailto:${brand.email}`} className="hover:text-crimson">
              {brand.email}
            </a>
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-crimson uppercase">
            Elsewhere
          </p>
          <ul className="mt-4 grid gap-2 text-sm">
            <li>
              <a
                href={brand.advisorySite}
                className="text-muted hover:text-crimson"
                rel="noopener noreferrer"
              >
                Advisory site
              </a>
            </li>
            {policies.map((policy) => (
              <li key={policy.href}>
                <a
                  href={policy.href}
                  className="text-muted hover:text-crimson"
                  rel="noopener noreferrer"
                >
                  {policy.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto w-full max-w-[1400px] px-[clamp(1.25rem,0.6rem+3vw,3.5rem)] py-6 text-sm text-muted">
          © 2026 {brand.legalName}. Chandigarh.
        </p>
      </div>
    </footer>
  );
}
