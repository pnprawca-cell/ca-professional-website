import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { company } from "@/content/site";
import { veyra } from "@/content/veyra";
import { BilingualDoc, DocLink, type DocSection } from "../_components/BilingualDoc";

export const metadata: Metadata = {
  title: "Veyra Terms of Service",
  description: `Terms of Service for ${veyra.name}, operated by ${company.nameEn}.`,
  alternates: { canonical: "/veyra/terms" },
};

const mail = <DocLink href={`mailto:${veyra.contactEmail}`}>{veyra.contactEmail}</DocLink>;
const privacyEn = <DocLink href="/veyra/privacy">Privacy Policy</DocLink>;
const privacyTh = <DocLink href="/veyra/privacy">นโยบายความเป็นส่วนตัว</DocLink>;

const en: DocSection[] = [
  {
    title: "1. Agreement",
    body: [
      <>
        These Terms govern your use of {veyra.name}, a personal assistant app provided by{" "}
        {company.nameEn} (&quot;we&quot;, &quot;us&quot;). By using {veyra.name}, you agree to these
        Terms and to our {privacyEn}. If you do not agree, please do not use the app.
      </>,
    ],
  },
  {
    title: "2. The service",
    body: [
      `${veyra.name} helps you manage tasks, calendar events, finances and bills, notes, and offers an AI assistant. You may connect your Google account so ${veyra.name} can import and show your Google Calendar events (read-only). We may add, change, or remove features over time.`,
    ],
  },
  {
    title: "3. Your account and content",
    body: [
      "You are responsible for your device, your accounts, and the information you enter. You keep ownership of your content. You give us permission to process it only as needed to provide the app, as described in the Privacy Policy.",
    ],
  },
  {
    title: "4. Acceptable use",
    body: [
      "Do not use the app for anything unlawful, do not try to access other people's data, and do not interfere with or attempt to reverse-engineer the service or its security.",
    ],
  },
  {
    title: "5. AI assistant and financial features",
    body: [
      "AI responses are generated automatically and may be inaccurate or incomplete. Please check important information yourself. The finance and bill features and AI responses are for personal organisation only and are not financial, tax, legal, or investment advice.",
    ],
  },
  {
    title: "6. Third-party services",
    body: [
      "Google Calendar and other third-party services are governed by their own terms. You can disconnect them at any time, as described in the Privacy Policy.",
    ],
  },
  {
    title: "7. Disclaimer and limitation of liability",
    body: [
      `${veyra.name} is provided "as is" and "as available". To the extent permitted by law, we are not liable for indirect or consequential losses, or for loss of data, arising from your use of the app.`,
    ],
  },
  {
    title: "8. Ending use",
    body: [
      "You may stop using the app at any time and ask us to delete your data. We may suspend access if these Terms are breached.",
    ],
  },
  {
    title: "9. Changes and governing law",
    body: [
      "We may update these Terms. We will post the new version on this page with a new effective date. These Terms are governed by the laws of Thailand.",
    ],
  },
  {
    title: "10. Contact",
    body: [
      <>
        {company.nameEn} · {mail}
      </>,
      <>Effective date: {veyra.effectiveDate.en}</>,
    ],
  },
];

