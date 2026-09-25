import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { company } from "@/content/site";
import { veyra } from "@/content/veyra";
import styles from "./veyra.module.css";

/*
 * App homepage ของ Veyra สำหรับ OAuth consent screen ของ Google
 * อยู่ในเมนูหลัก (content/site.ts → nav) ต่อจาก PractiFlow
 *
 * หน้านี้ใช้สีของแอป Veyra (indigo/violet จาก src/theme/tokens.ts ของแอป) เป็น art direction เฉพาะหน้า
 * ส่วน header/footer/ฟอนต์ยังเป็นของเว็บบริษัท
 * รูปหน้าจอใน public/veyra/ แคปจากแอปจริง (web build) ด้วยข้อมูลตัวอย่างของแอปเอง ไม่ใช่ข้อมูลผู้ใช้
 */
export const metadata: Metadata = {
  title: "Veyra — Your life, handled.",
  description: `${veyra.name} is a personal assistant app for tasks, calendar, money and bills, notes, and AI — by ${company.nameEn}.`,
  alternates: { canonical: "/veyra" },
};

const screens = {
  home: { src: "/veyra/screen-home.webp", alt: "Veyra Today screen: 6 events, 3 tasks and 2 bills due, with the day's schedule and a 'Tell Veyra anything' box" },
  calendar: { src: "/veyra/screen-calendar.webp", alt: "Veyra calendar day view with tasks at the top and events such as Team meeting and Client call laid out by hour" },
  tasks: { src: "/veyra/screen-tasks.webp", alt: "Veyra Tasks screen showing 1 of 4 done today, an overdue task and today's tasks with priorities" },
  money: { src: "/veyra/screen-money.webp", alt: "Veyra Money overview with total balance, income and expense for September, and upcoming bills due today" },
  assistant: { src: "/veyra/screen-assistant.webp", alt: "Veyra AI chat screen, powered by Claude, with suggestions like Plan my day and Find overdue tasks" },
};

function Phone({
  screen,
  priority = false,
  className = "",
  style,
  sizes = "(min-width: 768px) 300px, 60vw",
}: {
  screen: { src: string; alt: string };
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
  sizes?: string;
}) {
  return (
    <div
      className={`rounded-[2.4rem] bg-[#0e0c24] p-[7px] shadow-[0_40px_80px_-24px_rgba(20,18,51,0.55),0_0_0_1px_rgba(255,255,255,0.08)] ${className}`}
      style={style}
    >
      <Image
        src={screen.src}
        alt={screen.alt}
        width={780}
        height={1688}
        priority={priority}
        sizes={sizes}
        className="h-auto w-full rounded-[2rem]"
      />
    </div>
  );
}

function Pair({ en, th, className = "" }: { en: ReactNode; th: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <p lang="en">{en}</p>
      <p lang="th" className="mt-1.5 opacity-80">
        {th}
      </p>
    </div>
  );
}

