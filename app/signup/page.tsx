import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, CTAButton, CheckItem } from "@/components/ui";
import { portalUrl, products, signupUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "สมัครใช้งาน",
  description:
    "สมัครใช้ AuditFlow หรือ PractiFlow ได้เอง ชำระด้วยการโอนแล้วแนบสลิป หัก ณ ที่จ่าย 3% ได้ตามปกติ ได้ใบกำกับภาษีเต็มจำนวน เปิดสิทธิภายใน 1 วันทำการ",
};

/**
 * หน้าเลือก product สำหรับคนที่เข้ามาจากเมนูโดยไม่ผ่านหน้าราคา (สเปก §7)
 * หน้านี้ไม่มีฟอร์ม ไม่รับไฟล์ และไม่เก็บข้อมูลส่วนบุคคล — เป็นทางแยกไปพอร์ทัลอย่างเดียว
 */
const choices = [
  {
    ...products.auditflow,
    forWhom: "สำหรับผู้สอบบัญชีที่ต้องตรวจงบและออกเล่มรายงาน",
    entry: "เริ่มที่แผน Free 1 บริษัทได้ทันที หรือเลือกแผนรายเดือน/รายปีตามจำนวนบริษัทที่ตรวจ",
    href: signupUrl({ product: "auditflow" }),
  },
  {
    ...products.practiflow,
    forWhom: "สำหรับสำนักงานที่ต้องคุมงานลูกค้าทุกรายทุก deadline",
    entry: "ทดลองฟรี 30 วัน ครบทุกฟีเจอร์ ไม่ต้องผูกบัตร ครบแล้วค่อยเลือกแผน",
    href: signupUrl({ product: "practiflow", plan: "pm_trial" }),
  },
];

/** ลำดับจริงของการสมัคร — เลขกำกับที่นี่บอกลำดับ ไม่ได้เป็นของตกแต่ง */
const steps = [
  {
    title: "กรอกข้อมูลสำนักงาน",
    detail:
      "ชื่อนิติบุคคลตามหนังสือรับรอง เลขประจำตัวผู้เสียภาษี ที่อยู่ และอีเมลผู้ติดต่อ — ข้อมูลชุดเดียวกับที่ใช้ออกใบกำกับภาษี",
  },
  {
    title: "รับใบแจ้งหนี้ทางอีเมล",
    detail:
      "ระบบออกใบแจ้งหนี้ให้ทันทีหลังสมัคร พร้อม QR พร้อมเพย์และยอดโอนสุทธิที่หักภาษี ณ ที่จ่ายให้แล้ว",
  },
  {
    title: "โอนแล้วแนบสลิป",
    detail:
      "แนบสลิปได้จากลิงก์ในใบแจ้งหนี้ ไม่ต้องมีบัญชีผู้ใช้ก่อน โอนผิดยอดแล้วแนบใหม่ทับได้ที่ลิงก์เดิม",
  },
  {
    title: "เราตรวจสลิปแล้วเปิดสิทธิ",
    detail:
      "ภายใน 1 วันทำการ เราส่งอีเมลยืนยันพร้อมใบกำกับภาษี/ใบเสร็จ และลิงก์ตั้งรหัสผ่านผู้ดูแลคนแรก",
  },
];

