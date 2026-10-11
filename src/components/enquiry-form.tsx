"use client";

import { FormEvent, useState } from "react";
import { brand } from "@/lib/content";

const topics = [
  "CM Welding",
  "Sunbridge",
  "Hour Tracker",
  "SOW Tracker",
  "Embee FinSoft",
  "Something else",
] as const;

export function EnquiryForm() {
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const organisation = String(data.get("organisation") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const topic = String(data.get("topic") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (name.length < 2) {
      setError("Add your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Add a valid email address.");
      return;
    }
    if (message.length < 12) {
      setError("Tell us a little more about the situation.");
      return;
    }

    setError("");
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      organisation ? `Organisation: ${organisation}` : "",
      phone ? `Phone: ${phone}` : "",
      `Topic: ${topic}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(
      `Enquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium">
          Name
          <input
            name="name"
            autoComplete="name"
            required
            className="rounded-2xl border border-line bg-surface px-4 py-3 font-normal outline-none"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="rounded-2xl border border-line bg-surface px-4 py-3 font-normal outline-none"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Organisation
          <input
            name="organisation"
            autoComplete="organization"
            className="rounded-2xl border border-line bg-surface px-4 py-3 font-normal outline-none"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="rounded-2xl border border-line bg-surface px-4 py-3 font-normal outline-none"
          />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-medium">
        What you are planning
        <select
          name="topic"
          className="rounded-2xl border border-line bg-surface px-4 py-3 font-normal outline-none"
          defaultValue={topics[0]}
        >
          {topics.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-medium">
        The situation
        <textarea
          name="message"
          required
          rows={6}
          className="rounded-2xl border border-line bg-surface px-4 py-3 font-normal outline-none"
        />
      </label>
      {error ? (
        <p role="alert" className="text-sm font-medium text-crimson">
          {error}
        </p>
      ) : null}
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="rounded-full bg-gradient-to-br from-crimson-bright via-crimson to-[#5e0d10] px-5 py-3 text-sm font-semibold text-white"
        >
          Send an enquiry
        </button>
        <p className="max-w-sm text-sm text-muted">
          This opens your email app, addressed to {brand.email}. The message is
          not stored on this site.
        </p>
      </div>
    </form>
  );
}
