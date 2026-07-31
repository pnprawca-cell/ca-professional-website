import type { Metadata } from "next";
import { PageHero, Section, Card, CTABanner } from "@/components/ui";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description: `${company.nameTh} — สำนักงานสอบบัญชีที่พัฒนาซอฟต์แวร์สำหรับวิชาชีพบัญชีไทย`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="เกี่ยวกับเรา"
        title="เราเป็นทั้งผู้สอบบัญชี และคนสร้างเครื่องมือ"
        description={`${company.nameTh} เริ่มจากงานสอบบัญชีสำหรับ SME ไทย เมื่อเราเจอปัญหางานซ้ำซากในทุก engagement เราจึงสร้างเครื่องมือขึ้นมาใช้เอง — และวันนี้เราเปิดให้สำนักงานอื่นใช้ด้วย`}
      />

      <Section title="สิ่งที่เราเชื่อ" tint>
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="คุณภาพต้องมาก่อน">
            เครื่องมือที่ดีไม่ได้แทนวิจารณญาณของผู้สอบบัญชี แต่คืนเวลาให้เราใช้วิจารณญาณกับเรื่องที่สำคัญจริง
          </Card>
          <Card title="สร้างจากงานจริง">
            ทุกฟีเจอร์เกิดจากปัญหาที่เราเจอเองในงานลูกค้า ไม่ใช่จากห้องประชุมของบริษัทซอฟต์แวร์
          </Card>
          <Card title="วิชาชีพไทยควรมีเครื่องมือไทย">
            มาตรฐานไทย ภาษาไทย แบบฟอร์มไทย — สำนักงานบัญชีไทยไม่ควรต้องดัดแปลงเครื่องมือต่างประเทศ
          </Card>
        </div>
      </Section>

      <Section
        title="เส้นทางของเรา"
        description="จากสำนักงานสอบบัญชี สู่บริษัทที่ทำทั้งบริการวิชาชีพและซอฟต์แวร์"
      >
        <ol className="relative ml-3 space-y-8 border-l border-line pl-8">
          <li>
            <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <h3 className="font-semibold">เริ่มจากงานสอบบัญชี</h3>
            <p className="mt-1 text-[15px] leading-relaxed text-muted">
              ให้บริการตรวจสอบงบการเงินสำหรับ SME ไทย โดยผู้สอบบัญชีรับอนุญาต
            </p>
          </li>
          <li>
            <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <h3 className="font-semibold">สร้างเครื่องมือใช้เอง</h3>
            <p className="mt-1 text-[15px] leading-relaxed text-muted">
              พัฒนาระบบกระดาษทำการอัตโนมัติและระบบบริหารงานภายใน เพื่อแก้ปัญหางานซ้ำซากของตัวเอง
            </p>
          </li>
          <li>
            <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <h3 className="font-semibold">เปิดให้วิชาชีพใช้ด้วย</h3>
            <p className="mt-1 text-[15px] leading-relaxed text-muted">
              เปิดตัว AuditFlow และ PractiFlow ให้สำนักงานสอบบัญชีและสำนักงานบัญชีทั่วประเทศ
            </p>
          </li>
        </ol>
      </Section>

      <CTABanner
        title="อยากรู้จักเรามากขึ้น?"
        description="ทักมาคุยกันได้เลย — ทั้งเรื่องงานสอบบัญชี ผลิตภัณฑ์ หรือความร่วมมือทางวิชาชีพ"
        buttonLabel="ติดต่อเรา"
        buttonHref="/contact"
      />
    </>
  );
}
