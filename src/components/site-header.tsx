"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { brand, nav } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] w-full max-w-[1400px] items-center justify-between gap-6 px-[clamp(1.25rem,0.6rem+3vw,3.5rem)]">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/embee-logo.webp"
            alt="Embee - Growth Catalyst"
            width={593}
            height={231}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-crimson"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-gradient-to-br from-crimson-bright via-crimson to-[#5e0d10] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_28px_-12px_rgba(139,26,26,0.7)] sm:inline-flex"
          >
            Speak to Embee
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="text-lg leading-none">
              {open ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-paper px-[clamp(1.25rem,0.6rem+3vw,3.5rem)] py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="grid gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-2xl px-3 py-3 font-display text-2xl font-light tracking-tight hover:bg-tint"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
