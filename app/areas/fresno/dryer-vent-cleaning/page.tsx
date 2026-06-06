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
  title: "Dryer Vent Cleaning Fresno | Lint & Airflow Service",
  description:
    "Dryer vent cleaning in Fresno for lint buildup, clogged dryer vents, poor airflow, overheating dryers, and long drying times. Central Valley residential service.",
  alternates: { canonical: "/areas/fresno/dryer-vent-cleaning/" },
  openGraph: {
    title: "Dryer Vent Cleaning Fresno | Lint & Airflow Service",
    description:
      "Dryer vent cleaning in Fresno for lint buildup, clogged dryer vents, poor airflow, overheating dryers, and long drying times.",
    url: `${SITE.baseUrl}/areas/fresno/dryer-vent-cleaning/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dryer Vent Cleaning Fresno | Lint & Airflow Service",
    description: "Dryer vent cleaning in Fresno — lint removal, airflow restoration, fire prevention. Free estimate.",
  },
};

const FAQS = [
  {
    q: "How often should I clean dryer vents in Fresno?",
    a: "Once per year is appropriate for most Fresno households. In the Central Valley, dryer vents also accumulate fine agricultural dust alongside lint — this combination can compact more densely than lint alone, meaning the vent may restrict airflow faster than in areas with cleaner ambient air. If your dryer takes more than one cycle to dry a normal load, that is a practical sign cleaning is needed regardless of how recently it was last done.",
  },
  {
    q: "What are signs my dryer vent needs cleaning in Fresno?",
    a: "Clothes taking two or more cycles to dry, the dryer exterior becoming hot during operation, a burning smell during any part of the drying cycle, the dryer shutting off before the cycle completes, or reduced airflow at the exterior vent cap are all signs the vent needs attention. In Fresno&apos;s summer heat, a restricted vent runs hotter than the appliance is designed to tolerate.",
  },
  {
    q: "Why is lint buildup a problem?",
    a: "Lint accumulates at every bend and throughout the length of the duct. As it builds up, airflow decreases and the dryer must work harder and hotter to complete the same drying cycle. This shortens appliance lifespan, increases energy use, and — when accumulation becomes significant — creates fire risk. The U.S. Fire Administration reports approximately 2,900 residential dryer fires annually, with failure to clean the vent as the leading contributing factor.",
  },
  {
    q: "What does dryer vent cleaning include?",
    a: "We use rotary brush equipment to clean the full duct length from the dryer connection to the exterior cap, with high-powered vacuum extraction at the dryer end to capture all dislodged material. We inspect the exterior cap for blockages, check the dryer-to-wall connection for kinks or loose fittings, and confirm airflow at the termination before completing the visit.",
  },
  {
    q: "Can you clean a dryer vent that exits through the roof in Fresno?",
    a: "Yes. Roof-exit dryer vents exist in some Fresno homes, particularly in older layouts where the laundry room was located in an interior room without easy wall access. The cap on the roof is often the first point of blockage — it requires clearing as part of the cleaning service.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dryer Vent Cleaning Fresno",
  serviceType: "Dryer Vent Cleaning",
  description: "Dryer vent cleaning in Fresno for lint buildup, clogged dryer vents, poor airflow, and overheating dryers.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: { "@type": "PostalAddress", addressLocality: "Fresno", addressRegion: "CA", addressCountry: "US" },
  },
  areaServed: { "@type": "City", name: "Fresno" },
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

export default function DryerVentCleaningFresnoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/areas/" },
            { label: "Fresno", href: "/areas/fresno/" },
            { label: "Dryer Vent Cleaning" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Technician providing residential dryer vent and chimney service in Fresno" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Fresno
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Dryer Vent Cleaning in Fresno, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Lint removal and airflow restoration for Fresno homes. Central Valley dust compounds lint accumulation — annual cleaning keeps dryers efficient and reduces fire risk.
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
                  Dryer vent cleaning is straightforward maintenance, but the Central Valley&apos;s dust environment gives Fresno homes a specific consideration that most of California does not share. Agricultural dust and fine particulate — common year-round in the San Joaquin Valley — enters dryer vent systems and mixes with lint, producing a denser material than lint alone. This can restrict airflow sooner between service intervals than homeowners accustomed to other climates might expect.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Fresno&apos;s summer heat also raises the stakes for a restricted vent. A partially blocked duct running through an attic that reaches 140°F in July creates conditions that are harder on the dryer and represent a meaningfully higher fire risk than the same restriction in a cooler climate.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Signs Your Dryer Vent Needs Cleaning</h2>
                <ul className="space-y-2">
                  {[
                    "Clothes take two or more full drying cycles",
                    "Dryer exterior is hot to the touch during operation",
                    "Laundry room is noticeably warmer when the dryer runs",
                    "Burning smell at any point during a drying cycle",
                    "Dryer shuts off automatically before the cycle ends",
                    "Lint or dust accumulation visible around the exterior vent cap",
                    "Reduced or no airflow felt at the exterior vent during operation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" className="shrink-0 mt-1" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Why Lint Buildup Is a Problem</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Lint accumulates throughout the duct length with every drying cycle — not just in the lint trap. As it builds, airflow through the duct decreases and the dryer compensates by running at higher temperatures for longer. This creates a progressive problem: more heat, more potential for ignition, shorter appliance life, and higher energy costs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  In Fresno, the dust content in the lint makes it denser than in cleaner-air environments, which means compaction occurs faster. Annual cleaning prevents this from progressing to the point where it becomes a safety issue.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Dryer Vent Cleaning Includes</h2>
                <ul className="space-y-2">
                  {[
                    "Rotary brush cleaning of the full duct length to the exterior cap",
                    "High-powered vacuum extraction at the dryer connection",
                    "Exterior vent cap inspection and clearing",
                    "Dryer-to-wall connection check for kinks or loose fittings",
                    "Airflow confirmation at the exterior termination after cleaning",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" className="shrink-0 mt-1" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Schedule dryer vent cleaning in Fresno</p>
                <p className="text-gray-300 text-sm mb-4">Annual service keeps Fresno dryers running efficiently in the valley heat. We cover Fresno, Clovis, Tower District, Woodward Park, and surrounding areas.</p>
                <Link href="/contact/" className="btn-primary inline-block">Request Free Estimate</Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Dryer Vent Cleaning (All California)", href: "/services/dryer-vent-cleaning/" },
                    { name: "Dryer Vent Blockage Removal", href: "/services/dryer-vent-blockage-removal/" },
                    { name: "Dryer Vent Lint Removal", href: "/services/dryer-vent-lint-removal/" },
                    { name: "Chimney Cleaning in Fresno", href: "/areas/fresno/chimney-cleaning/" },
                    { name: "Chimney Sweep in Fresno", href: "/areas/fresno/chimney-sweep/" },
                    { name: "Fresno service area", href: "/areas/fresno/" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors">
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm heading="Get a Free Estimate" subheading="Dryer vent cleaning in Fresno. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Fresno</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/fresno/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/fresno/chimney-repair/" },
                    { name: "Chimney Sweep", href: "/areas/fresno/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/fresno/fireplace-repair/" },
                    { name: "All Fresno Services", href: "/areas/fresno/" },
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

      <FAQSection faqs={FAQS} heading="Dryer Vent Cleaning Fresno — FAQ" addSchema={false} />
      <CTABanner heading="Schedule dryer vent cleaning in Fresno" />
    </>
  );
}
