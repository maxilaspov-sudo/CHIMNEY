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
  title: "Chimney Cleaning San Diego | Fireplace & Flue Cleaning",
  description:
    "Professional chimney cleaning in San Diego for soot, creosote buildup, fireplace odors, poor draft, and annual chimney maintenance.",
  alternates: { canonical: "/areas/san-diego/chimney-cleaning/" },
  openGraph: {
    title: "Chimney Cleaning San Diego | Fireplace & Flue Cleaning",
    description:
      "Professional chimney cleaning in San Diego for soot, creosote buildup, fireplace odors, poor draft, and annual chimney maintenance.",
    url: `${SITE.baseUrl}/areas/san-diego/chimney-cleaning/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Cleaning San Diego | Fireplace & Flue Cleaning",
    description:
      "Chimney cleaning in San Diego for creosote, soot, fireplace odors, and annual flue maintenance. Free estimate.",
  },
};

const FAQS = [
  {
    q: "How often should I schedule chimney cleaning in San Diego?",
    a: "Once a year is the standard recommendation for any wood-burning fireplace in regular use. San Diego's mild winters mean most homeowners burn less wood per season than people in colder climates — but annual cleaning still matters because creosote accumulates even from modest use, and the dry brush topography of eastern San Diego County makes any unaddressed buildup a meaningful fire risk. Coastal homes in La Jolla, Del Mar, and Coronado should also have their damper hardware and cap checked annually for marine air corrosion.",
  },
  {
    q: "What are signs my chimney needs cleaning?",
    a: "Persistent fireplace odor during warm months is the most common sign — soot and creosote absorb moisture and release a musty or smoky smell even when the fireplace is not in use. Slow draft, visible black deposits around the damper plate, and smoke entering the room during a fire are other indicators. If you have not had a cleaning in more than two years and use your fireplace regularly, schedule one before the next fire season.",
  },
  {
    q: "Is chimney cleaning the same as chimney sweep?",
    a: "Not exactly. Chimney cleaning removes soot and creosote deposits from the flue and firebox. A chimney sweep adds a formal NFPA 211 Level 1 inspection with a signed written report documenting the condition of all accessible chimney components. For San Diego homeowners involved in a property sale, a Level 2 inspection — which includes a video camera scan of the full flue — is the required standard, not a basic cleaning.",
  },
  {
    q: "Can chimney cleaning help with fireplace odors?",
    a: "Yes. The smell comes from creosote and soot absorbing ambient moisture, particularly during San Diego's summer heat when unused fireplaces draw warm air down through the flue. Cleaning removes the source of the odor. If the smell persists after a thorough cleaning, the damper may not be sealing properly, or a chimney cap may be needed to prevent outside air from drafting down through the flue.",
  },
  {
    q: "Do you also inspect the chimney during cleaning?",
    a: "We note any visible damage during the cleaning visit and flag it in writing before we leave. A formal NFPA 211 Level 1 inspection — with a signed condition report — is a separate service. If we observe something that warrants a closer look, we will tell you what it is and what a proper inspection would involve. We do not ignore problems and walk away.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Cleaning San Diego",
  serviceType: "Chimney Cleaning",
  description:
    "Professional chimney cleaning in San Diego for soot, creosote buildup, fireplace odors, poor draft, and annual chimney maintenance.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Diego",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "City", name: "San Diego" },
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

export default function ChimneyCleaningSanDiegoPage() {
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
              { label: "San Diego", href: "/areas/san-diego/" },
              { label: "Chimney Cleaning" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Technician performing chimney cleaning inside a San Diego fireplace"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · San Diego
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Cleaning in San Diego, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Professional chimney flue cleaning for San Diego homeowners — removing creosote, soot, and debris before it affects fireplace performance or becomes a fire risk in one of California&apos;s driest counties.
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
                  San Diego&apos;s mild climate means most homeowners use their fireplace less than residents in colder parts of California — but less burning does not mean zero buildup. Creosote accumulates with every fire, and in San Diego County&apos;s dry brush environment, any unaddressed deposit in the flue is more consequential than it would be in a wetter climate. Annual chimney cleaning remains the right schedule for most wood-burning fireplaces in the region.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  If you have not had a cleaning in several years, or if you are buying a home with an older fireplace in North Park, Mission Hills, or any other neighborhood with pre-1960 construction, a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  should come before a routine cleaning. Cleaning removes deposits — it does not repair liner cracks, fix damaged crowns, or address structural problems.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Why Chimney Cleaning Matters in San Diego Homes
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  San Diego County&apos;s fire risk landscape is one of the most serious in California. Eastern communities — El Cajon, Santee, Ramona, and the Julian area — sit in zones where the San Diego Fire Department recommends annual chimney inspection as a baseline safety practice. An uncleaned flue with Stage 2 or Stage 3 creosote deposits is a direct ignition risk if a chimney fire starts, and dry-season conditions in these areas mean fires spread fast.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Coastal homes in La Jolla, Del Mar, Coronado, and Ocean Beach have a different concern: salt air. Marine air accelerates corrosion of metal chimney components — damper plates, firebox hardware, chimney caps, and flashing all deteriorate faster within a mile of the coast. A cleaning visit is also an opportunity to identify this corrosion before a cap fails or a damper plate rusts shut.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Homes in older San Diego neighborhoods — Mission Hills, North Park, South Park, Kensington — often have original clay tile flue liners that develop hairline cracks over decades. These cracks can trap creosote and are a reason to add a visual inspection to any cleaning visit in these areas.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Signs Your Chimney May Need Cleaning
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Fireplace odor during warm weather",
                      desc: "Creosote and soot absorb moisture and release a persistent smell when ambient temperatures rise. In San Diego, this is most noticeable during the late spring and summer months.",
                    },
                    {
                      title: "Slow draft or hard-to-start fires",
                      desc: "Restricted airflow from soot buildup inside the flue can make fires difficult to ignite and cause more smoke than usual at startup.",
                    },
                    {
                      title: "Smoke entering the room",
                      desc: "Partial blockage in the chimney flue — from debris, nesting material, or heavy deposits — prevents proper exhaust flow and pushes smoke back through the damper opening.",
                    },
                    {
                      title: "Visible black deposits",
                      desc: "Heavy black staining inside the firebox, around the damper plate, or on the fireplace surround are visible signs of accumulation that needs removal.",
                    },
                    {
                      title: "More than a year without service",
                      desc: "If your fireplace was used through the last heating season and has not been cleaned since, schedule a cleaning before the next one.",
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
                  A standard chimney cleaning covers the full flue system from firebox to cap. We start with a visual check of the firebox, damper, and accessible flue before any work begins. Drop cloths protect the floor and hearth, and the firebox opening is sealed before cleaning to keep soot and ash out of the room.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Industry-grade rotary brushes remove creosote and soot from the full length of the chimney flue. A commercial HEPA vacuum captures all loosened debris — no ash clouds, no mess left in the living space. When cleaning is complete, you receive written notes on the condition of the fireplace and any issues that warrant follow-up.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If we find Stage 2 or Stage 3 creosote that will not respond to brushing, we will tell you before we leave. Heavy deposits may require{" "}
                  <Link href="/services/creosote-removal/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chemical creosote treatment
                  </Link>{" "}
                  alongside standard brushing. We do not brush past the problem and call it done.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Chimney Cleaning vs. Chimney Sweep
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The terms are used interchangeably, but they describe different levels of service. A cleaning removes deposits from the flue and firebox. A{" "}
                  <Link href="/services/chimney-sweep/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney sweep
                  </Link>{" "}
                  adds a formal NFPA 211 Level 1 inspection — a systematic check of all accessible chimney components with a signed written condition report.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For San Diego homeowners involved in a home sale or refinance, a Level 2 inspection is required under NFPA 211 and includes a video camera scan of the full flue. If that applies to your situation, book a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  rather than a standard cleaning.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Ready to schedule chimney cleaning in San Diego?</p>
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
                    { name: "San Diego service area", href: "/areas/san-diego/" },
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
                subheading="Chimney cleaning in San Diego. We respond within 2 business hours."
                dark={false}
              />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">
                  More in San Diego
                </h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Sweep", href: "/areas/san-diego/chimney-sweep/" },
                    { name: "Chimney Repair", href: "/areas/san-diego/chimney-repair/" },
                    { name: "Fireplace Repair", href: "/areas/san-diego/fireplace-repair/" },
                    { name: "Dryer Vent Cleaning", href: "/areas/san-diego/dryer-vent-cleaning/" },
                    { name: "All San Diego Services", href: "/areas/san-diego/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Cleaning San Diego — FAQ" addSchema={false} />
      <CTABanner heading="Schedule chimney cleaning in San Diego" />
    </>
  );
}
