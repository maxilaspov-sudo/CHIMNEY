import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/chimney-cap-replacement.jpg";

export const metadata: Metadata = {
  title: "Chimney Cap Replacement in California | Chimney Peak California",
  description:
    "Chimney cap replacement in California for missing, rusted, damaged, or poorly fitted chimney caps that protect against rain, animals, and debris.",
  alternates: { canonical: "/services/chimney-cap-replacement/" },
  openGraph: {
    title: "Chimney Cap Replacement in California | Chimney Peak California",
    description:
      "Chimney cap replacement in California for missing, rusted, damaged, or poorly fitted chimney caps that protect against rain, animals, and debris.",
    url: `${SITE.baseUrl}/services/chimney-cap-replacement/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Cap Replacement in California | Chimney Peak California",
    description: "Chimney cap replacement in California — missing, rusted, or damaged caps replaced properly. Free estimate.",
  },
};

const FAQS = [
  {
    q: "How do I know if my chimney cap needs replacement?",
    a: "Signs include rust, missing screens, loose metal, visible damage, animal entry, or water entering the chimney.",
  },
  {
    q: "Can a missing chimney cap cause leaks?",
    a: "Yes. Without a cap, rain can enter the flue directly and contribute to moisture problems.",
  },
  {
    q: "Is chimney cap replacement different from installation?",
    a: "Replacement means removing an old or damaged cap and installing a properly fitted new one. Installation may also apply when no cap exists.",
  },
  {
    q: "Can animals get in through a damaged chimney cap?",
    a: "Yes. A missing or damaged screen can allow birds, squirrels, or debris into the chimney.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Cap Replacement",
  serviceType: "Chimney Cap Replacement",
  description:
    "Chimney cap replacement in California for missing, rusted, damaged, or poorly fitted chimney caps that protect against rain, animals, and debris.",
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
    { "@type": "ListItem", position: 3, name: "Chimney Cap Replacement", item: `${SITE.baseUrl}/services/chimney-cap-replacement/` },
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

export default function ChimneyCapReplacementPage() {
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
              { label: "Chimney Cap Replacement" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="New chimney cap replacement on a brick chimney"
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
              Chimney Cap Replacement in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              A missing or damaged chimney cap leaves the flue open to rain, animals, and debris — problems that are easy to prevent with the right cap fitted correctly.
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
                  A chimney cap helps protect the chimney from rain, animals, leaves, debris, and downdrafts. When a cap is missing, rusted, loose, or damaged, the chimney becomes more exposed to water and blockage problems. Chimney Peak California provides chimney cap replacement for homeowners who need a properly fitted cap instead of a temporary fix.
                </p>
              </div>

              {/* H2: When a Chimney Cap Should Be Replaced */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">When a Chimney Cap Should Be Replaced</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A chimney cap may need replacement if it is rusted, bent, missing, loose, cracked, or no longer sitting securely on the chimney. Caps can also fail when the screen is damaged or when the wrong size was installed in the past.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A damaged cap may seem minor, but it can allow rain into the flue, give animals a way inside, and let debris collect in the chimney. Replacing it early can prevent more expensive{" "}
                  <Link href="/services/chimney-leak-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney leak repair
                  </Link>{" "}
                  later.
                </p>
              </div>

              {/* H2: What Chimney Cap Replacement Includes */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Chimney Cap Replacement Includes</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Chimney cap replacement usually starts with checking the chimney top, flue opening,{" "}
                  <Link href="/services/chimney-crown-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    crown condition
                  </Link>
                  , and existing cap size. The replacement cap should fit the chimney properly and support the way the fireplace or appliance vents.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Some homes need a single-flue cap. Others may need a multi-flue cap, spark arrestor, or animal screen depending on the chimney design.
                </p>
              </div>

              {/* H2: Related Services */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Related Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  If water has already entered the chimney,{" "}
                  <Link href="/services/chimney-leak-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney leak repair
                  </Link>
                  ,{" "}
                  <Link href="/services/chimney-crown-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney crown repair
                  </Link>
                  , or{" "}
                  <Link href="/services/chimney-waterproofing/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney waterproofing
                  </Link>{" "}
                  may also be needed. If the top of the chimney is damaged, a cap replacement should be paired with a proper{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>
                  .
                </p>
              </div>

              {/* CTA box */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Need to replace a missing or damaged chimney cap?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and tell us what type of chimney you have.
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
              <LeadForm heading="Request a Free Estimate" subheading="Tell us what type of chimney you have." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cap Installation", href: "/services/chimney-cap-installation/" },
                    { name: "Chimney Leak Repair", href: "/services/chimney-leak-repair/" },
                    { name: "Chimney Crown Repair", href: "/services/chimney-crown-repair/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Chimney Flashing Repair", href: "/services/chimney-flashing-repair/" },
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
