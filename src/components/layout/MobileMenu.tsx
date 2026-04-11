"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "@/components/brand";
import { NAV_LINKS } from "@/lib/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const currentPath = usePathname();
  const [trackedPath, setTrackedPath] = useState(currentPath);

  if (trackedPath !== currentPath) {
    setTrackedPath(currentPath);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen((v) => !v)}
        className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-gray-100 transition-colors"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div
        id="mobile-menu-panel"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={`md:hidden fixed inset-0 z-50 bg-white transition-opacity duration-200 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-black/5">
          <Link
            href="/"
            aria-label="INDUS home"
            onClick={() => setOpen(false)}
          >
            <Wordmark />
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <CloseIcon />
          </button>
        </div>

        <nav
          aria-label="Mobile primary"
          className="flex flex-col px-4 sm:px-6 py-6 gap-1"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-4 text-2xl font-serif text-gray-900 border-b border-black/5 hover:text-indus-deep transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

function MenuIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
