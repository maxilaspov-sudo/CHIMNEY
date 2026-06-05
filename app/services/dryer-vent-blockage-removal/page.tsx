import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/dryer-vent-blockage-removal.jpg";

export const metadata: Metadata = {
  title: "Dryer Vent Blockage Removal in California | Clear Clogged Dryer Vents",
  description:
    "Dryer vent blockage removal in California for clogged vents, lint buildup, poor airflow, overheating dryers, and long drying times.",
  alternates: { canonical: "/services/dryer-vent-blockage-removal/" },
  openGraph: {
    title: "Dryer Vent Blockage Removal in California | Clear Clogged Dryer Vents",
    description:
      "Dryer vent blockage removal in California for clogged vents, lint buildup, poor airflow, overheating dryers, and long drying times.",
    url: `${SITE.baseUrl}/services/dryer-vent-blockage-removal/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dryer Vent Blockage Removal in California | Clear Clogged Dryer Vents",
    description: "Dryer vent blockage removal in California — lint, debris, poor airflow, and overheating. Free estimate.",
  },
};

const FAQS = [
  {
    q: "How do I know if my dryer vent is blocked?",
    a: "Long drying times, heat, weak airflow, lint buildup, and burning smells are common signs.",
  },
  {
    q: "Can a blocked dryer vent be dangerous?",
    a: "Yes. Lint buildup and restricted airflow can increase overheating and fire risk.",
  },
  {
    q: "Is blockage removal different from dryer vent cleaning?",
    a: "Blockage removal focuses on clearing a restriction. Cleaning removes lint and buildup throughout the vent.",
  },
  {
    q: "Can birds block a dryer vent?",
    a: "Yes. Exterior vents without proper protection can collect nesting material or debris.",
  },
  {
    q: "Should airflow be checked after blockage removal?",
    a: "Yes. Airflow should be checked to confirm the vent is clear and working better.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dryer Vent Blockage Removal",
  serviceType: "Dryer Vent Blockage Removal",
  description:
    "Dryer vent blockage removal in California for clogged vents, lint buildup, poor airflow, overheating dryers, and long drying times.",
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
    { "@type": "ListItem", position: 3, name: "Dryer Vent Blockage Removal", item: `${SITE.baseUrl}/services/dryer-vent-blockage-removal/` },
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

export default function DryerVentBlockageRemovalPage() {
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
              { label: "Dryer Vent Blockage Removal" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Technician clearing blockage from an exterior dryer vent"
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
              Dryer Vent Blockage Removal in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Long drying times and an overheating dryer often point to a blocked vent. The problem is not always visible from outside the home.
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
                  A blocked dryer vent can make laundry take longer, cause the dryer to overheat, and create a serious lint buildup problem. Chimney Peak California provides dryer vent blockage removal for homeowners dealing with poor airflow, long drying times, and suspected vent restrictions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Dryer vent blockages can happen inside the duct, at the exterior vent, behind the dryer, or where lint collects along a long vent run. The problem is not always visible from the outside, which is why weak airflow and dryer performance symptoms matter.
                </p>
              </div>

              {/* H2: Signs of a Blocked Vent */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Signs of a Blocked Dryer Vent</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Common signs include clothes taking more than one cycle to dry, the dryer feeling hot, weak airflow outside, lint around the vent cover, burning smells, or the dryer shutting off early. These signs often mean the vent line is restricted.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A blocked vent should be handled quickly because restricted airflow makes the dryer work harder and can increase overheating risk. If the dryer is hot to the touch or the laundry room feels unusually warm, the vent should be checked before the problem continues.
                </p>
              </div>

              {/* H2: What Blockage Removal Includes */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Blockage Removal Includes</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Blockage removal may include clearing lint, debris, bird nesting material, crushed duct sections, or buildup near the exterior vent. If the vent route is long or has several turns, inspection may be needed to understand where the restriction is located.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  After the blockage is removed, airflow should be checked to confirm the vent is working better. If airflow remains weak, there may be a duct routing issue, damaged vent cover, or crushed section that needs attention. A full{" "}
                  <Link href="/services/dryer-vent-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    dryer vent cleaning
                  </Link>{" "}
                  may be recommended to address the full vent line.
                </p>
              </div>

              {/* H2: Why Blockages Happen */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Why Dryer Vent Blockages Happen</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Dryer vents can become blocked when{" "}
                  <Link href="/services/dryer-vent-lint-removal/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    lint builds up
                  </Link>{" "}
                  over time, the vent is too long, the duct is crushed behind the dryer, the outside flap is stuck, or birds and debris enter the exterior opening. Some vent systems clog faster because of poor routing or limited airflow.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A blockage is not always a cleaning issue only. Sometimes the vent setup itself needs improvement. Read more about{" "}
                  <Link href="/blog/dryer-vent-fire-prevention/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    dryer vent fire prevention
                  </Link>
                  .
                </p>
              </div>

              {/* H2: Related Services */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Related Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  Dryer vent blockage removal often connects with{" "}
                  <Link href="/services/dryer-vent-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    dryer vent cleaning
                  </Link>{" "}
                  and{" "}
                  <Link href="/services/dryer-vent-lint-removal/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    dryer vent lint removal
                  </Link>
                  . If the blockage is significant or recurring, the full vent route may need review.
                </p>
              </div>

              {/* CTA box */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Think your dryer vent is blocked?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and tell us what your dryer is doing.
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
              <LeadForm heading="Request a Free Estimate" subheading="Tell us what your dryer is doing." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Dryer Vent Cleaning", href: "/services/dryer-vent-cleaning/" },
                    { name: "Dryer Vent Lint Removal", href: "/services/dryer-vent-lint-removal/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Chimney Cleaning", href: "/services/chimney-cleaning/" },
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
