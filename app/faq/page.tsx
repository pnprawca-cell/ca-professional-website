import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, CTABanner } from "@/components/ui";
import { faqGroups, type FaqItem } from "@/content/faq";

export const metadata: Metadata = {
  title: "คำถามที่พบบ่อย",
  description:
    "รวมคำตอบเรื่องค่าสอบบัญชี เอกสารที่ต้องเตรียม และการเลือกใช้ AuditFlow / PractiFlow ทั้งรุ่น Cloud และ Desktop",
};

/** FAQPage structured data — รวมทุกคำถามทั้งสองกลุ่ม */
function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer.join(" ") },
      }))
    ),
  };
}

function FaqDisclosure({ item }: { item: FaqItem }) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
        <h3 className="text-[15px] font-semibold leading-relaxed md:text-base">
          {item.question}
        </h3>
        {/* เครื่องหมายบวก หมุนเป็นกากบาทเมื่อเปิด */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
          className="shrink-0 text-muted transition-transform duration-200 ease-out group-open:rotate-45 motion-reduce:transition-none"
        >
          <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </summary>
      <div className="space-y-3 px-6 pb-6">
        {item.answer.map((paragraph) => (
          <p key={paragraph} className="max-w-2xl text-[15px] leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
        {item.link && (
          <p>
            <Link href={item.link.href} className="text-sm font-medium text-accent-ink hover:underline">
              {item.link.label} →
            </Link>
          </p>
        )}
      </div>
    </details>
  );
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="คำถามที่พบบ่อย"
        title="ตอบตรง ๆ ก่อนคุณต้องถาม"
        description="รวมคำถามที่เจ้าของธุรกิจและสำนักงานบัญชีถามเราบ่อยที่สุด — ถ้าไม่เจอคำตอบที่ต้องการ ทักมาคุยกันได้เลย"
      />

      {faqGroups.map((group, i) => (
        <Section key={group.id} title={group.title} description={group.description} tint={i % 2 === 0}>
          <div className="divide-y divide-line rounded-2xl border border-line bg-card">
            {group.items.map((item) => (
              <FaqDisclosure key={item.question} item={item} />
            ))}
          </div>
        </Section>
      ))}

      <CTABanner
        title="ยังมีคำถามอยู่ใช่ไหม?"
        description="ทักมาคุยกับทีมงานได้โดยตรง — ปรึกษาฟรี ไม่มีข้อผูกมัด ตอบภายใน 1 วันทำการ"
        buttonLabel="ติดต่อเรา"
        buttonHref="/contact"
      />
    </>
  );
}
