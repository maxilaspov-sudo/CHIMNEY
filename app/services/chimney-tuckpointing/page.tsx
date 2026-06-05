import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/chimney-tuckpointing.jpg";

export const metadata: Metadata = {
  title: "Chimney Tuckpointing in California | Mortar Joint Repair",
  description:
    "Chimney tuckpointing in California for damaged mortar joints, cracked masonry, loose brick, and weathered chimney structures.",
  alternates: { canonical: "/services/chimney-tuckpointing/" },
  openGraph: {
    title: "Chimney Tuckpointing in California | Mortar Joint Repair",
    description:
      "Chimney tuckpointing in California for damaged mortar joints, cracked masonry, loose brick, and weathered chimney structures.",
    url: `${SITE.baseUrl}/services/chimney-tuckpointing/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Tuckpointing in California | Mortar Joint Repair",
    description:
      "Chimney tuckpointing in California. Repair damaged mortar joints and protect your chimney from water damage.",
  },
};

const FAQS = [
  {
    q: "What is chimney tuckpointing?",
    a: "Chimney tuckpointing repairs damaged mortar joints between bricks to help restore strength and reduce water entry.",
  },
  {
    q: "How do I know if my chimney needs tuckpointing?",
    a: "Look for missing mortar, cracks, gaps, crumbling joints, loose brick, or water stains on the chimney.",
  },
  {
    q: "Is tuckpointing the same as chimney rebuilding?",
    a: "No. Tuckpointing repairs mortar joints. Rebuilding replaces larger damaged sections of the chimney structure.",
  },
  {
    q: "Can tuckpointing help stop chimney leaks?",
    a: "It can help when water is entering through damaged mortar joints, but leaks may also come from flashing, crowns, caps, or porous masonry.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Tuckpointing",
  serviceType: "Chimney Tuckpointing",
  description:
    "Chimney tuckpointing in California for damaged mortar joints, cracked masonry, loose brick, and weathered chimney structures.",
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
    {
      "@type": "ListItem",
      position: 3,
      name: "Chimney Tuckpointing",
      item: `${SITE.baseUrl}/services/chimney-tuckpointing/`,
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

export default function ChimneyTuckpointingPage() {
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
              { label: "Chimney Tuckpointing" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Chimney tuckpointing repair on brick mortar joints"
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
              Chimney Tuckpointing in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Tuckpointing is the process of repairing damaged mortar joints between bricks. When mortar starts cracking, crumbling, or falling out, water can enter the masonry and the chimney structure can weaken over time.
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

            <div className="lg:col-span-2 space-y-10">

              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Tuckpointing is the process of repairing damaged mortar joints between bricks. On a chimney, those joints are constantly exposed to sun, rain, wind, and temperature changes. When mortar starts cracking, crumbling, or falling out, water can enter the masonry and the chimney structure can weaken over time.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Chimney Peak California helps homeowners address worn mortar joints before the damage spreads into larger{" "}
                  <Link href="/services/chimney-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney repair
                  </Link>{" "}
                  or{" "}
                  <Link href="/services/chimney-rebuild/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney rebuild
                  </Link>{" "}
                  work.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Chimney Tuckpointing Includes</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Chimney tuckpointing usually involves removing deteriorated mortar from the joints and replacing it with new mortar that matches the chimney as closely as possible. The goal is to restore the joint strength, reduce water entry, and improve the appearance of the masonry.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This is detailed masonry work. The old mortar needs to be removed carefully so the surrounding brick is not damaged. The new mortar should be applied properly so it bonds well and sheds water more effectively.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">When a Chimney Needs Tuckpointing</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Signs include missing mortar, cracks between bricks, sandy or crumbling joints, loose brick, water stains, and visible gaps in the chimney masonry. If the damage is limited to the mortar joints, tuckpointing may be enough.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If bricks are severely damaged, the chimney is leaning, or large sections are failing, a larger{" "}
                  <Link href="/services/chimney-rebuild/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney rebuild
                  </Link>{" "}
                  may be needed instead.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Why Mortar Joint Repair Matters</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Mortar joints help hold the chimney structure together and keep water out. When they fail, the brickwork becomes more vulnerable to leaks, movement, and freeze-thaw damage in colder areas. Early tuckpointing can prevent more expensive repairs later.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  After tuckpointing, some homeowners also consider{" "}
                  <Link href="/services/chimney-waterproofing/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney waterproofing
                  </Link>{" "}
                  to help protect the repaired joints, especially on older or exposed masonry. If leaks are already present, see our{" "}
                  <Link href="/services/chimney-leak-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney leak repair
                  </Link>{" "}
                  page.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Seeing cracked or missing mortar on your chimney?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and describe the masonry damage.
                </p>
                <Link href="/contact/" className="btn-primary inline-block">
                  Request a Free Estimate
                </Link>
              </div>

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

            <div className="space-y-6 lg:sticky lg:top-6 lg:self-start">
              <LeadForm heading="Request a Free Estimate" subheading="Describe the masonry damage you are seeing." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Repair", href: "/services/chimney-repair/" },
                    { name: "Chimney Rebuild", href: "/services/chimney-rebuild/" },
                    { name: "Chimney Waterproofing", href: "/services/chimney-waterproofing/" },
                    { name: "Chimney Leak Repair", href: "/services/chimney-leak-repair/" },
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
