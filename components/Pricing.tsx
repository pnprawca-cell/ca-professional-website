"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { CTAButton, CheckItem, PlanLedger, PlanRow } from "@/components/ui";
import {
  products,
  signupUrl,
  type ProductKey,
  type SignupCycle,
  type SignupPlan,
} from "@/content/site";

export type SubPlan = {
  name: string;
  /** ขอบเขตที่ราคานี้ครอบคลุม เช่น "ไม่เกิน 50 บริษัท" */
  scope: string;
  /** บาทต่อเดือน เมื่อจ่ายรายเดือน (0 = แผนฟรี) */
  monthly: number;
  /** บาทต่อปี เมื่อจ่ายรายปี (0 = แผนฟรี) */
  yearly: number;
  /** รหัสแผนที่ส่งให้พอร์ทัลตอนกดสมัคร — ไม่ใส่ = แผนนี้ไม่มีปุ่มสมัครในตาราง */
  planId?: SignupPlan;
  /** แผนนำของ product — ได้บล็อกเต็มความกว้างเหนือ ledger แผนละหนึ่งเท่านั้น */
  lead?: boolean;
  badge?: string;
  /** ประโยคสั้นว่าเหมาะกับใคร ต่อท้าย scope ในบล็อกแผนนำ */
  fit?: string;
  /** สิ่งที่ได้ในแผนนำ — แสดงเป็น CheckItem */
  reasons?: string[];
};

type Billing = "monthly" | "yearly";

/** ชื่อรอบบิลบนเว็บ ↔ ค่าที่พอร์ทัลรับ (ฝั่งนั้นใช้คำว่า annual) */
const CYCLE_PARAM: Record<Billing, SignupCycle> = {
  monthly: "monthly",
  yearly: "annual",
};

const isFreePlan = (plan: SubPlan) => plan.monthly === 0 && plan.yearly === 0;

/** ลิงก์สมัครของแผนหนึ่ง — แผนฟรีไม่ส่ง cycle ไปด้วยเพราะไม่มีรอบบิลให้เลือก */
function planSignupHref(product: ProductKey, plan: SubPlan, billing: Billing) {
  if (!plan.planId) return undefined;
  return signupUrl({
    product,
    plan: plan.planId,
    cycle: isFreePlan(plan) ? undefined : CYCLE_PARAM[billing],
  });
}

const baht = (n: number) => `฿${n.toLocaleString("en-US")}`;

/** ราคาที่แสดง + บรรทัดรอง ของแผนหนึ่ง ตามรอบบิลที่เลือกอยู่ */
function priceOf(plan: SubPlan, billing: Billing) {
  // แผนฟรียังคงหน่วยตามรอบบิลไว้ เพื่อให้หลักตัวเลขตรงกับแถวอื่นในคอลัมน์เดียวกัน
  if (plan.monthly === 0 && plan.yearly === 0) {
    return {
      amount: baht(0),
      unit: billing === "yearly" ? "/ ปี" : "/ เดือน",
      sub: undefined,
    };
  }
  if (billing === "yearly") {
    return {
      amount: baht(plan.yearly),
      unit: "/ ปี",
      sub: `เฉลี่ย ${baht(Math.round(plan.yearly / 12))} / เดือน`,
    };
  }
  return {
    amount: baht(plan.monthly),
    unit: "/ เดือน",
    sub: `รายปี ${baht(plan.yearly)} · ประหยัด ${baht(plan.monthly * 12 - plan.yearly)}`,
  };
}

const BILLING_LABEL: Record<Billing, string> = {
  monthly: "รายเดือน",
  yearly: "รายปี",
};

