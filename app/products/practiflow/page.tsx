import type { Metadata } from "next";
import { PageHero, Section, Card, CheckItem } from "@/components/ui";
import PractiFlowPeek from "@/components/PractiFlowPeek";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import { products } from "@/content/site";

const p = products.practiflow;

export const metadata: Metadata = {
  title: `${p.name} — ${p.category}`,
  description: p.tagline,
};

export default function PractiFlowPage() {
  return (
    <>
      <PageHero eyebrow={p.category} title={p.tagline} description={p.description} />

      <Section
        title="เห็นงานทั้งสำนักงาน ก่อนถึงกำหนด"
        description="ภ.ง.ด., ภ.พ.30, ประกันสังคม, ปิดงบ — deadline ของลูกค้าทุกรายอยู่ในระบบเดียวที่ทั้งทีมเห็นตรงกัน ไม่ได้อยู่ในความจำของใครคนใดคนหนึ่ง"
      >
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <ul className="space-y-4">
            <CheckItem>
              งานใกล้ครบกำหนดและงานที่รอเอกสารจากลูกค้า ถูกยกขึ้นมาให้เห็นก่อน — ไม่มีงานหลุดเพราะ &ldquo;ลืม&rdquo;
            </CheckItem>
            <CheckItem>
              ลูกค้าโทรมาถามว่างานถึงไหน ตอบได้ทันที ไม่ต้องขอเวลาไปถามทีมก่อน
            </CheckItem>
            <CheckItem>
              ประวัติการติดต่อและเงื่อนไขของลูกค้าอยู่ในระบบกลาง — พนักงานลาออก ความรู้ไม่หายตามไปด้วย
            </CheckItem>
          </ul>
          <PractiFlowPeek />
        </div>
      </Section>

      <Section title="ฟีเจอร์หลัก" tint>
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="งานและ Deadline">
            เห็นงานทุกลูกค้าในหน้าเดียว — ปิดงบ, ภ.ง.ด., ภ.พ.30, ประกันสังคม ไม่มีงานหลุดอีกต่อไป
          </Card>
          <Card title="ฐานข้อมูลลูกค้า">
            ข้อมูลนิติบุคคล เอกสารสำคัญ รหัสยื่นภาษี และประวัติการติดต่อ รวมอยู่ที่เดียว
          </Card>
          <Card title="เวลาและต้นทุนงาน">
            บันทึกเวลาทำงานต่อลูกค้า เห็นว่างานไหนกำไร งานไหนขาดทุน ตั้งราคาปีหน้าได้แม่นขึ้น
          </Card>
          <Card title="ใบแจ้งหนี้และเก็บเงิน">
            ออกใบแจ้งหนี้ตามรอบงาน ติดตามค้างชำระ พร้อมสรุปรายได้ของสำนักงานรายเดือน
          </Card>
          <Card title="มอบหมายงานในทีม">
            กระจายงานให้พนักงานแต่ละคน เห็น workload ทั้งทีม พร้อมสถานะความคืบหน้าแต่ละงาน
          </Card>
          <Card title="รายงานผู้บริหาร">
            Dashboard สรุปงานค้าง รายได้ ลูกค้าใหม่-เก่า สำหรับเจ้าของสำนักงานโดยเฉพาะ
          </Card>
        </div>
      </Section>

      <Section
        title="เลือกได้: Online หรือ Offline"
        description="เหมือน AuditFlow — เราเคารพนโยบายข้อมูลของแต่ละสำนักงาน"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-card p-7">
            <h3 className="text-lg font-semibold">☁️ Cloud (Online)</h3>
            <ul className="mt-4 space-y-3">
              <CheckItem>ทีมเห็นสถานะงานตรงกันแบบ real-time</CheckItem>
              <CheckItem>เข้าจากมือถือได้ เช็คงานนอกออฟฟิศได้</CheckItem>
              <CheckItem>คิดราคาแบบ subscription ต่อผู้ใช้ต่อปี</CheckItem>
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-card p-7">
            <h3 className="text-lg font-semibold">💻 Desktop (Offline)</h3>
            <ul className="mt-4 space-y-3">
              <CheckItem>ข้อมูลลูกค้าอยู่ในเครื่องของสำนักงานทั้งหมด</CheckItem>
              <CheckItem>ใช้ในวง LAN ของออฟฟิศได้โดยไม่ต้องออกอินเทอร์เน็ต</CheckItem>
              <CheckItem>ซื้อ license ครั้งเดียว พร้อมอัปเดตรายปี</CheckItem>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title={`ลงชื่อใช้ ${p.name} ก่อนใคร`}
        description="เราใช้ระบบนี้บริหารงานสำนักงานของเราเอง และกำลังเปิดให้สำนักงานภายนอกใช้เป็นรุ่นแรก — ลงชื่อไว้ก่อนได้นัด demo 30 นาที เราจะตั้งค่าตัวอย่างจากงานจริงของสำนักงานคุณให้ดูเลย"
        tint
      >
        <EarlyAccessForm productName={p.name} />
      </Section>
    </>
  );
}
