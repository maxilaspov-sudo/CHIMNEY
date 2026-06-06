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
  title: "Dryer Vent Cleaning Sacramento | Lint Removal & Fire Prevention",
  description:
    "Dryer vent cleaning in Sacramento. Removes lint buildup, reduces fire risk, and improves drying efficiency. Free estimate for Sacramento homes.",
  alternates: { canonical: "/areas/sacramento/dryer-vent-cleaning/" },
  openGraph: {
    title: "Dryer Vent Cleaning Sacramento | Lint Removal & Fire Prevention",
    description:
      "Dryer vent cleaning in Sacramento. Removes lint buildup, reduces fire risk, and improves drying efficiency. Free estimate for Sacramento homes.",
    url: `${SITE.baseUrl}/areas/sacramento/dryer-vent-cleaning/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dryer Vent Cleaning Sacramento | Lint Removal & Fire Prevention",
    description:
      "Dryer vent cleaning in Sacramento — lint removal, fire prevention, improved efficiency. Free estimate.",
  },
};

const FAQS = [
  {
    q: "How often should I clean dryer vents in Sacramento?",
    a: "Once per year is appropriate for most Sacramento households. If your dryer takes more than one cycle to dry a normal load, that is a practical indicator that cleaning is needed regardless of schedule. Homes in Sacramento with longer duct runs — including two-story homes or homes where the vent exhausts through a side wall rather than straight out — may accumulate lint faster and benefit from more frequent service.",
  },
  {
    q: "Does Sacramento's heat affect dryer vent safety?",
    a: "Sacramento&apos;s summer heat means dryer vents can reach elevated temperatures even before the dryer runs. A vent that is already warm from ambient heat and then restricted by lint buildup runs hotter than the dryer is designed to tolerate. This contributes to shorter appliance lifespan and, in severe cases, elevated fire risk. Annual cleaning keeps the vent clear and operating as designed.",
  },
  {
    q: "What happens if I do not clean the dryer vent?",
    a: "Lint accumulates at every bend, connection, and throughout the duct length. As accumulation increases, airflow decreases and the dryer must work harder and hotter to complete the same drying cycle. This shortens the appliance&apos;s life, increases energy use, and — when accumulation becomes significant — creates fire risk. The U.S. Fire Administration reports approximately 2,900 dryer fires annually, with failure to clean as the leading cause.",
  },
  {
    q: "How long does dryer vent cleaning take?",
    a: "Most residential dryer vent cleanings in Sacramento take 45 to 90 minutes. Longer duct runs, multiple bends, or difficult access points may require more time. We confirm airflow before completing the visit.",
  },
  {
    q: "Can you clean a dryer vent that exits through the roof?",
    a: "Yes. Roof-exit dryer vents are less common but do exist in some Sacramento homes. They require more care because the vent cap on the roof is often the first point of blockage — bird nests, debris, and lint accumulation at the cap can restrict or fully block the vent. We address the cap as part of the cleaning service.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dryer Vent Cleaning Sacramento",
  serviceType: "Dryer Vent Cleaning",
  description:
    "Dryer vent cleaning in Sacramento. Removes lint buildup, reduces fire risk, and improves drying efficiency.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sacramento",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "City", name: "Sacramento" },
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

export default function DryerVentCleaningSacramentoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/areas/" },
              { label: "Sacramento", href: "/areas/sacramento/" },
              { label: "Dryer Vent Cleaning" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Technician performing dryer vent cleaning service at a Sacramento residential property"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Sacramento
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Dryer Vent Cleaning in Sacramento, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Lint removal, airflow restoration, and fire risk reduction for Sacramento homes. Annual service keeps dryers running efficiently and safely in the valley heat.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact/" className="btn-primary">
                Request Free Estimate
              </Link>
              <a href="#estimate-form" className="btn-secondary">
                Get Online Quote
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
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  Dryer vent cleaning is one of the simpler home maintenance tasks in terms of what it involves — but one of the easier ones to skip. In Sacramento, where summer heat already raises ambient temperatures in attics and walls where vent ducts run, a partially blocked vent creates conditions that run hotter than the dryer is designed to tolerate. Annual cleaning addresses this before it becomes a problem.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  If you are already noticing that clothes require more than one cycle to fully dry, or that the dryer exterior feels hot during operation, those are signs the vent needs cleaning now rather than at the next scheduled visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  What the Service Covers
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Rotary brush cleaning from connection to cap",
                      desc: "We use rotary brush equipment sized to your duct diameter, cleaning the full length from the dryer connection to the exterior cap.",
                    },
                    {
                      title: "Vacuum extraction at the dryer end",
                      desc: "Dislodged lint is captured by high-powered vacuum at the dryer side — it does not stay in the duct or enter the room.",
                    },
                    {
                      title: "Exterior cap inspection and cleaning",
                      desc: "Sacramento&apos;s dry environment means debris, dust, and occasional bird nesting material accumulates at exterior vent caps. We clear the cap and confirm free airflow at the termination.",
                    },
                    {
                      title: "Duct connection check at the dryer",
                      desc: "Loose, kinked, or crushed flexible connector between the dryer and the wall duct is a common secondary restriction. We inspect and straighten as needed.",
                    },
                    {
                      title: "Airflow confirmation after cleaning",
                      desc: "We verify measurable airflow improvement before completing the visit.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 bg-[#F8FAFC] border border-gray-100 rounded-xl p-4">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" className="shrink-0 mt-1" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                        <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Signs Your Sacramento Dryer Vent Needs Cleaning
                </h2>
                <ul className="space-y-2">
                  {[
                    "Clothes take two or more full cycles to dry",
                    "Dryer runs hot to the touch during operation",
                    "Laundry room feels noticeably warmer when the dryer runs",
                    "Clothes have a musty or slightly burned smell after drying",
                    "Burning smell during any part of the drying cycle",
                    "Dryer automatically shuts off before the cycle completes",
                    "Lint visible around the exterior vent cap",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" className="shrink-0 mt-1" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Duct Material and Configuration in Sacramento Homes
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Many older Sacramento homes, particularly in Midtown and Curtis Park, have dryer vents that were originally installed with flexible plastic or foil ducting — materials that are no longer code-compliant and that collapse and restrict airflow more readily than rigid metal duct. If we identify this during a cleaning visit, we will note it in our report with the relevant code reference.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Newer construction in Natomas, Elk Grove, and newer East Sacramento developments typically uses rigid metal or semi-rigid aluminum — these are easier to clean and maintain their shape over time. Even rigid duct accumulates lint at bends and near the cap, so annual cleaning is still appropriate regardless of duct material.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Schedule dryer vent cleaning in Sacramento</p>
                <p className="text-gray-300 text-sm mb-4">
                  One visit per year keeps the vent clear and the dryer running at full efficiency through Sacramento&apos;s hot summers.
                </p>
                <Link href="/contact/" className="btn-primary inline-block">
                  Request Free Estimate
                </Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Dryer Vent Cleaning (All California)", href: "/services/dryer-vent-cleaning/" },
                    { name: "Chimney Cleaning in Sacramento", href: "/areas/sacramento/chimney-cleaning/" },
                    { name: "Chimney Sweep in Sacramento", href: "/areas/sacramento/chimney-sweep/" },
                    { name: "Chimney Repair in Sacramento", href: "/areas/sacramento/chimney-repair/" },
                    { name: "Fireplace Repair in Sacramento", href: "/areas/sacramento/fireplace-repair/" },
                    { name: "Sacramento service area", href: "/areas/sacramento/" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors">
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm heading="Get a Free Estimate" subheading="Dryer vent cleaning in Sacramento. We respond within 2 business hours." dark={false} />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Sacramento</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/sacramento/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/sacramento/chimney-repair/" },
                    { name: "Chimney Sweep", href: "/areas/sacramento/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/sacramento/fireplace-repair/" },
                    { name: "All Sacramento Services", href: "/areas/sacramento/" },
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

      <FAQSection faqs={FAQS} heading="Dryer Vent Cleaning Sacramento — FAQ" addSchema={false} />
      <CTABanner heading="Schedule dryer vent cleaning in Sacramento" />
    </>
  );
}
