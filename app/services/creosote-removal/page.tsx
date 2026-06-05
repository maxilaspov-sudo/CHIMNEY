import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/creosote-removal.jpg";

export const metadata: Metadata = {
  title: "Creosote Removal in California | Chimney Cleaning Service",
  description:
    "Creosote removal in California for wood-burning fireplaces and chimneys with soot buildup, glaze, odor, and chimney fire risk.",
  alternates: { canonical: "/services/creosote-removal/" },
  openGraph: {
    title: "Creosote Removal in California | Chimney Cleaning Service",
    description:
      "Creosote removal in California for wood-burning fireplaces and chimneys with soot buildup, glaze, odor, and chimney fire risk.",
    url: `${SITE.baseUrl}/services/creosote-removal/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creosote Removal in California | Chimney Cleaning Service",
    description: "Creosote removal in California — soot, tar, and glazed deposits from wood-burning chimneys. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What is creosote?",
    a: "Creosote is residue from wood smoke that can build up inside the chimney.",
  },
  {
    q: "Is creosote dangerous?",
    a: "Heavy creosote buildup can increase chimney fire risk and should be addressed.",
  },
  {
    q: "Can creosote be removed during chimney cleaning?",
    a: "Many types of creosote can be reduced during chimney cleaning, but heavy glazed deposits may need extra treatment.",
  },
  {
    q: "How often should creosote be checked?",
    a: "It should be checked regularly if you use a wood-burning fireplace or stove.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Creosote Removal",
  serviceType: "Creosote Removal",
  description:
    "Creosote removal in California for wood-burning fireplaces and chimneys with soot buildup, glaze, odor, and chimney fire risk.",
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
    { "@type": "ListItem", position: 3, name: "Creosote Removal", item: `${SITE.baseUrl}/services/creosote-removal/` },
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

export default function CreosoteRemovalPage() {
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
              { label: "Creosote Removal" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Creosote buildup removal from a residential chimney flue"
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
              Creosote Removal in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Creosote buildup is one of the most common causes of chimney fire risk in wood-burning homes. It should be checked and removed before heavy fireplace use.
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

            {/* Left: main content */}
            <div className="lg:col-span-2 space-y-10">

              {/* Intro */}
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Creosote is a dark, sticky, and sometimes hardened byproduct of burning wood. Over time, it can build up inside the chimney and increase the risk of chimney fire, odor, and poor draft. Chimney Peak California provides creosote removal as part of proper chimney cleaning and wood-burning fireplace maintenance.
                </p>
              </div>

              {/* H2: Why Creosote Builds Up */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Why Creosote Builds Up</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Creosote forms when smoke, moisture, and combustion byproducts cool inside the chimney. It can build up faster when wood is not fully seasoned, the fire burns too cool, the chimney has poor draft, or the fireplace is used often during colder months.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Creosote can appear as flaky soot, sticky tar-like buildup, or hard glazed deposits. The type and amount of buildup affect how it should be addressed.
                </p>
              </div>

              {/* H2: What Creosote Removal Includes */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Creosote Removal Includes</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Creosote removal may involve brushing, vacuuming, scraping, or more specialized cleaning depending on how heavy the buildup is. Some light buildup can be removed during standard{" "}
                  <Link href="/services/chimney-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney cleaning
                  </Link>
                  . Heavier deposits may require a more careful approach.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The goal is to reduce combustible material inside the chimney and improve airflow through the flue.
                </p>
              </div>

              {/* H2: When to Schedule Creosote Removal */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">When to Schedule Creosote Removal</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Schedule service if you use a wood-burning fireplace regularly, notice strong fireplace odors, see dark buildup, experience poor draft, or have not had the chimney cleaned in a long time. Creosote should be checked before heavy fireplace use.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A{" "}
                  <Link href="/services/chimney-sweep/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney sweep
                  </Link>{" "}
                  or{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  can confirm how much buildup is present and what level of cleaning is needed.
                </p>
              </div>

              {/* CTA box */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Concerned about creosote buildup?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and tell us how often you use your fireplace.
                </p>
                <Link href="/contact/" className="btn-primary inline-block">
                  Request a Free Estimate
                </Link>
              </div>

              {/* Service areas */}
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

            {/* Right: sidebar */}
            <div className="space-y-6 lg:sticky lg:top-6 lg:self-start">
              <LeadForm heading="Request a Free Estimate" subheading="Tell us how often you use your fireplace." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/services/chimney-cleaning/" },
                    { name: "Chimney Sweep", href: "/services/chimney-sweep/" },
                    { name: "Chimney Liner Repair", href: "/services/chimney-liner-repair/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Fireplace Cleaning", href: "/services/fireplace-cleaning/" },
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
