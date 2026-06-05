import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/wood-fireplace-repair.jpg";

export const metadata: Metadata = {
  title: "Wood Fireplace Repair in California | Firebox & Draft Problems",
  description:
    "Wood fireplace repair in California for cracked fireboxes, smoke issues, poor draft, damaged dampers, soot buildup, and masonry problems.",
  alternates: { canonical: "/services/wood-fireplace-repair/" },
  openGraph: {
    title: "Wood Fireplace Repair in California | Firebox & Draft Problems",
    description:
      "Wood fireplace repair in California for cracked fireboxes, smoke issues, poor draft, damaged dampers, soot buildup, and masonry problems.",
    url: `${SITE.baseUrl}/services/wood-fireplace-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wood Fireplace Repair in California | Firebox & Draft Problems",
    description: "Wood fireplace repair in California — firebox, draft, damper, and masonry problems. Free estimate.",
  },
};

const FAQS = [
  {
    q: "Why does my wood fireplace smoke into the room?",
    a: "Smoke backup can come from draft issues, blockage, damper problems, smoke chamber damage, or chimney design.",
  },
  {
    q: "Can cracked firebrick be repaired?",
    a: "Many firebox cracks can be repaired, but the repair depends on the severity and location of the damage.",
  },
  {
    q: "Should I use a fireplace with visible cracks?",
    a: "It is better to have it checked first, especially if cracks are inside the firebox or smoke chamber.",
  },
  {
    q: "Is wood fireplace repair different from gas fireplace repair?",
    a: "Yes. Wood fireplaces usually involve masonry, draft, damper, firebox, and chimney-related repairs.",
  },
  {
    q: "Can chimney cleaning help a wood fireplace work better?",
    a: "Yes, if buildup or blockage is affecting draft. Some repair issues still require masonry or damper work.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Wood Fireplace Repair",
  serviceType: "Wood Fireplace Repair",
  description:
    "Wood fireplace repair in California for cracked fireboxes, smoke issues, poor draft, damaged dampers, soot buildup, and masonry problems.",
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
    { "@type": "ListItem", position: 3, name: "Wood Fireplace Repair", item: `${SITE.baseUrl}/services/wood-fireplace-repair/` },
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

export default function WoodFireplaceRepairPage() {
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
              { label: "Wood Fireplace Repair" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Technician repairing a wood burning fireplace firebox"
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
              Wood Fireplace Repair in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Cracked firebrick, smoke backup, stuck dampers, and poor draft are signs the fireplace should be checked before continued use.
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
                  A wood-burning fireplace needs proper masonry, airflow, and chimney function to work safely. When the fireplace smokes into the room, has cracked firebox walls, damaged dampers, heavy soot, or poor draft, it should be checked before continued use. Chimney Peak California provides wood fireplace repair for homeowners who want a safer and more reliable fireplace.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Wood fireplaces are simple in appearance, but the system depends on several parts working together: the firebox, damper, smoke chamber, flue, chimney cap, and airflow path. A problem in one area can affect the whole fireplace.
                </p>
              </div>

              {/* H2: Common Wood Fireplace Problems */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Common Wood Fireplace Problems</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Common issues include cracked firebrick, damaged mortar, smoke backup, stuck dampers, rough smoke chambers, poor draft, water damage, missing grates, and heavy soot or creosote buildup. Some problems are visible from the room, while others are hidden inside the chimney system.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A crack inside the firebox may seem small, but it can expose surrounding materials to heat. Smoke backup can point to a damper issue, blocked chimney,{" "}
                  <Link href="/services/smoke-chamber-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    smoke chamber problem
                  </Link>
                  , or poor draft. The right repair depends on the cause.
                </p>
              </div>

              {/* H2: What Wood Fireplace Repair Includes */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Wood Fireplace Repair Includes</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Repair may include firebox repair, mortar repair, damper service,{" "}
                  <Link href="/services/smoke-chamber-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    smoke chamber repair
                  </Link>
                  , masonry work, or recommendations for chimney cleaning and inspection. The repair plan should match the fireplace condition and how the chimney is venting.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If the fireplace has not been used for years, a{" "}
                  <Link href="/services/fireplace-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace inspection
                  </Link>{" "}
                  may be recommended before repair work begins. This helps confirm whether the issue is isolated to the fireplace or connected to the chimney system.
                </p>
              </div>

              {/* H2: Smoke and Draft Problems */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Smoke and Draft Problems</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Smoke entering the room is one of the most common complaints with wood fireplaces. It can be caused by blockage, heavy buildup, poor damper operation, smoke chamber damage, cold flue conditions, or chimney design issues.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Repairing the visible{" "}
                  <Link href="/services/fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace
                  </Link>{" "}
                  is not always enough. The airflow path should be considered so the fireplace can draft properly.
                </p>
              </div>

              {/* H2: Related Services */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Related Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  Wood fireplace repair often connects with{" "}
                  <Link href="/services/fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace repair
                  </Link>
                  , chimney inspection,{" "}
                  <Link href="/services/chimney-sweep/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney sweep
                  </Link>
                  ,{" "}
                  <Link href="/services/smoke-chamber-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    smoke chamber repair
                  </Link>
                  , and{" "}
                  <Link href="/services/chimney-damper-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney damper repair
                  </Link>
                  .
                </p>
              </div>

              {/* CTA box */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Need help with a wood-burning fireplace?</p>
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
                    { name: "Fireplace Repair", href: "/services/fireplace-repair/" },
                    { name: "Fireplace Inspection", href: "/services/fireplace-inspection/" },
                    { name: "Chimney Sweep", href: "/services/chimney-sweep/" },
                    { name: "Smoke Chamber Repair", href: "/services/smoke-chamber-repair/" },
                    { name: "Chimney Damper Repair", href: "/services/chimney-damper-repair/" },
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
