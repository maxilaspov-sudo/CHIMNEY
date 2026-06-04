import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";
import BlogGrid from "@/components/BlogGrid";
import { getAllPosts } from "@/lib/blogPosts";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Chimney & Fireplace Advice for California Homeowners | Chimney Peak California",
  description:
    "Practical chimney cleaning, repair, safety, and fireplace advice from CSIA-certified technicians. Written for California homeowners — no fluff, no upsell.",
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "Chimney & Fireplace Blog | Chimney Peak California",
    description: "Expert chimney and fireplace advice for California homeowners.",
    url: "/blog/",
  },
};

export default function BlogPage() {
  // Pass only card-level fields to the Client Component — keeps the prop payload lean
  const cards = getAllPosts().map(({ slug, title, excerpt, category, publishDate, readTime, heroImageMedium, heroAlt }) => ({
    slug,
    title,
    excerpt,
    category,
    publishDate,
    readTime,
    heroImageMedium,
    heroAlt,
  }));

  return (
    <>
      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
        </div>
      </div>

      <section className="section-navy py-14">
        <div className="container-base">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            Chimney &amp; Fireplace Tips
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Practical advice from CSIA-certified technicians — no fluff, no upsell.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-base">
          {/* Filterable blog grid (Client Component) */}
          <BlogGrid posts={cards} />

          {/* Internal links footer */}
          <div className="mt-14 pt-10 border-t border-gray-100 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-base font-bold text-[#1E3A5F] mb-3">Our Services</h3>
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
              <h3 className="text-base font-bold text-[#1E3A5F] mb-3">Service Areas</h3>
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
        subtext="Call our CSIA-certified team directly — we answer questions before you book."
      />
    </>
  );
}

