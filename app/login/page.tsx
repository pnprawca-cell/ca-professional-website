import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, CTAButton } from "@/components/ui";
import { products } from "@/content/site";

export const metadata: Metadata = {
  title: "เข้าสู่ระบบ",
  description:
    "ทางเข้าใช้งาน AuditFlow (Audit Platform) และ PractiFlow (Practice Management) สำหรับสำนักงานที่เปิดสิทธิใช้งานแล้ว",
};

const auditflow = products.auditflow;
const practiflow = products.practiflow;

function AppCard({
  name,
  category,
  note,
  children,
}: {
  name: string;
  category: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-line bg-card p-7 md:p-8">
      <h2 className="text-xl font-semibold tracking-tight">
        {name}{" "}
        <span className="text-sm font-normal text-muted">{category}</span>
      </h2>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{note}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <>
      <PageHero
        title="เข้าใช้งานระบบของคุณ"
        description="สองระบบอยู่คนละที่อยู่ เพราะเก็บข้อมูลแยกกันคนละชุด — เลือกระบบที่สำนักงานคุณใช้อยู่ ส่วนรุ่น Desktop ของ AuditFlow เปิดจากโปรแกรมที่ติดตั้งในเครื่องได้เลย"
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <AppCard
            name={auditflow.name}
            category={auditflow.category}
            note="สำหรับงานตรวจสอบ: กระดาษทำการ, Cal Tax, งบการเงิน NPAE"
          >
            {/* AuditFlow ให้ที่อยู่ต่อสำนักงาน เว็บนี้ไม่มีทะเบียนลูกค้าจึงชี้ URL ตรงให้ไม่ได้
                บอกรูปแบบแทน แล้วแยกสีส่วนที่ผู้ใช้ต้องแทนด้วยชื่อของตัวเอง */}
            <p className="text-sm font-medium text-muted">ที่อยู่ของสำนักงานคุณ</p>
            <p className="mt-2 break-words rounded-lg border border-line bg-surface px-4 py-3 text-[15px] font-semibold leading-relaxed">
              <span className="text-accent-ink">{auditflow.access.slugLabel}</span>
              <span>.{auditflow.access.baseDomain}</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              ที่อยู่เต็มอยู่ในอีเมลที่เราส่งให้ตอนเปิดสิทธิ จำไม่ได้{" "}
              <Link href="/contact" className="font-medium text-accent-ink hover:underline">
                แจ้งเราได้
              </Link>{" "}
              เราส่งซ้ำให้
            </p>
          </AppCard>

          <AppCard
            name={practiflow.name}
            category={practiflow.category}
            note="สำหรับบริหารสำนักงาน: งาน, deadline, ลูกค้า, ใบแจ้งหนี้"
          >
            <CTAButton href={practiflow.access.url}>
              เข้าสู่ระบบ {practiflow.name} →
            </CTAButton>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              ทุกสำนักงานเข้าที่อยู่เดียวกัน{" "}
              <span className="font-medium text-foreground">
                {practiflow.access.url.replace("https://", "")}
              </span>
            </p>
          </AppCard>
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
