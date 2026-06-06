import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/gas-fireplace-installation.jpg";

export const metadata: Metadata = {
  title: "Gas Fireplace Installation in California | Chimney Peak California",
  description:
    "Gas fireplace installation in California for homeowners upgrading comfort, efficiency, and style. Safe setup, venting guidance, and clean installation planning.",
  alternates: { canonical: "/services/gas-fireplace-installation/" },
  openGraph: {
    title: "Gas Fireplace Installation in California | Chimney Peak California",
    description:
      "Gas fireplace installation in California for homeowners upgrading comfort, efficiency, and style. Safe setup, venting guidance, and clean installation planning.",
    url: `${SITE.baseUrl}/services/gas-fireplace-installation/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gas Fireplace Installation in California | Chimney Peak California",
    description:
      "Gas fireplace installation in California. Safe setup, venting guidance, and clean installation planning.",
  },
};

const FAQS = [
  {
    q: "Can an old wood fireplace be converted to gas?",
    a: "In many homes, yes. The existing fireplace and chimney need to be checked first to confirm venting, clearance, and installation requirements.",
  },
  {
    q: "Do gas fireplaces need a chimney?",
    a: "Some gas fireplaces use an existing chimney, while direct-vent models may use a different venting setup. The right option depends on the home and fireplace type.",
  },
  {
    q: "Is gas fireplace installation a DIY project?",
    a: "No. Gas fireplace installation involves venting, clearances, and gas connection planning. It should be handled by qualified professionals.",
  },
  {
    q: "How long does installation take?",
    a: "Timing depends on the fireplace type, site conditions, and whether additional venting, framing, or finish work is needed.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gas Fireplace Installation",
  serviceType: "Gas Fireplace Installation",
  description:
    "Gas fireplace installation in California for homeowners upgrading comfort, efficiency, and style. Safe setup, venting guidance, and clean installation planning.",
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
    {
      "@type": "ListItem",
      position: 3,
      name: "Gas Fireplace Installation",
      item: `${SITE.baseUrl}/services/gas-fireplace-installation/`,
    },
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

export default function GasFireplaceInstallationPage() {
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
              { label: "Gas Fireplace Installation" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Gas fireplace installation setup in a California home"
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
              Gas Fireplace Installation in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              A gas fireplace can make a home feel warmer, cleaner, and easier to use without the daily work of a traditional wood-burning fireplace.
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
                  A gas fireplace can make a home feel warmer, cleaner, and easier to use without the daily work of a traditional wood-burning fireplace. Chimney Peak California helps homeowners plan gas fireplace installation with a focus on safety, proper venting, clean design, and long-term reliability.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Whether you are replacing an old fireplace, upgrading from wood to gas, or planning a new installation, the right setup matters. A gas fireplace needs more than a nice-looking unit — it needs proper clearance, venting, gas line coordination, and a layout that works with your home.
                </p>
              </div>

              {/* H2: What It Includes */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Gas Fireplace Installation Includes</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Gas fireplace installation usually starts with a review of the existing fireplace area, wall structure, venting options, and the type of gas unit that fits your home. Some homes are better suited for a direct-vent gas fireplace, while others may require a different setup depending on chimney condition, room layout, and local requirements.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our installation process is built around practical planning. We look at the fireplace location, airflow, venting path, access for service, and how the finished fireplace should look once installed. The goal is a clean, safe, and functional installation — not a rushed setup that causes problems later.
                </p>
              </div>

              {/* H2: When It Makes Sense */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">When a Gas Fireplace Makes Sense</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A gas fireplace is a good option if you want easier operation, cleaner indoor use, and less ash or wood handling. It can also be a smart upgrade for homes where the existing fireplace is outdated, difficult to use, or no longer fits the room design.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Many California homeowners choose gas fireplaces because they want the look and comfort of a fireplace with simpler day-to-day use. It is also common during remodels, fireplace redesigns, or when converting an older fireplace area into something more modern.
                </p>
              </div>

              {/* H2: Related Services */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Related Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you already have a fireplace that is not working properly, you may need{" "}
                  <Link href="/services/gas-fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    gas fireplace repair
                  </Link>{" "}
                  instead of a new installation. If you are unsure whether your fireplace can support a new gas unit, start with a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  or a{" "}
                  <Link href="/services/fireplace-installation/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace installation
                  </Link>{" "}
                  consultation.
                </p>
              </div>

              {/* CTA box */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Ready to plan a gas fireplace installation?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and tell us what kind of fireplace setup you are considering.
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
              <LeadForm heading="Request a Free Estimate" subheading="Tell us about your fireplace setup." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Fireplace Installation", href: "/services/fireplace-installation/" },
                    { name: "Gas Fireplace Repair", href: "/services/gas-fireplace-repair/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Fireplace Cleaning", href: "/services/fireplace-cleaning/" },
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
