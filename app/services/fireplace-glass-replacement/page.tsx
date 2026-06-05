import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/fireplace-glass-replacement.jpg";

export const metadata: Metadata = {
  title: "Fireplace Glass Replacement in California | Broken Fireplace Glass",
  description:
    "Fireplace glass replacement in California for cracked, broken, cloudy, or damaged fireplace door glass and glass panels.",
  alternates: { canonical: "/services/fireplace-glass-replacement/" },
  openGraph: {
    title: "Fireplace Glass Replacement in California | Broken Fireplace Glass",
    description:
      "Fireplace glass replacement in California for cracked, broken, cloudy, or damaged fireplace door glass and glass panels.",
    url: `${SITE.baseUrl}/services/fireplace-glass-replacement/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fireplace Glass Replacement in California | Broken Fireplace Glass",
    description: "Fireplace glass replacement in California — cracked, broken, or cloudy door glass. Free estimate.",
  },
};

const FAQS = [
  {
    q: "Can I use regular glass in a fireplace?",
    a: "No. Fireplace glass must be suitable for heat exposure and the specific fireplace type.",
  },
  {
    q: "Why did my fireplace glass crack?",
    a: "Heat stress, impact, poor fit, damaged hardware, or incorrect glass type can cause cracking.",
  },
  {
    q: "Can only one glass panel be replaced?",
    a: "Often yes, if the frame is in good condition and the correct replacement glass is available.",
  },
  {
    q: "Is fireplace glass replacement common for gas fireplaces?",
    a: "Yes. Gas fireplace glass can crack, become cloudy, or need replacement over time.",
  },
  {
    q: "Should I stop using the fireplace if the glass is cracked?",
    a: "Yes. It is best to stop using it until the glass and fireplace are checked.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fireplace Glass Replacement",
  serviceType: "Fireplace Glass Replacement",
  description:
    "Fireplace glass replacement in California for cracked, broken, cloudy, or damaged fireplace door glass and glass panels.",
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
    { "@type": "ListItem", position: 3, name: "Fireplace Glass Replacement", item: `${SITE.baseUrl}/services/fireplace-glass-replacement/` },
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

export default function FireplaceGlassReplacementPage() {
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
              { label: "Fireplace Glass Replacement" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Technician replacing glass on a residential fireplace door"
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
              Fireplace Glass Replacement in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Cracked or broken fireplace glass is not just a cosmetic problem. Damaged glass affects safety and how the fireplace operates, and fireplaces require glass suited to heat exposure.
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
                  Cracked or broken fireplace glass should not be ignored. Damaged glass can affect safety, appearance, and how the fireplace operates. Chimney Peak California provides fireplace glass replacement support for homeowners with broken fireplace doors, damaged glass panels, or glass that no longer looks clean and clear.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Fireplace glass is not the same as regular window glass. Fireplaces require glass that is appropriate for heat exposure and the fireplace type. Using the wrong glass can create safety problems, poor fit, and repeat damage.
                </p>
              </div>

              {/* H2: When Glass Needs Replacement */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">When Fireplace Glass Needs Replacement</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Glass may need replacement if it is cracked, shattered, heavily scratched, cloudy, loose in the frame, or no longer sealing correctly.{" "}
                  <Link href="/services/gas-fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    Gas fireplaces
                  </Link>
                  , wood-burning fireplace doors, and fireplace inserts can each have different glass requirements.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If the glass cracked because of heat stress, impact, poor fit, or damaged hardware, the cause should be checked before replacement. Replacing the glass without understanding the cause may lead to the same problem happening again.
                </p>
              </div>

              {/* H2: What Glass Replacement Includes */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Glass Replacement Includes</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Service may include checking the door frame, measuring the glass, identifying the correct glass type, replacing damaged panels, and making sure the final fit is secure. If the frame, hinges, gasket, or fireplace door system is damaged,{" "}
                  <Link href="/services/fireplace-door-installation/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace door repair or replacement
                  </Link>{" "}
                  may be recommended.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For gas fireplaces, glass replacement may also involve checking the unit type and confirming that the replacement is compatible. Some gas fireplace glass is part of a sealed system and should not be treated like a regular decorative panel.
                </p>
              </div>

              {/* H2: Glass Safety */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Fireplace Glass Safety</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Fireplace glass needs to handle heat and fit properly inside the frame. Regular glass is not suitable for fireplace use because it can break under heat exposure. The right replacement depends on whether the fireplace is wood-burning, gas, or insert-style.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If glass is cracked, avoid using the fireplace until the issue is checked. A{" "}
                  <Link href="/services/fireplace-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace inspection
                  </Link>{" "}
                  can confirm whether the glass is the only issue or whether the door system also needs attention.
                </p>
              </div>

              {/* H2: Related Services */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Related Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  Fireplace glass replacement often connects with{" "}
                  <Link href="/services/fireplace-door-installation/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace door installation
                  </Link>
                  ,{" "}
                  <Link href="/services/fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace repair
                  </Link>
                  ,{" "}
                  <Link href="/services/gas-fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    gas fireplace repair
                  </Link>
                  ,{" "}
                  <Link href="/services/fireplace-insert-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace insert cleaning
                  </Link>
                  , and{" "}
                  <Link href="/services/fireplace-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace inspection
                  </Link>
                  .
                </p>
              </div>

              {/* CTA box */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Need broken fireplace glass replaced?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and describe the type of fireplace you have.
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
              <LeadForm heading="Request a Free Estimate" subheading="Describe the type of fireplace you have." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Fireplace Door Installation", href: "/services/fireplace-door-installation/" },
                    { name: "Fireplace Repair", href: "/services/fireplace-repair/" },
                    { name: "Gas Fireplace Repair", href: "/services/gas-fireplace-repair/" },
                    { name: "Fireplace Insert Cleaning", href: "/services/fireplace-insert-cleaning/" },
                    { name: "Fireplace Inspection", href: "/services/fireplace-inspection/" },
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
