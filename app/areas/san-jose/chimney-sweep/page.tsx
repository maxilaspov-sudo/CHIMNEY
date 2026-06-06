import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/chimney-sweep-service.jpg";

export const metadata: Metadata = {
  title: "Chimney Sweep San Jose | Chimney & Fireplace Service",
  description:
    "Professional chimney sweep service in San Jose for soot, creosote, fireplace cleaning, chimney flue buildup, and draft problems.",
  alternates: { canonical: "/areas/san-jose/chimney-sweep/" },
  openGraph: {
    title: "Chimney Sweep San Jose | Chimney & Fireplace Service",
    description:
      "Professional chimney sweep service in San Jose for soot, creosote, fireplace cleaning, chimney flue buildup, and draft problems.",
    url: `${SITE.baseUrl}/areas/san-jose/chimney-sweep/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Sweep San Jose | Chimney & Fireplace Service",
    description:
      "Chimney sweep in San Jose — NFPA 211 inspection, soot and creosote removal, written report. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What does a chimney sweep do?",
    a: "A chimney sweep removes soot and creosote from the flue and firebox, then performs a formal NFPA 211 Level 1 inspection of all accessible chimney components — firebox, damper, smoke shelf, smoke chamber, and flue. The service ends with a signed written report documenting the condition of each component and any recommended repairs.",
  },
  {
    q: "How often should I hire a chimney sweep in San Jose?",
    a: "Once a year is the standard recommendation under NFPA 211 for any chimney in regular use. South Bay homeowners who use their fireplace through the November-to-February heating window should schedule before each burn season. If a San Jose home was built before 1990 and has not had a chimney sweep since the Loma Prieta earthquake, that inspection is long overdue.",
  },
  {
    q: "Is chimney sweeping messy?",
    a: "Not when done correctly. We seal the firebox opening before cleaning, use drop cloths to protect the floor and hearth, and capture all loosened debris with a commercial HEPA vacuum. There should be no ash clouds, no soot on the floor, and no cleanup needed in the room after we leave.",
  },
  {
    q: "Can chimney sweep service remove creosote?",
    a: "A standard sweep removes Stage 1 creosote — powdery or flaky deposits. Stage 2 creosote is tar-like and harder; it may require chemical treatment before or during brushing. Stage 3 creosote will not respond to brushing at all and needs professional chemical treatment as a first step. We identify which stage is present and give you a clear recommendation.",
  },
  {
    q: "Should I schedule an inspection with chimney sweeping?",
    a: "A chimney sweep already includes a Level 1 inspection as part of the service. If you are buying or selling a home in San Jose, a Level 2 inspection is required under NFPA 211 — it adds a video camera scan of the full flue and is mandatory at any change of ownership. Ask when booking if your situation calls for the more detailed Level 2.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Sweep San Jose",
  serviceType: "Chimney Sweep",
  description:
    "Professional chimney sweep service in San Jose for soot, creosote, fireplace cleaning, chimney flue buildup, and draft problems.",
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

export default function ChimneySweepSanJosePage() {
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
              { label: "Chimney Sweep" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Technician sweeping a fireplace chimney in a San Jose home"
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
              Chimney Sweep in San Jose, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              NFPA 211 chimney sweep service for San Jose homeowners — full flue cleaning, Level 1 inspection, and a written condition report completed in a single visit.
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
                  A chimney sweep in San Jose goes beyond deposit removal — it is the formal, documented service that combines full flue cleaning with a systematic NFPA 211 Level 1 inspection and a signed written report. For South Bay homeowners who want proof of chimney condition for a home sale, insurance documentation, or their own peace of mind, a sweep is the correct choice.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  If you only need soot and creosote removed without the written documentation, a{" "}
                  <Link href="/services/chimney-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney cleaning
                  </Link>{" "}
                  is the more limited service. For buyers, sellers, or any homeowner who has not had a documented chimney inspection since before 1989, a sweep is the appropriate starting point.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  What a Chimney Sweep Service Includes
                </h2>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      step: "1",
                      title: "Exterior inspection",
                      desc: "We check the chimney crown, cap, flashing, and visible masonry from the rooftop before going inside. Damage at the top of the chimney is frequently the source of problems that appear lower down.",
                    },
                    {
                      step: "2",
                      title: "Damper and smoke shelf check",
                      desc: "The damper plate is tested for smooth operation and a complete seal. The smoke shelf is checked for debris accumulation and moisture damage.",
                    },
                    {
                      step: "3",
                      title: "NFPA 211 Level 1 flue inspection",
                      desc: "All accessible portions of the flue are inspected. If anything warrants a camera scan, we explain what a Level 2 inspection would add and why it may be necessary.",
                    },
                    {
                      step: "4",
                      title: "Full flue cleaning",
                      desc: "Industry-grade rotary brushes clear creosote and soot from the full chimney flue length. A commercial HEPA vacuum captures all loosened debris — no ash enters the room.",
                    },
                    {
                      step: "5",
                      title: "Written condition report",
                      desc: "You receive a signed report with the technician's findings, condition ratings for each component, and recommended repairs. Photos are included when there is something you need to see.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Chimney Sweep vs. Chimney Cleaning
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A{" "}
                  <Link href="/services/chimney-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney cleaning
                  </Link>{" "}
                  removes deposits. A chimney sweep removes deposits and adds a formal NFPA 211 Level 1 inspection with a written, signed condition report. The written report is what distinguishes the two services — it documents the state of every accessible component at the time of service.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For San Jose home sales, a Level 2 inspection with a full video camera scan is required under NFPA 211 at any change of ownership. This is a more detailed and more expensive service than a standard sweep — but it is the correct standard for property transactions, and South Bay real estate agents routinely request it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  When San Jose Homeowners Should Schedule Sweeping
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Before the first fire of the heating season",
                      desc: "Verify the chimney is clear of summer debris, nesting material, and any deterioration that occurred during the warm months before lighting the first fire.",
                    },
                    {
                      title: "If the home was built before 1990",
                      desc: "Any San Jose home built before 1990 that has not had a documented chimney sweep since the 1989 Loma Prieta earthquake should be swept and inspected before the next use.",
                    },
                    {
                      title: "Before or during a home sale",
                      desc: "A Level 2 inspection with a full camera scan is required under NFPA 211 at any change of ownership. Arrange it before listing, not after an offer is accepted.",
                    },
                    {
                      title: "After an unusual smoke event",
                      desc: "A fire that produced more smoke than normal or created an unusual smell should be followed by a sweep before the next use.",
                    },
                    {
                      title: "After a period of non-use",
                      desc: "A chimney that sat unused for a year or more should be swept and inspected before it is used again — debris accumulation and component deterioration happen regardless of use.",
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
                  Problems a Sweep May Reveal
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Chimney sweep service is often how San Jose homeowners first learn about problems they did not know existed. Common findings include deteriorated damper plates, missing chimney caps, animal nesting material on the smoke shelf, and{" "}
                  <Link href="/services/creosote-removal/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    heavy creosote deposits
                  </Link>{" "}
                  that require chemical treatment before brushing.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  In South Bay homes with original clay tile flue liners, a sweep may also reveal{" "}
                  <Link href="/services/chimney-blockage-removal/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    partial blockages
                  </Link>{" "}
                  from collapsed or displaced tile sections — a consequence of seismic activity that is not always visible from the firebox opening.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Ready to schedule a chimney sweep in San Jose?</p>
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
                    { name: "Chimney Sweep (All California)", href: "/services/chimney-sweep/" },
                    { name: "Chimney Cleaning", href: "/services/chimney-cleaning/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Creosote Removal", href: "/services/creosote-removal/" },
                    { name: "Chimney Blockage Removal", href: "/services/chimney-blockage-removal/" },
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
              <LeadForm heading="Get a Free Estimate" subheading="Chimney sweep in San Jose. We respond within 2 business hours." dark={false} />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in San Jose</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/san-jose/chimney-cleaning/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Sweep San Jose — FAQ" addSchema={false} />
      <CTABanner heading="Schedule a chimney sweep in San Jose" />
    </>
  );
}
