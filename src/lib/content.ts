export const brand = {
  name: "Embee Group",
  legalName: "Embee Financial Services Ltd",
  platform: "Embee FinSoft",
  description:
    "Embee Group is digitizing delivery work from Chandigarh. Embee Financial Services Ltd is the finance firm; this site is the technology practice.",
  phoneDisplay: "+91-8699902381",
  phoneTel: "+918699902381",
  email: "info@embeegroup.in",
  whatsapp: "https://wa.me/918699902381",
  linkedin: "https://www.linkedin.com/company/embee-financial-services-limmited/",
  instagram: "https://www.instagram.com/groupembee/",
  advisorySite: "https://www.embeegroup.in/",
  address: {
    line1: "Unit No. 513, 5th Floor, Elante Offices",
    line2: "Plot No. 178-178A, Industrial Area, Phase-1",
    city: "Chandigarh - 160002, India",
  },
  maps: "https://www.google.com/maps/search/?api=1&query=Unit%20No.%20513%2C%205th%20Floor%2C%20Elante%20Offices%2C%20Plot%20No.%20178-178A%2C%20Industrial%20Area%2C%20Phase-1%2C%20Chandigarh%20160002",
} as const;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/platform", label: "Platform" },
  { href: "/hour-tracker", label: "Hour Tracker" },
  { href: "/sow-tracker", label: "SOW Tracker" },
  { href: "/contact", label: "Contact" },
] as const;

export const proof = [
  { label: "Legal name", value: "Embee Financial Services Ltd" },
  { label: "Office", value: "Elante Offices, Chandigarh" },
  { label: "Email", value: "info@embeegroup.in" },
  { label: "Phone", value: "+91-8699902381" },
] as const;

export const policies = [
  { label: "Privacy", href: "https://www.embeegroup.in/privacy/" },
  { label: "Terms", href: "https://www.embeegroup.in/terms/" },
  { label: "Disclaimer", href: "https://www.embeegroup.in/disclaimer/" },
  {
    label: "Regulatory disclosures",
    href: "https://www.embeegroup.in/regulatory-disclosures/",
  },
] as const;
