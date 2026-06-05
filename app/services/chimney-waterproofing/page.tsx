import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/chimney-waterproofing.jpg";

export const metadata: Metadata = {
  title: "Chimney Waterproofing in California | Masonry Water Protection",
  description:
    "Chimney waterproofing in California to help protect brick, mortar, and masonry from rain, moisture, cracking, and water damage.",
  alternates: { canonical: "/services/chimney-waterproofing/" },
  openGraph: {
    title: "Chimney Waterproofing in California | Masonry Water Protection",
    description:
      "Chimney waterproofing in California to help protect brick, mortar, and masonry from rain, moisture, cracking, and water damage.",
    url: `${SITE.baseUrl}/services/chimney-waterproofing/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Waterproofing in California | Masonry Water Protection",
    description:
      "Chimney waterproofing in California. Protect brick and mortar from rain, moisture, and water damage.",
  },
};

const FAQS = [
  {
    q: "Does chimney waterproofing stop leaks?",
    a: "It can help when water is entering through porous masonry, but it will not fix damaged flashing, a cracked crown, or missing chimney cap.",
  },
  {
    q: "How often should a chimney be waterproofed?",
    a: "Timing depends on the product used, weather exposure, and chimney condition. An inspection can help determine whether it is needed.",
  },
  {
    q: "Can I paint my chimney to waterproof it?",
    a: "Paint is not recommended for masonry chimneys because it can trap moisture inside the brick and mortar.",
  },
  {
    q: "Should repairs be done before waterproofing?",
    a: "Yes. Cracks, loose mortar, damaged crowns, and flashing problems should be addressed before applying waterproofing.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Waterproofing",
  serviceType: "Chimney Waterproofing",
  description:
    "Chimney waterproofing in California to help protect brick, mortar, and masonry from rain, moisture, cracking, and water damage.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: { "@type": "PostalAddress", addressRegion: "CA", addressCountry: "US" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.googleRating,
      reviewCount: SITE.reviewCount,
      bestRating: "5",
    },
  },
  areaServed: { "@type": "State", name: "California" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.baseUrl}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.baseUrl}/services/` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Chimney Waterproofing",
      item: `${SITE.baseUrl}/services/chimney-waterproofing/`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ChimneyWaterproofingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services/" },
              { label: "Chimney Waterproofing" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Waterproofing treatment applied to a brick chimney on a California home"
          fill
          priority
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="relative z-10 container-base py-16 md:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-wide">
              Licensed &amp; Insured · {SITE.googleRating} Stars · {SITE.reviewCount} Reviews
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Chimney Waterproofing in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Chimneys are exposed to sun, wind, rain, and temperature changes all year. Over time, brick and mortar can absorb moisture, which may lead to cracking, staining, leaks, and masonry deterioration.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact/" className="btn-primary">Request a Free Estimate</Link>
              <a href={`mailto:${SITE.email}`} className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      <section className="section-pad bg-white">
        <div className="container-base">
          <div className="grid lg:grid-cols-3 gap-10">

            <div className="lg:col-span-2 space-y-10">

              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Chimneys are exposed to sun, wind, rain, and temperature changes all year. Over time, brick and mortar can absorb moisture, which may lead to cracking, staining, leaks, and masonry deterioration. Chimney Peak California provides chimney waterproofing guidance and service for homeowners who want to protect their chimney before water damage becomes a larger repair.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Waterproofing is not a replacement for fixing broken{" "}
                  <Link href="/services/chimney-flashing-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney flashing repair
                  </Link>
                  , missing caps, or major cracks. It works best when the chimney is structurally sound but the masonry needs added protection against water absorption.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Chimney Waterproofing Does</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Chimney waterproofing helps reduce how much water enters the brick and mortar surface. A breathable masonry water repellent is typically used so moisture vapor can still escape while rainwater is resisted from the outside.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This is different from paint or sealers that trap moisture inside masonry. Chimney masonry needs to breathe. Using the wrong product can create more problems than it solves.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">When Waterproofing Makes Sense</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Waterproofing may be recommended if the chimney has minor water absorption, aging brick, repaired mortar joints, previous leak issues, or visible staining. It is also common after masonry repairs, tuckpointing,{" "}
                  <Link href="/services/chimney-crown-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney crown repair
                  </Link>
                  , or{" "}
                  <Link href="/services/chimney-leak-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney leak repair
                  </Link>{" "}
                  to help protect the repaired area.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Before waterproofing, the chimney should be checked for active problems. If flashing is loose, the crown is cracked, or the cap is missing, those issues should be handled first.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">A Preventive Step for Masonry Chimneys</h2>
                <p className="text-gray-600 leading-relaxed">
                  Water damage is one of the most common reasons chimneys deteriorate. Waterproofing can be a smart preventive step, especially for older masonry chimneys or chimneys that have already needed{" "}
                  <Link href="/services/chimney-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney repair
                  </Link>
                  .
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Want to protect your chimney from water damage?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and tell us what you are seeing on your chimney.
                </p>
                <Link href="/contact/" className="btn-primary inline-block">
                  Request a Free Estimate
                </Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Areas We Serve</h2>
                <div className="flex flex-wrap gap-2">
                  {NAV_AREAS.slice(0, 14).map((area) => (
                    <Link key={area.href} href={area.href} className="text-xs bg-gray-50 border border-gray-200 hover:border-orange-400 hover:text-orange-600 text-gray-600 font-medium px-3 py-1.5 rounded-full transition-colors">
                      {area.name}
                    </Link>
                  ))}
                  <Link href="/areas/" className="text-xs bg-orange-50 border border-orange-200 text-orange-600 font-semibold px-3 py-1.5 rounded-full hover:bg-orange-100 transition-colors">
                    View All Areas →
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:sticky lg:top-6 lg:self-start">
              <LeadForm heading="Request a Free Estimate" subheading="Tell us what you are seeing on your chimney." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Leak Repair", href: "/services/chimney-leak-repair/" },
                    { name: "Chimney Repair", href: "/services/chimney-repair/" },
                    { name: "Chimney Crown Repair", href: "/services/chimney-crown-repair/" },
                    { name: "Chimney Flashing Repair", href: "/services/chimney-flashing-repair/" },
                  ].map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="text-sm text-gray-700 hover:text-orange-600 transition-colors flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-orange-400 shrink-0" />
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-5 text-white text-center">
                <p className="text-sm font-semibold mb-1">Prefer to write?</p>
                <a href={`mailto:${SITE.email}`} className="text-orange-400 text-sm font-bold hover:text-orange-300 transition-colors break-all">
                  {SITE.email}
                </a>
                <p className="text-xs text-gray-400 mt-2">We reply within one business day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} addSchema={false} />
      <CTABanner />
    </>
  );
}
