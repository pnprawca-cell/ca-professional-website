import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/ui";
import { products } from "@/content/site";

export const metadata: Metadata = {
  title: "เข้าสู่ระบบ",
  description: "เข้าใช้งาน AuditFlow (Audit Platform) หรือ PractiFlow (Practice Management) รุ่น Online",
};

const apps = [
  {
    ...products.auditflow,
    icon: "📋",
    note: "สำหรับงานตรวจสอบ: กระดาษทำการ, Cal Tax, งบการเงิน NPAE",
  },
  {
    ...products.practiflow,
    icon: "🗂️",
    note: "สำหรับบริหารสำนักงาน: งาน, deadline, ลูกค้า, ใบแจ้งหนี้",
  },
];

export default function LoginPage() {
  return (
    <>
      <PageHero
        eyebrow="เข้าสู่ระบบ"
        title="เลือกระบบที่ต้องการเข้าใช้งาน"
        description="สำหรับผู้ใช้รุ่น Online (Cloud) — รุ่น Desktop เปิดใช้งานจากโปรแกรมที่ติดตั้งในเครื่องได้เลย"
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {apps.map((app) => (
            <div key={app.name} className="flex flex-col rounded-2xl border border-line bg-card p-8">
              <div className="text-3xl">{app.icon}</div>
              <h2 className="mt-4 text-xl font-semibold tracking-tight">
                {app.name}
                <span className="ml-2 text-sm font-normal text-muted">{app.category}</span>
              </h2>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{app.note}</p>
              <a
                href={app.appUrl}
                className="mt-6 inline-flex items-center justify-center rounded-lg bg-foreground px-5 py-3 font-medium text-background transition-opacity hover:opacity-85"
              >
                เข้าสู่ระบบ {app.name} →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-surface p-6 text-center text-[15px] text-muted">
          ยังไม่มีบัญชี?{" "}
          <Link href="/contact" className="font-medium text-accent-ink hover:underline">
            นัด demo กับทีมงาน
          </Link>{" "}
          แล้วเราจะเปิดบัญชีทดลองใช้ให้ · ลืมรหัสผ่าน? ใช้ปุ่ม &ldquo;ลืมรหัสผ่าน&rdquo; ในหน้า login ของแต่ละระบบ
        </div>
      </Section>
    </>
  );
}
