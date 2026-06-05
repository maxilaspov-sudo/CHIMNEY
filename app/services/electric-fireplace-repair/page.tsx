import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/electric-fireplace-repair.jpg";

export const metadata: Metadata = {
  title: "Electric Fireplace Repair in California | Fireplace Troubleshooting",
  description:
    "Electric fireplace repair in California for units that will not turn on, heating problems, fan issues, controls, displays, and installation concerns.",
  alternates: { canonical: "/services/electric-fireplace-repair/" },
  openGraph: {
    title: "Electric Fireplace Repair in California | Fireplace Troubleshooting",
    description:
      "Electric fireplace repair in California for units that will not turn on, heating problems, fan issues, controls, displays, and installation concerns.",
    url: `${SITE.baseUrl}/services/electric-fireplace-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electric Fireplace Repair in California | Fireplace Troubleshooting",
    description: "Electric fireplace repair in California — power, heat, fan, controls, and installation issues. Free estimate.",
  },
};

const FAQS = [
  {
    q: "Why will my electric fireplace not turn on?",
    a: "It may be a power issue, control problem, internal component failure, or installation-related issue.",
  },
  {
    q: "Can an electric fireplace heater stop working?",
    a: "Yes. Heating elements, fans, controls, or safety features can fail or need troubleshooting.",
  },
  {
    q: "Is electric fireplace repair always worth it?",
    a: "Not always. Some units are better replaced depending on age, parts, and cost.",
  },
  {
    q: "Does an electric fireplace need a chimney?",
    a: "No. Electric fireplaces do not use a chimney or flue.",
  },
  {
    q: "Can bad installation cause electric fireplace problems?",
    a: "Yes. Poor airflow, incorrect mounting, or power setup issues can affect operation.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Electric Fireplace Repair",
  serviceType: "Electric Fireplace Repair",
  description:
    "Electric fireplace repair in California for units that will not turn on, heating problems, fan issues, controls, displays, and installation concerns.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: { "@type": "PostalAddress", addressRegion: "CA", addressCountry: "US" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.googleRating,
      reviewCount: SITE.reviewCount,
      bestRating: "5",
    },
  },
  areaServed: { "@type": "State", name: "California" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.baseUrl}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.baseUrl}/services/` },
    { "@type": "ListItem", position: 3, name: "Electric Fireplace Repair", item: `${SITE.baseUrl}/services/electric-fireplace-repair/` },
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

export default function ElectricFireplaceRepairPage() {
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
              { label: "Electric Fireplace Repair" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Technician troubleshooting an electric fireplace in a modern living room"
          fill
          priority
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="relative z-10 container-base py-16 md:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-wide">
              Licensed &amp; Insured · {SITE.googleRating} Stars · {SITE.reviewCount} Reviews
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Electric Fireplace Repair in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Electric fireplaces can develop problems with power, heat, fans, controls, or installation fit. Understanding the cause helps determine whether the unit needs repair, adjustment, or replacement.
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
                  Electric fireplaces are simple to use, but they can still develop problems with power, heat output, fans, controls, lights, or installation fit. Chimney Peak California helps homeowners troubleshoot electric fireplace issues and understand whether the unit needs adjustment, repair, replacement, or a better installation setup.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  An electric fireplace does not use a chimney or flue, but it still needs correct placement, power access, clearance, airflow around the unit, and proper installation. When something goes wrong, the issue may be with the unit itself or the way it was installed.
                </p>
              </div>

              {/* H2: Common Electric Fireplace Problems */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Common Electric Fireplace Problems</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Common problems include the unit not turning on, heat not working, fan noise, remote control issues, flickering display problems, unusual smells, weak heat output, or poor fit inside a wall or mantel. Some issues are electrical, while others relate to airflow, clearance, or installation.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If the fireplace worked before and suddenly stopped, the problem may be with the controls, power supply, heater, fan, or internal component. If it never worked properly, installation fit or setup may be part of the issue.
                </p>
              </div>

              {/* H2: Repair vs. Replacement */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Repair vs. Replacement</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Not every electric fireplace is worth repairing. If the unit is older, damaged, or has internal component failure, replacement may be the better option. If the problem is related to mounting, airflow clearance, power connection, or setup, service may help correct the issue.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The goal is to be practical. Some electric fireplace issues can be solved simply. Others may not be cost-effective to repair compared to replacing the unit. For installation of a new unit, see{" "}
                  <Link href="/services/fireplace-installation/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace installation
                  </Link>
                  .
                </p>
              </div>

              {/* H2: Installation-Related Issues */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Installation-Related Electric Fireplace Issues</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Electric fireplaces can develop problems when they are installed too tightly, blocked from airflow, mounted incorrectly, or placed where the power setup is not appropriate. If the unit overheats, shuts off, or fits poorly, the installation should be reviewed.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This is especially important for recessed electric fireplaces and modern feature-wall installations.
                </p>
              </div>

              {/* H2: Related Services */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Related Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  Electric fireplace repair often connects with{" "}
                  <Link href="/services/fireplace-installation/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace installation
                  </Link>
                  ,{" "}
                  <Link href="/services/gas-fireplace-installation/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    gas fireplace installation
                  </Link>
                  , and{" "}
                  <Link href="/services/fireplace-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace inspection
                  </Link>{" "}
                  for homes switching between fireplace types.
                </p>
              </div>

              {/* CTA box */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Electric fireplace not working right?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and describe the problem.
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
              <LeadForm heading="Request a Free Estimate" subheading="Describe the problem with your fireplace." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Fireplace Installation", href: "/services/fireplace-installation/" },
                    { name: "Gas Fireplace Installation", href: "/services/gas-fireplace-installation/" },
                    { name: "Gas Fireplace Repair", href: "/services/gas-fireplace-repair/" },
                    { name: "Fireplace Repair", href: "/services/fireplace-repair/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
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
