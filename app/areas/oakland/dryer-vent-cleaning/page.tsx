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
  title: "Dryer Vent Cleaning Oakland | Lint & Airflow Service",
  description:
    "Dryer vent cleaning in Oakland for lint buildup, clogged dryer vents, poor airflow, overheating dryers, and long drying times. East Bay residential service.",
  alternates: { canonical: "/areas/oakland/dryer-vent-cleaning/" },
  openGraph: {
    title: "Dryer Vent Cleaning Oakland | Lint & Airflow Service",
    description:
      "Dryer vent cleaning in Oakland for lint buildup, clogged dryer vents, poor airflow, overheating dryers, and long drying times.",
    url: `${SITE.baseUrl}/areas/oakland/dryer-vent-cleaning/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dryer Vent Cleaning Oakland | Lint & Airflow Service",
    description: "Dryer vent cleaning in Oakland — lint removal, airflow restoration, older home duct configurations. Free estimate.",
  },
};

const FAQS = [
  {
    q: "How often should I clean dryer vents in Oakland?",
    a: "Once per year is appropriate for most Oakland households. Older homes in Rockridge, Temescal, and the flatlands sometimes have dryer vent configurations that were retrofitted into existing structures — creating longer runs or additional bends that accumulate lint faster than a standard short exterior-wall installation. If your dryer takes more than one cycle to dry a normal load, cleaning is needed regardless of schedule.",
  },
  {
    q: "What are signs my dryer vent needs cleaning?",
    a: "The clearest signs are: clothes taking two or more full drying cycles, the dryer exterior being hot during operation, a burning smell at any point in the cycle, the dryer shutting off before the cycle ends, or reduced airflow visible at the exterior vent cap. Oakland&apos;s Bay Area humidity means damp lint in older flexible duct sections can compact into a denser restriction than dry lint alone.",
  },
  {
    q: "Why is lint buildup a problem?",
    a: "Lint accumulates throughout the duct with every drying cycle. As it builds, airflow decreases and the dryer runs hotter and longer to compensate. This shortens appliance life, increases energy use, and in severe cases creates fire risk. The U.S. Fire Administration reports approximately 2,900 residential dryer fires annually — failure to clean the vent is the leading contributing factor.",
  },
  {
    q: "Do Oakland&apos;s older homes have different dryer vent issues?",
    a: "Yes. Pre-1950 homes in Oakland were not designed with dryer vents — they were added at various points during renovations. This sometimes produces non-standard routing: longer horizontal runs, connections in tight spaces, or duct materials that are no longer code-compliant. We assess the duct configuration during every visit and note any concerns in the written report.",
  },
  {
    q: "What does dryer vent cleaning include?",
    a: "Rotary brush cleaning of the full duct length from the dryer connection to the exterior cap, high-powered vacuum extraction at the dryer end, exterior cap inspection and clearing, and a check of the dryer-to-wall connection for kinks or loose fittings. We confirm airflow at the exterior termination before completing the visit.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dryer Vent Cleaning Oakland",
  serviceType: "Dryer Vent Cleaning",
  description: "Dryer vent cleaning in Oakland for lint buildup, clogged dryer vents, poor airflow, and overheating dryers.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: { "@type": "PostalAddress", addressLocality: "Oakland", addressRegion: "CA", addressCountry: "US" },
  },
  areaServed: { "@type": "City", name: "Oakland" },
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

export default function DryerVentCleaningOaklandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/areas/" },
            { label: "Oakland", href: "/areas/oakland/" },
            { label: "Dryer Vent Cleaning" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Technician providing residential dryer vent and chimney service in Oakland" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Oakland
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Dryer Vent Cleaning in Oakland, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Lint removal and airflow restoration for Oakland&apos;s older homes and East Bay properties — including non-standard duct configurations common in pre-1950 construction.
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
                  Oakland&apos;s older housing stock presents dryer vent configurations that range from straightforward to genuinely complex. Pre-1950 bungalows and craftsman homes were not built with dryer vents — they were retrofitted during kitchen or laundry room renovations at different points over the decades. The result is sometimes a duct that takes an indirect route to the exterior, with more bends and a longer run than a new-construction installation would have.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Annual cleaning is the right maintenance interval for Oakland homes regardless of configuration. Bay Area humidity means lint in older flexible duct sections stays damp, which causes it to compact more densely than dry lint would — creating restrictions that reduce airflow faster than in drier climates.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Signs Your Dryer Vent Needs Cleaning</h2>
                <ul className="space-y-2">
                  {[
                    "Clothes require two or more cycles to dry completely",
                    "The dryer exterior is hot during operation",
                    "A burning smell occurs during any part of the cycle",
                    "The dryer shuts off automatically before completing the cycle",
                    "Airflow at the exterior vent cap is weak or absent during operation",
                    "Lint or debris visible around the exterior vent cap",
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
                    { title: "Rotary brush cleaning, full duct length", desc: "We clean from the dryer connection to the exterior cap, dislodging lint and debris throughout the run." },
                    { title: "Vacuum extraction at the dryer", desc: "All dislodged material is captured at the dryer end, not redistributed in the duct." },
                    { title: "Exterior cap inspection and clearing", desc: "Bird nests, debris, and lint accumulation at the cap are cleared. A blocked cap is the most common restriction in Oakland&apos;s older homes." },
                    { title: "Duct connection check", desc: "Loose or kinked flexible connector between the dryer and wall duct is a secondary restriction. We inspect and adjust as needed." },
                    { title: "Airflow confirmation", desc: "We verify measurable airflow at the exterior termination before completing the visit." },
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
                <p className="font-semibold text-lg mb-2">Annual dryer vent service in Oakland</p>
                <p className="text-gray-300 text-sm mb-4">We serve Oakland, Rockridge, Temescal, Montclair, Fruitvale, Jack London Square, and surrounding East Bay neighborhoods.</p>
                <Link href="/contact/" className="btn-primary inline-block">Request Free Estimate</Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Dryer Vent Cleaning (All California)", href: "/services/dryer-vent-cleaning/" },
                    { name: "Dryer Vent Blockage Removal", href: "/services/dryer-vent-blockage-removal/" },
                    { name: "Dryer Vent Lint Removal", href: "/services/dryer-vent-lint-removal/" },
                    { name: "Chimney Cleaning in Oakland", href: "/areas/oakland/chimney-cleaning/" },
                    { name: "Chimney Sweep in Oakland", href: "/areas/oakland/chimney-sweep/" },
                    { name: "Oakland service area", href: "/areas/oakland/" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors">
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm heading="Get a Free Estimate" subheading="Dryer vent cleaning in Oakland. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Oakland</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/oakland/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/oakland/chimney-repair/" },
                    { name: "Chimney Sweep", href: "/areas/oakland/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/oakland/fireplace-repair/" },
                    { name: "All Oakland Services", href: "/areas/oakland/" },
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

      <FAQSection faqs={FAQS} heading="Dryer Vent Cleaning Oakland — FAQ" addSchema={false} />
      <CTABanner heading="Schedule dryer vent cleaning in Oakland" />
    </>
  );
}
