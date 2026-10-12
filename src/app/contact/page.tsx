import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { IconTile, PageIntro } from "@/components/page-frame";
import { brand } from "@/lib/marketing";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Tell Embee Finsoft about a business requirement. Enquiries go to the Chandigarh office.",
};

const details = [
  {
    label: "Email",
    icon: Mail,
    value: brand.email,
    href: `mailto:${brand.email}`,
  },
  {
    label: "Phone",
    icon: Phone,
    value: brand.phoneDisplay,
    href: `tel:${brand.phoneTel}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        crumbs={[{ href: "/", label: "Home" }, { label: "Contact Us" }]}
        title="Let's Build Something Meaningful."
        lead="Tell us about your business requirements, and the team will help identify a suitable technology approach."
        icon={Mail}
        label="Chandigarh office"
      />
      <div className="shell grid items-start gap-8 py-12 sm:py-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10">
        <div className="grid gap-3">
          {details.map((item) => (
            <a key={item.label} href={item.href} className="flex items-center gap-4 rounded-md border border-line bg-surface p-4 hover:border-navy">
              <IconTile icon={item.icon} />
              <span>
                <span className="block text-xs font-semibold tracking-wide text-muted uppercase">{item.label}</span>
                <span className="mt-1 block font-semibold text-navy">{item.value}</span>
              </span>
            </a>
          ))}
          <a href={brand.maps} className="flex items-start gap-4 rounded-md border border-line bg-surface p-4 hover:border-navy">
            <IconTile icon={MapPin} />
            <span>
              <span className="block text-xs font-semibold tracking-wide text-muted uppercase">Office</span>
              <span className="mt-1 block font-semibold text-navy">
                {brand.address.line1}
                <br />
                {brand.address.line2}
                <br />
                {brand.address.city}
              </span>
            </span>
          </a>
          <p className="text-xs text-muted">
            These contact details are published by {brand.legalName}. They are the office used for Embee Finsoft enquiries.
          </p>
        </div>
        <section className="rounded-md border border-line bg-surface p-5 sm:p-8">
          <h2 className="text-xl font-semibold text-navy">Send an enquiry</h2>
          <p className="mt-2 mb-6 text-sm text-muted">Required fields are marked by the form. A message opens only after the details check out.</p>
          <ContactForm />
        </section>
      </div>
    </>
  );
}
