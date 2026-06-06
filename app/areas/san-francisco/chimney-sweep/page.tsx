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
  title: "Chimney Sweep San Francisco | Chimney & Fireplace Service",
  description:
    "Professional chimney sweep service in San Francisco for soot, creosote, fireplace cleaning, chimney flue buildup, and draft problems.",
  alternates: { canonical: "/areas/san-francisco/chimney-sweep/" },
  openGraph: {
    title: "Chimney Sweep San Francisco | Chimney & Fireplace Service",
    description:
      "Professional chimney sweep service in San Francisco for soot, creosote, fireplace cleaning, chimney flue buildup, and draft problems.",
    url: `${SITE.baseUrl}/areas/san-francisco/chimney-sweep/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Sweep San Francisco | Chimney & Fireplace Service",
    description:
      "Chimney sweep in San Francisco — NFPA 211 inspection, soot and creosote removal, written report. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What does a chimney sweep do?",
    a: "A chimney sweep removes soot and creosote from the flue and firebox, then performs a formal NFPA 211 Level 1 inspection of all accessible chimney components. In San Francisco Victorian homes, this includes checking original masonry, evaluating the condition of any stainless liner installed after the 1989 earthquake, and assessing the damper and smoke chamber for moisture-related deterioration. The service ends with a signed written condition report.",
  },
  {
    q: "How often should I hire a chimney sweep in San Francisco?",
    a: "Once a year is the standard recommendation for any chimney in regular use. In San Francisco, the city's persistent coastal moisture makes annual service especially important — even a gas fireplace flue that rarely gets used should be checked for moisture accumulation and debris. For Victorian and Edwardian fireplaces being brought back into service after years of non-use, a sweep before the first fire is not optional.",
  },
  {
    q: "Is chimney sweeping messy?",
    a: "Not when done properly. We seal the firebox opening before cleaning begins, use drop cloths to protect floors and hearth, and capture all loosened debris with a commercial HEPA vacuum. In San Francisco row houses and Victorians, we are especially careful about the work area given the density of the homes and proximity of original woodwork and flooring to the fireplace.",
  },
  {
    q: "Can chimney sweep service remove creosote?",
    a: "A standard sweep removes Stage 1 creosote — powdery or flaky deposits. Stage 2 creosote is tar-like and may require chemical treatment before brushing. Stage 3 creosote needs professional chemical treatment as a first step. We identify the stage and give you a clear recommendation. In San Francisco homes where the fireplace has not been used in decades and is being restored, Stage 2 or 3 deposits are not uncommon.",
  },
  {
    q: "Should I schedule an inspection with chimney sweeping?",
    a: "A chimney sweep already includes a Level 1 inspection. For San Francisco homeowners involved in a property transaction, a Level 2 inspection with a full video camera scan is required under NFPA 211 at any change of ownership — that is a separate, more detailed service. It is also strongly recommended for any SF home built before 1990 that has not had a documented camera scan since the 1989 Loma Prieta earthquake.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Sweep San Francisco",
  serviceType: "Chimney Sweep",
  description:
    "Professional chimney sweep service in San Francisco for soot, creosote, fireplace cleaning, chimney flue buildup, and draft problems.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "City", name: "San Francisco" },
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

export default function ChimneySweepSanFranciscoPage() {
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
              { label: "San Francisco", href: "/areas/san-francisco/" },
              { label: "Chimney Sweep" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Technician sweeping a fireplace chimney in a San Francisco home"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · San Francisco
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Sweep in San Francisco, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              NFPA 211 chimney sweep service for San Francisco homeowners — full flue cleaning, Level 1 inspection, and a written condition report for Victorian, Edwardian, and modern fireplace systems.
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
                  A chimney sweep in San Francisco is the formal, documented version of chimney maintenance — and for a city with as much historic fireplace inventory as San Francisco, it is often the first professional evaluation a fireplace has received in years. The sweep combines full flue cleaning with a systematic NFPA 211 Level 1 inspection of all accessible chimney components and produces a signed written report.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  For homeowners who only need deposits removed without the written documentation, a{" "}
                  <Link href="/services/chimney-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney cleaning
                  </Link>{" "}
                  is the more limited service. For property transactions, insurance documentation, or any SF homeowner who has not had a documented chimney evaluation since before 1989, a sweep is the appropriate starting point.
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
                      desc: "We check the chimney crown, cap, flashing, and visible masonry from the rooftop. On San Francisco Victorian homes, this includes examining original masonry for moisture damage and mortar erosion before going inside.",
                    },
                    {
                      step: "2",
                      title: "Damper and smoke shelf check",
                      desc: "The damper is tested for smooth operation and a complete seal. The smoke shelf is checked for debris and moisture damage — common in SF homes where coastal air enters flues during warm months.",
                    },
                    {
                      step: "3",
                      title: "NFPA 211 Level 1 flue inspection",
                      desc: "All accessible portions of the flue are inspected. For homes with stainless liners installed after 1989, we assess joint condition and early signs of corrosion.",
                    },
                    {
                      step: "4",
                      title: "Full flue cleaning",
                      desc: "Industry-grade rotary brushes remove creosote and soot from the full flue length. A commercial HEPA vacuum captures all loosened debris — no ash enters the room.",
                    },
                    {
                      step: "5",
                      title: "Written condition report",
                      desc: "A signed report with findings, condition ratings for each component, and recommended repairs. Photos included when there is something you need to see.",
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
                  removes deposits. A chimney sweep removes deposits and adds a formal NFPA 211 Level 1 inspection with a signed written report. The report is what distinguishes the two services — it documents the condition of every accessible component at the time of service, which matters for property records, insurance, and any planned repair work.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For San Francisco property transactions, a Level 2 inspection with a full video camera scan is required under NFPA 211 at any change of ownership. This is a more involved service than a standard sweep and is the correct standard for real estate transactions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  When San Francisco Homeowners Should Schedule Sweeping
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Before using a fireplace that has been inactive",
                      desc: "Any SF fireplace that has been sealed, converted, or simply unused for a year or more needs a sweep and inspection before use — regardless of how recently it was last serviced.",
                    },
                    {
                      title: "Before restoring a Victorian or Edwardian fireplace",
                      desc: "Ornamental fireplaces being returned to active use after decades of sealing need a full sweep and Level 1 inspection to confirm the flue is safe and clear.",
                    },
                    {
                      title: "Before or during a property sale",
                      desc: "A Level 2 inspection with a camera scan is required at any change of ownership under NFPA 211. Schedule it before listing rather than as a condition of sale.",
                    },
                    {
                      title: "After any unusual smoke event",
                      desc: "A fire that backed up smoke into the room, produced a strong unexpected odor, or caused unusual sounds in the flue should be followed by a sweep before the next use.",
                    },
                    {
                      title: "If the home was built before 1990",
                      desc: "Any San Francisco home built before 1990 that has not had a documented chimney evaluation since the Loma Prieta earthquake should be swept and inspected.",
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
                  Chimney sweep service in San Francisco often reveals problems the homeowner had no idea existed. Common findings include deteriorated stainless liner joints, moisture-related damage in the smoke chamber or damper area, missing or corroded chimney caps, and creosote deposits in previously sealed flues that were never properly cleaned before sealing.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  In Victorian and Edwardian homes where the fireplace has been sealed behind a decorative insert or cover for decades, we sometimes find{" "}
                  <Link href="/services/chimney-blockage-removal/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    significant blockages
                  </Link>{" "}
                  from debris, deteriorated mortar, or old flue tile fragments that fell during earthquake events.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Ready to schedule a chimney sweep in San Francisco?</p>
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
                    { name: "San Francisco service area", href: "/areas/san-francisco/" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors">
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm heading="Get a Free Estimate" subheading="Chimney sweep in San Francisco. We respond within 2 business hours." dark={false} />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in San Francisco</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/san-francisco/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/san-francisco/chimney-repair/" },
                    { name: "Fireplace Repair", href: "/areas/san-francisco/fireplace-repair/" },
                    { name: "Dryer Vent Cleaning", href: "/areas/san-francisco/dryer-vent-cleaning/" },
                    { name: "All San Francisco Services", href: "/areas/san-francisco/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Sweep San Francisco — FAQ" addSchema={false} />
      <CTABanner heading="Schedule a chimney sweep in San Francisco" />
    </>
  );
}
