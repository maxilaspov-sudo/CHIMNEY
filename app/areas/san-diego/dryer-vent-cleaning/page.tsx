import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/Chimney-cleaning.jpg";

export const metadata: Metadata = {
  title: "Dryer Vent Cleaning San Diego | Lint & Airflow Service",
  description:
    "Dryer vent cleaning in San Diego for lint buildup, clogged dryer vents, poor airflow, overheating dryers, and long drying times.",
  alternates: { canonical: "/areas/san-diego/dryer-vent-cleaning/" },
  openGraph: {
    title: "Dryer Vent Cleaning San Diego | Lint & Airflow Service",
    description:
      "Dryer vent cleaning in San Diego for lint buildup, clogged dryer vents, poor airflow, overheating dryers, and long drying times.",
    url: `${SITE.baseUrl}/areas/san-diego/dryer-vent-cleaning/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dryer Vent Cleaning San Diego | Lint & Airflow Service",
    description:
      "Dryer vent cleaning in San Diego for clogged vents, lint buildup, slow drying, and dryer overheating. Free estimate.",
  },
};

const FAQS = [
  {
    q: "How do I know if my dryer vent is clogged?",
    a: "The most reliable signs are clothes that take two or more cycles to dry fully, the dryer exterior feeling unusually hot to the touch during a cycle, a burning smell during drying, and the exterior vent cover that does not open or flap during operation. If your dryer has been running hot and cycles are noticeably longer than they were a year ago, the vent is the first thing to check.",
  },
  {
    q: "How often should dryer vents be cleaned in San Diego?",
    a: "Once a year is the standard recommendation for most households. Households that do more laundry than average — families with children, households using the dryer daily — may need cleaning every six to eight months. San Diego's climate does not create moisture-related vent blockages in the same way that humid climates do, but lint accumulates at the same rate regardless of climate.",
  },
  {
    q: "Can dryer vent cleaning help clothes dry faster?",
    a: "Yes. A clogged dryer vent restricts airflow, which prevents moisture from escaping the drum efficiently. Cleaning the vent restores full airflow, and most homeowners notice a significant improvement in drying time after service — often returning to a single cycle from two.",
  },
  {
    q: "Is lint buildup a fire risk?",
    a: "It is. The U.S. Fire Administration attributes approximately 2,900 residential dryer fires per year to failure to clean dryer vents. Lint is highly flammable, and when it accumulates in a restricted vent, the heat from a normal drying cycle can be enough to ignite it. Clogged dryer vents are a fire hazard that is straightforward to prevent with regular cleaning.",
  },
  {
    q: "Do you inspect airflow after cleaning?",
    a: "Yes. After cleaning, we test airflow at the exterior vent cover to confirm it has been fully restored. We also check that the exterior vent flap is opening and closing properly and that the duct connection at the dryer is secure. If we find a damaged section of ductwork or an improper duct material, we will flag it before we leave.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dryer Vent Cleaning San Diego",
  serviceType: "Dryer Vent Cleaning",
  description:
    "Dryer vent cleaning in San Diego for lint buildup, clogged dryer vents, poor airflow, overheating dryers, and long drying times.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Diego",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "City", name: "San Diego" },
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

export default function DryerVentCleaningSanDiegoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/areas/" },
              { label: "San Diego", href: "/areas/san-diego/" },
              { label: "Dryer Vent Cleaning" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Technician performing residential chimney and vent service in San Diego"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · San Diego
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Dryer Vent Cleaning in San Diego, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Professional dryer vent cleaning for San Diego homeowners — lint removal, airflow restoration, and a post-service airflow check to confirm the vent is clear from dryer to exterior.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact/" className="btn-primary">
                Request Free Estimate
              </Link>
              <a href="#estimate-form" className="btn-secondary">
                Get Online Quote
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
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  Dryer vent cleaning is one of the most straightforward home maintenance tasks — and one of the most consistently skipped. Lint accumulates in the ductwork with every load of laundry, gradually reducing airflow until the dryer has to work harder to move moisture out of the drum. The result is longer drying times, higher energy use, and a dryer that runs hotter than it should. Left long enough, a clogged dryer vent becomes a fire hazard.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We service dryer vents in San Diego homes of all configurations — short runs through an exterior wall, longer runs through the attic or under the floor, and multi-story installations where the duct runs up through interior walls. The process is the same: clear the full length of the duct, verify airflow at the exterior, and check that the vent cover is functioning properly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Signs Your Dryer Vent Needs Cleaning
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Clothes take more than one cycle to dry",
                      desc: "If a normal load that used to dry in 45 minutes now takes two cycles, restricted airflow from lint buildup is the most likely cause.",
                    },
                    {
                      title: "The dryer runs hot",
                      desc: "A dryer exterior that is unusually hot to the touch, or clothes that come out very hot at the end of a cycle, indicates that heat is not escaping the drum properly — usually because the vent is blocked.",
                    },
                    {
                      title: "A burning smell during drying",
                      desc: "Any burning smell coming from a dryer should be treated seriously. Lint is flammable. A burning smell means lint is heating up in the duct — stop using the dryer and schedule a cleaning.",
                    },
                    {
                      title: "The exterior vent flap does not open",
                      desc: "During a drying cycle, the exterior vent cover should open and close with airflow. If it stays closed or barely moves, the vent is restricted.",
                    },
                    {
                      title: "More than a year since the last cleaning",
                      desc: "For most households, annual dryer vent cleaning is the right maintenance interval. If you cannot remember the last time it was done, it has probably been too long.",
                    },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 bg-[#F8FAFC] border border-gray-100 rounded-xl p-4"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="2.5"
                        className="shrink-0 mt-1"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                        <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Why Lint Buildup Is a Problem
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Lint is extremely flammable. The U.S. Fire Administration estimates that approximately 2,900 residential dryer fires occur each year in the United States, with failure to clean the dryer vent as the leading cause. These fires are preventable with regular maintenance — and they can be severe, because lint that has packed a duct over years of use provides a significant amount of fuel.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Beyond the fire risk, a clogged dryer vent is an efficiency problem. A dryer running against restricted airflow uses significantly more energy per load and wears out mechanical components faster. Most households that schedule a first professional cleaning after years of do-it-yourself lint trap cleaning are surprised by how much material comes out of the duct — the lint trap only captures a portion of what is generated per load.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  San Diego&apos;s dry climate does not create unique dryer vent risks beyond what applies everywhere, but the same fire-hazard profile applies here as anywhere in California — and San Diego County&apos;s dry brush environment means any residential fire has potential to spread beyond the structure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  What Dryer Vent Cleaning Includes
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We clean the complete dryer vent system from the dryer exhaust port to the exterior vent cover. The process uses a rotary brush system that clears the full diameter of the duct along its entire length, followed by a high-powered vacuum that removes all loosened lint and debris. The dryer connection is disconnected and reconnected properly so there are no gaps or leaks in the duct after service.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  After cleaning, we test airflow at the exterior vent and confirm the cover flap is operating correctly. If we find a damaged duct section, improper flexible duct material (foil accordion duct is a common fire code issue in older San Diego homes), or a disconnected joint in the run, we will note it and explain the options.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Dryer Vent Inspection and Airflow Check
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A{" "}
                  <Link href="/services/dryer-vent-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    dryer vent inspection
                  </Link>{" "}
                  goes beyond the standard cleaning to assess the full duct system — total run length, number of bends, duct material, and whether the installation meets current clearance requirements. California has specific requirements under the California Mechanical Code for maximum duct length and bend allowances, and many older San Diego homes have dryer vent installations that do not comply with current standards.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If your dryer vent has never been professionally inspected, or if your dryer has had persistent performance problems despite regular cleaning, a full inspection is the right starting point. We measure actual airflow and compare it against the manufacturer&apos;s minimum requirements for your specific dryer model.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Ready to schedule dryer vent cleaning in San Diego?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and we will confirm availability for your area.
                </p>
                <Link href="/contact/" className="btn-primary inline-block">
                  Request Free Estimate
                </Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Dryer Vent Cleaning (All California)", href: "/services/dryer-vent-cleaning/" },
                    { name: "Dryer Vent Inspection", href: "/services/dryer-vent-cleaning/" },
                    { name: "Dryer Vent Blockage Removal", href: "/services/dryer-vent-blockage-removal/" },
                    { name: "Dryer Vent Lint Removal", href: "/services/dryer-vent-lint-removal/" },
                    { name: "San Diego service area", href: "/areas/san-diego/" },
                  ].map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors"
                    >
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm
                heading="Get a Free Estimate"
                subheading="Dryer vent cleaning in San Diego. We respond within 2 business hours."
                dark={false}
              />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">
                  More in San Diego
                </h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/san-diego/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/san-diego/chimney-repair/" },
                    { name: "Chimney Sweep", href: "/areas/san-diego/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/san-diego/fireplace-repair/" },
                    { name: "All San Diego Services", href: "/areas/san-diego/" },
                  ].map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="text-sm text-gray-700 hover:text-orange-600 transition-colors flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-orange-400 shrink-0" />
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-5 text-white text-center">
                <p className="text-sm font-semibold mb-1">Prefer to write?</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-orange-400 text-sm font-bold hover:text-orange-300 transition-colors break-all"
                >
                  {SITE.email}
                </a>
                <p className="text-xs text-gray-400 mt-2">We reply within one business day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} heading="Dryer Vent Cleaning San Diego — FAQ" addSchema={false} />
      <CTABanner heading="Schedule dryer vent cleaning in San Diego" />
    </>
  );
}