const tour = [
  {
    key: "home",
    label: "Today",
    title: "Your whole day on one screen.",
    titleTh: "เห็นทั้งวันในหน้าจอเดียว",
    body: "Veyra greets you with what matters today — events, tasks, and bills due — so you know where you stand before your first coffee.",
    bodyTh: "เปิดแอปมาก็เห็นทันทีว่าวันนี้มีนัดกี่อย่าง งานกี่ชิ้น บิลไหนครบกำหนด ไม่ต้องสลับไปหลายแอป",
    points: [
      ["Tell Veyra anything — type, speak, or snap a photo", "พิมพ์ พูด หรือถ่ายรูปบอก Veyra ได้เลย"],
      ["What needs attention rises to the top", "เรื่องที่ต้องรีบจัดการขึ้นมาให้ก่อน"],
    ],
    screen: screens.home,
  },
  {
    key: "calendar",
    label: "Calendar",
    title: "Your Google Calendar, right next to your tasks.",
    titleTh: "นัดจาก Google Calendar อยู่คู่กับงานของคุณ",
    body: "Connect Google Calendar and Veyra imports your events to show them by day, week, or month — alongside your to-dos. Read-only: Veyra never creates, edits, or deletes anything in Google Calendar.",
    bodyTh: "เชื่อม Google Calendar แล้ว Veyra จะนำเข้านัดหมายมาแสดงแบบวัน สัปดาห์ หรือเดือน คู่กับงานที่ต้องทำ เป็นแบบอ่านอย่างเดียว — Veyra ไม่สร้าง ไม่แก้ และไม่ลบอะไรใน Google Calendar",
    points: [
      ["Day, week, and month views", "มุมมองรายวัน รายสัปดาห์ รายเดือน"],
      ["Disconnect any time", "ยกเลิกการเชื่อมได้ทุกเมื่อ"],
    ],
    badge: "Read-only · อ่านอย่างเดียว",
    screen: screens.calendar,
  },
  {
    key: "tasks",
    label: "Tasks",
    title: "Nothing slips through.",
    titleTh: "ไม่มีงานไหนหลุดมือ",
    body: "Overdue, today, upcoming — Veyra sorts your tasks for you, with priorities, subtasks, and reminders when things are due.",
    bodyTh: "งานเลยกำหนด งานวันนี้ งานที่กำลังจะมา Veyra จัดให้เป็นหมวด พร้อมระดับความสำคัญ งานย่อย และเตือนเมื่อถึงกำหนด",
    points: [
      ["See progress for the day at a glance", "เห็นความคืบหน้าของวันในแวบเดียว"],
      ["Group work by area — clients, tax, personal", "แยกงานตามหมวด เช่น ลูกค้า ภาษี เรื่องส่วนตัว"],
    ],
    screen: screens.tasks,
  },
  {
    key: "money",
    label: "Money & bills",
    title: "Know where your money is going.",
    titleTh: "รู้ว่าเงินไปไหน ไม่พลาดบิล",
    body: "Track income and spending, set budgets, and see every bill before it's due — in baht, pounds, or both.",
    bodyTh: "จดรายรับรายจ่าย ตั้งงบประมาณ และเห็นบิลทุกใบก่อนครบกำหนด ใช้ได้ทั้งเงินบาทและปอนด์",
    points: [
      ["Mark a bill paid in one tap", "กดจ่ายบิลแล้วได้ในแตะเดียว"],
      ["Monthly overview of income vs. expense", "สรุปรายรับเทียบรายจ่ายทุกเดือน"],
    ],
    screen: screens.money,
  },
];

const trust = [
  {
    title: "Read-only calendar access",
    titleTh: "เข้าถึงปฏิทินแบบอ่านอย่างเดียว",
    body: "Veyra only reads your Google Calendar events to show them in the app.",
    bodyTh: "Veyra แค่อ่านนัดหมายมาแสดงในแอป ไม่แก้ไขอะไรใน Google",
  },
  {
    title: "Encrypted, locked-down token",
    titleTh: "Token เข้ารหัสและปิดตาย",
    body: "Your Google token is encrypted with AES-GCM. Only our backend can use it.",
    bodyTh: "Token ของ Google เข้ารหัสด้วย AES-GCM มีแต่ระบบหลังบ้านที่ใช้ได้",
  },
  {
    title: "Your events stay on your device",
    titleTh: "นัดหมายเก็บในเครื่องของคุณ",
    body: "Calendar events are stored on your device, not kept on our servers.",
    bodyTh: "นัดหมายถูกเก็บในเครื่องของคุณ ไม่ได้เก็บไว้บนเซิร์ฟเวอร์ของเรา",
  },
  {
    title: "No ads. No selling. No AI training.",
    titleTh: "ไม่มีโฆษณา ไม่ขาย ไม่เอาไป train AI",
    body: "AI only sees your data when you ask it something — and never to train models.",
    bodyTh: "ข้อมูลถูกส่งให้ AI เฉพาะตอนคุณถาม และไม่ถูกใช้ฝึกโมเดล",
  },
];

