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
  title: "Chimney Cleaning Irvine | Fireplace & Flue Cleaning",
  description:
    "Professional chimney cleaning in Irvine for gas fireplaces, direct-vent systems, factory-built units, and annual fireplace maintenance. HOA-compliant service for planned communities.",
  alternates: { canonical: "/areas/irvine/chimney-cleaning/" },
  openGraph: {
    title: "Chimney Cleaning Irvine | Fireplace & Flue Cleaning",
    description:
      "Professional chimney cleaning in Irvine for gas fireplaces, direct-vent systems, factory-built units, and annual fireplace maintenance.",
    url: `${SITE.baseUrl}/areas/irvine/chimney-cleaning/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Cleaning Irvine | Fireplace & Flue Cleaning",
    description: "Chimney cleaning in Irvine — gas fireplaces, direct-vent systems, SCAQMD season prep. Free estimate.",
  },
};

const FAQS = [
  {
    q: "Do I need chimney cleaning if my Irvine home has a gas fireplace?",
    a: "Yes, though the scope differs from wood-burning service. Gas fireplaces and direct-vent gas systems in Irvine still benefit from annual inspection and liner clearing. Combustion deposits from gas are lower than from wood, but spider webs, debris, and particulate from Southern California&apos;s dry season accumulate in unused flues and at burner assemblies. Annual service catches any issues before the first use of the season.",
  },
  {
    q: "What type of fireplace is common in Irvine homes?",
    a: "Irvine&apos;s post-1990 master-planned construction predominantly used two types: factory-built zero-clearance fireplaces with vertical chimney chases, and direct-vent gas fireplaces that exhaust through an exterior wall rather than a traditional chimney. Both are common across Irvine&apos;s planned villages — Turtle Ridge, Shady Canyon, Woodbury, Northwood, University Park, and Westpark. Masonry chimneys are rare in Irvine compared to older Orange County cities.",
  },
  {
    q: "How often should I schedule chimney cleaning in Irvine?",
    a: "Once per year is the standard interval. For Irvine homes with wood-burning factory-built fireplaces, annual cleaning removes soot and creosote and includes inspection of refractory panels. For gas fireplace systems, annual inspection and cleaning of accessible components is appropriate. Direct-vent systems have lower deposit levels but still benefit from yearly inspection of the termination cap and liner.",
  },
  {
    q: "Do I need to inform my HOA before scheduling chimney cleaning in Irvine?",
    a: "Most Irvine HOAs do not require pre-approval for interior maintenance services like chimney cleaning. However, if any exterior work is needed — cap replacement, chase cover repair, or exterior vent cap service — you may need to check HOA approval requirements, particularly for work visible from the street or exterior. We can provide documentation of work completed for HOA records if needed.",
  },
  {
    q: "What does chimney cleaning include for a direct-vent gas fireplace?",
    a: "For Irvine homes with direct-vent gas fireplaces, service includes inspection and cleaning of the interior components accessible from the firebox, cleaning and inspection of the glass front and seal, inspection of the exterior termination cap for obstructions or damage, and a functional check of the ignition system. Direct-vent units do not have a traditional flue to brush, but the termination cap and interior burner area still need periodic attention.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Cleaning Irvine",
  serviceType: "Chimney Cleaning",
  description: "Professional chimney cleaning in Irvine for gas fireplaces, direct-vent systems, factory-built units, and annual fireplace maintenance.",
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

export default function ChimneyCleaningIrvinePage() {
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
            { label: "Chimney Cleaning" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Technician performing fireplace and chimney cleaning in an Irvine home" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Irvine
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Cleaning in Irvine, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Annual fireplace and chimney cleaning for Irvine homes — factory-built systems, direct-vent gas fireplaces, and wood-burning units in Irvine&apos;s master-planned communities.
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
                  Irvine&apos;s master-planned development — most of it built after 1990 — means the city has a relatively uniform fireplace profile compared to older Orange County cities. Factory-built zero-clearance systems and direct-vent gas fireplaces are the dominant types. Traditional masonry chimneys are uncommon. This matters for chimney cleaning because factory-built and direct-vent systems have different service requirements than the masonry chimneys most homeowners picture when they think of a chimney sweep.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Even gas-only systems benefit from annual inspection. Southern California&apos;s dry season leaves unused flues and gas burner assemblies exposed to dust, spider webs, and debris accumulation over the months between uses. A{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">chimney inspection</Link>{" "}
                  combined with cleaning is the appropriate annual service for any Irvine fireplace regardless of fuel type.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Chimney and Fireplace Types in Irvine</h2>
                <ul className="space-y-3">
                  {[
                    { title: "Factory-built zero-clearance systems", desc: "The most common fireplace type in Irvine&apos;s planned villages. These have a metal liner in a prefabricated chase. Cleaning technique differs from masonry — we use equipment appropriate to the metal liner to avoid damage." },
                    { title: "Direct-vent gas fireplaces", desc: "Very common in Irvine&apos;s newer construction, particularly in higher-end planned communities like Turtle Ridge and Shady Canyon. These exhaust through an exterior wall rather than a vertical chimney. Annual inspection of the termination cap and interior components is appropriate." },
                    { title: "Gas log inserts in factory-built units", desc: "Many Irvine homeowners have converted their factory-built wood-burning systems to gas log inserts. The liner still benefits from annual inspection even with gas combustion." },
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
                    "Flue cleaning appropriate to system type — metal liner technique for factory-built systems",
                    "Smoke chamber and damper shelf cleaning",
                    "Vacuum extraction at the firebox",
                    "Direct-vent termination cap inspection and clearing (for applicable systems)",
                    "NFPA 211 Level 1 inspection with written report",
                    "Refractory panel condition assessment for factory-built systems",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" className="shrink-0 mt-1" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Irvine chimney and fireplace service</p>
                <p className="text-gray-300 text-sm mb-4">We serve Irvine, Turtle Ridge, Shady Canyon, Woodbury, Northwood, University Park, Westpark, and surrounding Orange County communities.</p>
                <Link href="/contact/" className="btn-primary inline-block">Request Free Estimate</Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Chimney Cleaning (All California)", href: "/services/chimney-cleaning/" },
                    { name: "Chimney Sweep in Irvine", href: "/areas/irvine/chimney-sweep/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Fireplace Inspection", href: "/services/fireplace-inspection/" },
                    { name: "Chimney Repair in Irvine", href: "/areas/irvine/chimney-repair/" },
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
              <LeadForm heading="Get a Free Estimate" subheading="Chimney cleaning in Irvine. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Irvine</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Repair", href: "/areas/irvine/chimney-repair/" },
                    { name: "Chimney Sweep", href: "/areas/irvine/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/irvine/fireplace-repair/" },
                    { name: "Dryer Vent Cleaning", href: "/areas/irvine/dryer-vent-cleaning/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Cleaning Irvine — FAQ" addSchema={false} />
      <CTABanner heading="Schedule chimney cleaning in Irvine" />
    </>
  );
}
