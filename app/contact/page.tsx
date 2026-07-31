import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "ติดต่อเรา",
  description: "ขอใบเสนอราคางานสอบบัญชี นัด demo AuditFlow / PractiFlow หรือสอบถามข้อมูลเพิ่มเติม",
};

const channels = [
  {
    title: "อีเมล",
    value: company.email,
    href: `mailto:${company.email}`,
    note: "ตอบภายใน 1 วันทำการ",
  },
  {
    title: "LINE Official",
    value: company.line,
    note: "ช่องทางที่เร็วที่สุด — ทักได้เลย",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="ติดต่อเรา"
        title="คุยกันก่อน ไม่มีค่าใช้จ่าย"
        description="ไม่ว่าจะขอใบเสนอราคางานสอบบัญชี นัด demo ผลิตภัณฑ์ หรือถามคำถามทั่วไป — เลือกช่องทางที่สะดวกได้เลย"
      />

      <Section
        title="กรอกฟอร์มให้เราติดต่อกลับ"
        description="ใช้เวลาไม่ถึงนาที — ทีมงานจะติดต่อกลับภายใน 1 วันทำการ"
      >
        <ContactForm />
      </Section>

      <Section title="หรือติดต่อช่องทางอื่น" tint>
        <div className="grid gap-5 md:grid-cols-2">
          {channels.map((c) => (
            <div key={c.title} className="rounded-2xl border border-line bg-card p-7">
              <h3 className="font-semibold">{c.title}</h3>
              {c.href ? (
                <a href={c.href} className="mt-2 block break-all text-accent-ink hover:underline">
                  {c.value}
                </a>
              ) : (
                <p className="mt-2">{c.value}</p>
              )}
              <p className="mt-2 text-sm text-muted">{c.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="ช่วยเราเตรียมคำตอบให้เร็วขึ้น">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-card p-7">
            <h3 className="font-semibold">ถ้าสนใจงานสอบบัญชี</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              บอกเรา: ประเภทธุรกิจ, รายได้ต่อปีโดยประมาณ, จำนวนรายการค้าต่อเดือน
              และกำหนดยื่นงบ — เราจะส่งใบเสนอราคาภายใน 2 วันทำการ
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-card p-7">
            <h3 className="font-semibold">ถ้าสนใจ AuditFlow / PractiFlow</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              บอกเรา: ขนาดทีม, ใช้เครื่องมืออะไรอยู่ตอนนี้ และสนใจรุ่น Cloud หรือ Desktop
              — เราจะนัด demo 30 นาทีตามเวลาที่คุณสะดวก
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