export default function VeyraPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#141233] text-white">
        {/* แสงเรืองด้านหลังโทรศัพท์ — สีเดียวกับแบรนด์ในแอป */}
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-10 -z-10 h-[36rem] w-[36rem] rounded-full bg-[#6366F1] opacity-40 blur-[120px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 right-1/3 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#8B5CF6] opacity-30 blur-[120px]" />

        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-0 pt-16 md:grid-cols-[1fr_1.05fr] md:gap-8 md:pt-24">
          <div className="md:pb-24">
            <div className="flex items-center gap-3">
              <Image src="/veyra/veyra-mark.webp" alt="" width={44} height={44} className="rounded-xl" />
              <span className="text-lg font-semibold tracking-tight">{veyra.name}</span>
            </div>
            <h1 lang="en" className="mt-8 text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Your life, handled.
            </h1>
            <p lang="th" className="mt-4 text-balance text-2xl font-medium text-[#c9c6ff] md:text-3xl">
              ชีวิตทั้งวัน จัดการได้ในแอปเดียว
            </p>
            <Pair
              className="mt-7 max-w-md text-lg leading-relaxed text-[#dcdaf5]"
              en="Tasks, calendar, money and bills, notes, and an AI assistant — together in one calm place."
              th="งาน ปฏิทิน การเงินและบิล โน้ต และผู้ช่วย AI รวมไว้ในที่เดียว ใช้ง่าย ไม่วุ่นวาย"
            />
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#tour"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-[15px] font-medium text-[#141233] transition-opacity hover:opacity-90"
              >
                See what it does · ดูฟีเจอร์
              </a>
              <Link
                href="/veyra/privacy"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 px-5 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
              >
                Privacy · ความเป็นส่วนตัว
              </Link>
            </div>
            <p className="mt-6 text-sm text-[#b9b6e6]">by {company.nameEn}</p>
          </div>

          {/* โทรศัพท์ 3 เครื่องวางเป็นพัด — กลางอยู่หน้าสุด ข้าง ๆ เอียงออกและหลบลงไปด้านหลัง */}
          <div className="relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[560px] md:h-[620px]">
            <Phone
              screen={screens.calendar}
              className={`absolute bottom-[-6%] left-0 w-[44%] sm:left-[2%] sm:w-[40%] ${styles.phoneInLate}`}
              style={{ "--tilt": "-9deg", transform: "rotate(-9deg)" } as CSSProperties}
              sizes="(min-width: 768px) 210px, 40vw"
            />
            <Phone
              screen={screens.money}
              className={`absolute bottom-[-6%] right-0 w-[44%] sm:right-[2%] sm:w-[40%] ${styles.phoneInLate}`}
              style={{ "--tilt": "9deg", transform: "rotate(9deg)" } as CSSProperties}
              sizes="(min-width: 768px) 210px, 40vw"
            />
            <Phone
              screen={screens.home}
              priority
              className={`absolute bottom-[-14%] left-1/2 z-10 w-[58%] -translate-x-1/2 sm:w-[50%] ${styles.phoneIn}`}
              sizes="(min-width: 768px) 260px, 50vw"
            />
            <Image
              src="/veyra/mascot-wave.webp"
              alt="Veyra's robot mascot waving hello"
              width={480}
              height={480}
              sizes="(min-width: 768px) 160px, 30vw"
              className={`absolute left-[-2%] top-[-4%] z-20 w-[28%] sm:left-[-4%] sm:top-[2%] sm:w-[30%] drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)] ${styles.float}`}
            />
          </div>
        </div>
      </section>

      {/* ── Feature tour ─────────────────────────────────────── */}
      <section id="tour" className="scroll-mt-16">
        <div className="mx-auto max-w-6xl px-5 pt-20 md:pt-28">
          <h2 lang="en" className="max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Everything your day needs, in one calm place.
          </h2>
          <p lang="th" className="mt-3 max-w-2xl text-xl text-muted">
            ทุกอย่างที่วันหนึ่งต้องใช้ อยู่ในที่เดียว
          </p>
        </div>

        <div className="mx-auto max-w-6xl space-y-24 px-5 py-20 md:space-y-32 md:py-28">
          {tour.map((f, i) => (
            <div key={f.key} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <div className={`relative flex justify-center ${i % 2 ? "md:order-2" : ""}`}>
                <div aria-hidden="true" className="absolute inset-x-[12%] inset-y-[10%] -z-10 rounded-[3rem] bg-[#EEF0FF]" />
                <Phone screen={f.screen} className="w-[68%] max-w-[300px]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#4F46E5]">{f.label}</p>
                <h3 lang="en" className="mt-3 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                  {f.title}
                </h3>
                <p lang="th" className="mt-2 text-lg font-medium text-foreground/75">
                  {f.titleTh}
                </p>
                {f.badge && (
                  <p className="mt-5 inline-flex rounded-full bg-[#EEF0FF] px-3 py-1 text-sm font-medium text-[#4338CA]">
                    {f.badge}
                  </p>
                )}
                <p lang="en" className="mt-5 max-w-[60ch] leading-relaxed text-muted">
                  {f.body}
                </p>
                <p lang="th" className="mt-3 max-w-[60ch] leading-relaxed text-muted">
                  {f.bodyTh}
                </p>
                <ul className="mt-6 space-y-3 border-t border-line pt-6">
                  {f.points.map(([en, th]) => (
                    <li key={en} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
                      <span className="text-[15px] leading-relaxed">
                        <span lang="en">{en}</span>
                        <span lang="th" className="block text-muted">
                          {th}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Veyra AI ─────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#141233] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#8B5CF6] opacity-35 blur-[120px]" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:gap-16 md:py-28">
          <div className="flex justify-center md:order-2">
            <Phone screen={screens.assistant} className="w-[68%] max-w-[300px]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#c9c6ff]">Veyra AI · powered by Claude</p>
            <h2 lang="en" className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Just ask.
            </h2>
            <p lang="th" className="mt-2 text-xl font-medium text-[#c9c6ff]">
              อยากรู้อะไร ถามได้เลย
            </p>
            <Pair
              className="mt-6 max-w-[60ch] leading-relaxed text-[#dcdaf5]"
              en="“Plan my day.” “Find overdue tasks.” “Review my expenses.” Veyra AI answers using your own tasks, events, and bills — and suggests changes, but nothing happens until you confirm."
              th="“ช่วยวางแผนวันนี้” “มีงานไหนเลยกำหนด” “สรุปรายจ่ายให้หน่อย” Veyra AI ตอบจากงาน นัด และบิลของคุณเอง แนะนำการเปลี่ยนแปลงได้ แต่จะไม่ทำอะไรจนกว่าคุณจะกดยืนยัน"
            />
            <p className="mt-8 max-w-[60ch] rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-[15px] leading-relaxed text-[#dcdaf5]">
              <span lang="en">Your data is sent to the AI only when you use it, only to answer you, and never to train models.</span>
              <span lang="th" className="mt-1 block opacity-80">
                ข้อมูลจะถูกส่งให้ AI เฉพาะตอนคุณใช้ เพื่อตอบคำถามของคุณเท่านั้น และไม่ถูกใช้ฝึกโมเดล
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Privacy promises ─────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <h2 lang="en" className="max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Your data stays yours.
        </h2>
        <p lang="th" className="mt-3 max-w-2xl text-xl text-muted">
          ข้อมูลของคุณ เป็นของคุณ
        </p>
        <dl className="mt-12 grid gap-x-12 gap-y-10 border-t border-line pt-10 sm:grid-cols-2">
          {trust.map((t) => (
            <div key={t.title}>
              <dt className="text-lg font-semibold tracking-tight">
                <span lang="en">{t.title}</span>
                <span lang="th" className="mt-0.5 block text-base font-medium text-foreground/70">
                  {t.titleTh}
                </span>
              </dt>
              <dd className="mt-3 leading-relaxed text-muted">
                <span lang="en">{t.body}</span>
                <span lang="th" className="mt-1 block">
                  {t.bodyTh}
                </span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-12 text-[15px] leading-relaxed text-muted">
          Read the full{" "}
          <Link href="/veyra/privacy" className="font-medium text-accent-ink underline underline-offset-2 hover:opacity-85">
            Privacy Policy · นโยบายความเป็นส่วนตัว
          </Link>{" "}
          and{" "}
          <Link href="/veyra/terms" className="font-medium text-accent-ink underline underline-offset-2 hover:opacity-85">
            Terms of Service · ข้อกำหนดการใช้งาน
          </Link>
          .
        </p>
      </section>

      {/* ── Closing ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-[#EEF0FF] px-8 py-12 md:flex md:items-center md:gap-10 md:px-14 md:py-14">
          <Image
            src="/veyra/mascot-wave.webp"
            alt=""
            width={480}
            height={480}
            sizes="192px"
            className="mx-auto w-40 shrink-0 md:mx-0 md:w-48"
          />
          <div className="mt-6 text-center md:mt-0 md:text-left">
            <h2 lang="en" className="text-balance text-3xl font-semibold tracking-tight text-[#141233] md:text-4xl">
              Hi, I&apos;m Veyra.
            </h2>
            <p lang="th" className="mt-2 text-xl font-medium text-[#141233]/75">
              สวัสดี ฉันชื่อ Veyra
            </p>
            <p className="mt-5 leading-relaxed text-[#3b3960]">
              <span lang="en">Questions about Veyra? We&apos;d love to hear from you.</span>
              <span lang="th" className="block">
                มีคำถามเกี่ยวกับ Veyra ติดต่อเราได้เลย
              </span>
            </p>
            <a
              href={`mailto:${veyra.contactEmail}`}
              className="mt-7 inline-flex items-center justify-center rounded-lg bg-[#141233] px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
            >
              {veyra.contactEmail}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
