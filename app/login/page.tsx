import type { Metadata } from "next";
import { PageHero, Section, CTAButton } from "@/components/ui";
import { products } from "@/content/site";

export const metadata: Metadata = {
  title: "เข้าสู่ระบบ",
  description:
    "ทางเข้าใช้งาน AuditFlow (Audit Platform) และ PractiFlow (Practice Management) สำหรับสำนักงานที่เปิดสิทธิใช้งานแล้ว",
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
        title="เลือกระบบที่ต้องการเข้าใช้งาน"
        description="สำหรับผู้ใช้รุ่น Online — รุ่น Desktop ของ AuditFlow เปิดจากโปรแกรมที่ติดตั้งในเครื่องได้เลย"
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {apps.map((app) => (
            <div
              key={app.name}
              className="flex flex-col rounded-2xl border border-line bg-card p-7 md:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight">
                {app.name}{" "}
                <span className="text-sm font-normal text-muted">{app.category}</span>
              </h2>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{app.note}</p>
              <div className="mt-6">
                <CTAButton href={app.loginUrl} ariaLabel={`เข้าสู่ระบบ ${app.name}`}>
                  เข้าสู่ระบบ {app.name} →
                </CTAButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-line bg-card p-7 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">ยังไม่มีบัญชี</h2>
              <p className="mt-1.5 max-w-[58ch] text-[15px] leading-relaxed text-muted">
                สมัครได้เองทั้งสองระบบ ชำระด้วยการโอนแล้วแนบสลิป เราเปิดสิทธิให้ภายใน 1 วันทำการ
              </p>
            </div>
            <CTAButton href="/signup">สมัครใช้งาน</CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
