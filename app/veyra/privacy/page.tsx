import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { company } from "@/content/site";
import { veyra } from "@/content/veyra";
import { BilingualDoc, DocLink, type DocSection } from "../_components/BilingualDoc";

export const metadata: Metadata = {
  title: "Veyra Privacy Policy",
  description: `How ${veyra.name} collects, uses, and protects your data, including data received from Google APIs.`,
  alternates: { canonical: "/veyra/privacy" },
};

const mail = <DocLink href={`mailto:${veyra.contactEmail}`}>{veyra.contactEmail}</DocLink>;
const policyLink = (
  <DocLink href={veyra.googleUserDataPolicyUrl}>Google API Services User Data Policy</DocLink>
);
const permissionsLink = <DocLink href={veyra.googlePermissionsUrl}>{veyra.googlePermissionsUrl}</DocLink>;

const scopeList = (
  <ul className="list-disc space-y-1.5 pl-5">
    {veyra.googleScopes.map((scope) => (
      <li key={scope}>
        <code className="break-all rounded bg-surface px-1.5 py-0.5 text-[14px] text-foreground">{scope}</code>
      </li>
    ))}
  </ul>
);

/*
 * เนื้อหาต้องตรงกับการทำงานจริงของแอป (ดู content/veyra.ts):
 * - scope: openid, email, calendar.readonly — อ่านอย่างเดียว
 * - ฝั่ง server (Supabase) เก็บแค่ Google account ID, อีเมล, refresh token ที่เข้ารหัส AES-GCM
 * - ข้อมูลนัดหมายเก็บในเครื่องผู้ใช้
 * - AI ส่งข้อมูลไป Anthropic เฉพาะตอนผู้ใช้ใช้ฟีเจอร์ AI
 */
const en: DocSection[] = [
  {
    title: "1. Who we are",
    body: [
      `${veyra.name} is a personal assistant app for tasks, calendar, finances and bills, notes, and an AI assistant. ${veyra.name} is developed and operated by ${company.nameEn} ("we", "us"), a company registered in Thailand (registration number ${company.registrationNumber}). We are the data controller for the personal data described in this policy.`,
      <>Contact: {mail}</>,
    ],
  },
  {
    title: "2. Google data we request",
    body: [
      <>
        When you choose to connect your Google account, {veyra.name} asks Google for the following
        permissions (scopes):
      </>,
      scopeList,
      <>
        <strong className="font-semibold text-foreground">openid</strong> and{" "}
        <strong className="font-semibold text-foreground">email</strong> identify your Google account
        and its email address.{" "}
        <strong className="font-semibold text-foreground">calendar.readonly</strong> lets {veyra.name}{" "}
        read your Google Calendar events so it can import and show them inside the app.
      </>,
      `Access is read-only. ${veyra.name} never creates, edits, or deletes events in your Google Calendar.`,
    ],
  },
  {
    title: "3. What we store and where",
    body: [
      <>
        <strong className="font-semibold text-foreground">On our server (hosted on Supabase):</strong>{" "}
        only your Google account ID, your email address, and a Google refresh token. The refresh token
        is encrypted with AES-GCM before it is stored. No user role can read the token — only our
        backend functions can decrypt it, and only to fetch your calendar events for you.
      </>,
      <>
        <strong className="font-semibold text-foreground">On your device:</strong> your calendar events
        are fetched from Google, displayed in the app, and stored on your device (on-device storage).
      </>,
      "All data travels over encrypted connections (HTTPS).",
    ],
  },
  {
    title: "4. How we use your data",
    body: [
      `We use your data only to provide ${veyra.name}'s features to you: signing you in, showing your Google Calendar events alongside your tasks, bills, and notes, and answering your requests to the AI assistant.`,
    ],
  },
  {
    title: "5. AI assistant (Anthropic Claude API)",
    body: [
      `When — and only when — you use the AI assistant, the information needed to answer your request (which may include your tasks, notes, bills, and calendar events) is sent to Anthropic's Claude API to generate the response. Anthropic processes this data as our service provider, only to produce that response.`,
      `If you do not use the AI assistant, none of your data is sent to Anthropic.`,
    ],
  },
  {
    title: "6. What we never do",
    body: [
      <ul key="never" className="list-disc space-y-1.5 pl-5">
        <li>We do not sell your data.</li>
        <li>We do not share your data with third parties, except the service providers named in this policy (Supabase and Anthropic) to run the app.</li>
        <li>We do not use your data for advertising.</li>
        <li>We do not use your data, including Google user data, to train or improve AI or machine-learning models.</li>
        <li>We do not allow humans to read your Google data, unless you ask us to (for example, for support), it is needed for security, or the law requires it.</li>
      </ul>,
    ],
  },
  {
    title: "7. Google API Services User Data Policy",
    body: [
      <>
        {veyra.name}&apos;s use and transfer of information received from Google APIs will adhere to
        the {policyLink}, including the Limited Use requirements.
      </>,
    ],
  },
  {
    title: "8. Disconnecting and deleting your data",
    body: [
      <ul key="delete" className="list-disc space-y-1.5 pl-5">
        <li>
          <strong className="font-semibold text-foreground">In the app:</strong> disconnect Google
          Calendar at any time. {veyra.name} then stops accessing your calendar.
        </li>
        <li>
          <strong className="font-semibold text-foreground">In your Google account:</strong> revoke{" "}
          {veyra.name}&apos;s access at {permissionsLink}.
        </li>
        <li>
          <strong className="font-semibold text-foreground">Delete your data:</strong> email {mail}{" "}
          and we will delete the data stored on our server (Google account ID, email, and token)
          within 30 days. Calendar data stored on your device is removed when you disconnect or
          uninstall the app.
        </li>
      </ul>,
    ],
  },
  {
    title: "9. Your rights under Thailand's PDPA",
    body: [
      `Under Thailand's Personal Data Protection Act B.E. 2562 (2019) (PDPA), you have the right to access, correct, delete, and receive a copy of your personal data, to object to or restrict its use, to withdraw consent at any time, and to complain to the Personal Data Protection Committee. To use any of these rights, email us — we respond within 30 days.`,
    ],
  },
  {
    title: "10. Changes to this policy",
    body: [
      "If we change this policy, we will update this page and the effective date below. If the change affects how we use Google data, we will ask for your consent again where required.",
    ],
  },
  {
    title: "11. Contact",
    body: [
      <>
        {company.nameEn} · {company.address} · {mail}
      </>,
      <>Effective date: {veyra.effectiveDate.en}</>,
    ],
  },
];

