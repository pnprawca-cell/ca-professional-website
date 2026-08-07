import type { Metadata } from "next";
import { PageHero, Section, Card, CheckItem } from "@/components/ui";
import PractiFlowPeek from "@/components/PractiFlowPeek";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import {
  DeadlineArt,
  ClientRecordArt,
  CostArt,
  InvoiceArt,
  TeamArt,
  ReportArt,
} from "@/components/PractiFlowFeatureArt";
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
        description="deadline ของลูกค้าทุกราย ทั้ง ภ.ง.ด., ภ.พ.30, ประกันสังคม และปิดงบ อยู่ในระบบเดียวที่ทั้งทีมเห็นตรงกัน"
      >
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <ul className="space-y-4">
            <CheckItem>
              งานใกล้ครบกำหนดและงานที่รอเอกสารจากลูกค้า ถูกยกขึ้นมาให้เห็นก่อน
            </CheckItem>
            <CheckItem>
              ลูกค้าโทรมาถามว่างานถึงไหน ตอบได้ทันที ไม่ต้องขอเวลาไปถามทีมก่อน
            </CheckItem>
            <CheckItem>
              ประวัติการติดต่อและเงื่อนไขของลูกค้าอยู่ในระบบกลาง
            </CheckItem>
          </ul>
          <PractiFlowPeek />
        </div>
      </Section>

      <Section title="ฟีเจอร์หลัก" tint>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="งานและ Deadline" media={<DeadlineArt />}>
            เห็นงานทุกลูกค้าในหน้าเดียว ทั้งปิดงบ ภ.ง.ด. ภ.พ.30 และประกันสังคม ไม่มีงานหลุดอีกต่อไป
          </Card>
          <Card title="ฐานข้อมูลลูกค้า" media={<ClientRecordArt />}>
            ข้อมูลนิติบุคคล เอกสารสำคัญ รหัสยื่นภาษี และประวัติการติดต่อ รวมอยู่ที่เดียว
          </Card>
          <Card title="เวลาและต้นทุนงาน" media={<CostArt />}>
            บันทึกเวลาทำงานต่อลูกค้า เห็นว่างานไหนกำไร งานไหนขาดทุน ตั้งราคาปีหน้าได้แม่นขึ้น
          </Card>
          <Card title="ใบแจ้งหนี้และเก็บเงิน" media={<InvoiceArt />}>
            ออกใบแจ้งหนี้ตามรอบงาน ติดตามค้างชำระ พร้อมสรุปรายได้ของสำนักงานรายเดือน
          </Card>
          <Card title="มอบหมายงานในทีม" media={<TeamArt />}>
            กระจายงานให้พนักงานแต่ละคน เห็น workload ทั้งทีม พร้อมสถานะความคืบหน้าแต่ละงาน
          </Card>
          <Card title="รายงานผู้บริหาร" media={<ReportArt />}>
            Dashboard สรุปงานค้าง รายได้ ลูกค้าใหม่-เก่า สำหรับเจ้าของสำนักงานโดยเฉพาะ
          </Card>
        </div>
      </Section>

      <Section title="ใช้งานผ่านเว็บ ไม่ต้องติดตั้ง">
        <ul className="grid gap-4 md:grid-cols-2">
          <CheckItem>ทีมเห็นสถานะงานตรงกันแบบ real-time ทุกคนอัปเดตที่เดียว</CheckItem>
          <CheckItem>เข้าจากมือถือได้ เช็คงานนอกออฟฟิศได้</CheckItem>
          <CheckItem>สำรองข้อมูลอัตโนมัติ อัปเดตฟีเจอร์ใหม่ให้ทันทีโดยไม่ต้องลงโปรแกรม</CheckItem>
          <CheckItem>คิดราคาตามจำนวนลูกค้าที่ดูแล เพิ่มพนักงานกี่คนก็ไม่มีค่าใช้จ่ายเพิ่ม</CheckItem>
        </ul>
      </Section>

      <Section
        title={`ลงชื่อใช้ ${p.name} ก่อนใคร`}
        description="เราใช้ระบบนี้บริหารงานสำนักงานของเราเอง และกำลังเปิดให้สำนักงานภายนอกใช้เป็นรุ่นแรก ลงชื่อไว้ก่อนได้นัด demo 30 นาที เราจะตั้งค่าตัวอย่างจากงานจริงของสำนักงานคุณให้ดูเลย"
        tint
      >
        <EarlyAccessForm productName={p.name} cloudOnly />
      </Section>
    </>
  );
}
