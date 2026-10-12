import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { brand } from "@/lib/marketing";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Tell Embee Finsoft about a business requirement. Enquiries go to the Chandigarh office.",
};

export default function ContactPage() {
  return (
    <article className="shell grid gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
      <div className="min-w-0">
        <p className="text-sm text-muted">Home / Contact Us</p>
        <h1 className="prose-title mt-4 font-semibold text-navy">Let&apos;s Build Something Meaningful.</h1>
        <p className="mt-4 text-muted">
          Tell us about your business requirements, and our team will help identify a suitable technology approach.
        </p>
        <dl className="mt-8 grid gap-4 text-sm">
          <div>
            <dt className="font-semibold text-navy">Email</dt>
            <dd><a className="text-teal" href={`mailto:${brand.email}`}>{brand.email}</a></dd>
          </div>
          <div>
            <dt className="font-semibold text-navy">Phone</dt>
            <dd><a className="text-teal" href={`tel:${brand.phoneTel}`}>{brand.phoneDisplay}</a></dd>
          </div>
          <div>
            <dt className="font-semibold text-navy">Office</dt>
            <dd className="text-muted">
              {brand.address.line1}<br />
              {brand.address.line2}<br />
              {brand.address.city}
            </dd>
          </div>
        </dl>
        <p className="mt-4 text-xs text-muted">
          These contact details are published by {brand.legalName}. They are the office used for Embee Finsoft enquiries.
        </p>
      </div>
      <ContactForm />
    </article>
  );
}