const th: DocSection[] = [
  {
    title: "1. เราคือใคร",
    body: [
      `${veyra.name} คือแอปผู้ช่วยส่วนตัวสำหรับจัดการงาน (tasks) ปฏิทิน การเงินและบิล โน้ต และผู้ช่วย AI พัฒนาและให้บริการโดย ${company.nameTh} (${company.nameEn}) บริษัทจดทะเบียนในประเทศไทย เลขทะเบียนนิติบุคคล ${company.registrationNumber} ("เรา") ซึ่งเป็นผู้ควบคุมข้อมูลส่วนบุคคลตามนโยบายนี้`,
      <>ติดต่อ: {mail}</>,
    ],
  },
  {
    title: "2. ข้อมูลจาก Google ที่เราขอ",
    body: [
      <>เมื่อคุณเลือกเชื่อมบัญชี Google แอป {veyra.name} จะขอสิทธิ์ (scope) จาก Google ดังนี้</>,
      scopeList,
      <>
        <strong className="font-semibold text-foreground">openid</strong> และ{" "}
        <strong className="font-semibold text-foreground">email</strong> ใช้ระบุบัญชี Google
        และอีเมลของคุณ ส่วน <strong className="font-semibold text-foreground">calendar.readonly</strong>{" "}
        ใช้อ่านนัดหมายใน Google Calendar เพื่อนำเข้าและแสดงในแอป
      </>,
      `เป็นสิทธิ์แบบอ่านอย่างเดียว ${veyra.name} ไม่สร้าง ไม่แก้ไข และไม่ลบนัดหมายใน Google Calendar ของคุณ`,
    ],
  },
  {
    title: "3. เราเก็บข้อมูลอะไร และเก็บที่ไหน",
    body: [
      <>
        <strong className="font-semibold text-foreground">บนเซิร์ฟเวอร์ของเรา (ให้บริการโดย Supabase):</strong>{" "}
        เก็บเพียง Google account ID อีเมล และ refresh token ของ Google เท่านั้น โดย refresh token
        ถูกเข้ารหัสด้วย AES-GCM ก่อนจัดเก็บ ไม่มีผู้ใช้บทบาทใดอ่าน token ได้ — มีแต่ฟังก์ชันฝั่ง backend
        ของระบบที่ถอดรหัสได้ และใช้เพื่อดึงนัดหมายมาให้คุณเท่านั้น
      </>,
      <>
        <strong className="font-semibold text-foreground">บนเครื่องของคุณ:</strong> นัดหมายที่ดึงมาจาก
        Google จะแสดงในแอปและจัดเก็บไว้ในเครื่องของคุณ (on-device)
      </>,
      "ข้อมูลทั้งหมดรับส่งผ่านการเชื่อมต่อที่เข้ารหัส (HTTPS)",
    ],
  },
  {
    title: "4. เราใช้ข้อมูลของคุณอย่างไร",
    body: [
      `เราใช้ข้อมูลเพื่อให้บริการฟีเจอร์ของ ${veyra.name} แก่คุณเท่านั้น ได้แก่ การเข้าสู่ระบบ การแสดงนัดหมายจาก Google Calendar คู่กับงาน บิล และโน้ตของคุณ และการตอบคำขอที่คุณพิมพ์ถามผู้ช่วย AI`,
    ],
  },
  {
    title: "5. ผู้ช่วย AI (Anthropic Claude API)",
    body: [
      `เฉพาะตอนที่คุณใช้ผู้ช่วย AI เท่านั้น ข้อมูลที่จำเป็นต่อการตอบคำขอของคุณ (ซึ่งอาจรวมถึงงาน โน้ต บิล และนัดหมาย) จะถูกส่งไปประมวลผลกับ Claude API ของ Anthropic เพื่อสร้างคำตอบ โดย Anthropic ทำหน้าที่เป็นผู้ให้บริการของเรา และประมวลผลเพื่อสร้างคำตอบนั้นเท่านั้น`,
      "ถ้าคุณไม่ใช้ผู้ช่วย AI จะไม่มีข้อมูลของคุณถูกส่งไปที่ Anthropic เลย",
    ],
  },
  {
    title: "6. สิ่งที่เราไม่ทำ",
    body: [
      <ul key="never" className="list-disc space-y-1.5 pl-5">
        <li>ไม่ขายข้อมูลของคุณ</li>
        <li>ไม่แชร์ข้อมูลให้บุคคลภายนอก ยกเว้นผู้ให้บริการที่ระบุในนโยบายนี้ (Supabase และ Anthropic) เพื่อให้แอปทำงานได้</li>
        <li>ไม่ใช้ข้อมูลเพื่อการโฆษณา</li>
        <li>ไม่ใช้ข้อมูลของคุณ รวมถึงข้อมูลจาก Google เพื่อฝึก (train) หรือพัฒนาโมเดล AI หรือ machine learning</li>
        <li>ไม่ให้คนอ่านข้อมูลจาก Google ของคุณ เว้นแต่คุณขอให้เราช่วย (เช่น แก้ปัญหาการใช้งาน) จำเป็นเพื่อความปลอดภัย หรือกฎหมายกำหนด</li>
      </ul>,
    ],
  },
  {
    title: "7. นโยบายข้อมูลผู้ใช้ของ Google API",
    body: [
      <>
        การใช้และการส่งต่อข้อมูลที่ {veyra.name} ได้รับจาก Google APIs จะเป็นไปตาม {policyLink}{" "}
        รวมถึงข้อกำหนด Limited Use
      </>,
      <span lang="en">
        {veyra.name}&apos;s use and transfer of information received from Google APIs will adhere to
        the {policyLink}, including the Limited Use requirements.
      </span>,
    ],
  },
  {
    title: "8. การยกเลิกการเชื่อมต่อและการลบข้อมูล",
    body: [
      <ul key="delete" className="list-disc space-y-1.5 pl-5">
        <li>
          <strong className="font-semibold text-foreground">ในแอป:</strong> ยกเลิกการเชื่อม Google
          Calendar ได้ทุกเมื่อ แล้ว {veyra.name} จะหยุดเข้าถึงปฏิทินของคุณ
        </li>
        <li>
          <strong className="font-semibold text-foreground">ในบัญชี Google:</strong> เพิกถอนสิทธิ์ของ{" "}
          {veyra.name} ได้ที่ {permissionsLink}
        </li>
        <li>
          <strong className="font-semibold text-foreground">ขอลบข้อมูล:</strong> อีเมลมาที่ {mail}{" "}
          เราจะลบข้อมูลที่เก็บบนเซิร์ฟเวอร์ (Google account ID อีเมล และ token) ภายใน 30 วัน
          ส่วนนัดหมายที่เก็บในเครื่องจะถูกลบเมื่อคุณยกเลิกการเชื่อมต่อหรือถอนการติดตั้งแอป
        </li>
      </ul>,
    ],
  },
  {
    title: "9. สิทธิของคุณตาม PDPA",
    body: [
      "ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) คุณมีสิทธิขอเข้าถึงและขอสำเนาข้อมูล ขอแก้ไข ขอลบ คัดค้านหรือขอระงับการใช้ข้อมูล ถอนความยินยอมได้ทุกเมื่อ และร้องเรียนต่อคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล ต้องการใช้สิทธิใด ส่งอีเมลถึงเรา — เราจะดำเนินการภายใน 30 วัน",
    ],
  },
  {
    title: "10. การเปลี่ยนแปลงนโยบาย",
    body: [
      "ถ้าเราแก้ไขนโยบายนี้ เราจะปรับหน้านี้และวันที่มีผลบังคับใช้ด้านล่าง หากการแก้ไขกระทบวิธีใช้ข้อมูลจาก Google เราจะขอความยินยอมจากคุณใหม่ในกรณีที่จำเป็น",
    ],
  },
  {
    title: "11. ติดต่อเรา",
    body: [
      <>
        {company.nameTh} · {company.address} · {mail}
      </>,
      <>วันที่มีผลบังคับใช้: {veyra.effectiveDate.th}</>,
    ],
  },
];

export default function VeyraPrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow={veyra.name}
        title={
          <>
            <span lang="en">Privacy Policy</span>
            <span className="mt-2 block text-2xl font-medium text-muted md:text-3xl">นโยบายความเป็นส่วนตัว</span>
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
