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
  title: "Chimney Cleaning Anaheim | Fireplace & Flue Cleaning",
  description:
    "Professional chimney cleaning in Anaheim for soot, creosote buildup, fireplace odors, poor draft, and annual chimney maintenance. Factory-built and gas fireplace service.",
  alternates: { canonical: "/areas/anaheim/chimney-cleaning/" },
  openGraph: {
    title: "Chimney Cleaning Anaheim | Fireplace & Flue Cleaning",
    description:
      "Professional chimney cleaning in Anaheim for soot, creosote buildup, fireplace odors, poor draft, and annual chimney maintenance.",
    url: `${SITE.baseUrl}/areas/anaheim/chimney-cleaning/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Cleaning Anaheim | Fireplace & Flue Cleaning",
    description: "Chimney cleaning in Anaheim — factory-built fireplaces, gas inserts, SCAQMD season prep. Free estimate.",
  },
};

const FAQS = [
  {
    q: "How often should I schedule chimney cleaning in Anaheim?",
    a: "Once per year is the right interval for Anaheim homes with wood-burning fireplaces. For homes with gas log inserts — which are very common in Anaheim given SCAQMD wood-burning restrictions — annual inspection and cleaning of the gas insert liner is still appropriate, even though combustion deposits are lower than with wood. The liner needs to be clear of spider webs and debris before the first use each season.",
  },
  {
    q: "What are signs my chimney needs cleaning?",
    a: "Smoke entering the room when the fireplace is in use, a musty or acrid smell from the fireplace when it is not in use, visible soot around the firebox opening, or difficulty maintaining a fire are the primary signs. For Anaheim homes with factory-built systems approaching or past their 30-year design life, an annual cleaning is also the right time to check refractory panel condition and overall system status.",
  },
  {
    q: "Is chimney cleaning the same as a chimney sweep?",
    a: "Yes — the terms describe the same service. Mechanically removing soot, creosote, and debris from the flue, with a visual inspection of accessible components included. For factory-built fireplace systems common throughout Anaheim, the cleaning process uses equipment appropriate to the metal liner rather than the rotary brush technique used in masonry chimneys.",
  },
  {
    q: "Can chimney cleaning help with fireplace odors in an Anaheim home?",
    a: "Yes. Soot and creosote residue in the flue produce odors, particularly during cooler months when temperature differentials draw air down through the chimney. Cleaning removes the primary source. A damper that does not seal completely is the second most common cause of odor — we check damper seal on every visit.",
  },
  {
    q: "Do you inspect the chimney during cleaning in Anaheim?",
    a: "Yes. Every cleaning includes a NFPA 211 Level 1 visual inspection. For Anaheim homes with factory-built systems installed in the late 1980s or 1990s — now approaching or exceeding their 30-year design life — we pay particular attention to refractory panel condition, metal liner integrity, and any signs of system deterioration.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Cleaning Anaheim",
  serviceType: "Chimney Cleaning",
  description: "Professional chimney cleaning in Anaheim for soot, creosote buildup, fireplace odors, and annual chimney maintenance.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: { "@type": "PostalAddress", addressLocality: "Anaheim", addressRegion: "CA", addressCountry: "US" },
  },
  areaServed: { "@type": "City", name: "Anaheim" },
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

export default function ChimneyCleaningAnaheimPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/areas/" },
            { label: "Anaheim", href: "/areas/anaheim/" },
            { label: "Chimney Cleaning" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Technician performing chimney cleaning inside an Anaheim fireplace" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Anaheim
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Cleaning in Anaheim, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Annual chimney and fireplace cleaning for Anaheim homes — factory-built systems, gas inserts, and wood-burning fireplaces. SCAQMD burning season prep included.
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
                  Anaheim and Orange County have one of the highest concentrations of factory-built zero-clearance fireplaces in California — a result of the single-family housing boom from 1975 to 1995. These systems differ from traditional masonry chimneys in construction and maintenance requirements. The metal liner, refractory panel firebox, and proprietary cap system each have manufacturer-specific service protocols that differ from the standard chimney cleaning approach.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Many of these systems are now 30 or more years old — at or past their design life. Annual cleaning is the right time to assess refractory panel condition and identify any components that need attention before the next burning season. A{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">chimney inspection</Link>{" "}
                  combined with cleaning is the appropriate service for any Anaheim home where the fireplace system&apos;s age and history are unclear.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Why Chimney Cleaning Matters in Anaheim Homes</h2>
                <ul className="space-y-3">
                  {[
                    { title: "Factory-built systems approaching design life", desc: "Many Anaheim factory-built fireplaces installed in the 1980s and 1990s are now 30+ years old — the manufacturers&apos; intended service life. Annual cleaning is also the right time for a condition assessment." },
                    { title: "Gas insert liner maintenance", desc: "Anaheim homeowners who have converted to gas log inserts still need annual inspection of the liner — spider webs, debris, and combustion deposits from gas systems need periodic removal." },
                    { title: "SCAQMD burning restrictions", desc: "Orange County&apos;s SCAQMD district restricts wood-burning during air quality events. A clean, inspected chimney ensures you are ready for every permitted burn day." },
                    { title: "Seasonal preparation", desc: "Anaheim&apos;s cooler months make occasional fireplace use practical. Annual pre-season cleaning ensures the system is ready when the cooler evenings arrive in November." },
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
                    "Flue cleaning appropriate to system type — rotary brush for masonry, appropriate technique for metal factory-built liners",
                    "Smoke chamber and damper shelf cleaning",
                    "Vacuum extraction at the firebox",
                    "NFPA 211 Level 1 inspection of accessible components",
                    "Refractory panel condition check for factory-built systems",
                    "Written report of findings and recommendations",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" className="shrink-0 mt-1" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Anaheim chimney and fireplace service</p>
                <p className="text-gray-300 text-sm mb-4">We serve Anaheim, Anaheim Hills, Colony Historic District, Brookhurst, West Anaheim, and surrounding Orange County neighborhoods.</p>
                <Link href="/contact/" className="btn-primary inline-block">Request Free Estimate</Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Chimney Cleaning (All California)", href: "/services/chimney-cleaning/" },
                    { name: "Chimney Sweep in Anaheim", href: "/areas/anaheim/chimney-sweep/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Creosote Removal", href: "/services/creosote-removal/" },
                    { name: "Chimney Repair in Anaheim", href: "/areas/anaheim/chimney-repair/" },
                    { name: "Anaheim service area", href: "/areas/anaheim/" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors">
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm heading="Get a Free Estimate" subheading="Chimney cleaning in Anaheim. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Anaheim</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Repair", href: "/areas/anaheim/chimney-repair/" },
                    { name: "Chimney Sweep", href: "/areas/anaheim/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/anaheim/fireplace-repair/" },
                    { name: "Dryer Vent Cleaning", href: "/areas/anaheim/dryer-vent-cleaning/" },
                    { name: "All Anaheim Services", href: "/areas/anaheim/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Cleaning Anaheim — FAQ" addSchema={false} />
      <CTABanner heading="Schedule chimney cleaning in Anaheim" />
    </>
  );
}
