import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/chimney-masonry-repair.jpg";

export const metadata: Metadata = {
  title: "Chimney Masonry Repair in California | Brick & Mortar Repair",
  description:
    "Chimney masonry repair in California for cracked brick, damaged mortar, loose masonry, water damage, and aging chimney structures.",
  alternates: { canonical: "/services/chimney-masonry-repair/" },
  openGraph: {
    title: "Chimney Masonry Repair in California | Brick & Mortar Repair",
    description:
      "Chimney masonry repair in California for cracked brick, damaged mortar, loose masonry, water damage, and aging chimney structures.",
    url: `${SITE.baseUrl}/services/chimney-masonry-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Masonry Repair in California | Brick & Mortar Repair",
    description: "Chimney masonry repair in California — cracked brick, mortar, and masonry damage. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What is chimney masonry repair?",
    a: "Chimney masonry repair fixes damaged brick, mortar joints, and masonry areas that affect the chimney's structure and weather protection.",
  },
  {
    q: "Is cracked chimney brick serious?",
    a: "It can be. Cracked or spalling brick may allow water into the chimney and can worsen if left untreated.",
  },
  {
    q: "Is masonry repair the same as tuckpointing?",
    a: "Tuckpointing is one type of masonry repair focused on damaged mortar joints. Masonry repair can also include brick replacement and other repairs.",
  },
  {
    q: "Can masonry damage cause chimney leaks?",
    a: "Yes. Damaged mortar, cracked brick, and porous masonry can allow water into the chimney system.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Masonry Repair",
  serviceType: "Chimney Masonry Repair",
  description:
    "Chimney masonry repair in California for cracked brick, damaged mortar, loose masonry, water damage, and aging chimney structures.",
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
    { "@type": "ListItem", position: 3, name: "Chimney Masonry Repair", item: `${SITE.baseUrl}/services/chimney-masonry-repair/` },
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

export default function ChimneyMasonryRepairPage() {
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
              { label: "Chimney Masonry Repair" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Brick chimney masonry repair on a California home"
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
              Chimney Masonry Repair in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Cracked brick and damaged mortar can weaken the chimney structure and allow moisture inside before the damage becomes obvious from the ground.
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
                  Brick and mortar damage can make a chimney look worn down, but the bigger concern is what is happening inside the masonry. Cracked brick, loose mortar, gaps, and water-damaged joints can allow moisture into the chimney and weaken the structure over time. Chimney Peak California provides chimney masonry repair for homeowners who want to protect the chimney before small masonry problems turn into larger repairs.
                </p>
              </div>

              {/* H2: What Chimney Masonry Repair Includes */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Chimney Masonry Repair Includes</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Chimney masonry repair may include repairing cracked brick, replacing damaged mortar, fixing loose masonry, sealing small gaps, and correcting areas where water has started breaking down the chimney surface. The exact repair depends on the age of the chimney, the condition of the brick, and whether the damage is cosmetic or structural.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Some chimneys only need targeted mortar repair. Others may need{" "}
                  <Link href="/services/chimney-tuckpointing/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney tuckpointing
                  </Link>
                  , crown repair,{" "}
                  <Link href="/services/chimney-waterproofing/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney waterproofing
                  </Link>
                  , or a more involved chimney repair plan.
                </p>
              </div>

              {/* H2: Signs Your Chimney Masonry Needs Repair */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Signs Your Chimney Masonry Needs Repair</h2>
                <p className="text-gray-600 leading-relaxed">
                  Common signs include missing mortar, cracked brick, spalling brick, white staining, loose pieces, leaning sections, water stains, or visible gaps between bricks. If you see masonry damage near the roofline, it should be checked before rain and temperature changes make it worse.
                </p>
              </div>

              {/* H2: Related Services */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Related Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  Masonry repair often connects with{" "}
                  <Link href="/services/chimney-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney repair
                  </Link>
                  ,{" "}
                  <Link href="/services/chimney-tuckpointing/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney tuckpointing
                  </Link>
                  ,{" "}
                  <Link href="/services/chimney-waterproofing/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney waterproofing
                  </Link>
                  , and{" "}
                  <Link href="/services/chimney-rebuild/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney rebuild
                  </Link>{" "}
                  work. If the chimney is heavily damaged, an inspection may be needed before deciding whether repair or rebuilding is the better option.
                </p>
              </div>

              {/* CTA box */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Seeing cracked brick or damaged mortar?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and tell us what you see on your chimney.
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
              <LeadForm heading="Request a Free Estimate" subheading="Tell us what you see on your chimney." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Repair", href: "/services/chimney-repair/" },
                    { name: "Chimney Tuckpointing", href: "/services/chimney-tuckpointing/" },
                    { name: "Chimney Waterproofing", href: "/services/chimney-waterproofing/" },
                    { name: "Chimney Rebuild", href: "/services/chimney-rebuild/" },
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
