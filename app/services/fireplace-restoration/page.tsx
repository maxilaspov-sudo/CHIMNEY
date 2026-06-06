import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/fireplace-restoration.jpg";

export const metadata: Metadata = {
  title: "Fireplace Restoration in California | Restore Old Fireplaces",
  description:
    "Fireplace restoration in California for older fireplaces, damaged fireboxes, worn masonry, outdated finishes, and fireplace appearance upgrades.",
  alternates: { canonical: "/services/fireplace-restoration/" },
  openGraph: {
    title: "Fireplace Restoration in California | Restore Old Fireplaces",
    description:
      "Fireplace restoration in California for older fireplaces, damaged fireboxes, worn masonry, outdated finishes, and fireplace appearance upgrades.",
    url: `${SITE.baseUrl}/services/fireplace-restoration/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fireplace Restoration in California | Restore Old Fireplaces",
    description: "Fireplace restoration in California — firebox repair, masonry, cleaning, and appearance. Free estimate.",
  },
};

const FAQS = [
  {
    q: "Is fireplace restoration the same as fireplace repair?",
    a: "Not exactly. Repair fixes specific problems, while restoration can include cleaning, repair, appearance improvements, and making an older fireplace usable again.",
  },
  {
    q: "Can an old fireplace be restored?",
    a: "Many older fireplaces can be restored, but the chimney and firebox should be inspected before use.",
  },
  {
    q: "Does restoration include cosmetic upgrades?",
    a: "It can. Some restoration projects include masonry, tile, refacing, or finish improvements.",
  },
  {
    q: "Should I inspect the chimney before restoring the fireplace?",
    a: "Yes. A fireplace can look fine from the room while the chimney system still has hidden problems.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fireplace Restoration",
  serviceType: "Fireplace Restoration",
  description:
    "Fireplace restoration in California for older fireplaces, damaged fireboxes, worn masonry, outdated finishes, and fireplace appearance upgrades.",
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
    { "@type": "ListItem", position: 3, name: "Fireplace Restoration", item: `${SITE.baseUrl}/services/fireplace-restoration/` },
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

export default function FireplaceRestorationPage() {
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
              { label: "Fireplace Restoration" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Restored brick fireplace in a California home"
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
              Fireplace Restoration in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              An older fireplace with smoke stains, cracked brick, or outdated materials can often be brought back to a cleaner, safer, and more attractive condition.
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
                  An older fireplace can be one of the best features in a home, but age, smoke, damage, and outdated materials can make it look worn or unsafe to use. Chimney Peak California provides fireplace restoration support for homeowners who want to bring an old fireplace back to a cleaner, safer, and more attractive condition.
                </p>
              </div>

              {/* H2: What Fireplace Restoration Can Include */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Fireplace Restoration Can Include</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Fireplace restoration may involve firebox repair, masonry repair, tile repair, smoke chamber review,{" "}
                  <Link href="/services/fireplace-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace cleaning
                  </Link>
                  , damaged panel replacement, or updating the visible fireplace surround. The goal is to preserve the value of the fireplace while correcting problems that affect function, safety, or appearance.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Some projects are mostly cosmetic. Others start because the fireplace has cracks, smoke stains, damaged brick, poor draft, or missing parts.
                </p>
              </div>

              {/* H2: When Restoration Makes Sense */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">When Restoration Makes Sense</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Restoration is a good option when the fireplace is still worth saving but needs more than a basic cleaning. Homeowners often request fireplace restoration when moving into an older home, preparing for a remodel, or trying to make a fireplace usable again after years of neglect.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If the fireplace has structural damage or chimney issues, a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  should come first so the repair plan is based on the full system.
                </p>
              </div>

              {/* H2: Related Services */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Related Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  Fireplace restoration may overlap with{" "}
                  <Link href="/services/fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace repair
                  </Link>
                  ,{" "}
                  <Link href="/services/fireplace-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace cleaning
                  </Link>
                  ,{" "}
                  <Link href="/services/smoke-chamber-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    smoke chamber repair
                  </Link>
                  , and chimney repair. If the chimney itself is damaged, restoration may need to be paired with masonry or chimney repair work.
                </p>
              </div>

              {/* CTA box */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Want to restore an older fireplace?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and describe the condition of your fireplace.
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
              <LeadForm heading="Request a Free Estimate" subheading="Describe the condition of your fireplace." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Fireplace Repair", href: "/services/fireplace-repair/" },
                    { name: "Fireplace Cleaning", href: "/services/fireplace-cleaning/" },
                    { name: "Smoke Chamber Repair", href: "/services/smoke-chamber-repair/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
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
