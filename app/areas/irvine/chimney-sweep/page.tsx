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
  title: "Chimney Sweep Irvine | Chimney & Fireplace Service",
  description:
    "Professional chimney sweep service in Irvine for factory-built fireplaces, gas inserts, direct-vent systems, and annual fireplace maintenance. SCAQMD season prep for Orange County.",
  alternates: { canonical: "/areas/irvine/chimney-sweep/" },
  openGraph: {
    title: "Chimney Sweep Irvine | Chimney & Fireplace Service",
    description:
      "Professional chimney sweep service in Irvine for factory-built fireplaces, gas inserts, and direct-vent systems.",
    url: `${SITE.baseUrl}/areas/irvine/chimney-sweep/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Sweep Irvine | Chimney & Fireplace Service",
    description: "Chimney sweep in Irvine — factory-built systems, gas inserts, direct-vent fireplaces. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What does a chimney sweep include for a factory-built fireplace in Irvine?",
    a: "For Irvine&apos;s common factory-built systems, a chimney sweep includes flue cleaning with equipment appropriate to the metal liner, smoke chamber and damper shelf cleaning, vacuum extraction at the firebox, and a NFPA 211 Level 1 inspection. The inspection pays particular attention to refractory panel condition — the most common wear item in factory-built systems that are now 25-30+ years old in Irvine&apos;s earlier planned communities.",
  },
  {
    q: "Do direct-vent gas fireplaces in Irvine need chimney sweep service?",
    a: "Direct-vent systems exhaust through an exterior wall rather than a traditional chimney, so they do not need a flue sweep in the traditional sense. However, annual service is still appropriate — inspection and cleaning of the interior burner assembly, the glass front and seal, and the exterior termination cap. Southern California&apos;s dry season means debris, spider webs, and particulate accumulate at the termination cap between uses.",
  },
  {
    q: "How often should I schedule chimney sweep service in Irvine?",
    a: "Once per year is appropriate. The annual visit serves two purposes: cleaning to remove any accumulated debris or combustion deposits, and inspection to catch any component issues before they develop into more significant repairs. For Irvine homes where the fireplace is rarely used, the cleaning component may be minimal — but the inspection remains valuable, particularly for factory-built systems approaching or past their 30-year design life.",
  },
  {
    q: "When should I schedule chimney sweep service in Irvine?",
    a: "October or early November works well for most Irvine homeowners — ahead of the cooler months when the fireplace sees occasional use. SCAQMD wood-burning restrictions in Orange County apply during certain weather conditions from October through February. Scheduling the sweep before those months ensures the system is ready for every permitted burn day.",
  },
  {
    q: "Can a chimney sweep tell me whether my Irvine factory-built fireplace is safe to use?",
    a: "Yes. The Level 1 inspection included with every sweep covers the visible components of the system. If we find issues — cracked-through refractory panels, a failed damper, liner concerns — we document them and explain the options. For Irvine homes where the fireplace has not been recently serviced or where the system age and history are unclear, a Level 2 camera inspection can provide a more complete picture of liner condition.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Sweep Irvine",
  serviceType: "Chimney Sweep",
  description: "Professional chimney sweep service in Irvine for factory-built fireplaces, gas inserts, and direct-vent systems.",
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

export default function ChimneySweepIrvinePage() {
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
            { label: "Chimney Sweep" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Chimney sweep technician servicing a factory-built fireplace in an Irvine planned community home" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Irvine
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Sweep in Irvine, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Annual chimney sweep with NFPA 211 inspection for Irvine&apos;s planned communities — factory-built systems, gas inserts, and direct-vent fireplaces. SCAQMD season preparation included.
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
                  Irvine is almost entirely post-1990 master-planned construction. This means the city has a relatively uniform fireplace profile — dominated by factory-built zero-clearance systems and direct-vent gas fireplaces — with very few traditional masonry chimneys. A chimney sweep in Irvine means understanding factory-built system maintenance, not the masonry work that dominates service in older California cities.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  The annual sweep visit is also the right time to assess the condition of aging factory-built systems. Irvine&apos;s earliest planned communities date to the early 1990s, putting those factory-built fireplaces at or approaching their 30-year design life. The{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">chimney inspection</Link>{" "}
                  included with every sweep is the appropriate annual condition check for these systems.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What a Chimney Sweep Includes in Irvine</h2>
                <ul className="space-y-3">
                  {[
                    { title: "System-appropriate flue cleaning", desc: "Factory-built metal liner cleaning uses different equipment than masonry brush technique. We match the cleaning method to the system type to avoid damaging the liner." },
                    { title: "Smoke chamber and damper shelf", desc: "Cleaned on every sweep visit — deposits in these areas contribute to both draft problems and fireplace odors." },
                    { title: "Debris clearing for seasonal systems", desc: "Irvine fireplaces used infrequently often accumulate spider webs and debris between seasons. All of this is cleared before the cleaning portion begins." },
                    { title: "Level 1 inspection with written report", desc: "NFPA 211 Level 1 inspection of all accessible components, including specific assessment of refractory panel condition for factory-built systems." },
                    { title: "Direct-vent termination cap check", desc: "For Irvine homes with direct-vent gas fireplaces, the exterior termination cap is inspected for obstructions, damage, and proper function." },
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
                <p className="font-semibold text-lg mb-2">Annual chimney sweep for Irvine homes</p>
                <p className="text-gray-300 text-sm mb-4">We serve Irvine, Turtle Ridge, Shady Canyon, Woodbury, Northwood, University Park, Westpark, and surrounding Orange County communities.</p>
                <Link href="/contact/" className="btn-primary inline-block">Request Free Estimate</Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Chimney Sweep (All California)", href: "/services/chimney-sweep/" },
                    { name: "Chimney Cleaning in Irvine", href: "/areas/irvine/chimney-cleaning/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Fireplace Repair in Irvine", href: "/areas/irvine/fireplace-repair/" },
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
              <LeadForm heading="Get a Free Estimate" subheading="Chimney sweep in Irvine. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Irvine</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/irvine/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/irvine/chimney-repair/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Sweep Irvine — FAQ" addSchema={false} />
      <CTABanner heading="Schedule a chimney sweep in Irvine" />
    </>
  );
}