const th: DocSection[] = [
  {
    title: "1. ข้อตกลง",
    body: [
      <>
        ข้อกำหนดนี้ใช้กับการใช้งาน {veyra.name} แอปผู้ช่วยส่วนตัวที่ให้บริการโดย {company.nameTh} (&quot;เรา&quot;)
        เมื่อคุณใช้ {veyra.name} ถือว่าคุณยอมรับข้อกำหนดนี้และ{privacyTh}ของเรา
        หากไม่ยอมรับ โปรดอย่าใช้แอป
      </>,
    ],
  },
  {
    title: "2. บริการ",
    body: [
      `${veyra.name} ช่วยจัดการงาน นัดหมาย การเงินและบิล โน้ต และมีผู้ช่วย AI คุณเลือกเชื่อมบัญชี Google เพื่อให้แอปนำเข้าและแสดงนัดหมายจาก Google Calendar ได้ (อ่านอย่างเดียว) เราอาจเพิ่ม เปลี่ยน หรือยกเลิกฟีเจอร์ได้ตามเวลา`,
    ],
  },
  {
    title: "3. บัญชีและเนื้อหาของคุณ",
    body: [
      "คุณรับผิดชอบอุปกรณ์ บัญชี และข้อมูลที่คุณกรอกเอง เนื้อหาเป็นของคุณ คุณอนุญาตให้เราประมวลผลเท่าที่จำเป็นต่อการให้บริการตามที่ระบุในนโยบายความเป็นส่วนตัวเท่านั้น",
    ],
  },
  {
    title: "4. การใช้งานที่ยอมรับได้",
    body: [
      "ห้ามใช้แอปเพื่อการที่ผิดกฎหมาย ห้ามพยายามเข้าถึงข้อมูลของผู้อื่น และห้ามรบกวนหรือพยายามแกะระบบหรือระบบความปลอดภัยของบริการ",
    ],
  },
  {
    title: "5. ผู้ช่วย AI และฟีเจอร์การเงิน",
    body: [
      "คำตอบจาก AI สร้างขึ้นอัตโนมัติ อาจไม่ถูกต้องหรือไม่ครบถ้วน โปรดตรวจสอบข้อมูลสำคัญด้วยตัวเอง ฟีเจอร์การเงิน บิล และคำตอบจาก AI มีไว้ช่วยจัดระเบียบเรื่องส่วนตัวเท่านั้น ไม่ใช่คำแนะนำด้านการเงิน ภาษี กฎหมาย หรือการลงทุน",
    ],
  },
  {
    title: "6. บริการของบุคคลภายนอก",
    body: [
      "Google Calendar และบริการภายนอกอื่นอยู่ภายใต้ข้อกำหนดของผู้ให้บริการนั้น คุณยกเลิกการเชื่อมต่อได้ทุกเมื่อตามที่ระบุในนโยบายความเป็นส่วนตัว",
    ],
  },
  {
    title: "7. การปฏิเสธความรับผิด",
    body: [
      `${veyra.name} ให้บริการตามสภาพที่เป็นอยู่ ("as is") ภายในขอบเขตที่กฎหมายอนุญาต เราไม่รับผิดต่อความเสียหายทางอ้อม ความเสียหายต่อเนื่อง หรือการสูญหายของข้อมูลที่เกิดจากการใช้แอป`,
    ],
  },
  {
    title: "8. การเลิกใช้งาน",
    body: [
      "คุณเลิกใช้แอปและขอให้ลบข้อมูลได้ทุกเมื่อ เราอาจระงับการเข้าถึงหากมีการฝ่าฝืนข้อกำหนดนี้",
    ],
  },
  {
    title: "9. การแก้ไขข้อกำหนดและกฎหมายที่ใช้บังคับ",
    body: [
      "เราอาจแก้ไขข้อกำหนดนี้ โดยจะประกาศฉบับใหม่ในหน้านี้พร้อมวันที่มีผลบังคับใช้ใหม่ ข้อกำหนดนี้อยู่ภายใต้กฎหมายไทย",
    ],
  },
  {
    title: "10. ติดต่อเรา",
    body: [
      <>
        {company.nameTh} · {mail}
      </>,
      <>วันที่มีผลบังคับใช้: {veyra.effectiveDate.th}</>,
    ],
  },
];

export default function VeyraTermsPage() {
  return (
    <>
      <PageHero
        eyebrow={veyra.name}
        title={
          <>
            <span lang="en">Terms of Service</span>
            <span className="mt-2 block text-2xl font-medium text-muted md:text-3xl">ข้อกำหนดการใช้งาน</span>
          </>
        }
        description={`Effective date ${veyra.effectiveDate.en} · มีผลบังคับใช้ ${veyra.effectiveDate.th}`}
      />
      <Section>
        <BilingualDoc en={en} th={th} />
      </Section>
    </>
  );
}
