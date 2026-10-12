import Image from "next/image";
import Link from "next/link";
import { brand, services } from "@/lib/marketing";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-navy-deep text-white">
      <div className="shell grid gap-10 py-12 sm:grid-cols-2 sm:py-14 lg:grid-cols-4">
        <div className="min-w-0">
          <span className="inline-flex rounded-md bg-white px-2 py-1">
            <Image src="/embee-logo.webp" alt="Embee" width={140} height={54} className="h-9 w-auto" />
          </span>
          <p className="mt-4 text-sm text-white/75">
            {brand.name} helps organisations modernize operations with Microsoft solutions, AI agents, automation, and custom software.
          </p>
          <p className="mt-4 text-sm text-white/75">
            <a href={`mailto:${brand.email}`} className="hover:text-white">{brand.email}</a>
            <br />
            <a href={`tel:${brand.phoneTel}`} className="hover:text-white">{brand.phoneDisplay}</a>
          </p>
          <address className="mt-3 text-sm text-white/75 break-words not-italic">
            {brand.address.line1}
            <br />
            {brand.address.line2}
            <br />
            {brand.address.city}
          </address>
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-wide text-white/70 uppercase">Navigate</p>
          <ul className="mt-3 grid gap-2 text-sm text-white/80">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/verticals" className="hover:text-white">Verticals</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/work" className="hover:text-white">Our Work</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-wide text-white/70 uppercase">Services</p>
          <ul className="mt-3 grid gap-2 text-sm text-white/80">
            {services.map((item) => (
              <li key={item.slug}>
                <Link href={item.href} className="hover:text-white">{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-wide text-white/70 uppercase">Resources</p>
          <ul className="mt-3 grid gap-2 text-sm text-white/80">
            <li><Link href="/insights" className="hover:text-white">Insights</Link></li>
            <li><a href={brand.privacy} className="hover:text-white">Privacy Policy</a></li>
            <li><a href={brand.terms} className="hover:text-white">Terms of Use</a></li>
            <li><a href={brand.groupSite} className="hover:text-white">Embee Group</a></li>
            <li><a href={brand.linkedin} className="hover:text-white">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="shell py-4 text-xs leading-relaxed text-white/60">
          © 2026 {brand.name}. Associated with {brand.groupName}. Chandigarh office details are those published by {brand.legalName}.
        </p>
      </div>
    </footer>
  );
}
