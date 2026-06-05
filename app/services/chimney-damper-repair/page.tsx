import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/chimney-damper-repair.jpg";

export const metadata: Metadata = {
  title: "Chimney Damper Repair in California | Fireplace Damper Service",
  description:
    "Chimney damper repair in California for stuck, rusted, broken, loose, or poorly sealing fireplace dampers.",
  alternates: { canonical: "/services/chimney-damper-repair/" },
  openGraph: {
    title: "Chimney Damper Repair in California | Fireplace Damper Service",
    description:
      "Chimney damper repair in California for stuck, rusted, broken, loose, or poorly sealing fireplace dampers.",
    url: `${SITE.baseUrl}/services/chimney-damper-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Damper Repair in California | Fireplace Damper Service",
    description: "Chimney damper repair in California — stuck, rusted, or poorly sealing fireplace dampers. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What does a chimney damper do?",
    a: "It opens and closes the passage between the fireplace and chimney to help control airflow.",
  },
  {
    q: "Why is my fireplace damper stuck?",
    a: "Rust, soot buildup, damaged hardware, age, or debris around the damper can cause it to stick.",
  },
  {
    q: "Can a chimney damper be repaired?",
    a: "Many dampers can be adjusted or repaired, but badly damaged dampers may need replacement.",
  },
  {
    q: "Can a bad damper cause cold air?",
    a: "Yes. If the damper does not seal properly, cold air can enter through the chimney.",
  },
  {
    q: "Can a bad damper cause smoke in the room?",
    a: "Yes. If the damper does not open properly or blocks airflow, smoke may not vent correctly.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Damper Repair",
  serviceType: "Chimney Damper Repair",
  description:
    "Chimney damper repair in California for stuck, rusted, broken, loose, or poorly sealing fireplace dampers.",
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
    { "@type": "ListItem", position: 3, name: "Chimney Damper Repair", item: `${SITE.baseUrl}/services/chimney-damper-repair/` },
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

export default function ChimneyDamperRepairPage() {
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
              { label: "Chimney Damper Repair" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Technician repairing a chimney damper inside a fireplace"
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
              Chimney Damper Repair in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              A stuck, rusted, or poorly sealing damper can cause draft problems, let cold air into the home, and make the fireplace harder to control safely.
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
                  The chimney damper controls airflow between the fireplace and chimney. When it is stuck, rusted, loose, broken, or not sealing properly, it can cause draft problems, heat loss, smoke issues, and poor fireplace performance. Chimney Peak California helps homeowners repair or replace damaged chimney dampers so the fireplace system works the way it should.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A damper problem may seem small, but it can affect how the fireplace drafts, how much cold air enters the home, and whether smoke moves properly into the chimney. If the damper does not open or close correctly, the fireplace should be checked before regular use.
                </p>
              </div>

              {/* H2: Common Problems */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Common Chimney Damper Problems</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Damper problems often show up as a handle that will not move, a plate that does not fully close, rusted hardware, missing parts, smoke entering the room, or cold air coming down the chimney. Some homeowners notice that the fireplace smells smoky even when it is not being used. Others notice that the damper feels loose or stuck when they try to operate it.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A damaged damper can also make the fireplace harder to control during use. If it does not open fully, smoke may not vent correctly. If it does not close fully, outside air, odors, and drafts can enter the home.
                </p>
              </div>

              {/* H2: What Repair Includes */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Chimney Damper Repair May Include</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Damper service may include cleaning around the damper area, adjusting the mechanism, repairing the handle, replacing damaged hardware, or recommending a new throat damper or top-sealing damper depending on the chimney setup.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The right repair depends on the fireplace design, chimney condition, and whether the existing damper can still seal safely. Some dampers can be repaired. Others may need replacement, especially if the metal is badly rusted, bent, or no longer reliable.
                </p>
              </div>

              {/* H2: Damper and Draft */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Damper Repair and Fireplace Draft</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A damper is only one part of the fireplace draft system, but it is an important part. If the damper is damaged or blocked, the fireplace may smoke, smell, or draft poorly. If draft problems continue after the damper is repaired, the chimney may need{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  for blockage,{" "}
                  <Link href="/services/smoke-chamber-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    smoke chamber issues
                  </Link>
                  , flue buildup, or design problems.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This is why damper repair often connects with chimney inspection and{" "}
                  <Link href="/services/chimney-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney cleaning
                  </Link>
                  . Fixing the damper helps, but the full airflow path should be considered when symptoms continue.
                </p>
              </div>

              {/* H2: Related Services */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Related Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  Damper issues often connect with{" "}
                  <Link href="/services/fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace repair
                  </Link>
                  ,{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>
                  ,{" "}
                  <Link href="/services/smoke-chamber-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    smoke chamber repair
                  </Link>
                  ,{" "}
                  <Link href="/services/chimney-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney cleaning
                  </Link>
                  , and{" "}
                  <Link href="/services/wood-fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    wood fireplace repair
                  </Link>
                  . If smoke or draft problems continue after the damper is fixed, the full chimney system may need inspection.
                </p>
              </div>

              {/* CTA box */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Having trouble opening or closing your chimney damper?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and describe the issue.
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
              <LeadForm heading="Request a Free Estimate" subheading="Describe the issue with your damper." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Fireplace Repair", href: "/services/fireplace-repair/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Smoke Chamber Repair", href: "/services/smoke-chamber-repair/" },
                    { name: "Chimney Cleaning", href: "/services/chimney-cleaning/" },
                    { name: "Wood Fireplace Repair", href: "/services/wood-fireplace-repair/" },
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