function BillingToggle({
  value,
  onChange,
}: {
  value: Billing;
  onChange: (next: Billing) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
      {/* ใช้ปุ่มสองปุ่มกับ aria-pressed แทน role="radio" เพราะ radiogroup ตามสเปกต้องมี
          roving tabindex + ปุ่มลูกศร ซึ่งเกินความจำเป็นของสวิตช์สองทาง — แบบนี้ tab เข้าได้ทั้งคู่
          กด Enter/Space ได้ตามปกติ และ screen reader อ่านสถานะถูกต้อง */}
      <div
        role="group"
        aria-label="รอบการชำระเงิน"
        className="relative inline-flex rounded-full border border-line bg-card p-1"
      >
        {/* แถบเลื่อน: เคลื่อนที่ด้วย transform เท่านั้น ไม่แตะ layout property */}
        <span
          aria-hidden
          className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-foreground transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            value === "yearly" ? "translate-x-full" : "translate-x-0"
          }`}
        />
        {(["monthly", "yearly"] as const).map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={value === option}
            onClick={() => onChange(option)}
            /* สีตัวอักษรเปลี่ยนด้วยจังหวะเดียวกับแถบเลื่อน ป้ายจึงไม่กะพริบตอนแถบวิ่งผ่าน */
            className={`relative z-10 min-w-[6.5rem] rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 motion-reduce:transition-none ${
              value === option ? "text-background" : "text-muted hover:text-foreground"
            }`}
          >
            {BILLING_LABEL[option]}
          </button>
        ))}
      </div>
      <p className="rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent-ink">
        รายปี จ่ายเท่า 10 เดือน ใช้ได้ 12 เดือน
      </p>
    </div>
  );
}

function LeadPlan({
  plan,
  billing,
  signupHref,
  secondaryCta,
  note,
}: {
  plan: SubPlan;
  billing: Billing;
  signupHref?: string;
  /** ทางเลือกที่สองของแผนนำ เช่น "ทดลองฟรี 30 วัน" ของ PractiFlow */
  secondaryCta?: { href: string; label: string };
  note?: string;
}) {
  const { amount, unit, sub } = priceOf(plan, billing);
  return (
    <div className="rounded-2xl border border-accent bg-card p-6 md:p-9">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-14">
        <div>
          <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
            <span className="text-xl font-semibold tracking-tight">{plan.name}</span>
            {plan.badge && (
              <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent-ink">
                {plan.badge}
              </span>
            )}
          </p>
          <p className="mt-1.5 max-w-[46ch] text-[15px] leading-relaxed text-muted">
            {plan.scope}
            {plan.fit ? ` · ${plan.fit}` : ""}
          </p>
          {plan.reasons && plan.reasons.length > 0 && (
            <ul className="mt-6 grid gap-3.5">
              {plan.reasons.map((reason) => (
                <CheckItem key={reason}>{reason}</CheckItem>
              ))}
            </ul>
          )}
        </div>

        <div className="md:min-w-[16rem] md:text-right">
          <p
            key={`${billing}-${amount}`}
            className="animate-price-in motion-reduce:animate-none"
          >
            <span className="text-price font-semibold tabular-nums">{amount}</span>
            {unit && <span className="ml-1.5 text-base font-medium text-muted">{unit}</span>}
          </p>
          {sub && <p className="mt-1.5 text-sm tabular-nums text-muted">{sub}</p>}
          {(signupHref || secondaryCta) && (
            <div className="mt-7">
              {/* บนจอเล็กปุ่มยืดเต็มความกว้างและเรียงลง บนจอใหญ่ชิดขวาไปกับตัวเลข */}
              <div className="flex flex-col gap-2.5 sm:flex-row md:justify-end">
                {signupHref && (
                  <CTAButton href={signupHref} ariaLabel={`สมัครใช้งานแผน ${plan.name}`}>
                    สมัครใช้งาน
                  </CTAButton>
                )}
                {secondaryCta && (
                  <CTAButton href={secondaryCta.href} variant="secondary">
                    {secondaryCta.label}
                  </CTAButton>
                )}
              </div>
              {note && (
                <p className="mt-3.5 max-w-[34ch] text-sm leading-relaxed text-muted md:ml-auto">
                  {note}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * ราคาแบบสมัครใช้งาน: สวิตช์รอบบิล + แผนนำหนึ่งแผน + แผนที่เหลือเป็น ledger
 * ตั้งใจไม่ทำเป็นการ์ดสามใบเรียงกัน — ลำดับชั้นมาจากความต่างของน้ำหนัก ไม่ใช่จากการ์ดที่เหมือนกัน
 */
export function SubscriptionPricing({
  product,
  plans,
  secondaryCta,
  note,
  footnote,
}: {
  /** ใช้สร้าง `?product=` ของลิงก์สมัคร และชื่อ product ใน aria-label ของแต่ละแถว */
  product: ProductKey;
  plans: SubPlan[];
  secondaryCta?: { href: string; label: string };
  note?: string;
  footnote?: ReactNode;
}) {
  const [billing, setBilling] = useState<Billing>("monthly");
  const lead = plans.find((plan) => plan.lead);
  const rest = plans.filter((plan) => !plan.lead);
  const productName = products[product].name;

  return (
    <div>
      <BillingToggle value={billing} onChange={setBilling} />

      {lead && (
        <div className="mt-6">
          <LeadPlan
            plan={lead}
            billing={billing}
            signupHref={planSignupHref(product, lead, billing)}
            secondaryCta={secondaryCta}
            note={note}
          />
        </div>
      )}

      {rest.length > 0 && (
        <>
          <p className="mb-3 mt-9 text-sm font-medium text-muted">แผนอื่น</p>
          <PlanLedger>
            {rest.map((plan) => {
              const { amount, unit, sub } = priceOf(plan, billing);
              const href = planSignupHref(product, plan, billing);
              return (
                <PlanRow
                  key={plan.name}
                  name={plan.name}
                  scope={plan.scope}
                  amount={amount}
                  unit={unit}
                  sub={sub}
                  priceKey={`${billing}-${amount}`}
                  action={
                    href
                      ? {
                          href,
                          label: "สมัคร",
                          ariaLabel: `สมัครใช้งาน ${productName} แผน ${plan.name}`,
                        }
                      : undefined
                  }
                />
              );
            })}
          </PlanLedger>
        </>
      )}

      {footnote}
    </div>
  );
}
