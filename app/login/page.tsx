import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/ui";
import { products } from "@/content/site";

export const metadata: Metadata = {
  title: "เข้าสู่ระบบ",
  description:
    "ขอเปิดบัญชีใช้งาน AuditFlow (Audit Platform) หรือ PractiFlow (Practice Management) รุ่น Online — ทีมงานเป็นคนเปิดบัญชีให้",
};

const apps = [
  {
    ...products.auditflow,
    note: "สำหรับงานตรวจสอบ: กระดาษทำการ, Cal Tax, งบการเงิน NPAE",
  },
  {
    ...products.practiflow,
    note: "สำหรับบริหารสำนักงาน: งาน, deadline, ลูกค้า, ใบแจ้งหนี้",
  },
];

export default function LoginPage() {
  return (
    <>
      <PageHero
        eyebrow="เข้าสู่ระบบ"
        title="เปิดบัญชีใช้งานผ่านทีมงาน"
        description="รุ่น Online (Cloud) ทีมงานเป็นคนเปิดบัญชีให้ — แจ้งเราว่าสนใจระบบไหน เราติดต่อกลับภายใน 1 วันทำการ ส่วนรุ่น Desktop เปิดใช้งานจากโปรแกรมที่ติดตั้งในเครื่องได้เลย"
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {apps.map((app) => (
            <div key={app.name} className="flex flex-col rounded-2xl border border-line bg-card p-8">
              <h2 className="text-xl font-semibold tracking-tight">
                {app.name}
                <span className="ml-2 text-sm font-normal text-muted">{app.category}</span>
              </h2>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{app.note}</p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-lg bg-foreground px-5 py-3 font-medium text-background transition-opacity hover:opacity-85"
              >
                ขอเปิดบัญชี {app.name} →
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[15px] leading-relaxed text-muted">
          อยากเห็นระบบก่อนตัดสินใจ{" "}
          <Link href="/contact" className="font-medium text-accent-ink hover:underline">
            นัด demo 30 นาที
          </Link>{" "}
          เราพาดูกับแฟ้มงานจริงได้
        </p>
      </Section>
    </>
  );
}
