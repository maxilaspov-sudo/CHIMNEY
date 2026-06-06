import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/chimney-spark-arrestor-installation.jpg";

export const metadata: Metadata = {
  title: "Chimney Spark Arrestor Installation in California | Fireplace Safety",
  description:
    "Chimney spark arrestor installation in California to help reduce sparks, embers, debris entry, and chimney top fire safety concerns.",
  alternates: { canonical: "/services/chimney-spark-arrestor-installation/" },
  openGraph: {
    title: "Chimney Spark Arrestor Installation in California | Fireplace Safety",
    description:
      "Chimney spark arrestor installation in California to help reduce sparks, embers, debris entry, and chimney top fire safety concerns.",
    url: `${SITE.baseUrl}/services/chimney-spark-arrestor-installation/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Spark Arrestor Installation in California | Fireplace Safety",
    description: "Chimney spark arrestor installation in California — reduce sparks, embers, and debris at the chimney top. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What is a chimney spark arrestor?",
    a: "It is a screen or mesh component that helps reduce sparks or embers escaping from the chimney top.",
  },
  {
    q: "Is a spark arrestor part of a chimney cap?",
    a: "Often yes. Many chimney caps include a screen that functions as a spark arrestor.",
  },
  {
    q: "Do all chimneys need a spark arrestor?",
    a: "Not always, but it is commonly recommended for wood-burning fireplaces and exposed chimney tops.",
  },
  {
    q: "Can a spark arrestor get clogged?",
    a: "Yes. Screens can collect soot, debris, or creosote and should be checked during chimney service.",
  },
  {
    q: "Is a spark arrestor the same as an animal screen?",
    a: "They are related. Both use screening, but a spark arrestor focuses on reducing sparks and embers while animal screening helps block pests and debris.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Spark Arrestor Installation",
  serviceType: "Chimney Spark Arrestor Installation",
  description:
    "Chimney spark arrestor installation in California to help reduce sparks, embers, debris entry, and chimney top fire safety concerns.",
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
    { "@type": "ListItem", position: 3, name: "Chimney Spark Arrestor Installation", item: `${SITE.baseUrl}/services/chimney-spark-arrestor-installation/` },
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

export default function ChimneySparkArrestorInstallationPage() {
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
              { label: "Spark Arrestor Installation" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Chimney spark arrestor screen installed on a brick chimney"
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
              Chimney Spark Arrestor Installation in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              A spark arrestor adds a layer of protection at the chimney top, helping to reduce sparks and embers escaping from wood-burning fireplaces.
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
                  A chimney spark arrestor is designed to help reduce the chance of sparks or embers escaping from the chimney top. It can also help block debris and animal entry when installed as part of a proper chimney cap system. Chimney Peak California provides chimney spark arrestor installation for homeowners who want better top-of-chimney protection.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Spark arrestors are especially relevant for wood-burning fireplaces, homes near trees, dry vegetation, or roof surfaces, and chimneys that need better protection at the top.
                </p>
              </div>

              {/* H2: What a Spark Arrestor Does */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What a Spark Arrestor Does</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A spark arrestor uses a metal screen or mesh design to help contain larger sparks and embers while still allowing smoke and gases to vent. It is commonly part of a{" "}
                  <Link href="/services/chimney-cap-replacement/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney cap
                  </Link>{" "}
                  system and should be fitted to the chimney properly.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A good spark arrestor should not block normal chimney draft. It should be installed in a way that allows airflow while adding a layer of protection at the chimney opening.
                </p>
              </div>

              {/* H2: When It Makes Sense */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">When Spark Arrestor Installation Makes Sense</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A spark arrestor may be recommended if the chimney does not have a cap, the existing screen is damaged, sparks are a concern, or the home is in an area where chimney top protection is important. It may also be added after{" "}
                  <Link href="/services/chimney-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney cleaning
                  </Link>
                  ,{" "}
                  <Link href="/services/chimney-cap-replacement/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    cap replacement
                  </Link>
                  , or{" "}
                  <Link href="/services/chimney-blockage-removal/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    blockage removal
                  </Link>
                  .
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If the chimney already has a cap, the existing mesh should be checked. Rusted, bent, clogged, or missing screen sections may need replacement.
                </p>
              </div>

              {/* H2: Maintenance and Safety */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Maintenance and Safety</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Spark arrestor screens can collect soot, leaves, debris, or creosote over time. If the screen becomes restricted, draft may suffer. This is why the top of the chimney should be checked during routine chimney service.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A spark arrestor is not a substitute for{" "}
                  <Link href="/services/chimney-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney cleaning
                  </Link>{" "}
                  or fireplace maintenance. It is one part of a properly protected chimney system.
                </p>
              </div>

              {/* H2: Related Services */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Related Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  Spark arrestor installation often connects with{" "}
                  <Link href="/services/chimney-cap-replacement/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney cap replacement
                  </Link>
                  ,{" "}
                  <Link href="/services/chimney-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney cleaning
                  </Link>
                  ,{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>
                  ,{" "}
                  <Link href="/services/chimney-blockage-removal/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney blockage removal
                  </Link>
                  , and{" "}
                  <Link href="/services/chimney-animal-screen-installation/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney animal screen installation
                  </Link>
                  .
                </p>
              </div>

              {/* CTA box */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Need a spark arrestor or chimney cap screen?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and tell us what type of fireplace you use.
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
              <LeadForm heading="Request a Free Estimate" subheading="Tell us what type of fireplace you use." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cap Replacement", href: "/services/chimney-cap-replacement/" },
                    { name: "Chimney Cleaning", href: "/services/chimney-cleaning/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Chimney Blockage Removal", href: "/services/chimney-blockage-removal/" },
                    { name: "Animal Screen Installation", href: "/services/chimney-animal-screen-installation/" },
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
