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
  title: "Chimney Sweep Los Angeles | Chimney & Fireplace Service",
  description:
    "Professional chimney sweep service in Los Angeles for soot, creosote, fireplace cleaning, chimney flue buildup, and draft problems.",
  alternates: { canonical: "/areas/los-angeles/chimney-sweep/" },
  openGraph: {
    title: "Chimney Sweep Los Angeles | Chimney & Fireplace Service",
    description:
      "Professional chimney sweep service in Los Angeles for soot, creosote, fireplace cleaning, chimney flue buildup, and draft problems.",
    url: `${SITE.baseUrl}/areas/los-angeles/chimney-sweep/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Sweep Los Angeles | Chimney & Fireplace Service",
    description:
      "Chimney sweep in Los Angeles — NFPA 211 inspection, soot and creosote removal, written report. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What does a chimney sweep do?",
    a: "A chimney sweep removes soot and creosote deposits from the flue and firebox, then performs a formal NFPA 211 Level 1 inspection of all accessible chimney components. The visit ends with a written report noting the condition of the chimney and any recommended repairs.",
  },
  {
    q: "How often should I hire a chimney sweep in Los Angeles?",
    a: "Once a year is the standard recommendation for any chimney in regular use, per NFPA 211. Los Angeles homeowners who burn wood regularly through the winter heating season should not skip a year. Gas fireplace owners on a light-use schedule may be able to extend to every two years, but should still have the system inspected for debris and liner condition.",
  },
  {
    q: "Is chimney sweeping messy?",
    a: "Not when done properly. We seal the firebox opening before cleaning and use a commercial HEPA vacuum to capture all loosened soot and debris. Cloths protect the floor and hearth. There should be no ash clouds or mess left in the room after we leave.",
  },
  {
    q: "Can chimney sweep service remove creosote?",
    a: "A standard sweep removes Stage 1 creosote — the powdery or flaky deposits that brush off easily. Stage 2 creosote is harder and tar-like; it may require chemical treatment before or alongside brushing. Stage 3 creosote will not respond to brushing at all and needs professional chemical treatment. We will tell you what stage you have and what the appropriate approach is.",
  },
  {
    q: "Should I schedule an inspection with chimney sweeping?",
    a: "A chimney sweep already includes a Level 1 inspection. If you are buying or selling a home in Los Angeles, you need a Level 2 inspection, which adds a video camera scan of the full flue. That is a separate, more detailed service — and it is required by NFPA 211 at any change of property ownership.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Sweep Los Angeles",
  serviceType: "Chimney Sweep",
  description:
    "Professional chimney sweep service in Los Angeles for soot, creosote, fireplace cleaning, chimney flue buildup, and draft problems.",
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
    { "@type": "ListItem", position: 4, name: "Chimney Sweep", item: `${SITE.baseUrl}/areas/los-angeles/chimney-sweep/` },
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

export default function ChimneySweepLosAngelesPage() {
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
              { label: "Chimney Sweep" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Technician sweeping a fireplace chimney in a Los Angeles home"
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
              Chimney Sweep in Los Angeles, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              NFPA 211 chimney sweep service for Los Angeles homeowners — full flue cleaning, Level 1 inspection, and a written condition report in a single visit.
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
                  A chimney sweep in Los Angeles is the formal, documented version of chimney maintenance. It combines deposit removal with a systematic inspection of all accessible chimney components — firebox, damper, smoke shelf, smoke chamber, and the full flue length — and produces a written report you can keep for your records, share with your insurer, or present during a home sale.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  If you only need deposits removed and do not require the written report, a{" "}
                  <Link href="/services/chimney-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney cleaning
                  </Link>{" "}
                  is a more limited service. For home buyers, sellers, or anyone who wants documented proof of chimney condition, a sweep is the right choice.
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
                      desc: "We check the chimney crown, cap, flashing, and visible masonry from the rooftop before going inside. Damage at the top of the chimney is often the source of problems that show up inside.",
                    },
                    {
                      step: "2",
                      title: "Damper and smoke shelf check",
                      desc: "The damper plate is tested for smooth operation and a complete seal. The smoke shelf is checked for debris accumulation and moisture damage.",
                    },
                    {
                      step: "3",
                      title: "NFPA 211 Level 1 flue inspection",
                      desc: "All accessible portions of the flue are inspected using a flashlight and mirror. If anything warrants a camera scan, we flag it and explain what a Level 2 inspection would add.",
                    },
                    {
                      step: "4",
                      title: "Full flue cleaning",
                      desc: "Industry-grade rotary brushes clear creosote and soot from the full chimney flue length. A commercial HEPA vacuum captures all loosened deposits — no ash enters the room.",
                    },
                    {
                      step: "5",
                      title: "Written condition report",
                      desc: "You receive a signed report with the technician's findings, the condition rating for each component, and any recommended repairs. Photos are included when there is something you need to see.",
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
                  removes deposits. A chimney sweep removes deposits and adds a formal NFPA 211 Level 1 inspection with a written, signed report. The report documents the condition of each chimney component at the time of service.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This distinction matters most in two situations: home sales, where a Level 2 inspection report is required at ownership transfer, and insurance claims, where documentation of chimney condition before a loss event is often required. For routine annual maintenance without a documentation requirement, a cleaning accomplishes the same deposit-removal outcome.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  When Los Angeles Homeowners Should Schedule Sweeping
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Before first use each heating season",
                      desc: "Verify the chimney is clear of summer debris, nesting material, and any damage that occurred during the dry season before lighting the first fire.",
                    },
                    {
                      title: "After a long period of non-use",
                      desc: "A chimney that has sat unused for a year or more should be swept and inspected before use. Wildlife nesting and deterioration happen whether or not the fireplace is used.",
                    },
                    {
                      title: "Before or during a home sale",
                      desc: "A Level 2 inspection — which includes a video camera scan — is required under NFPA 211 at any change of ownership. Buyers' agents in Los Angeles routinely request this.",
                    },
                    {
                      title: "After any unusual smoke event",
                      desc: "If a fire produced more smoke than normal, caused heavy odor, or the chimney made unusual sounds, have it swept before the next use.",
                    },
                    {
                      title: "After a suspected chimney fire",
                      desc: "Chimney fires can damage the flue liner without producing visible external signs. The chimney must be swept and inspected before it is used again.",
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
                  Problems a Sweep May Reveal
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Chimney sweep service is also how many homeowners first learn about problems they did not know existed. Common findings during a sweep include damaged or missing chimney caps, deteriorated damper plates, animal nesting material in the smoke shelf or flue, and{" "}
                  <Link href="/services/creosote-removal/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    heavy creosote deposits
                  </Link>{" "}
                  that have progressed beyond what standard brushing can address.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For Los Angeles homes with older clay tile flues, a sweep sometimes reveals{" "}
                  <Link href="/services/chimney-blockage-removal/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    partial blockages
                  </Link>{" "}
                  from collapsed tile sections — a common consequence of seismic activity over the decades. These are not always visible from the firebox opening and require a camera scan to confirm.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Ready to schedule a chimney sweep in Los Angeles?</p>
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
                subheading="Chimney sweep in Los Angeles. We respond within 2 business hours."
                dark={false}
              />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">
                  More in Los Angeles
                </h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/los-angeles/chimney-cleaning/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Sweep Los Angeles — FAQ" addSchema={false} />
      <CTABanner heading="Schedule a chimney sweep in Los Angeles" />
    </>
  );
}
