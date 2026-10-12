"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState, type ReactNode } from "react";
import { projects, services } from "@/lib/marketing";

export function SiteHeader() {
  const [open, setOpen] = useState<"work" | "services" | "mobile" | null>(null);
  const menuId = useId();

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    function onChange() {
      if (desktop.matches) setOpen(null);
    }
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open === "mobile" ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur-sm">
      <div className="shell flex min-h-16 items-center justify-between gap-3">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setOpen(null)}>
          <Image
            src="/embee-logo.webp"
            alt="Embee"
            width={148}
            height={58}
            priority
            className="h-8 w-auto max-w-[7.5rem] sm:h-9 sm:max-w-none"
          />
          <span className="hidden text-sm font-semibold tracking-wide text-navy sm:inline">
            Finsoft
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <Link href="/about" className="rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap text-ink hover:text-teal">
            About Us
          </Link>
          <Menu
            label="Our Work"
            expanded={open === "work"}
            onToggle={() => setOpen(open === "work" ? null : "work")}
            id={`${menuId}-work`}
          >
            <Link href="/work" className="block rounded-md px-3 py-2 text-sm font-semibold hover:bg-paper" onClick={() => setOpen(null)}>
              All work
            </Link>
            {projects.map((item) => (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                className="block rounded-md px-3 py-2 text-sm hover:bg-paper"
                onClick={() => setOpen(null)}
              >
                {item.title}
              </Link>
            ))}
          </Menu>
          <Menu
            label="Services"
            expanded={open === "services"}
            onToggle={() => setOpen(open === "services" ? null : "services")}
            id={`${menuId}-services`}
          >
            <Link href="/services" className="block rounded-md px-3 py-2 text-sm font-semibold hover:bg-paper" onClick={() => setOpen(null)}>
              All services
            </Link>
            {services.map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm hover:bg-paper"
                onClick={() => setOpen(null)}
              >
                {item.title}
              </Link>
            ))}
          </Menu>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden min-h-11 items-center rounded-md bg-teal px-4 py-2 text-sm font-semibold text-white hover:bg-[#6b0f0f] sm:inline-flex"
          >
            Contact Us
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-line lg:hidden"
            aria-expanded={open === "mobile"}
            aria-controls={`${menuId}-mobile`}
            onClick={() => setOpen(open === "mobile" ? null : "mobile")}
          >
            <span className="sr-only">{open === "mobile" ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true">{open === "mobile" ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open === "mobile" ? (
        <nav id={`${menuId}-mobile`} className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-line bg-surface lg:hidden" aria-label="Mobile">
          <div className="shell py-4">
            <Link href="/about" className="block py-2.5 text-sm font-medium" onClick={() => setOpen(null)}>
              About Us
            </Link>
            <h2 className="mt-4 text-xs font-semibold tracking-wide text-muted uppercase">Our Work</h2>
            <Link href="/work" className="block py-2.5 text-sm font-semibold" onClick={() => setOpen(null)}>
              All work
            </Link>
            {projects.map((item) => (
              <Link key={item.slug} href={`/work/${item.slug}`} className="block py-2.5 text-sm" onClick={() => setOpen(null)}>
                {item.title}
              </Link>
            ))}
            <h2 className="mt-4 text-xs font-semibold tracking-wide text-muted uppercase">Services</h2>
            <Link href="/services" className="block py-2.5 text-sm font-semibold" onClick={() => setOpen(null)}>
              All services
            </Link>
            {services.map((item) => (
              <Link key={item.slug} href={item.href} className="block py-2.5 text-sm" onClick={() => setOpen(null)}>
                {item.title}
              </Link>
            ))}
            <Link href="/contact" className="mt-4 inline-flex min-h-11 items-center rounded-md bg-teal px-4 py-2 text-sm font-semibold text-white hover:bg-[#6b0f0f]" onClick={() => setOpen(null)}>
              Contact Us
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function Menu({
  label,
  expanded,
  onToggle,
  id,
  children,
}: {
  label: string;
  expanded: boolean;
  onToggle: () => void;
  id: string;
  children: ReactNode;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        className="rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap text-ink hover:text-teal"
        aria-expanded={expanded}
        aria-controls={id}
        onClick={onToggle}
      >
        {label}
      </button>
      {expanded ? (
        <div id={id} className="absolute top-full left-0 z-30 mt-2 max-h-[min(24rem,calc(100dvh-5rem))] w-80 max-w-[calc(100vw-2rem)] overflow-y-auto rounded-md border border-line bg-surface p-2">
          {children}
        </div>
      ) : null}
    </div>
  );
}
