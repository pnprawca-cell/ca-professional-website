import Link from "next/link";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-4 pt-16 md:pt-24">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-ink">
          {eyebrow}
        </p>
      )}
      <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
      )}
    </section>
  );
}

export function Section({
  title,
  description,
  children,
  tint = false,
}: {
  title?: string;
  description?: string;
  children: ReactNode;
  tint?: boolean;
}) {
  return (
    <section className={tint ? "bg-surface" : ""}>
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        {title && (
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
            {title}
          </h2>
        )}
        {description && (
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">{description}</p>
        )}
        <div className={title || description ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

export function Card({
  title,
  children,
  href,
}: {
  title: string;
  children: ReactNode;
  href?: string;
}) {
  const body = (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-card p-6 transition-shadow hover:shadow-sm">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <div className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{children}</div>
      {href && <span className="mt-4 text-sm font-medium text-accent-ink">ดูรายละเอียด →</span>}
    </div>
  );
  return href ? <Link href={href}>{body}</Link> : body;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:opacity-85"
      : "border border-line bg-card hover:bg-surface";
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-[15px] font-medium transition-all ${styles}`}
    >
      {children}
    </Link>
  );
}

export function CTABanner({
  title,
  description,
  buttonLabel,
  buttonHref,
}: {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20">
      <div className="rounded-3xl bg-foreground px-8 py-12 text-center md:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-background md:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl leading-relaxed text-background/70">{description}</p>
        <Link
          href={buttonHref}
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-accent-ink px-6 py-3 font-medium text-white transition-opacity hover:opacity-85"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft">
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2.5 6.5L5 9l4.5-6" stroke="var(--accent-ink)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-[15px] leading-relaxed text-muted">{children}</span>
    </li>
  );
}
