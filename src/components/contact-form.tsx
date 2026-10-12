"use client";

import { useActionState, useEffect } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/actions";
import { brand, interestOptions } from "@/lib/marketing";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitEnquiry, { status: "idle", message: "" } satisfies EnquiryState);

  useEffect(() => {
    if (state.status === "mailto" && state.mailto) {
      window.location.href = state.mailto;
    }
  }, [state]);

  return (
    <form action={action} className="grid min-w-0 gap-4" noValidate>
      <input name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" autoComplete="name" required />
        <Field label="Business email" name="email" type="email" autoComplete="email" required />
        <Field label="Company name" name="company" autoComplete="organization" required />
        <Field label="Job title" name="title" autoComplete="organization-title" />
        <Field label="Phone number" name="phone" type="tel" autoComplete="tel" />
        <label className="grid min-w-0 gap-1.5 text-sm font-medium">
          Service of interest
          <select name="interest" required defaultValue="" className="w-full min-w-0 rounded-md border border-line bg-surface px-3 py-2.5 text-base font-normal">
            <option value="" disabled>Select a service</option>
            {interestOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-medium">
        Project requirements
        <textarea name="message" required rows={5} className="w-full min-w-0 rounded-md border border-line bg-surface px-3 py-2.5 text-base font-normal" />
      </label>
      <label className="flex items-start gap-2 text-sm">
        <input name="consent" type="checkbox" required className="mt-1" />
        <span>
          I agree that this enquiry may be sent to {brand.email}. See the{" "}
          <a href={brand.privacy} className="font-semibold text-teal">privacy notice</a>.
        </span>
      </label>
      {state.message ? (
        <p role="status" className={state.status === "error" ? "text-sm font-medium text-teal" : "text-sm text-ink"}>
          {state.message}
        </p>
      ) : null}
      <button type="submit" disabled={pending} className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-teal px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#6b0f0f] disabled:opacity-60 sm:w-fit">
        {pending ? "Sending" : "Send enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="grid min-w-0 gap-1.5 text-sm font-medium">
      {label}
      {required ? <span className="sr-only">required</span> : null}
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full min-w-0 rounded-md border border-line bg-surface px-3 py-2.5 text-base font-normal"
      />
    </label>
  );
}
