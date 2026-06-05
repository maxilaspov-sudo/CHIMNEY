import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/fireplace-repair.jpg";

export const metadata: Metadata = {
  title: "Fireplace Repair in California | Gas & Wood Fireplace Service",
  description:
    "Fireplace repair in California for gas and wood-burning fireplaces. Help with smoke issues, damaged fireboxes, broken parts, and fireplace performance problems.",
  alternates: { canonical: "/services/fireplace-repair/" },
  openGraph: {
    title: "Fireplace Repair in California | Gas & Wood Fireplace Service",
    description:
      "Fireplace repair in California for gas and wood-burning fireplaces. Help with smoke issues, damaged fireboxes, broken parts, and fireplace performance problems.",
    url: `${SITE.baseUrl}/services/fireplace-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fireplace Repair in California | Gas & Wood Fireplace Service",
    description: "Fireplace repair in California for gas and wood-burning fireplaces. Free estimate.",
  },
};

const FAQS = [
  {
    q: "Why is smoke coming into my house from the fireplace?",
    a: "Smoke backup can be caused by draft problems, blockage, damper issues, smoke chamber problems, or chimney design. An inspection can help identify the cause.",
  },
  {
    q: "Can a cracked fireplace be repaired?",
    a: "Many cracks in firebox panels, brick, mortar, or tile can be repaired, but the right fix depends on the location and severity of the damage.",
  },
  {
    q: "Do you repair gas fireplaces?",
    a: "Yes, gas fireplace issues such as pilot trouble, ignition problems, burner concerns, and general performance issues can be reviewed.",
  },
  {
    q: "Should I clean the fireplace before repair?",
    a: "Not always. If the fireplace is dirty or has heavy soot buildup, cleaning may be recommended before or during the repair process.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fireplace Repair",
  serviceType: "Fireplace Repair",
  description:
    "Fireplace repair in California for gas and wood-burning fireplaces. Help with smoke issues, damaged fireboxes, broken parts, and fireplace performance problems.",
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
    { "@type": "ListItem", position: 3, name: "Fireplace Repair", item: `${SITE.baseUrl}/services/fireplace-repair/` },
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

export default function FireplaceRepairPage() {
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
              { label: "Fireplace Repair" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Technician repairing a residential fireplace in California"
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
              Fireplace Repair in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              A fireplace should be safe, clean, and easy to use. When it starts smoking into the room, smells unusual, or simply does not work the way it should, it is time to have it checked.
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
                  A fireplace should be safe, clean, and easy to use. When it starts smoking into the room, smells unusual, has damaged brick or tile, or simply does not work the way it should, it is time to have it checked. Chimney Peak California provides fireplace repair services for homeowners dealing with common gas and wood-burning fireplace problems.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Fireplace issues can come from the firebox, damper, smoke chamber, venting path, gas components, or general wear over time. The right repair starts with understanding the source of the problem instead of guessing.
                </p>
              </div>

              {/* H2: Common Problems */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Common Fireplace Problems We Help With</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Fireplace problems can show up in different ways. Some homeowners notice smoke coming back into the room. Others see cracked firebox panels, loose brick, damaged tile, poor draft, strange odors, or a fireplace that does not light or stay on.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A repair visit may involve checking the visible fireplace area, looking at airflow, reviewing the damper and throat area, and identifying damaged parts that affect safe operation. If the issue is related to the chimney system, we may recommend a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  before repair work begins.
                </p>
              </div>

              {/* H2: Gas and Wood */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Gas and Wood Fireplace Repair</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Wood-burning fireplaces and gas fireplaces have different repair needs. A wood fireplace may need firebox repair, damper service, smoke chamber work, or masonry repair. A{" "}
                  <Link href="/services/gas-fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    gas fireplace repair
                  </Link>{" "}
                  may need help with ignition, pilot issues, burner problems, logs, valves, or venting concerns.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The goal is to match the repair to the actual fireplace type and condition. A small issue can sometimes be handled with a basic repair, while older or damaged systems may need a deeper inspection before the safest option is clear.
                </p>
              </div>

              {/* H2: When to Schedule */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">When to Schedule Fireplace Repair</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Schedule fireplace repair if you notice smoke in the room, strong odors, cracked fireplace surfaces, broken doors, loose masonry, poor draft, or a fireplace that has not been used in a long time. These signs do not always mean a major repair is needed, but they should not be ignored.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Related services that may apply:{" "}
                  <Link href="/services/chimney-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney repair
                  </Link>{" "}
                  for structural or masonry issues, or{" "}
                  <Link href="/services/fireplace-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace cleaning
                  </Link>{" "}
                  when heavy soot or ash buildup is a factor.
                </p>
              </div>

              {/* CTA box */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Need help with a fireplace that is not working right?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and describe the issue you are seeing.
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
              <LeadForm heading="Request a Free Estimate" subheading="Describe the issue you are seeing." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Repair", href: "/services/chimney-repair/" },
                    { name: "Fireplace Cleaning", href: "/services/fireplace-cleaning/" },
                    { name: "Gas Fireplace Repair", href: "/services/gas-fireplace-repair/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
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
