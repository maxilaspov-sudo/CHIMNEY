import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/dryer-vent-lint-removal.jpg";

export const metadata: Metadata = {
  title: "Dryer Vent Lint Removal in California | Remove Built-Up Lint",
  description:
    "Dryer vent lint removal in California for built-up lint, poor dryer airflow, overheating, long drying cycles, and fire prevention.",
  alternates: { canonical: "/services/dryer-vent-lint-removal/" },
  openGraph: {
    title: "Dryer Vent Lint Removal in California | Remove Built-Up Lint",
    description:
      "Dryer vent lint removal in California for built-up lint, poor dryer airflow, overheating, long drying cycles, and fire prevention.",
    url: `${SITE.baseUrl}/services/dryer-vent-lint-removal/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dryer Vent Lint Removal in California | Remove Built-Up Lint",
    description: "Dryer vent lint removal in California — airflow, overheating, and long drying cycles. Free estimate.",
  },
};

const FAQS = [
  {
    q: "Does lint build up even if I clean the lint trap?",
    a: "Yes. The lint trap does not catch everything, and lint can still collect inside the vent duct.",
  },
  {
    q: "Can dryer lint be a fire risk?",
    a: "Yes. Built-up lint is combustible and can increase overheating risk.",
  },
  {
    q: "How often should dryer lint be removed?",
    a: "It depends on use, vent length, and airflow. Homes with heavy laundry use may need more frequent service.",
  },
  {
    q: "Can lint buildup cause long drying times?",
    a: "Yes. Restricted airflow from lint buildup is a common cause of long drying cycles.",
  },
  {
    q: "Is dryer vent lint removal the same as dryer vent cleaning?",
    a: "It is closely related. Lint removal focuses on built-up lint, while full cleaning may address the entire vent route and airflow.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dryer Vent Lint Removal",
  serviceType: "Dryer Vent Lint Removal",
  description:
    "Dryer vent lint removal in California for built-up lint, poor dryer airflow, overheating, long drying cycles, and fire prevention.",
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
    { "@type": "ListItem", position: 3, name: "Dryer Vent Lint Removal", item: `${SITE.baseUrl}/services/dryer-vent-lint-removal/` },
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

export default function DryerVentLintRemovalPage() {
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
              { label: "Dryer Vent Lint Removal" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Dryer vent lint removal from a residential vent line"
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
              Dryer Vent Lint Removal in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              A clean lint trap is not enough. Lint can still pack into the duct and restrict airflow, causing longer drying times, heat buildup, and avoidable performance problems.
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
                  Lint buildup is one of the most common dryer vent problems. Even if you clean the lint trap after every load, lint can still collect inside the vent duct and exterior exhaust. Chimney Peak California provides dryer vent lint removal to help restore airflow, reduce dryer performance problems, and help homeowners avoid avoidable vent restrictions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A dryer vent can look normal from the outside while lint is packed deeper inside the duct. When airflow becomes restricted, the dryer works harder, clothes take longer to dry, and heat can build up inside the system.
                </p>
              </div>

              {/* H2: Why Lint Builds Up */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Why Lint Builds Up in Dryer Vents</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Lint can collect when the vent is long, has too many turns, is partially crushed, has a blocked exterior cover, or has not been cleaned in a long time. Over time, lint narrows the vent path and makes the dryer work harder.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This can lead to longer drying cycles, heat buildup, moisture problems, and increased fire risk. Homes with large families, frequent laundry use, pets, or long dryer vent runs may experience lint buildup faster than expected. Read more about{" "}
                  <Link href="/blog/dryer-vent-fire-prevention/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    dryer vent fire prevention
                  </Link>
                  .
                </p>
              </div>

              {/* H2: What Lint Removal Includes */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Lint Removal Includes</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Dryer vent lint removal may include cleaning the vent line, clearing the exterior exit, removing compacted lint, checking airflow, and identifying obvious venting problems. If airflow remains weak after cleaning, the vent route may need inspection.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The goal is to remove the buildup that restricts airflow, not just clean the area immediately behind the dryer. A proper service should address the path from the dryer connection toward the exterior vent when access allows.
                </p>
              </div>

              {/* H2: Signs You Need Lint Removal */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Signs You Need Dryer Vent Lint Removal</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Common signs include clothes taking too long to dry, a hot dryer, lint around the exterior vent, weak outside airflow, a burning smell, or a laundry room that feels unusually warm. These symptoms often point to restricted airflow caused by lint buildup.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If these signs continue after cleaning the lint trap, the problem may be deeper inside the vent system.
                </p>
              </div>

              {/* H2: Related Services */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Related Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  Lint removal is closely related to{" "}
                  <Link href="/services/dryer-vent-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    dryer vent cleaning
                  </Link>
                  and{" "}
                  <Link href="/services/dryer-vent-blockage-removal/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    dryer vent blockage removal
                  </Link>
                  . If lint removal does not fully resolve airflow problems, a more thorough dryer vent cleaning service may be needed.
                </p>
              </div>

              {/* CTA box */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Need lint removed from your dryer vent?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and tell us how long your dryer takes to dry clothes.
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
              <LeadForm heading="Request a Free Estimate" subheading="Tell us how long your dryer takes to dry clothes." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Dryer Vent Cleaning", href: "/services/dryer-vent-cleaning/" },
                    { name: "Chimney Cleaning", href: "/services/chimney-cleaning/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Chimney Sweep", href: "/services/chimney-sweep/" },
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
