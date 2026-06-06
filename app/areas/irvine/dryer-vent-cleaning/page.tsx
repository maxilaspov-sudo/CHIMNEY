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
  title: "Dryer Vent Cleaning Irvine | Lint & Airflow Service",
  description:
    "Dryer vent cleaning in Irvine for lint buildup, clogged dryer vents, poor airflow, and long drying times. HOA-compliant service for Irvine planned communities.",
  alternates: { canonical: "/areas/irvine/dryer-vent-cleaning/" },
  openGraph: {
    title: "Dryer Vent Cleaning Irvine | Lint & Airflow Service",
    description:
      "Dryer vent cleaning in Irvine for lint buildup, clogged dryer vents, poor airflow, and long drying times.",
    url: `${SITE.baseUrl}/areas/irvine/dryer-vent-cleaning/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dryer Vent Cleaning Irvine | Lint & Airflow Service",
    description: "Dryer vent cleaning in Irvine — planned community homes, attic ducts, summer heat. Free estimate.",
  },
};

const FAQS = [
  {
    q: "How often should I clean dryer vents in Irvine?",
    a: "Once per year is appropriate for most Irvine households. If your household runs the dryer more than once daily, or if the duct runs through an attic space — common in Irvine&apos;s single-family planned community homes — twice-yearly cleaning is worth considering. Attic duct runs in Irvine reach high temperatures in summer, which raises the operating temperature when a lint restriction is present.",
  },
  {
    q: "Do HOA rules in Irvine affect dryer vent cleaning?",
    a: "Most Irvine HOAs do not require pre-approval for interior maintenance like dryer vent cleaning. If the service involves any exterior work — cap replacement or exterior vent cover replacement visible from the street — some Irvine HOAs may have specifications for approved materials or finishes. We can provide documentation and material specifications for HOA records if needed.",
  },
  {
    q: "What are the signs my Irvine dryer vent needs cleaning?",
    a: "Clothes taking more than one full cycle to dry, the dryer running hot during operation, a burning smell during the cycle, the dryer shutting off before completion, or weak airflow at the exterior vent cap are the primary indicators. Irvine homeowners sometimes notice the laundry room feels warmer than usual when the dryer runs — that is heat that should be exhausting through the vent but is being retained due to restricted airflow.",
  },
  {
    q: "Does summer heat affect dryer vents in Irvine?",
    a: "Yes. Irvine attics reach temperatures well above 130°F in summer. Dryer ducts routed through these spaces are in a high-temperature environment before the dryer even runs. A lint restriction compounds this by reducing the airflow that would otherwise cool the duct. Annual cleaning in spring or fall keeps the system running within its designed temperature range.",
  },
  {
    q: "What does dryer vent cleaning include?",
    a: "Rotary brush cleaning of the full duct from the dryer connection to the exterior cap, high-powered vacuum extraction at the dryer end, exterior cap inspection and clearing, a check of the flexible connector between the dryer and wall duct for kinks or damage, and airflow confirmation at the exterior termination before we complete the visit. We also note any duct configuration concerns — long runs, sharp bends, or accordion-style duct sections — that increase lint accumulation risk.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dryer Vent Cleaning Irvine",
  serviceType: "Dryer Vent Cleaning",
  description: "Dryer vent cleaning in Irvine for lint buildup, clogged dryer vents, poor airflow, and long drying times.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: { "@type": "PostalAddress", addressLocality: "Irvine", addressRegion: "CA", addressCountry: "US" },
  },
  areaServed: { "@type": "City", name: "Irvine" },
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

export default function DryerVentCleaningIrvinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/areas/" },
            { label: "Irvine", href: "/areas/irvine/" },
            { label: "Dryer Vent Cleaning" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Technician cleaning dryer vent ducts in an Irvine planned community home" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Irvine
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Dryer Vent Cleaning in Irvine, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Lint removal and airflow restoration for Irvine homes. Annual dryer vent cleaning for planned community residences — attic-routed ducts, summer heat, and HOA documentation available.
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
                  Irvine&apos;s planned community homes have consistent construction characteristics that affect dryer vent maintenance. Many single-family homes in Irvine have dryer ducts that exit through exterior walls or route through attic spaces before terminating at the eave or roofline. Attic spaces in Irvine reach very high temperatures in summer — a lint restriction in a duct running through this environment raises the operating temperature significantly and increases fire risk.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Annual cleaning is the straightforward preventive answer. If the dryer is already showing signs of restriction — longer drying times, excess heat, a burning smell — service is needed now regardless of when it was last done.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Signs Your Dryer Vent Needs Cleaning</h2>
                <ul className="space-y-2">
                  {[
                    "Clothes take more than one full cycle to dry",
                    "The dryer runs hot to the touch during operation",
                    "A burning smell occurs at any point during the drying cycle",
                    "The dryer shuts off before the cycle ends",
                    "Airflow at the exterior vent cap is weak when the dryer is running",
                    "The laundry room feels warmer than usual when the dryer runs",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" className="shrink-0 mt-1" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Dryer Vent Cleaning Includes</h2>
                <ul className="space-y-3">
                  {[
                    { title: "Rotary brush cleaning, full duct length", desc: "From the dryer connection through the full run, including attic sections and any bends, to the exterior cap." },
                    { title: "Vacuum extraction at the dryer end", desc: "All dislodged lint is captured — not left in the duct or deposited in the laundry room." },
                    { title: "Exterior cap inspection and clearing", desc: "Cap cleared of lint and debris, damper checked for proper operation when the dryer runs." },
                    { title: "Flexible connector inspection", desc: "The transition piece between the dryer and the wall duct is checked for kinks, crushing, and loose connections." },
                    { title: "Airflow confirmation at exterior termination", desc: "Measurable airflow verified at the exterior cap before the visit is completed." },
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

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Schedule dryer vent cleaning in Irvine</p>
                <p className="text-gray-300 text-sm mb-4">We serve Irvine, Turtle Ridge, Shady Canyon, Woodbury, Northwood, University Park, Westpark, and surrounding Orange County communities. HOA documentation available on request.</p>
                <Link href="/contact/" className="btn-primary inline-block">Request Free Estimate</Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Dryer Vent Cleaning (All California)", href: "/services/dryer-vent-cleaning/" },
                    { name: "Dryer Vent Blockage Removal", href: "/services/dryer-vent-blockage-removal/" },
                    { name: "Dryer Vent Lint Removal", href: "/services/dryer-vent-lint-removal/" },
                    { name: "Chimney Cleaning in Irvine", href: "/areas/irvine/chimney-cleaning/" },
                    { name: "Chimney Sweep in Irvine", href: "/areas/irvine/chimney-sweep/" },
                    { name: "Irvine service area", href: "/areas/irvine/" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors">
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm heading="Get a Free Estimate" subheading="Dryer vent cleaning in Irvine. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Irvine</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/irvine/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/irvine/chimney-repair/" },
                    { name: "Chimney Sweep", href: "/areas/irvine/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/irvine/fireplace-repair/" },
                    { name: "All Irvine Services", href: "/areas/irvine/" },
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

      <FAQSection faqs={FAQS} heading="Dryer Vent Cleaning Irvine — FAQ" addSchema={false} />
      <CTABanner heading="Schedule dryer vent cleaning in Irvine" />
    </>
  );
}
