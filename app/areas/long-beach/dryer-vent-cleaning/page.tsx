import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/Chimney-cleaning.jpg";

export const metadata: Metadata = {
  title: "Dryer Vent Cleaning Long Beach | Lint & Airflow Service",
  description:
    "Dryer vent cleaning in Long Beach for lint buildup, clogged dryer vents, poor airflow, overheating dryers, and long drying times. Coastal residential service.",
  alternates: { canonical: "/areas/long-beach/dryer-vent-cleaning/" },
  openGraph: {
    title: "Dryer Vent Cleaning Long Beach | Lint & Airflow Service",
    description:
      "Dryer vent cleaning in Long Beach for lint buildup, clogged dryer vents, poor airflow, and overheating dryers.",
    url: `${SITE.baseUrl}/areas/long-beach/dryer-vent-cleaning/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dryer Vent Cleaning Long Beach | Lint & Airflow Service",
    description: "Dryer vent cleaning in Long Beach — coastal humidity lint compaction, airflow restoration. Free estimate.",
  },
};

const FAQS = [
  {
    q: "How often should I clean dryer vents in Long Beach?",
    a: "Once per year is appropriate for most Long Beach households. Coastal humidity means lint in the vent stays damp rather than dry — damp lint compacts more densely than dry lint and can restrict airflow more quickly between service visits. If clothes are already taking two cycles to dry, cleaning is needed immediately regardless of when it was last done.",
  },
  {
    q: "What are signs my dryer vent needs cleaning in Long Beach?",
    a: "Clothes taking more than one full cycle to dry, the dryer exterior feeling hot during operation, a burning smell at any point during the cycle, the dryer shutting off before the cycle completes, or reduced airflow at the exterior vent cap. In Long Beach, dryer vents that exit near the waterfront or through coastal-facing exterior walls may also accumulate salt and debris at the cap faster than inland installations.",
  },
  {
    q: "Why is lint buildup a problem?",
    a: "Lint accumulates throughout the duct with every drying cycle. As it builds, airflow decreases and the dryer runs hotter and longer. This shortens the appliance lifespan, increases energy use, and at higher levels of accumulation creates fire risk. The U.S. Fire Administration reports approximately 2,900 residential dryer fires annually, with failure to clean the vent as the primary contributing factor.",
  },
  {
    q: "Can coastal humidity affect how quickly my Long Beach dryer vent clogs?",
    a: "Yes. Damp lint compacts more densely than dry lint and adheres to duct walls more readily. Long Beach&apos;s marine humidity means this is a practical consideration — homeowners accustomed to drier climates sometimes find their vents need attention sooner than expected after moving to the coast.",
  },
  {
    q: "What does dryer vent cleaning include?",
    a: "Rotary brush cleaning of the full duct from the dryer connection to the exterior cap, high-powered vacuum extraction at the dryer end, exterior cap inspection and clearing, and a check of the dryer-to-wall flexible connector for kinks or loose fittings. We confirm airflow at the exterior termination before completing the visit.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dryer Vent Cleaning Long Beach",
  serviceType: "Dryer Vent Cleaning",
  description: "Dryer vent cleaning in Long Beach for lint buildup, clogged dryer vents, poor airflow, and overheating dryers.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: { "@type": "PostalAddress", addressLocality: "Long Beach", addressRegion: "CA", addressCountry: "US" },
  },
  areaServed: { "@type": "City", name: "Long Beach" },
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

export default function DryerVentCleaningLongBeachPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/areas/" },
            { label: "Long Beach", href: "/areas/long-beach/" },
            { label: "Dryer Vent Cleaning" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Technician providing residential dryer vent and chimney service in Long Beach" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Long Beach
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Dryer Vent Cleaning in Long Beach, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Lint removal and airflow restoration for Long Beach residential homes. Coastal humidity compacts lint faster than in drier climates — annual cleaning keeps dryers safe and efficient.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact/" className="btn-primary">Request Free Estimate</Link>
              <a href="#estimate-form" className="btn-secondary">Get Online Quote</a>
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
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  Long Beach&apos;s marine climate has a specific effect on dryer vent maintenance. Coastal humidity means lint in the duct stays damp rather than dry — damp lint compacts into a denser restriction than dry lint would produce. Homeowners who have moved from drier parts of California sometimes find their vent needs service sooner than they expected, for exactly this reason.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Annual cleaning is the practical answer. If the dryer is already showing signs of restriction — longer drying times, excess heat, or a burning smell — cleaning is needed now rather than at the next annual visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Signs Your Dryer Vent Needs Cleaning</h2>
                <ul className="space-y-2">
                  {[
                    "Clothes take two or more cycles to dry completely",
                    "The dryer runs hot to the touch during operation",
                    "A burning smell occurs at any point during the drying cycle",
                    "The dryer shuts off before the cycle ends",
                    "Airflow at the exterior vent cap is weak or absent when the dryer is running",
                    "Lint or debris visible around the exterior cap",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" className="shrink-0 mt-1" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Dryer Vent Cleaning Includes</h2>
                <ul className="space-y-3">
                  {[
                    { title: "Rotary brush cleaning, full duct length", desc: "We clean from the dryer connection to the exterior cap, removing lint and debris throughout the run." },
                    { title: "Vacuum extraction at the dryer", desc: "All dislodged material is captured at the dryer end — not redistributed in the duct or deposited in the room." },
                    { title: "Exterior cap inspection and clearing", desc: "Long Beach exterior vent caps near the waterfront accumulate salt, lint, and debris. We clear the cap and confirm it is opening freely." },
                    { title: "Duct connection check", desc: "The flexible connector between the dryer and the wall duct is checked for kinks, loose connections, and signs of damage." },
                    { title: "Airflow confirmation", desc: "We confirm measurable airflow at the exterior termination before completing the visit." },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 bg-[#F8FAFC] border border-gray-100 rounded-xl p-4">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" className="shrink-0 mt-1" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                        <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Schedule dryer vent cleaning in Long Beach</p>
                <p className="text-gray-300 text-sm mb-4">We serve Long Beach, Belmont Shore, Naples, Signal Hill, Bixby Knolls, North Long Beach, and surrounding neighborhoods.</p>
                <Link href="/contact/" className="btn-primary inline-block">Request Free Estimate</Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Dryer Vent Cleaning (All California)", href: "/services/dryer-vent-cleaning/" },
                    { name: "Dryer Vent Blockage Removal", href: "/services/dryer-vent-blockage-removal/" },
                    { name: "Dryer Vent Lint Removal", href: "/services/dryer-vent-lint-removal/" },
                    { name: "Chimney Cleaning in Long Beach", href: "/areas/long-beach/chimney-cleaning/" },
                    { name: "Chimney Sweep in Long Beach", href: "/areas/long-beach/chimney-sweep/" },
                    { name: "Long Beach service area", href: "/areas/long-beach/" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors">
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm heading="Get a Free Estimate" subheading="Dryer vent cleaning in Long Beach. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Long Beach</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/long-beach/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/long-beach/chimney-repair/" },
                    { name: "Chimney Sweep", href: "/areas/long-beach/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/long-beach/fireplace-repair/" },
                    { name: "All Long Beach Services", href: "/areas/long-beach/" },
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
                <a href={`mailto:${SITE.email}`} className="text-orange-400 text-sm font-bold hover:text-orange-300 transition-colors break-all">{SITE.email}</a>
                <p className="text-xs text-gray-400 mt-2">We reply within one business day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} heading="Dryer Vent Cleaning Long Beach — FAQ" addSchema={false} />
      <CTABanner heading="Schedule dryer vent cleaning in Long Beach" />
    </>
  );
}
