import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Embee Financial Services Ltd at Elante Offices, Chandigarh.",
};

export default function ContactPage() {
  return (
    <article className="px-[clamp(1.25rem,0.6rem+3vw,3.5rem)] py-16">
      <div className="mx-auto grid w-full max-w-[1180px] gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)]">
        <div>
          <p className="text-sm text-faint">Home / Contact</p>
          <h1 className="mt-4 font-display text-[clamp(2.25rem,1.5rem+3.4vw,4.25rem)] leading-[1.08] font-light tracking-tight">
            Talk about a delivery.
          </h1>
          <p className="mt-5 text-muted">
            CM Welding, Sunbridge, Hour Tracker, SOW Tracker, or Embee FinSoft.
            {brand.legalName} reads these at the Chandigarh office.
          </p>
          <dl className="mt-10 grid gap-6 text-sm">
            <div>
              <dt className="text-xs font-semibold tracking-[0.14em] text-crimson uppercase">
                Headquarters
              </dt>
              <dd className="mt-2 text-muted">
                {brand.legalName}
                <br />
                {brand.address.line1}
                <br />
                {brand.address.line2}
                <br />
                {brand.address.city}
              </dd>
              <a
                href={brand.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex font-semibold text-crimson"
              >
                View location map
              </a>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-[0.14em] text-crimson uppercase">
                Phone
              </dt>
              <dd className="mt-2">
                <a href={`tel:${brand.phoneTel}`} className="hover:text-crimson">
                  {brand.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-[0.14em] text-crimson uppercase">
                Direct email
              </dt>
              <dd className="mt-2">
                <a href={`mailto:${brand.email}`} className="hover:text-crimson">
                  {brand.email}
                </a>
              </dd>
            </div>
          </dl>
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-gradient-to-br from-crimson-bright via-crimson to-[#5e0d10] px-5 py-3 text-sm font-semibold text-white"
          >
            WhatsApp {brand.phoneDisplay}
          </a>
          <p className="mt-4 max-w-sm text-sm text-muted">
            Corporate enquiries are treated as confidential.
          </p>
        </div>
        <div className="rounded-[28px] border border-line bg-surface p-6 sm:p-8">
          <h2 className="font-display text-3xl font-light tracking-tight">
            Send an enquiry
          </h2>
          <div className="mt-6">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </article>
  );
}
