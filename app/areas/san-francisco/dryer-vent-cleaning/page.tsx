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
  title: "Dryer Vent Cleaning San Francisco | Multi-Story & Row House Service",
  description:
    "Dryer vent cleaning in San Francisco for apartments, row houses, and multi-story homes. Reduces lint fire risk, improves efficiency, and clears blocked vents.",
  alternates: { canonical: "/areas/san-francisco/dryer-vent-cleaning/" },
  openGraph: {
    title: "Dryer Vent Cleaning San Francisco | Multi-Story & Row House Service",
    description:
      "Dryer vent cleaning in San Francisco for apartments, row houses, and multi-story homes. Reduces lint fire risk, improves efficiency, and clears blocked vents.",
    url: `${SITE.baseUrl}/areas/san-francisco/dryer-vent-cleaning/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dryer Vent Cleaning San Francisco | Multi-Story & Row House Service",
    description:
      "Dryer vent cleaning in San Francisco — row houses, multi-story, long duct runs. Free estimate.",
  },
};

const FAQS = [
  {
    q: "How often should I clean dryer vents in a San Francisco home?",
    a: "Most households benefit from cleaning once a year. If your dryer takes two or more cycles to dry a normal load, that is a practical sign your vent needs attention regardless of schedule. San Francisco row houses and multi-story homes often have longer, more complex duct runs that accumulate lint faster than a typical single-story home with a short straight run to an exterior wall.",
  },
  {
    q: "Are dryer vent fires a real concern in San Francisco?",
    a: "Yes. Dryer vent fires account for approximately 2,900 residential fires annually in the U.S. The risk is proportional to how much lint accumulates and how hot the dryer has to run to compensate for a restricted vent — both of which are higher in homes with longer or more complex duct runs. San Francisco row houses with vents that run up multiple stories or make several turns before reaching the exterior are in the higher-risk category.",
  },
  {
    q: "What are the signs that a dryer vent needs cleaning?",
    a: "The clearest signs are: drying time increases noticeably, the dryer feels hot on the outside during operation, clothes come out hotter than usual, or there is a burning smell during a cycle. If your dryer vent exhausts near the exterior of the house, you may also notice reduced airflow at the vent cap or lint accumulating around the cap. Any of these signs warrants immediate service.",
  },
  {
    q: "Can you clean dryer vents in buildings with complex duct routing?",
    a: "Yes — this is actually a specialty requirement in San Francisco rather than an exception. Many SF row houses have dryer vents that run horizontally then vertically, sometimes with offsets or connections in confined spaces. We use rotary brush systems and high-powered vacuum extraction suitable for these configurations. For particularly complex routing, we may use a video scope to confirm a complete clean.",
  },
  {
    q: "Do you service apartments and multi-unit buildings in San Francisco?",
    a: "Yes. We service both single-family homes and multi-unit residential buildings in San Francisco. For multi-unit work, we typically schedule building-wide or floor-by-floor visits with building managers. Contact us directly to discuss scheduling for a larger building.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dryer Vent Cleaning San Francisco",
  serviceType: "Dryer Vent Cleaning",
  description:
    "Dryer vent cleaning in San Francisco for apartments, row houses, and multi-story homes. Reduces lint fire risk, improves efficiency, and clears blocked vents.",
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

export default function DryerVentCleaningSanFranciscoPage() {
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
              { label: "Dryer Vent Cleaning" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Technician performing residential chimney and vent service in San Francisco"
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
              Dryer Vent Cleaning in San Francisco, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Row houses, multi-story Victorians, and apartment buildings with complex duct routing cleaned thoroughly using rotary brush and vacuum systems.
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
                  San Francisco&apos;s housing stock creates dryer vent conditions that are structurally different from most of California. Row houses, attached Victorians, multi-story flats, and apartment buildings mean that dryer vents often run horizontally, then vertically, sometimes through confined building cavities, before reaching an exterior wall or rooftop termination. Longer and more complex duct runs accumulate lint faster and are harder to clean thoroughly than a simple exterior-wall installation.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Annual cleaning is appropriate for most San Francisco households. If your dryer is already taking two cycles to dry a normal load, that is a functional sign the vent is restricted enough to warrant immediate service rather than waiting for the next scheduled visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Why San Francisco Vent Runs Need More Attention
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Longer duct runs",
                      desc: "Row houses and multi-story Victorians often have 20–40 foot vent runs compared to a typical single-story home. Every additional foot increases lint accumulation and reduces airflow — the dryer compensates by running hotter and longer.",
                    },
                    {
                      title: "Multiple bends and offsets",
                      desc: "SF homes frequently require the vent to navigate building structure with multiple 45° or 90° turns. Each bend reduces effective airflow and creates a collection point for lint.",
                    },
                    {
                      title: "Coastal humidity",
                      desc: "San Francisco's persistent moisture from the bay and ocean means lint stays damp rather than dry — damp lint compacts into a denser mass that a dryer&apos;s airflow struggles to move.",
                    },
                    {
                      title: "Apartment and multi-unit routing",
                      desc: "In multi-unit buildings, vents sometimes share pathways or have non-standard routing installed during renovations. Understanding the actual duct path before starting ensures a complete clean.",
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
                  What the Service Includes
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use rotary brush systems with high-powered vacuum extraction, which physically dislodges and removes lint rather than simply blowing it further down the duct. The approach works for straight runs and complex routed configurations alike.
                </p>
                <ul className="space-y-2">
                  {[
                    "Rotary brush cleaning from the dryer connection to the exterior termination",
                    "Vacuum extraction at the dryer end to capture dislodged lint",
                    "Exterior vent cap inspection and cleaning — bird nests and debris are common in SF",
                    "Duct connection check at the dryer — loose or kinked connections are a frequent secondary restriction",
                    "Airflow confirmation after cleaning",
                    "Written report of findings and recommendations",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" className="shrink-0 mt-1" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Signs Your Dryer Vent Needs Cleaning
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In a San Francisco home, a restricted dryer vent is a safety hazard, not just an inconvenience. Lint fires start inside the vent when partial blockages cause the dryer to run hot enough to ignite accumulated lint — and a restricted vent in an attached row house creates fire risk for neighboring units as well as your own.
                </p>
                <ul className="space-y-2">
                  {[
                    "Clothes take two or more cycles to fully dry",
                    "Dryer exterior is unusually hot during operation",
                    "Clothes smell musty or feel damp after a normal cycle",
                    "Burning smell during a drying cycle",
                    "Reduced airflow visible at the exterior vent cap",
                    "Lint visible around the exterior vent cap",
                    "Dryer shuts off mid-cycle due to high heat",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" className="shrink-0 mt-1" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  When We Would Not Schedule Dryer Vent Cleaning Alone
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  If your vent is blocked and you have any reason to suspect a more serious issue — a burning smell that persists, evidence of prior overheating at the duct connections, or significant visible damage to the exterior termination — a cleaning alone is not the right starting point. Contact us and describe what you are seeing so we can advise the appropriate scope of work.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Schedule dryer vent cleaning in San Francisco</p>
                <p className="text-gray-300 text-sm mb-4">
                  Tell us about your home and the signs you&apos;ve noticed — we&apos;ll come prepared for the duct routing your building requires.
                </p>
                <Link href="/contact/" className="btn-primary inline-block">
                  Request Free Estimate
                </Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Dryer Vent Cleaning (All California)", href: "/services/dryer-vent-cleaning/" },
                    { name: "Chimney Cleaning in San Francisco", href: "/areas/san-francisco/chimney-cleaning/" },
                    { name: "Chimney Sweep in San Francisco", href: "/areas/san-francisco/chimney-sweep/" },
                    { name: "Chimney Repair in San Francisco", href: "/areas/san-francisco/chimney-repair/" },
                    { name: "Fireplace Repair in San Francisco", href: "/areas/san-francisco/fireplace-repair/" },
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
              <LeadForm heading="Get a Free Estimate" subheading="Dryer vent cleaning in San Francisco. We respond within 2 business hours." dark={false} />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in San Francisco</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/san-francisco/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/san-francisco/chimney-repair/" },
                    { name: "Chimney Sweep", href: "/areas/san-francisco/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/san-francisco/fireplace-repair/" },
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

      <FAQSection faqs={FAQS} heading="Dryer Vent Cleaning San Francisco — FAQ" addSchema={false} />
      <CTABanner heading="Schedule dryer vent cleaning in San Francisco" />
    </>
  );
}
