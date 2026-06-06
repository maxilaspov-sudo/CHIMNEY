import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/commercial-chimney-services.jpg";

export const metadata: Metadata = {
  title: "Commercial Chimney Services in California | Inspections & Cleaning",
  description:
    "Commercial chimney services in California for property managers, restaurants, apartment buildings, and businesses needing inspection, cleaning, and maintenance planning.",
  alternates: { canonical: "/services/commercial-chimney-services/" },
  openGraph: {
    title: "Commercial Chimney Services in California | Inspections & Cleaning",
    description:
      "Commercial chimney services in California for property managers, restaurants, and apartment buildings. Inspection, cleaning, and maintenance planning.",
    url: `${SITE.baseUrl}/services/commercial-chimney-services/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Chimney Services in California | Inspections & Cleaning",
    description: "Commercial chimney services for restaurants, HOAs, and multi-family buildings. Free estimate.",
  },
};

const FAQS = [
  {
    q: "Do commercial properties need chimney inspections?",
    a: "Yes, especially if the property has fireplaces, venting systems, shared chimney structures, or tenant-used fireplaces.",
  },
  {
    q: "Can you service apartment or HOA properties?",
    a: "Commercial chimney service can be planned for multi-unit and managed properties, depending on access and scope.",
  },
  {
    q: "Do you provide written service notes?",
    a: "Service documentation can help property managers understand findings, recommended repairs, and future maintenance needs.",
  },
  {
    q: "Is commercial chimney cleaning different from residential cleaning?",
    a: "Often yes. Commercial work may involve scheduling, access planning, multiple systems, rooftop access, and documentation.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Chimney Services",
  serviceType: "Commercial Chimney Services",
  description:
    "Commercial chimney services in California for property managers, restaurants, apartment buildings, and businesses needing inspection, cleaning, and maintenance planning.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: { "@type": "PostalAddress", addressRegion: "CA", addressCountry: "US" },
  },
  areaServed: { "@type": "State", name: "California" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.baseUrl}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.baseUrl}/services/` },
    { "@type": "ListItem", position: 3, name: "Commercial Chimney Services", item: `${SITE.baseUrl}/services/commercial-chimney-services/` },
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

export default function CommercialChimneyServicesPage() {
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
              { label: "Services", href: "/services/" },
              { label: "Commercial Chimney Services" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Commercial chimney service technician inspecting rooftop chimney systems in California"
          fill
          priority
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="relative z-10 container-base py-16 md:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-wide">
              Licensed &amp; Insured · Professional Service
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Commercial Chimney Services in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Restaurants, apartment buildings, HOA properties, and business facilities often require more planning, better documentation, and service that works around operating hours.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact/" className="btn-primary">Request a Free Estimate</Link>
              <a href={`mailto:${SITE.email}`} className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      <section className="section-pad bg-white">
        <div className="container-base">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left: main content */}
            <div className="lg:col-span-2 space-y-10">

              {/* Intro */}
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Commercial buildings have different chimney and venting needs than single-family homes. Restaurants, apartment buildings, HOA properties, multi-unit buildings, and business facilities often require more planning, better documentation, and service that works around operating hours. Chimney Peak California provides commercial chimney services for property owners and managers who need reliable inspection, cleaning, and maintenance support.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A commercial chimney issue can affect safety, tenant comfort, equipment performance, and business operations. The goal is to identify problems early and keep the system maintained before small issues become expensive disruptions.
                </p>
              </div>

              {/* H2: Who It Is For */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Who Commercial Chimney Service Is For</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Commercial chimney service may be needed for apartment buildings, condominiums, restaurants, hospitality properties, office buildings, retail spaces, and managed residential communities. These properties often have multiple fireplaces, shared venting systems, rooftop access concerns, or documentation requirements.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Property managers may need routine{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>
                  , cleaning schedules, repair recommendations, or written service notes to support maintenance planning. Commercial service is not only about cleaning — it is about keeping the chimney system manageable and documented.
                </p>
              </div>

              {/* H2: What It May Include */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Commercial Chimney Service May Include</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Depending on the property, service may include{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>
                  ,{" "}
                  <Link href="/services/chimney-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney cleaning
                  </Link>
                  ,{" "}
                  <Link href="/services/dryer-vent-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    dryer vent cleaning
                  </Link>
                  , fireplace review, rooftop chimney evaluation, cap and crown checks, flashing review, and{" "}
                  <Link href="/services/chimney-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney repair
                  </Link>{" "}
                  recommendations.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For multi-unit properties, access and scheduling are important. A clear plan helps reduce disruption for residents, tenants, or customers while still allowing the work to be completed properly.
                </p>
              </div>

              {/* H2: Documentation */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Why Documentation Matters</h2>
                <p className="text-gray-600 leading-relaxed">
                  Commercial properties often need clear notes, photos, or written findings after service. This helps owners and managers understand what was checked, what needs attention, and what can be planned for later.
                </p>
              </div>

              {/* CTA box */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Managing a commercial property?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and tell us about the building type, number of units, and service needed.
                </p>
                <Link href="/contact/" className="btn-primary inline-block">
                  Request a Free Estimate
                </Link>
              </div>

              {/* Service areas */}
              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Areas We Serve</h2>
                <div className="flex flex-wrap gap-2">
                  {NAV_AREAS.slice(0, 14).map((area) => (
                    <Link key={area.href} href={area.href} className="text-xs bg-gray-50 border border-gray-200 hover:border-orange-400 hover:text-orange-600 text-gray-600 font-medium px-3 py-1.5 rounded-full transition-colors">
                      {area.name}
                    </Link>
                  ))}
                  <Link href="/areas/" className="text-xs bg-orange-50 border border-orange-200 text-orange-600 font-semibold px-3 py-1.5 rounded-full hover:bg-orange-100 transition-colors">
                    View All Areas →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: sidebar */}
            <div className="space-y-6 lg:sticky lg:top-6 lg:self-start">
              <LeadForm heading="Request a Free Estimate" subheading="Tell us the building type and number of systems." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Chimney Cleaning", href: "/services/chimney-cleaning/" },
                    { name: "Dryer Vent Cleaning", href: "/services/dryer-vent-cleaning/" },
                    { name: "Chimney Repair", href: "/services/chimney-repair/" },
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

      <FAQSection faqs={FAQS} addSchema={false} />
      <CTABanner />
    </>
  );
}
