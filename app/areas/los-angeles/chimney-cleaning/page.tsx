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
  title: "Chimney Cleaning Los Angeles | Fireplace & Flue Cleaning",
  description:
    "Professional chimney cleaning in Los Angeles for soot, creosote buildup, fireplace odors, poor draft, and annual chimney maintenance.",
  alternates: { canonical: "/areas/los-angeles/chimney-cleaning/" },
  openGraph: {
    title: "Chimney Cleaning Los Angeles | Fireplace & Flue Cleaning",
    description:
      "Professional chimney cleaning in Los Angeles for soot, creosote buildup, fireplace odors, poor draft, and annual chimney maintenance.",
    url: `${SITE.baseUrl}/areas/los-angeles/chimney-cleaning/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Cleaning Los Angeles | Fireplace & Flue Cleaning",
    description:
      "Chimney cleaning in Los Angeles for creosote, soot, fireplace odors, and annual flue maintenance. Free estimate.",
  },
};

const FAQS = [
  {
    q: "How often should I schedule chimney cleaning in Los Angeles?",
    a: "Most wood-burning fireplace owners in Los Angeles should clean once a year. SCAQMD curtailment days reduce how much wood you can burn, which lowers creosote accumulation compared to colder climates — but annual cleaning still lets us catch buildup before it reaches a dangerous stage. Gas fireplace owners on light-use schedules can often extend to every two years.",
  },
  {
    q: "What are signs my chimney needs cleaning?",
    a: "Common signs include a fireplace odor that lingers during warm weather, slow draft, smoke entering the room during a fire, visible black staining around the damper plate, and heavy soot visible inside the firebox. A crackling sound in a cold flue can also indicate a past deposit issue.",
  },
  {
    q: "Is chimney cleaning the same as chimney sweep?",
    a: "Not exactly. A cleaning removes soot and creosote deposits from the flue and firebox. A chimney sweep adds a formal NFPA 211 Level 1 inspection with a signed, written report. If you are buying or selling a home in Los Angeles, you need a Level 2 inspection — not just a cleaning.",
  },
  {
    q: "Can chimney cleaning help with fireplace odors?",
    a: "Yes. Creosote and soot absorb moisture and produce a persistent smell, particularly in summer when unused fireplaces draw warm air down through the flue. Cleaning removes the source. If odors persist after cleaning, a damper seal or chimney cap may also be needed.",
  },
  {
    q: "Do you also inspect the chimney during cleaning?",
    a: "We note any damage we observe during the cleaning visit and flag it for you. A formal NFPA 211 Level 1 inspection — with a written condition report — is a separate service. If we find something that warrants a closer look, we will say so before we leave.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Cleaning Los Angeles",
  serviceType: "Chimney Cleaning",
  description:
    "Professional chimney cleaning in Los Angeles for soot, creosote buildup, fireplace odors, poor draft, and annual chimney maintenance.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "City", name: "Los Angeles" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.baseUrl}/` },
    { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE.baseUrl}/areas/` },
    { "@type": "ListItem", position: 3, name: "Los Angeles", item: `${SITE.baseUrl}/areas/los-angeles/` },
    { "@type": "ListItem", position: 4, name: "Chimney Cleaning", item: `${SITE.baseUrl}/areas/los-angeles/chimney-cleaning/` },
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

export default function ChimneyCleaningLosAngelesPage() {
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
              { label: "Service Areas", href: "/areas/" },
              { label: "Los Angeles", href: "/areas/los-angeles/" },
              { label: "Chimney Cleaning" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Technician performing chimney cleaning inside a Los Angeles fireplace"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Los Angeles
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Cleaning in Los Angeles, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Professional chimney flue cleaning for Los Angeles homeowners — removing creosote, soot, and debris before it affects fireplace performance or becomes a fire risk.
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
                  Los Angeles has an estimated 400,000 wood-burning and gas fireplaces — most in older Craftsman bungalows, Mid-Century ranches, and Spanish Colonial homes built before 1960. Chimney cleaning removes the creosote and soot that accumulates with each fire, preventing dangerous buildup and keeping the flue clear for proper draft. For most wood-burning fireplace owners in the city, annual cleaning is the right schedule.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  If you have not had a cleaning in three or more years, or if you are buying a home with an older fireplace, start with a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  before scheduling a routine cleaning. Cleaning removes deposits — it does not fix liner cracks, damaged crowns, or structural problems.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Why Chimney Cleaning Matters in Los Angeles Homes
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The South Coast Air Quality Management District issues wood-burning curtailment days during winter months, which means most Angelinos burn less wood per season than homeowners in colder climates. Less burning produces less creosote — but not zero. A gas fireplace that rarely gets used can still accumulate dust, debris, and moisture inside the flue.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Older Los Angeles homes — particularly those built before 1960 — often have unlined clay tile flues that develop hairline cracks over time. Creosote can collect in those cracks and harden into Stage 2 or Stage 3 deposits that resist standard brush cleaning. A technician familiar with these older systems will recognize the difference.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Homes near the coast in areas like Pacific Palisades, Malibu, and the South Bay deal with salt-air corrosion of metal components. Damper plates, firebox hardware, and chimney caps corrode faster in marine air. A cleaning visit is also an opportunity to identify this deterioration early.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Signs Your Chimney May Need Cleaning
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Fireplace odor",
                      desc: "Particularly during warm or humid weather. Creosote and soot absorb moisture and produce a persistent smell even when the fireplace is not in use.",
                    },
                    {
                      title: "Slow draft or difficult ignition",
                      desc: "Fires that are hard to start or that produce more smoke than usual may indicate restricted airflow from buildup inside the flue.",
                    },
                    {
                      title: "Smoke entering the room",
                      desc: "Partial blockage in the chimney flue can prevent proper exhaust flow, pushing smoke back through the damper opening into the living space.",
                    },
                    {
                      title: "Visible soot and black deposits",
                      desc: "Heavy black buildup inside the firebox, around the damper, or on the fireplace surround are visible indicators of accumulation that needs removal.",
                    },
                    {
                      title: "More than a year since the last cleaning",
                      desc: "If you use your fireplace regularly through the heating season and have not had a cleaning in over a year, schedule one before the next burn season.",
                    },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 bg-[#F8FAFC] border border-gray-100 rounded-xl p-4"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="2.5"
                        className="shrink-0 mt-1"
                        aria-hidden="true"
                      >
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
                  What Our Chimney Cleaning Service Includes
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A standard chimney cleaning visit covers the full flue system from the firebox to the cap. We begin with a visual check of the firebox, damper, and accessible flue before any work starts. Drop cloths protect the floor and hearth, and the firebox opening is sealed before cleaning to prevent ash and soot from entering the room.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Industry-grade rotary brushes clear creosote and soot from the full flue length. A commercial HEPA vacuum captures all loosened debris — no ash clouds, no mess left behind. When the cleaning is complete, you receive written notes on the condition of the fireplace and any issues that need further attention.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If we find Stage 2 or Stage 3 creosote that will not respond to brushing, we will tell you. Heavy deposits may require{" "}
                  <Link href="/services/creosote-removal/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chemical creosote treatment
                  </Link>{" "}
                  alongside or before brushing. We do not brush past the problem and call it done.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Chimney Cleaning vs. Chimney Sweep
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  These terms are used interchangeably, but they describe different service levels. A cleaning removes deposits from the flue and firebox. A{" "}
                  <Link href="/services/chimney-sweep/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney sweep
                  </Link>{" "}
                  adds a formal NFPA 211 Level 1 inspection — a systematic check of all accessible chimney components with a signed written report. The inspection identifies cracks, deterioration, and blocked areas that a cleaning alone will not address.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For Los Angeles homeowners involved in a home sale or refinance, a Level 2 inspection is required under NFPA 211 — and it includes a video camera scan of the full flue. If that is your situation, book a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  rather than a standard cleaning.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Ready to schedule chimney cleaning in Los Angeles?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and we will confirm availability for your neighborhood.
                </p>
                <Link href="/contact/" className="btn-primary inline-block">
                  Request Free Estimate
                </Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Chimney Cleaning (All California)", href: "/services/chimney-cleaning/" },
                    { name: "Chimney Sweep", href: "/services/chimney-sweep/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Creosote Removal", href: "/services/creosote-removal/" },
                    { name: "Los Angeles service area", href: "/areas/los-angeles/" },
                  ].map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors"
                    >
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm
                heading="Get a Free Estimate"
                subheading="Chimney cleaning in Los Angeles. We respond within 2 business hours."
                dark={false}
              />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">
                  More in Los Angeles
                </h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Sweep", href: "/areas/los-angeles/chimney-sweep/" },
                    { name: "Chimney Repair", href: "/areas/los-angeles/chimney-repair/" },
                    { name: "Fireplace Repair", href: "/areas/los-angeles/fireplace-repair/" },
                    { name: "Dryer Vent Cleaning", href: "/areas/los-angeles/dryer-vent-cleaning/" },
                    { name: "All LA Services", href: "/areas/los-angeles/" },
                  ].map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="text-sm text-gray-700 hover:text-orange-600 transition-colors flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-orange-400 shrink-0" />
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-5 text-white text-center">
                <p className="text-sm font-semibold mb-1">Prefer to write?</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-orange-400 text-sm font-bold hover:text-orange-300 transition-colors break-all"
                >
                  {SITE.email}
                </a>
                <p className="text-xs text-gray-400 mt-2">We reply within one business day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} heading="Chimney Cleaning Los Angeles — FAQ" addSchema={false} />
      <CTABanner heading="Schedule chimney cleaning in Los Angeles" />
    </>
  );
}
