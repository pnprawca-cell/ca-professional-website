"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { nav, company } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-sm font-semibold text-background">
            CA
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            {company.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm transition-colors hover:bg-surface ${
                isActive(item.href) ? "font-semibold" : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="ml-2 rounded-lg border border-line px-4 py-2 text-sm font-medium transition-colors hover:bg-surface"
          >
            เข้าสู่ระบบ
          </Link>
          <Link
            href="/contact"
            className="ml-1 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            ติดต่อเรา
          </Link>
        </nav>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-surface lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="เปิดเมนู"
          aria-expanded={open}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-background px-5 py-3 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`block rounded-lg px-3 py-2.5 text-[15px] hover:bg-surface ${
                isActive(item.href) ? "font-semibold" : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg border border-line px-4 py-2.5 text-center text-[15px] font-medium"
          >
            เข้าสู่ระบบ
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-foreground px-4 py-2.5 text-center text-[15px] font-medium text-background"
          >
            ติดต่อเรา
          </Link>
        </nav>
      )}
    </header>
  );
}
