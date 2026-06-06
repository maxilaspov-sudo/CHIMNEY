import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/chimney-leak-repair.jpg";

export const metadata: Metadata = {
  title: "Chimney Leak Repair in California | Stop Water Damage",
  description:
    "Chimney leak repair in California for water stains, roof leaks near chimneys, damaged flashing, cracked crowns, and masonry water intrusion.",
  alternates: { canonical: "/services/chimney-leak-repair/" },
  openGraph: {
    title: "Chimney Leak Repair in California | Stop Water Damage",
    description:
      "Chimney leak repair in California for water stains, damaged flashing, cracked crowns, and masonry water intrusion. Free estimate.",
    url: `${SITE.baseUrl}/services/chimney-leak-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Leak Repair in California | Stop Water Damage",
    description: "Chimney leak repair in California — flashing, crown, mortar, and masonry. Free estimate.",
  },
};

const FAQS = [
  {
    q: "Why is my chimney leaking when it rains?",
    a: "Common causes include damaged flashing, cracked crown, missing chimney cap, worn mortar, or porous masonry.",
  },
  {
    q: "Is a chimney leak a roof problem or chimney problem?",
    a: "It can be either. Many leaks happen where the roof and chimney meet, so both the flashing and chimney structure should be checked.",
  },
  {
    q: "Can waterproofing stop a chimney leak?",
    a: "Waterproofing can help when masonry absorbs water, but it will not fix broken flashing, missing caps, or major cracks by itself.",
  },
  {
    q: "How do I know where the leak is coming from?",
    a: "Signs include ceiling stains, damp brick, rust, fireplace odors, and water marks near the chimney. A visual inspection helps narrow the source.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Leak Repair",
  serviceType: "Chimney Leak Repair",
  description:
    "Chimney leak repair in California for water stains, damaged flashing, cracked crowns, and masonry water intrusion.",
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
    { "@type": "ListItem", position: 3, name: "Chimney Leak Repair", item: `${SITE.baseUrl}/services/chimney-leak-repair/` },
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

export default function ChimneyLeakRepairPage() {
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
              { label: "Chimney Leak Repair" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Chimney leak repair on a residential roof in California"
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
              Chimney Leak Repair in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              A leaking chimney can damage more than the chimney itself. Water can move into walls, ceilings, attic spaces, and brickwork before the source is obvious.
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
                  A leaking chimney can damage more than the chimney itself. Water can move into walls, ceilings, attic spaces, brickwork, and the fireplace area before the source is obvious. Chimney Peak California helps homeowners find and repair chimney leak problems before they turn into larger water damage.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Chimney leaks are often caused by flashing failure, cracked crowns, missing caps, worn masonry, damaged mortar, or poor waterproofing. The most important step is identifying where the water is entering instead of only covering the visible stain.
                </p>
              </div>

              {/* H2: Where Leaks Start */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Where Chimney Leaks Usually Start</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Many chimney leaks begin where the chimney meets the roof. Damaged or loose{" "}
                  <Link href="/services/chimney-flashing-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney flashing repair
                  </Link>{" "}
                  can allow water to slip under shingles and into the home. Other leaks start at the top of the chimney, especially if the crown is cracked, the cap is missing, or the masonry has absorbed water over time.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Some leaks are easy to see during rain. Others only show up as ceiling stains, fireplace odors, damp brick, peeling paint, or water marks near the firebox. Because several chimney parts can leak at the same time, a proper diagnosis is important.
                </p>
              </div>

              {/* H2: What Repair May Include */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Chimney Leak Repair May Include</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Chimney leak repair may include flashing repair,{" "}
                  <Link href="/services/chimney-crown-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney crown repair
                  </Link>
                  , masonry sealing,{" "}
                  <Link href="/services/chimney-cap-installation/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney cap installation
                  </Link>
                  , mortar repair, or waterproofing. The exact repair depends on the condition of the chimney and where the water is entering.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For example, a flashing leak should not be treated the same way as a cracked chimney crown. A missing chimney cap is also a different issue from porous brickwork. Matching the repair to the source helps prevent repeat leaks.
                </p>
              </div>

              {/* H2: Do Not Ignore */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Do Not Ignore Chimney Water Damage</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Water damage can weaken masonry, create interior stains, rust metal fireplace components, and lead to ongoing odor problems. Even a small leak can become more expensive if it continues through a rainy season.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If the leak is structural or has reached framing or insulation, a{" "}
                  <Link href="/services/chimney-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney repair
                  </Link>{" "}
                  assessment may be needed alongside the leak fix.
                </p>
              </div>

              {/* CTA box */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Seeing water near your fireplace or chimney?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and tell us where the leak appears.
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
              <LeadForm heading="Request a Free Estimate" subheading="Tell us where the leak appears." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Flashing Repair", href: "/services/chimney-flashing-repair/" },
                    { name: "Chimney Crown Repair", href: "/services/chimney-crown-repair/" },
                    { name: "Chimney Cap Installation", href: "/services/chimney-cap-installation/" },
                    { name: "Chimney Repair", href: "/services/chimney-repair/" },
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
