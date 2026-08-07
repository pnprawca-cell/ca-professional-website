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
      {/* Eyebrow: น้ำหนัก 600 + สี terracotta พอแล้วสำหรับ kicker เหนือ h1
          ห้ามใส่ uppercase/tracking-widest กลับมา — ภาษาหลักของเว็บคือไทย
          uppercase ไม่มีผลกับอักษรไทยเลย (dead CSS บนเกือบทุกหน้า) ส่วน
          letter-spacing 0.1em ไปลดการเกาะกลุ่มของตัวอักษร ซึ่งเป็นสัญญาณเดียว
          ที่คนไทยใช้แบ่งคำเพราะเราเขียนติดกันไม่เว้นวรรค อ่านยากขึ้นจริง */}
      {eyebrow && <p className="mb-3 text-sm font-semibold text-accent-ink">{eyebrow}</p>}
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
  media,
}: {
  title: string;
  children: ReactNode;
  href?: string;
  /** Optional illustration rendered above the title (see PractiFlowFeatureArt). */
  media?: ReactNode;
}) {
  const body = (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-card p-6 transition-shadow hover:shadow-sm">
      {media}
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
  variant?: "primary" | "secondary" | "accent";
}) {
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:opacity-85"
      : variant === "accent"
        ? "bg-accent-ink text-card hover:opacity-85"
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
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-accent-ink px-6 py-3 font-medium text-card transition-opacity hover:opacity-85"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}

/**
 * ตารางราคาแบบ "ใบแจ้งค่าบริการ" — ชื่อแผนซ้าย เส้นประเชื่อม ตัวเลขขวา
 * ตัว <ul> เป็น grid เจ้าของคอลัมน์ ส่วนแต่ละแถวใช้ grid-cols-subgrid
 * เพื่อให้คอลัมน์ราคาของทุกแถวกว้างเท่ากันจริง — หลักตัวเลขจึงตรงกันลงมาทั้งคอลัมน์
 * (tabular-nums อย่างเดียวไม่พอ เพราะแต่ละแถวจะวัดความกว้างของตัวเองแยกกัน)
 */
export function PlanLedger({ children }: { children: ReactNode }) {
  return (
    <ul className="grid grid-cols-[minmax(0,1fr)_auto] overflow-hidden rounded-2xl border border-line bg-card">
      {children}
    </ul>
  );
}

export function PlanRow({
  name,
  scope,
  amount,
  unit,
  sub,
  /** เปลี่ยนค่านี้เมื่อราคาเปลี่ยน เพื่อให้ตัวเลขเล่น animation ใหม่ */
  priceKey,
}: {
  name: string;
  scope: string;
  amount: string;
  unit?: string;
  sub?: string;
  priceKey?: string;
}) {
  return (
    <li className="col-span-2 grid grid-cols-subgrid items-baseline gap-x-6 border-t border-line px-5 py-4 transition-colors first:border-t-0 hover:bg-surface/60 md:px-7 md:py-5">
      <div className="min-w-0">
        <div className="flex items-baseline gap-3">
          <p className="font-semibold tracking-tight">{name}</p>
          {/* เส้นประเชื่อมชื่อแผนกับราคา แบบตารางค่าบริการ
              กล่องสูง 0 จึงถูกจัดให้ขอบล่างตกที่ baseline ของชื่อแผนพอดี */}
          <span aria-hidden className="h-0 flex-1 border-b border-dotted border-line" />
        </div>
        <p className="mt-1 text-[15px] leading-relaxed text-muted">{scope}</p>
      </div>
      {/* จำกัดความกว้างบนจอเล็ก ไม่ให้บรรทัดรอง (ราคาอีกรอบบิล) ดูดคอลัมน์ไปจนเส้นประหาย */}
      <div className="max-w-[9.5rem] text-right md:max-w-none">
        <p key={priceKey} className="animate-price-in tabular-nums motion-reduce:animate-none">
          <span className="text-xl font-semibold tracking-tight">{amount}</span>
          {unit && <span className="ml-1 text-sm font-normal text-muted">{unit}</span>}
        </p>
        {sub && <p className="mt-1 text-sm tabular-nums text-muted">{sub}</p>}
      </div>
    </li>
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
