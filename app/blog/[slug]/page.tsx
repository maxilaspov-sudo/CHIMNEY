import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getPost, getRelatedPosts } from "@/lib/blogPosts";
import { SITE } from "@/lib/constants";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `/blog/${slug}/`,
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.updatedDate,
      authors: [post.author],
      images: [{ url: post.heroImageMedium, alt: post.heroAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.heroImageMedium],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: post.heroImage,
    datePublished: post.publishDate,
    dateModified: post.updatedDate,
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE.baseUrl + "/about/",
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.baseUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": SITE.baseUrl + `/blog/${slug}/`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.baseUrl + "/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: SITE.baseUrl + "/blog/" },
      { "@type": "ListItem", position: 3, name: post.title, item: SITE.baseUrl + `/blog/${slug}/` },
    ],
  };

  const faqSchema = post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  const tocSections = post.sections.filter((s) => s.heading && s.anchor);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Breadcrumb */}
      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog/" },
              { label: post.title },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <Image
          src={post.heroImage}
          alt={post.heroAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2238]/70 via-[#0F2238]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-base pb-6">
          <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
            {post.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight max-w-3xl">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article meta */}
      <div className="border-b border-gray-100 bg-white">
        <div className="container-base py-3">
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
            <span>By {post.author}</span>
            <span>·</span>
            <time dateTime={post.publishDate}>
              {new Date(post.publishDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </time>
            <span>·</span>
            <span>{post.readTime}</span>
            {post.updatedDate !== post.publishDate && (
              <>
                <span>·</span>
                <span>Updated {new Date(post.updatedDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main layout */}
      <section className="section-pad bg-white">
        <div className="container-base">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Article content */}
            <article className="lg:col-span-2 min-w-0">

              {/* Table of contents */}
              {tocSections.length > 2 && (
                <nav aria-label="Table of contents" className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-5 mb-8">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">In this article</p>
                  <ol className="flex flex-col gap-1.5">
                    {tocSections.map((s, i) => (
                      <li key={i}>
                        <a
                          href={`#${s.anchor}`}
                          className="text-sm text-[#1E3A5F] hover:text-orange-500 transition-colors flex items-start gap-2"
                        >
                          <span className="text-orange-400 font-bold shrink-0 mt-0.5">{i + 1}.</span>
                          {s.heading}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              {/* Content sections */}
              <div className="prose-article">
                {post.sections.map((section, i) => (
                  <div key={i} id={section.anchor} className={section.anchor ? "scroll-mt-24" : ""}>
                    {section.heading && (
                      <h2 className="text-xl md:text-2xl font-bold text-[#1E3A5F] mt-8 mb-3">
                        {section.heading}
                      </h2>
                    )}

                    {section.body && (
                      <div className="space-y-4">
                        {section.body.split("\n\n").map((para, j) => (
                          <p key={j} className="text-gray-700 leading-relaxed text-[15px]">
                            {para}
                          </p>
                        ))}
                      </div>
                    )}

                    {section.list && (
                      <ul className="mt-4 flex flex-col gap-2">
                        {section.list.map((item, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="text-orange-500 font-bold shrink-0 mt-0.5">›</span>
                            <span className="text-gray-700 text-[15px] leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.callout && (
                      <div className="mt-4 bg-orange-50 border-l-4 border-orange-400 rounded-r-xl p-4">
                        <p className="text-sm text-gray-700 leading-relaxed">{section.callout}</p>
                      </div>
                    )}
                    {section.ctaLinks && section.ctaLinks.length > 0 && (
                      <p className="text-gray-700 leading-relaxed text-[15px] mt-3">
                        {section.ctaLinks.map((cta, idx) => (
                          <span key={idx}>
                            {cta.before}
                            <Link href={cta.href} className="text-orange-500 hover:underline font-medium">
                              {cta.linkText}
                            </Link>
                            {cta.after}
                          </span>
                        ))}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Sources */}
              {post.sources && post.sources.length > 0 && (
                <div className="mt-10 pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Sources &amp; Further Reading</h3>
                  <ul className="flex flex-col gap-2">
                    {post.sources.map((src, i) => (
                      <li key={i}>
                        <a
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-orange-500 hover:underline"
                        >
                          {src.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* FAQ section inline */}
              {post.faqs.length > 0 && (
                <div className="mt-10">
                  <FAQSection
                    faqs={post.faqs}
                    heading="Frequently Asked Questions"
                    addSchema={false}
                  />
                </div>
              )}

              {/* Related posts */}
              {related.length > 0 && (
                <div className="mt-10 pt-6 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-[#1E3A5F] mb-5">Related Articles</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {related.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/blog/${rel.slug}/`}
                        className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-md hover:border-orange-100 transition-all flex flex-col"
                      >
                        <div className="relative h-32 bg-gray-50">
                          <Image
                            src={rel.heroImageMedium}
                            alt={rel.heroAlt}
                            fill
                            loading="lazy"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                        </div>
                        <div className="p-4">
                          <p className="text-xs text-orange-500 font-medium mb-1">{rel.category}</p>
                          <p className="text-sm font-semibold text-[#1E3A5F] group-hover:text-orange-500 transition-colors leading-snug">
                            {rel.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="flex flex-col gap-6">

              {/* Free estimate CTA */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Have a question?</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Our professional chimney technicians answer questions before you book — no obligation.
                </p>
                <Link href="/contact/" className="btn-primary w-full justify-center mb-3 block">
                  Request Free Estimate
                </Link>
                <a href={`mailto:${SITE.email}`} className="text-center block text-sm text-orange-300 hover:text-orange-200 transition-colors break-all">
                  {SITE.email}
                </a>
              </div>

              {/* Related services */}
              {post.relatedServices.length > 0 && (
                <div className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm">Related Services</h3>
                  <ul className="flex flex-col gap-1.5">
                    {post.relatedServices.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          className="text-sm text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-1.5"
                        >
                          <span className="text-orange-400">›</span> {s.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link href="/services/" className="text-sm text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-1.5">
                        <span className="text-orange-400">›</span> All Services
                      </Link>
                    </li>
                  </ul>
                </div>
              )}

              {/* Service areas link */}
              <div className="bg-white border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Serving All of California</h3>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                  We dispatch trained chimney technicians to all major California cities.
                </p>
                <Link href="/areas/california/" className="text-sm text-orange-500 hover:underline font-medium">
                  View all service areas →
                </Link>
              </div>

              {/* Back to blog */}
              <Link href="/blog/" className="text-sm text-gray-500 hover:text-orange-500 transition-colors flex items-center gap-1">
                ← Back to all articles
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner heading="Ready to schedule your chimney service?" />
    </>
  );
}
