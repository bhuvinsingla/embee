"use server";

import { brand, interestOptions } from "@/lib/marketing";

export type EnquiryState = {
  status: "idle" | "error" | "mailto" | "sent";
  message: string;
  mailto?: string;
};

function field(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

export async function submitEnquiry(
  _previous: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  if (field(formData, "company_website")) {
    return { status: "error", message: "The enquiry could not be sent." };
  }

  const name = field(formData, "name");
  const email = field(formData, "email");
  const company = field(formData, "company");
  const title = field(formData, "title");
  const phone = field(formData, "phone");
  const interest = field(formData, "interest");
  const message = field(formData, "message");
  const consent = formData.get("consent") === "on";

  if (name.length < 2) return { status: "error", message: "Add your full name." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Add a valid business email." };
  }
  if (company.length < 2) return { status: "error", message: "Add your company name." };
  if (!interestOptions.includes(interest as (typeof interestOptions)[number])) {
    return { status: "error", message: "Choose a service of interest." };
  }
  if (message.length < 20) {
    return { status: "error", message: "Describe the requirement in a little more detail." };
  }
  if (!consent) {
    return { status: "error", message: "Consent to the privacy notice is required." };
  }

  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    title ? `Job title: ${title}` : "",
    phone ? `Phone: ${phone}` : "",
    `Service: ${interest}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const to = process.env.CONTACT_TO || brand.email;
  const from = process.env.CONTACT_FROM;
  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey && from) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Project enquiry from ${name}`,
        text: body,
      }),
    });

    if (!response.ok) {
      return {
        status: "error",
        message: "The enquiry did not send. Please email the office directly.",
      };
    }

    return {
      status: "sent",
      message: "The enquiry was sent to the Embee Finsoft office.",
    };
  }

  const mailto = `mailto:${to}?subject=${encodeURIComponent(`Project enquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
  return {
    status: "mailto",
    message: `Email delivery is not connected on the server yet. Your email app will open a message to ${to}. Send that message to reach the team.`,
    mailto,
  };
}
