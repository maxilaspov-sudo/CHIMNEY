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
  title: "Chimney Cleaning Oakland | Fireplace & Flue Cleaning",
  description:
    "Professional chimney cleaning in Oakland for soot, creosote buildup, fireplace odors, poor draft, and annual chimney maintenance. East Bay specialists.",
  alternates: { canonical: "/areas/oakland/chimney-cleaning/" },
  openGraph: {
    title: "Chimney Cleaning Oakland | Fireplace & Flue Cleaning",
    description:
      "Professional chimney cleaning in Oakland for soot, creosote buildup, fireplace odors, poor draft, and annual chimney maintenance.",
    url: `${SITE.baseUrl}/areas/oakland/chimney-cleaning/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Cleaning Oakland | Fireplace & Flue Cleaning",
    description: "Chimney cleaning in Oakland — older homes, clay liners, BAAQMD Spare the Air prep. Free estimate.",
  },
};

const FAQS = [
  {
    q: "How often should I schedule chimney cleaning in Oakland?",
    a: "Once per year is the standard recommendation. For Oakland&apos;s older homes — particularly pre-1950 bungalows in Rockridge, Temescal, and the hills neighborhoods — the clay tile liners may have hairline cracks that trap deposits. Annual cleaning reduces the amount of material sitting against those liner surfaces between inspections. If your Oakland home has a BAAQMD-permitted wood-burning fireplace, scheduling before the Spare the Air season ensures you are ready on permitted burn days.",
  },
  {
    q: "What are signs my chimney needs cleaning in Oakland?",
    a: "Smoke entering the room during fireplace use, a persistent musty or acrid smell from the fireplace when not in use, visible soot around the firebox opening, or difficulty maintaining a fire despite adequate wood are all signs cleaning is overdue. Oakland&apos;s Bay Area moisture can also intensify chimney odors by activating residual soot deposits, particularly in chimneys that are not used frequently.",
  },
  {
    q: "Is chimney cleaning the same as a chimney sweep?",
    a: "The terms describe the same process. A chimney sweep or chimney cleaning involves mechanically removing soot, creosote, and debris from the flue. The term cleaning is sometimes used when deposit levels are higher and require more time or additional treatment, but a standard annual visit — sweep or cleaning — achieves the same result.",
  },
  {
    q: "Can chimney cleaning help with fireplace odors in Oakland homes?",
    a: "Yes. The soot and creosote deposits that remain in the flue between uses can produce odors, particularly when Bay Area humidity activates the volatile compounds in those deposits. Cleaning removes the primary source. If odor persists after a thorough cleaning, a damper that does not fully close is usually the secondary cause — we check damper seal on every visit.",
  },
  {
    q: "Do you inspect the chimney during cleaning?",
    a: "Yes. Every cleaning visit includes a NFPA 211 Level 1 visual inspection of accessible components. For Oakland hillside homes, we pay particular attention to spark arrestor condition and cap integrity — given the high wildfire risk in Oakland Hills, a properly functioning cap and arrestor are safety-critical components.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Cleaning Oakland",
  serviceType: "Chimney Cleaning",
  description: "Professional chimney cleaning in Oakland for soot, creosote buildup, fireplace odors, poor draft, and annual chimney maintenance.",
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

export default function ChimneyCleaningOaklandPage() {
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
            { label: "Chimney Cleaning" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Technician performing chimney cleaning inside an Oakland fireplace" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Oakland
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Cleaning in Oakland, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Annual chimney cleaning for Oakland&apos;s older bungalows, hillside homes, and East Bay flats — creosote and soot removal, spark arrestor check, and NFPA 211 inspection included.
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
                  Oakland&apos;s housing stock skews older than much of the Bay Area — Rockridge, Temescal, and Montclair have a high concentration of pre-1950 bungalows and craftsman homes with original brick chimneys and clay tile liners. These systems were built well, but they age. Annual chimney cleaning is the minimum maintenance interval for any of these chimneys that are still in active use.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  For Oakland Hills properties, chimney cleaning carries a specific safety dimension. The Oakland Fire Department recommends annual chimney inspection and a properly installed spark arrestor cap for all hillside properties, given the area&apos;s wildfire risk. A{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">chimney inspection</Link>{" "}
                  combined with cleaning is the appropriate starting point for any hillside home that has not been serviced recently.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Why Chimney Cleaning Matters in Oakland Homes</h2>
                <ul className="space-y-3">
                  {[
                    { title: "Older clay tile liners", desc: "Pre-1950 chimneys in Rockridge, Temescal, and Montclair have clay tile liners that may have developed hairline cracks over decades. Annual cleaning removes deposits that accumulate against those crack surfaces and reduces fire risk from creosote buildup." },
                    { title: "BAAQMD Spare the Air restrictions", desc: "Oakland falls within the BAAQMD district, which issues Spare the Air wood-burning alerts. Having the chimney cleaned before the season means you are ready for every permitted burn day." },
                    { title: "Oakland Hills wildfire risk", desc: "For hillside homes in Montclair, Redwood Heights, and Joaquin Miller, a clean chimney and functioning spark arrestor cap are part of responsible fire safety — not just appliance maintenance." },
                    { title: "Bay Area moisture and chimney odors", desc: "Oakland&apos;s maritime humidity activates residual soot and creosote in chimneys that are not in regular use. Annual cleaning eliminates the primary source of these odors." },
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

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Signs Your Chimney May Need Cleaning</h2>
                <ul className="space-y-2">
                  {[
                    "Smoke entering the living space when the fireplace is in use",
                    "A musty or acrid smell from the fireplace when it is not in use",
                    "Soot visible around the firebox opening",
                    "Poor draft making it difficult to start or maintain a fire",
                    "More than one year since the last professional service",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" className="shrink-0 mt-1" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Chimney Cleaning Service Includes</h2>
                <ul className="space-y-2">
                  {[
                    "Full-length flue cleaning with rotary brush equipment",
                    "Smoke chamber and damper shelf cleaning",
                    "Vacuum extraction at the firebox",
                    "Spark arrestor and cap inspection",
                    "NFPA 211 Level 1 visual inspection of accessible components",
                    "Written report of findings",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" className="shrink-0 mt-1" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">East Bay chimney service</p>
                <p className="text-gray-300 text-sm mb-4">We serve Oakland, Rockridge, Temescal, Montclair, Fruitvale, and surrounding East Bay neighborhoods.</p>
                <Link href="/contact/" className="btn-primary inline-block">Request Free Estimate</Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Chimney Cleaning (All California)", href: "/services/chimney-cleaning/" },
                    { name: "Chimney Sweep in Oakland", href: "/areas/oakland/chimney-sweep/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Creosote Removal", href: "/services/creosote-removal/" },
                    { name: "Chimney Repair in Oakland", href: "/areas/oakland/chimney-repair/" },
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
              <LeadForm heading="Get a Free Estimate" subheading="Chimney cleaning in Oakland. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Oakland</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Repair", href: "/areas/oakland/chimney-repair/" },
                    { name: "Chimney Sweep", href: "/areas/oakland/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/oakland/fireplace-repair/" },
                    { name: "Dryer Vent Cleaning", href: "/areas/oakland/dryer-vent-cleaning/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Cleaning Oakland — FAQ" addSchema={false} />
      <CTABanner heading="Schedule chimney cleaning in Oakland" />
    </>
  );
}
