import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/ui";
import { posts } from "@/content/blog";

export const metadata: Metadata = {
  title: "บทความ",
  description: "ความรู้บัญชี ภาษี และการบริหารสำนักงานบัญชี จากทีมผู้สอบบัญชีรับอนุญาต",
};

function formatThaiDate(iso: string) {
  return new Date(iso).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero
        title="ความรู้จากหน้างานจริง"
        description="เราเขียนจากประเด็นที่เจอในงานสอบบัญชีและงานสำนักงานทุกสัปดาห์ — เพื่อเจ้าของธุรกิจและเพื่อนร่วมวิชาชีพ"
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex h-full flex-col rounded-2xl border border-line bg-card p-6 transition-shadow hover:shadow-sm"
            >
              <div className="flex items-center gap-3 text-xs text-muted">
                <span className="rounded-full bg-accent-soft px-2.5 py-1 font-medium text-accent-ink">
                  {post.tag}
                </span>
                <time dateTime={post.date}>{formatThaiDate(post.date)}</time>
              </div>
              <h2 className="mt-4 text-lg font-semibold leading-snug tracking-tight">
                {post.title}
              </h2>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{post.excerpt}</p>
              <span className="mt-4 text-sm font-medium text-accent-ink">อ่านต่อ →</span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
