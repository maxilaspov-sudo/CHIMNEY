import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";
import BlogGrid from "@/components/BlogGrid";
import { getAllPosts } from "@/lib/blogPosts";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Chimney & Fireplace Advice for California Homeowners | Chimney Peak California",
  description:
    "Practical chimney cleaning, repair, safety, and fireplace advice from professional chimney technicians. Written for California homeowners — no fluff, no upsell.",
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "Chimney & Fireplace Blog | Chimney Peak California",
    description: "Expert chimney and fireplace advice for California homeowners.",
    url: "/blog/",
  },
};

export default function BlogPage() {
  const cards = getAllPosts().map(({ slug, title, excerpt, category, publishDate, readTime, heroImageMedium, heroAlt }) => ({
    slug, title, excerpt, category, publishDate, readTime, heroImageMedium, heroAlt,
  }));

  const featured = cards[0];
  const rest = cards.slice(1);

  return (
    <>
      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#111827] py-14 md:py-16">
        <Image
          src="https://images.pexels.com/photos/4394224/pexels-photo-4394224.jpeg?auto=compress&cs=tinysrgb&w=1400&h=400"
          alt="Chimney blog — expert advice for California homeowners"
          fill
          priority
          className="object-cover object-center opacity-25"
          sizes="100vw"
        />
        <div className="relative z-10 container-base">
          <span className="section-label">LATEST ARTICLES</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            Chimney Tips &amp; Home Safety
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Practical advice from professional chimney technicians — no fluff, no upsell.
          </p>
        </div>
      </section>

      {/* ── Featured article ─────────────────────────────────────── */}
      {featured && (
        <section className="bg-white pt-12 pb-0">
          <div className="container-base">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-4">Featured Article</p>
            <Link
              href={`/blog/${featured.slug}/`}
              className="group grid md:grid-cols-2 gap-8 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-orange-100 transition-all bg-white"
            >
              <div className="relative h-64 md:h-auto min-h-[240px] overflow-hidden">
                <Image
                  src={featured.heroImageMedium}
                  alt={featured.heroAlt}
                  fill
                  loading="eager"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <span className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-3 block">
                  {featured.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3 leading-snug group-hover:text-orange-500 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-5 line-clamp-3">{featured.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-6">
                  <span>{featured.publishDate}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-orange-500 font-semibold text-sm">
                  Read Article →
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── Blog grid ─────────────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-base">
          <BlogGrid posts={rest.length > 0 ? rest : cards} />

          {/* Internal links */}
          <div className="mt-14 pt-10 border-t border-gray-100 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Our Services</h3>
              <ul className="grid grid-cols-2 gap-1.5">
                {[
                  { name: "Chimney Cleaning", href: "/services/chimney-cleaning/" },
                  { name: "Chimney Sweep", href: "/services/chimney-sweep/" },
                  { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                  { name: "Chimney Repair", href: "/services/chimney-repair/" },
                  { name: "Fireplace Cleaning", href: "/services/fireplace-cleaning/" },
                  { name: "Fireplace Installation", href: "/services/fireplace-installation/" },
                ].map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                      → {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Service Areas</h3>
              <p className="text-sm text-gray-500 mb-3">
                We serve all major California cities.{" "}
                <Link href="/areas/california/" className="text-orange-500 hover:underline">
                  View all service areas →
                </Link>
              </p>
              <p className="text-sm text-gray-500">
                Questions?{" "}
                <a href={`mailto:${SITE.email}`} className="text-orange-500 font-medium hover:underline">
                  Email us
                </a>{" "}
                — Mon–Fri 7am–7pm, Sat 8am–5pm.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Have a chimney question not covered here?"
        subtext="Ask our team directly — we answer questions before you book."
      />
    </>
  );
}
