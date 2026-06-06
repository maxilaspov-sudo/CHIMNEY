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
  title: "Chimney Cleaning Long Beach | Fireplace & Flue Cleaning",
  description:
    "Professional chimney cleaning in Long Beach for soot, creosote buildup, fireplace odors, poor draft, and annual chimney maintenance. Coastal homes and Craftsman bungalows.",
  alternates: { canonical: "/areas/long-beach/chimney-cleaning/" },
  openGraph: {
    title: "Chimney Cleaning Long Beach | Fireplace & Flue Cleaning",
    description:
      "Professional chimney cleaning in Long Beach for soot, creosote buildup, fireplace odors, poor draft, and annual chimney maintenance.",
    url: `${SITE.baseUrl}/areas/long-beach/chimney-cleaning/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Cleaning Long Beach | Fireplace & Flue Cleaning",
    description: "Chimney cleaning in Long Beach — coastal homes, Craftsman bungalows, salt air effects. Free estimate.",
  },
};

const FAQS = [
  {
    q: "How often should I schedule chimney cleaning in Long Beach?",
    a: "Once per year is the right interval for most Long Beach homes. Even households that burn wood infrequently should schedule annual cleaning because coastal salt air deposits on metal chimney components between uses, and moisture from the marine environment activates residual soot and creosote in a way that inland climates do not. For Long Beach Craftsman bungalows with original ornamental brick fireplaces, annual cleaning also prevents salt-air-driven deterioration from progressing undetected.",
  },
  {
    q: "What are signs my chimney needs cleaning in Long Beach?",
    a: "Smoke entering the room when the fireplace is in use, a musty or briny smell from the fireplace when it is not in use, soot visible around the firebox opening, difficulty maintaining a fire, or more than one year since the last professional cleaning. In Long Beach, a fireplace that smells of salt or mildew when unused is often a sign of moisture-activated deposits in the flue.",
  },
  {
    q: "Is chimney cleaning the same as a chimney sweep?",
    a: "Yes, the terms describe the same service. A chimney sweep or cleaning removes soot, creosote, and debris from the flue mechanically. A basic Level 1 inspection of accessible components is included with every cleaning visit.",
  },
  {
    q: "Can chimney cleaning help with fireplace odors in Long Beach homes?",
    a: "Yes. Long Beach homes near the water often experience stronger chimney odors than inland properties, because coastal humidity activates soot and creosote residue in a way that dry air does not. Thorough cleaning removes those deposits. If odor continues after cleaning, it typically points to a damper that does not seal fully — which is a common issue in Long Beach given the corrosive effect of salt air on metal components.",
  },
  {
    q: "Do you inspect the chimney during cleaning in Long Beach?",
    a: "Yes. Every cleaning visit includes a NFPA 211 Level 1 visual inspection. For Long Beach coastal properties, we pay particular attention to metal components — caps, damper assemblies, and any stainless liner sections — because salt air accelerates corrosion on standard-grade metals. A marine-grade 316L stainless cap is the right choice for Long Beach properties within a few miles of the water.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Cleaning Long Beach",
  serviceType: "Chimney Cleaning",
  description: "Professional chimney cleaning in Long Beach for soot, creosote buildup, fireplace odors, and annual chimney maintenance.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: { "@type": "PostalAddress", addressLocality: "Long Beach", addressRegion: "CA", addressCountry: "US" },
  },
  areaServed: { "@type": "City", name: "Long Beach" },
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

export default function ChimneyCleaningLongBeachPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/areas/" },
            { label: "Long Beach", href: "/areas/long-beach/" },
            { label: "Chimney Cleaning" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Technician performing chimney cleaning inside a Long Beach fireplace" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Long Beach
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Cleaning in Long Beach, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Annual chimney cleaning for Long Beach coastal homes, Craftsman bungalows, and waterfront properties — salt air effects on metal components checked on every visit.
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
                  Long Beach homeowners burn wood less frequently than inland California residents — mild coastal temperatures mean the fireplace might see a few dozen nights of use per year rather than consistent weekly burning. But lower use frequency does not mean lower maintenance need. Salt air from the port and the ocean deposits on chimney metal components throughout the year, and marine moisture activates residual soot and creosote in ways that dry inland air does not.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Annual cleaning ensures that salt and moisture deposits do not accumulate between uses and that the metal components — cap, damper, and any liner sections — are checked for the accelerated corrosion that coastal environments produce. A{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">chimney inspection</Link>{" "}
                  alongside the cleaning gives a complete picture of current system condition.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Why Chimney Cleaning Matters in Long Beach Homes</h2>
                <ul className="space-y-3">
                  {[
                    { title: "Salt air and marine moisture", desc: "Long Beach properties near the waterfront see metal chimney components corrode faster than inland California. Annual cleaning includes a check of cap, damper, and liner condition for early signs of salt air deterioration." },
                    { title: "Craftsman bungalow fireplaces", desc: "Long Beach has one of the highest concentrations of California Craftsman bungalows in the state. These ornamental brick fireplaces require careful cleaning to avoid surface damage to the original masonry." },
                    { title: "Moisture-activated odors", desc: "Coastal humidity activates soot and creosote deposits in ways dry air does not. A fireplace that smells musty or briny when unused typically needs cleaning to remove the deposits causing the odor." },
                    { title: "Infrequent burning does not mean no maintenance", desc: "Even a fireplace used only a handful of times per year accumulates salt, moisture, and light soot deposits that benefit from annual attention." },
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
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Chimney Cleaning Service Includes</h2>
                <ul className="space-y-2">
                  {[
                    "Full-length flue cleaning with rotary brush equipment",
                    "Smoke chamber and damper shelf cleaning",
                    "Vacuum extraction at the firebox",
                    "Metal component check — cap, damper, and visible liner for corrosion",
                    "NFPA 211 Level 1 inspection of accessible components",
                    "Written report of findings and any recommendations",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" className="shrink-0 mt-1" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Coastal chimney service</p>
                <p className="text-gray-300 text-sm mb-4">We serve Long Beach, Belmont Shore, Naples, Signal Hill, Bixby Knolls, and surrounding areas.</p>
                <Link href="/contact/" className="btn-primary inline-block">Request Free Estimate</Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Chimney Cleaning (All California)", href: "/services/chimney-cleaning/" },
                    { name: "Chimney Sweep in Long Beach", href: "/areas/long-beach/chimney-sweep/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Creosote Removal", href: "/services/creosote-removal/" },
                    { name: "Chimney Repair in Long Beach", href: "/areas/long-beach/chimney-repair/" },
                    { name: "Long Beach service area", href: "/areas/long-beach/" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors">
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm heading="Get a Free Estimate" subheading="Chimney cleaning in Long Beach. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Long Beach</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Repair", href: "/areas/long-beach/chimney-repair/" },
                    { name: "Chimney Sweep", href: "/areas/long-beach/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/long-beach/fireplace-repair/" },
                    { name: "Dryer Vent Cleaning", href: "/areas/long-beach/dryer-vent-cleaning/" },
                    { name: "All Long Beach Services", href: "/areas/long-beach/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Cleaning Long Beach — FAQ" addSchema={false} />
      <CTABanner heading="Schedule chimney cleaning in Long Beach" />
    </>
  );
}
