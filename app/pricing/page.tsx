import type { Metadata } from "next";
import { PageHero, Section, CTAButton, CheckItem } from "@/components/ui";
import { products } from "@/content/site";

export const metadata: Metadata = {
  title: "ราคา",
  description: "แนวทางราคาบริการสอบบัญชี, AuditFlow และ PractiFlow — ขอใบเสนอราคาหรือนัด demo ได้ฟรี",
};

function PricingCard({
  name,
  subtitle,
  items,
  highlight = false,
}: {
  name: string;
  subtitle: string;
  items: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-7 ${
        highlight ? "border-accent bg-accent-soft/40" : "border-line bg-card"
      }`}
    >
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="mt-1 text-sm text-muted">{subtitle}</p>
      <ul className="mt-5 flex-1 space-y-3">
        {items.map((item) => (
          <CheckItem key={item}>{item}</CheckItem>
        ))}
      </ul>
      <div className="mt-6">
        <CTAButton href="/contact" variant={highlight ? "primary" : "secondary"}>
          สอบถามราคา
        </CTAButton>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="ราคา"
        title="ราคาตรงไปตรงมา ตามขนาดงานจริง"
        description="เราเสนอราคาตามลักษณะงานของแต่ละราย — ไม่มีค่าใช้จ่ายแอบแฝง และคุยกันก่อนเริ่มงานทุกครั้ง"
      />

      <Section>
        <div className="grid gap-5 lg:grid-cols-3">
          <PricingCard
            name="งานสอบบัญชี"
            subtitle="เสนอราคาตามขนาดและความซับซ้อนของกิจการ"
            items={[
              "ประเมินจากประเภทธุรกิจ รายได้ และจำนวนรายการ",
              "แจ้งราคาชัดเจนก่อนเริ่มงาน ไม่มีบวกเพิ่มภายหลัง",
              "รับใบเสนอราคาภายใน 2 วันทำการ",
            ]}
          />
          <PricingCard
            name={products.auditflow.name}
            subtitle="Audit Platform — Cloud หรือ Desktop"
            highlight
            items={[
              "Cloud: subscription ต่อผู้ใช้ต่อปี",
              "Desktop: license ครั้งเดียว + ค่าอัปเดตรายปี",
              "ทดลองใช้ฟรีกับงานจริง 1 งบ ก่อนตัดสินใจ",
              "ส่วนลดสำหรับผู้สอบบัญชีอิสระ",
            ]}
          />
          <PricingCard
            name={products.practiflow.name}
            subtitle="Practice Management — Cloud หรือ Desktop"
            items={[
              "Cloud: subscription ต่อผู้ใช้ต่อปี",
              "Desktop: license ครั้งเดียว + ค่าอัปเดตรายปี",
              "ทดลองใช้ฟรี 30 วัน เต็มทุกฟีเจอร์",
              "ราคาพิเศษเมื่อใช้คู่กับ AuditFlow",
            ]}
          />
        </div>
        <p className="mt-8 text-sm text-muted">
          * ราคาอย่างเป็นทางการจะประกาศเมื่อเปิดตัวผลิตภัณฑ์ — ติดต่อเราเพื่อรับราคา early adopter
        </p>
      </Section>
    </>
  );
}
