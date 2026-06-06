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
  title: "Chimney Cleaning San Jose | Fireplace & Flue Cleaning",
  description:
    "Professional chimney cleaning in San Jose for soot, creosote buildup, fireplace odors, poor draft, and annual chimney maintenance.",
  alternates: { canonical: "/areas/san-jose/chimney-cleaning/" },
  openGraph: {
    title: "Chimney Cleaning San Jose | Fireplace & Flue Cleaning",
    description:
      "Professional chimney cleaning in San Jose for soot, creosote buildup, fireplace odors, poor draft, and annual chimney maintenance.",
    url: `${SITE.baseUrl}/areas/san-jose/chimney-cleaning/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Cleaning San Jose | Fireplace & Flue Cleaning",
    description:
      "Chimney cleaning in San Jose for creosote, soot, fireplace odors, and annual flue maintenance. Free estimate.",
  },
};

const FAQS = [
  {
    q: "How often should I schedule chimney cleaning in San Jose?",
    a: "Annual cleaning is the standard recommendation for any wood-burning fireplace in regular use. San Jose's mild Bay Area winters mean most South Bay homeowners burn less wood per season than households in colder climates — but creosote still accumulates with every fire. If you have not had a cleaning in two or more years, or your fireplace produces more smoke than it used to, schedule a cleaning before the next burn season.",
  },
  {
    q: "What are signs my chimney needs cleaning?",
    a: "The most common signs are a fireplace odor that lingers during warmer months, slow or difficult draft when starting a fire, smoke entering the room, and visible black deposits inside the firebox or around the damper plate. In San Jose homes with original clay tile flue liners, creosote can collect in tile cracks and harden over time — an additional reason to keep up with annual cleaning.",
  },
  {
    q: "Is chimney cleaning the same as chimney sweep?",
    a: "Not exactly. Chimney cleaning removes soot and creosote deposits from the flue and firebox. A chimney sweep adds a formal NFPA 211 Level 1 inspection and a signed written report. For South Bay homeowners buying or selling a home, a Level 2 inspection — which includes a full video camera scan — is the required standard, not a cleaning alone.",
  },
  {
    q: "Can chimney cleaning help with fireplace odors?",
    a: "Yes. Creosote and soot absorb ambient moisture and produce a persistent smell, especially during warmer months when the fireplace is not in use. Cleaning removes the source of the odor. If the smell persists after a thorough cleaning, the damper may not be sealing properly or a chimney cap may be missing — both of which allow outside air to draft down through the flue.",
  },
  {
    q: "Do you also inspect the chimney during cleaning?",
    a: "We note any visible damage observed during the cleaning visit and document it before we leave. A formal NFPA 211 Level 1 inspection — with a signed condition report — is a separate service. If we observe something during cleaning that warrants closer attention, we will explain what a proper inspection would involve before we leave.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Cleaning San Jose",
  serviceType: "Chimney Cleaning",
  description:
    "Professional chimney cleaning in San Jose for soot, creosote buildup, fireplace odors, poor draft, and annual chimney maintenance.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Jose",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "City", name: "San Jose" },
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

export default function ChimneyCleaningSanJosePage() {
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
              { label: "San Jose", href: "/areas/san-jose/" },
              { label: "Chimney Cleaning" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Technician performing chimney cleaning inside a San Jose fireplace"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · San Jose
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Cleaning in San Jose, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Professional chimney flue cleaning for San Jose homeowners — removing creosote, soot, and debris so your fireplace operates safely through the South Bay heating season.
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
                  San Jose homeowners use their fireplaces during the cooler Bay Area months — generally November through February — which is less burn time than colder California regions but still enough to accumulate creosote and soot in the flue. Annual chimney cleaning removes that buildup before it hardens into Stage 2 deposits that resist standard brushing. It also gives a technician a chance to flag any issues before the next fire season.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  If your San Jose home was built before 1990 and has an original clay tile flue, or if the fireplace has not been serviced since before the 1989 Loma Prieta earthquake, a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  should come before a routine cleaning. Earthquake-related liner cracks from 1989 are still present in many South Bay homes that have changed hands since then.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Why Chimney Cleaning Matters in San Jose Homes
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Approximately 60% of San Jose homes with fireplaces have never had a professional flue camera inspection — and a significant portion have not had a cleaning in several years. Creosote buildup in an uncleaned flue is a fire hazard regardless of how mild the winters are. Stage 2 and Stage 3 creosote deposits require professional treatment and will not come off with a standard brush.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Many South Bay homes — particularly in Willow Glen, Rose Garden, and Almaden Valley — were built in the 1950s through 1970s and have unlined or clay-tile-lined flues. These liners develop small cracks over decades of thermal cycling. A cleaning visit is also an opportunity to identify this deterioration while it is still a minor repair rather than a liner replacement.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Gas fireplace owners are not exempt from maintenance. A gas flue can accumulate moisture, dust, and debris even without burning wood. Gas fireplaces in San Jose homes that sit unused for most of the year are a common source of persistent fireplace odors — cleaned up with a single service visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Signs Your Chimney May Need Cleaning
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Fireplace odor in warm weather",
                      desc: "Creosote and soot absorb humidity and release a persistent smell when unused fireplaces draw warm air down through the flue during spring and summer.",
                    },
                    {
                      title: "Slow draft or difficult ignition",
                      desc: "Fires that struggle to establish or produce more smoke than usual at startup may indicate restricted airflow from soot accumulation inside the flue.",
                    },
                    {
                      title: "Smoke entering the room",
                      desc: "Partial blockage in the chimney flue — from debris, nesting material, or creosote deposits — prevents proper exhaust and pushes smoke back through the damper.",
                    },
                    {
                      title: "Visible black deposits",
                      desc: "Heavy black staining inside the firebox, on the damper plate, or around the fireplace opening are clear indicators that cleaning is overdue.",
                    },
                    {
                      title: "More than a year since the last service",
                      desc: "If the fireplace was used regularly through the last heating season and has not been cleaned since, schedule service before the next one.",
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
                  What Our Chimney Cleaning Service Includes
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A standard chimney cleaning covers the full flue system from firebox to cap. We start with a visual check of the firebox, damper, and accessible flue before any work begins. Drop cloths protect the floor and hearth, and the firebox opening is sealed before cleaning to keep ash and soot out of the room.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Industry-grade rotary brushes remove creosote and soot from the full length of the chimney flue. A commercial HEPA vacuum captures all loosened debris — no ash clouds, no mess left behind. When cleaning is finished, you receive written notes on the fireplace condition and any issues that warrant follow-up attention.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If we find Stage 2 or Stage 3 creosote that will not respond to brushing, we will tell you before we leave.{" "}
                  <Link href="/services/creosote-removal/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    Chemical creosote treatment
                  </Link>{" "}
                  may be needed alongside standard brushing — we do not brush past the problem and call it done.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Chimney Cleaning vs. Chimney Sweep
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Chimney cleaning removes deposits from the flue and firebox. A{" "}
                  <Link href="/services/chimney-sweep/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney sweep
                  </Link>{" "}
                  adds a formal NFPA 211 Level 1 inspection — a systematic check of all accessible chimney components with a signed written condition report. The difference matters most when documentation is required, such as during a home sale.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For San Jose homeowners buying or selling, a Level 2 inspection is the correct standard — it includes a video camera scan of the full flue and is required under NFPA 211 at any change of ownership. Schedule a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  rather than a standard cleaning if that applies to your situation.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Ready to schedule chimney cleaning in San Jose?</p>
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
                    { name: "San Jose service area", href: "/areas/san-jose/" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors">
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm heading="Get a Free Estimate" subheading="Chimney cleaning in San Jose. We respond within 2 business hours." dark={false} />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in San Jose</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Sweep", href: "/areas/san-jose/chimney-sweep/" },
                    { name: "Chimney Repair", href: "/areas/san-jose/chimney-repair/" },
                    { name: "Fireplace Repair", href: "/areas/san-jose/fireplace-repair/" },
                    { name: "Dryer Vent Cleaning", href: "/areas/san-jose/dryer-vent-cleaning/" },
                    { name: "All San Jose Services", href: "/areas/san-jose/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Cleaning San Jose — FAQ" addSchema={false} />
      <CTABanner heading="Schedule chimney cleaning in San Jose" />
    </>
  );
}