export default function SignupPage() {
  return (
    <>
      <PageHero
        title="เลือกระบบที่จะเริ่มใช้"
        description="สมัครได้เองทั้งสองระบบ ชำระด้วยการโอนแล้วแนบสลิป ไม่ต้องมีบัตรเครดิต และไม่ต้องรอให้ทีมงานเปิดบัญชีให้"
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {choices.map((choice) => (
            <div
              key={choice.name}
              className="flex flex-col rounded-2xl border border-line bg-card p-7 md:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight">
                {choice.name}{" "}
                <span className="text-sm font-normal text-muted">{choice.category}</span>
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{choice.forWhom}</p>
              <p className="mt-5 flex-1 text-[15px] leading-relaxed">{choice.entry}</p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <CTAButton href={choice.href} ariaLabel={`สมัครใช้งาน ${choice.name}`}>
                  สมัคร {choice.name}
                </CTAButton>
                <Link
                  href="/pricing"
                  className="text-sm font-medium text-accent-ink underline-offset-4 hover:underline"
                  aria-label={`ดูราคาทุกแผนของ ${choice.name}`}
                >
                  ดูราคาทุกแผน →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="หลังกดสมัครแล้วเกิดอะไรขึ้นบ้าง"
        description="สี่ขั้น จบภายใน 1 วันทำการนับจากที่เราได้รับสลิป"
        tint
      >
        <ol className="grid gap-5 md:grid-cols-2">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-line bg-card p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold tabular-nums text-accent-ink">
                  {i + 1}
                </span>
                <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{step.detail}</p>
            </li>
          ))}
        </ol>

        <p className="mt-6 max-w-[68ch] text-sm leading-relaxed text-muted">
          ทดลองฟรี 30 วันของ {products.practiflow.name} ข้ามขั้นที่ 2 และ 3 — สมัครแล้วเรายืนยันว่าเป็นสำนักงานจริง
          แล้วเปิดสิทธิให้เลย ครบ 30 วันค่อยเลือกแผนและชำระเงิน ข้อมูลที่ทำไว้ระหว่างทดลองยังอยู่ครบ
        </p>
      </Section>

      <Section title="เรื่องเงินและเอกสารทางภาษี">
        <ul className="grid max-w-[70ch] gap-4">
          <CheckItem>
            <strong className="font-semibold text-foreground">หัก ณ ที่จ่าย 3% ได้ตามปกติ</strong> —
            ใบแจ้งหนี้แสดงยอดโอนสุทธิหลังหักไว้ให้แล้ว โอนตามยอดนั้นได้เลย
            แล้วส่งหนังสือรับรองการหักภาษีมาให้เราตามรอบ
          </CheckItem>
          <CheckItem>
            <strong className="font-semibold text-foreground">ได้ใบกำกับภาษีเต็มจำนวน</strong> —
            ออกในชื่อนิติบุคคลของสำนักงานคุณ พร้อมใบเสร็จรับเงินตามมาตรา 86/4 ส่งให้ทางอีเมลตอนที่เราอนุมัติ
          </CheckItem>
          <CheckItem>
            ราคาทุกแผนบนหน้า{" "}
            <Link href="/pricing" className="font-medium text-accent-ink hover:underline">
              ราคา
            </Link>{" "}
            ยังไม่รวม VAT 7% ระบบคำนวณและแสดงยอดรวมให้ในใบแจ้งหนี้
          </CheckItem>
          <CheckItem>
            ตอนนี้ชำระด้วยการโอนเท่านั้น ยังไม่รับบัตรเครดิตและยังไม่มีการตัดเงินอัตโนมัติ —
            ถึงรอบต่ออายุเราส่งใบแจ้งหนี้ใบใหม่ไปให้ก่อนล่วงหน้า
          </CheckItem>
        </ul>

        <p className="mt-8 max-w-[68ch] text-sm leading-relaxed text-muted">
          ขั้นตอนสมัครและการแนบสลิปทำที่ระบบของเราที่{" "}
          <span className="font-medium text-foreground">{portalUrl.replace("https://", "")}</span>{" "}
          ซึ่งเป็นคนละระบบกับเว็บไซต์นี้และตั้งอยู่ในประเทศไทย เว็บไซต์นี้ไม่เก็บข้อมูลการสมัครและไม่รับไฟล์สลิป —
          รายละเอียดอยู่ใน{" "}
          <Link href="/legal/privacy" className="font-medium text-accent-ink hover:underline">
            นโยบายความเป็นส่วนตัว
          </Link>
        </p>
      </Section>

      <Section tint>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              ยังไม่แน่ใจว่าแผนไหนเหมาะกับสำนักงานคุณ
            </h2>
            <p className="mt-2 max-w-[54ch] leading-relaxed text-muted">
              บอกจำนวนลูกค้าที่ดูแลและขนาดทีม เราช่วยประเมินให้ได้ภายในวันเดียว
              หรือนัด demo 30 นาทีเพื่อดูระบบจริงก่อนก็ได้ ไม่มีข้อผูกมัด
            </p>
          </div>
          <CTAButton href="/contact" variant="secondary">
            ปรึกษาก่อนสมัคร
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
