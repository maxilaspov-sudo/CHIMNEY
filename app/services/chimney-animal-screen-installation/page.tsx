import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/chimney-animal-screen-installation.jpg";

export const metadata: Metadata = {
  title: "Chimney Animal Screen Installation in California | Keep Animals Out",
  description:
    "Chimney animal screen installation in California to help keep birds, squirrels, leaves, nesting debris, and pests out of chimney openings.",
  alternates: { canonical: "/services/chimney-animal-screen-installation/" },
  openGraph: {
    title: "Chimney Animal Screen Installation in California | Keep Animals Out",
    description:
      "Chimney animal screen installation in California to help keep birds, squirrels, leaves, nesting debris, and pests out of chimney openings.",
    url: `${SITE.baseUrl}/services/chimney-animal-screen-installation/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Animal Screen Installation in California | Keep Animals Out",
    description: "Chimney animal screen installation in California — birds, squirrels, nesting debris. Free estimate.",
  },
};

const FAQS = [
  {
    q: "Can animals get into a chimney without a screen?",
    a: "Yes. Birds, squirrels, and debris can enter through unprotected chimney openings.",
  },
  {
    q: "Is an animal screen the same as a chimney cap?",
    a: "Not exactly. Many chimney caps include screening, but the screen is the part that helps block animals and debris.",
  },
  {
    q: "Should animals be removed before installing a screen?",
    a: "Yes. Any existing animals, nests, or debris should be cleared first.",
  },
  {
    q: "Can a screen affect chimney airflow?",
    a: "A properly fitted screen should allow venting while reducing animal entry.",
  },
  {
    q: "Can a damaged screen cause blockage problems?",
    a: "Yes. If the screen is broken or missing, debris and animals can enter and create obstructions.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Animal Screen Installation",
  serviceType: "Chimney Animal Screen Installation",
  description:
    "Chimney animal screen installation in California to help keep birds, squirrels, leaves, nesting debris, and pests out of chimney openings.",
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
    { "@type": "ListItem", position: 3, name: "Chimney Animal Screen Installation", item: `${SITE.baseUrl}/services/chimney-animal-screen-installation/` },
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

export default function ChimneyAnimalScreenInstallationPage() {
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
              { label: "Chimney Animal Screen Installation" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Chimney animal screen installed on a brick chimney cap"
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
              Chimney Animal Screen Installation in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Birds, squirrels, nesting material, and debris can enter unprotected chimney openings and create blockage, odor, and smoke problems.
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
                  Birds, squirrels, leaves, and nesting debris can enter chimneys when the top is not properly protected. Chimney Peak California provides chimney animal screen installation to help reduce the chance of animals and debris getting into the chimney opening.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A screen is often installed as part of a{" "}
                  <Link href="/services/chimney-cap-replacement/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney cap
                  </Link>{" "}
                  or top protection system. It should be fitted correctly so it helps block animals while still allowing proper venting. The right screen can help prevent repeat blockage problems after a chimney has already been cleared.
                </p>
              </div>

              {/* H2: Why Chimney Animal Screens Matter */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Why Chimney Animal Screens Matter</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Animals and nesting material can create blockages, odors, noise, and smoke problems. If debris blocks the flue, the fireplace may not vent properly. Animal activity can also damage existing screens or caps.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A missing or damaged screen can allow birds or squirrels to enter the chimney. Once they get inside, nests, twigs, feathers, and debris may collect inside the flue or near the chimney top. This can create airflow restrictions and unpleasant odors.
                </p>
              </div>

              {/* H2: When to Add or Replace a Screen */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">When to Add or Replace a Screen</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A screen may be needed if animals have entered before, the existing cap screen is damaged, there is no chimney cap, or debris keeps collecting near the flue opening. If a blockage already exists,{" "}
                  <Link href="/services/chimney-blockage-removal/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney blockage removal
                  </Link>{" "}
                  and inspection should happen first.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Installing a screen over an active blockage is not the right solution. The chimney should be cleared and checked so the screen protects a clean opening.
                </p>
              </div>

              {/* H2: Screen Installation and Chimney Caps */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Screen Installation and Chimney Caps</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Many chimney caps include screening, but not all caps are in good condition. If the cap is rusted, loose, bent, missing mesh, or poorly fitted,{" "}
                  <Link href="/services/chimney-cap-replacement/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney cap replacement
                  </Link>{" "}
                  may be better than screen repair alone.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The screen should help block animals and debris while allowing smoke and gases to vent correctly.
                </p>
              </div>

              {/* H2: Related Services */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Related Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  Animal screen installation often connects with{" "}
                  <Link href="/services/chimney-cap-replacement/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney cap replacement
                  </Link>
                  ,{" "}
                  <Link href="/services/chimney-blockage-removal/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney blockage removal
                  </Link>
                  ,{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>
                  ,{" "}
                  <Link href="/services/chimney-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney cleaning
                  </Link>
                  , and{" "}
                  <Link href="/services/chimney-spark-arrestor-installation/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney spark arrestor installation
                  </Link>
                  .
                </p>
              </div>

              {/* CTA box */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Want to keep animals out of your chimney?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and tell us what you have noticed.
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
              <LeadForm heading="Request a Free Estimate" subheading="Tell us what you have noticed." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cap Replacement", href: "/services/chimney-cap-replacement/" },
                    { name: "Chimney Blockage Removal", href: "/services/chimney-blockage-removal/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Chimney Cleaning", href: "/services/chimney-cleaning/" },
                    { name: "Spark Arrestor Installation", href: "/services/chimney-spark-arrestor-installation/" },
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
