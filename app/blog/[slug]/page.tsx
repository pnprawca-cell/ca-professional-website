import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABanner } from "@/components/ui";
import { posts, type BlogPost } from "@/content/blog";
import { company, siteUrl } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      locale: "th_TH",
      siteName: company.shortName,
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: new Date(post.date).toISOString(),
      authors: [company.nameTh],
      tags: [post.tag],
      // opengraph-image (file convention) ใช้ได้เฉพาะ segment รากที่วางไฟล์ —
      // segment ลูกต้องชี้ route รูปเองถึงจะได้ og:image ตอนแชร์
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

/** Structured data ระดับบทความ — ข้อมูลผู้เขียนใช้ชื่อบริษัทตาม content/site.ts */
function articleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    inLanguage: "th-TH",
    articleSection: post.tag,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
    author: {
      "@type": "Organization",
      name: company.nameTh,
      alternateName: company.nameEn,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: company.nameTh,
      alternateName: company.nameEn,
      url: siteUrl,
    },
  };
}

function formatThaiDate(iso: string) {
  return new Date(iso).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd(post)).replace(/</g, "\\u003c"),
        }}
      />
      <article className="mx-auto max-w-3xl px-5 pb-8 pt-16 md:pt-24">
        <Link href="/blog" className="text-sm font-medium text-accent-ink hover:underline">
          ← บทความทั้งหมด
        </Link>
        <div className="mt-6 flex items-center gap-3 text-xs text-muted">
          <span className="rounded-full bg-accent-soft px-2.5 py-1 font-medium text-accent-ink">
            {post.tag}
          </span>
          <time dateTime={post.date}>{formatThaiDate(post.date)}</time>
        </div>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          {post.title}
        </h1>
        <div className="mt-8 space-y-5">
          {post.body.map((block, i) =>
            block.startsWith("## ") ? (
              <h2 key={i} className="pt-3 text-xl font-semibold tracking-tight">
                {block.slice(3)}
              </h2>
            ) : (
              <p key={i} className="leading-relaxed text-muted">
                {block}
              </p>
            )
          )}
        </div>
      </article>

      <CTABanner
        title="มีคำถามเกี่ยวกับเรื่องนี้?"
        description="ทักมาคุยกับทีมผู้สอบบัญชีของเราได้เลย — ปรึกษาเบื้องต้นไม่มีค่าใช้จ่าย"
        buttonLabel="ติดต่อเรา"
        buttonHref="/contact"
      />
    </>
  );
}
