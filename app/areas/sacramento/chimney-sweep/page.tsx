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
  title: "Chimney Sweep Sacramento | NFPA 211 Sweep & Inspection",
  description:
    "Chimney sweep service in Sacramento with NFPA 211 Level 1 inspection included. Creosote removal, soot, and safety check before the wood-burning season.",
  alternates: { canonical: "/areas/sacramento/chimney-sweep/" },
  openGraph: {
    title: "Chimney Sweep Sacramento | NFPA 211 Sweep & Inspection",
    description:
      "Chimney sweep service in Sacramento with NFPA 211 Level 1 inspection included. Creosote removal, soot, and safety check before the wood-burning season.",
    url: `${SITE.baseUrl}/areas/sacramento/chimney-sweep/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Sweep Sacramento | NFPA 211 Sweep & Inspection",
    description:
      "Chimney sweep in Sacramento — seasonal prep, creosote removal, NFPA 211 inspection. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What does a chimney sweep include in Sacramento?",
    a: "A chimney sweep in Sacramento includes mechanical cleaning of the flue using rotary brush equipment sized to the specific flue dimensions, removal of creosote and soot from the smoke chamber and damper shelf, vacuuming the firebox, and a NFPA 211 Level 1 visual inspection of accessible chimney components. We check the cap, crown, firebox, damper, and visible liner during the sweep visit.",
  },
  {
    q: "How much creosote do Sacramento fireplaces typically accumulate in one season?",
    a: "More than most California cities. At 1.8 cords of wood per household per winter, Sacramento&apos;s burning volume produces substantial creosote deposits. Households that burn more than three times per week, use unseasoned wood, or have a fireplace with draft issues (common in Sacramento valley inversions) accumulate deposits faster. In some cases, a mid-season cleaning may be warranted alongside the annual pre-season sweep.",
  },
  {
    q: "Can I use the fireplace the same day as a chimney sweep?",
    a: "Yes, provided the sweep did not identify repairs needed before use. We carry any equipment residue out of the home and leave the firebox clean. If a repair is identified during the inspection — a cracked liner, loose cap, or deteriorated damper — we will advise whether it is safe to burn pending repair or whether immediate repair is required first.",
  },
  {
    q: "Does a chimney sweep address odor problems?",
    a: "A sweep removes the soot and creosote deposits that contribute to chimney odor, particularly the musty smell that Sacramento homeowners notice during summer when heat and humidity increase volatility of deposits. However, if odor persists after cleaning, it often indicates a damper that does not fully seal — preventing outdoor air from mixing with residual deposits in the flue. We check damper seal during every sweep.",
  },
  {
    q: "Should I get a chimney sweep before or after buying a Sacramento home?",
    a: "Both, ideally — but if only one, get it before purchase or immediately after closing. A sweep combined with a Level 2 inspection gives you a complete picture of the chimney&apos;s condition that neither the general home inspection nor the seller&apos;s disclosure typically provides. Sacramento&apos;s older homes in Land Park, Midtown, and East Sacramento frequently have chimneys that were last serviced years prior to listing.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Sweep Sacramento",
  serviceType: "Chimney Sweep",
  description:
    "Chimney sweep service in Sacramento with NFPA 211 Level 1 inspection included. Creosote removal, soot, and safety check before the wood-burning season.",
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

export default function ChimneySweepSacramentoPage() {
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
              { label: "Chimney Sweep" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Chimney sweep technician cleaning and inspecting a flue in a Sacramento California home"
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
              Chimney Sweep in Sacramento, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              NFPA 211 sweep and inspection before Sacramento&apos;s burning season. High wood-burning households benefit from pre-season scheduling before SMAQMD curtailment periods begin.
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
                  Sacramento households burn more wood per winter than almost any other California city. The combination of cold valley evenings, strong fireplace culture across older neighborhoods, and a burning season that starts in late October means that a chimney used all season can accumulate significant creosote and soot before spring. An annual sweep is not optional maintenance in Sacramento — it is the baseline minimum for safe fireplace use.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  The distinction between a chimney sweep and a{" "}
                  <Link href="/areas/sacramento/chimney-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney cleaning
                  </Link>{" "}
                  is primarily one of scope. A sweep is the standard annual service — clean the flue, inspect accessible components, and confirm safe operation for the coming season. For chimneys with heavier deposits, a cleaning designation reflects additional time and process required to address more significant buildup.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  What We Check During a Sacramento Chimney Sweep
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Flue deposit type and amount",
                      desc: "We note whether deposits are first, second, or third-stage creosote — this determines what equipment and technique are needed and whether additional treatment is required.",
                    },
                    {
                      title: "Chimney cap and crown",
                      desc: "Sacramento&apos;s heat cycling and occasional heavy rain make cap and crown damage common. A cracked crown is one of the most common sources of structural water damage in Sacramento chimneys.",
                    },
                    {
                      title: "Visible liner condition",
                      desc: "For clay tile liners, we note any visible cracks or joint deterioration visible during the sweep. For metal liners, we check connections and any visible section at the top.",
                    },
                    {
                      title: "Damper operation",
                      desc: "We confirm the damper opens and closes fully, and that it seals adequately when closed — important for preventing chimney odor during Sacramento&apos;s hot summers.",
                    },
                    {
                      title: "Firebox condition",
                      desc: "We check the firebox refractory mortar and brick for cracks or deterioration from thermal cycling. This is particularly important in older Sacramento masonry fireplaces.",
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
                  Sacramento Burning Season Timing
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The practical burning season in Sacramento runs from late October through March, with the heaviest use during December and January cold snaps. SMAQMD curtailment advisories typically begin in November and can restrict burning on multiple days per month during periods of sustained inversion.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Scheduling a sweep in August, September, or early October puts Sacramento homeowners in the best position: the chimney is serviced before the season starts, any repairs identified can be completed with time to spare, and the wait for service is shorter than during the October rush.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If a sweep reveals third-stage glazed creosote — the hardest type to remove — completing treatment before the season starts is especially important. Waiting until mid-season means the chimney continues to operate with a deposit type that presents meaningful fire risk.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Ready before the first cold snap</p>
                <p className="text-gray-300 text-sm mb-4">
                  Book August through October for the best availability. We cover Sacramento, Land Park, Curtis Park, Midtown, East Sacramento, Natomas, and Elk Grove.
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
                    { name: "Chimney Cleaning in Sacramento", href: "/areas/sacramento/chimney-cleaning/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
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
              <LeadForm heading="Get a Free Estimate" subheading="Chimney sweep in Sacramento. We respond within 2 business hours." dark={false} />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Sacramento</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/sacramento/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/sacramento/chimney-repair/" },
                    { name: "Fireplace Repair", href: "/areas/sacramento/fireplace-repair/" },
                    { name: "Dryer Vent Cleaning", href: "/areas/sacramento/dryer-vent-cleaning/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Sweep Sacramento — FAQ" addSchema={false} />
      <CTABanner heading="Schedule a chimney sweep in Sacramento" />
    </>
  );
}
