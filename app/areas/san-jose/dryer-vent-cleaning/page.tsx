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
  title: "Dryer Vent Cleaning San Jose | Lint & Airflow Service",
  description:
    "Dryer vent cleaning in San Jose for lint buildup, clogged dryer vents, poor airflow, overheating dryers, and long drying times.",
  alternates: { canonical: "/areas/san-jose/dryer-vent-cleaning/" },
  openGraph: {
    title: "Dryer Vent Cleaning San Jose | Lint & Airflow Service",
    description:
      "Dryer vent cleaning in San Jose for lint buildup, clogged dryer vents, poor airflow, overheating dryers, and long drying times.",
    url: `${SITE.baseUrl}/areas/san-jose/dryer-vent-cleaning/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dryer Vent Cleaning San Jose | Lint & Airflow Service",
    description:
      "Dryer vent cleaning in San Jose for clogged vents, lint buildup, slow drying, and dryer overheating. Free estimate.",
  },
};

const FAQS = [
  {
    q: "How do I know if my dryer vent is clogged?",
    a: "The clearest signs are clothes that take two or more full cycles to dry, the dryer or the laundry room feeling unusually hot during a cycle, a burning smell, and an exterior vent cover that does not open visibly during operation. In San Jose townhomes and single-family homes with longer or multi-bend duct runs, lint buildup can restrict airflow significantly before any obvious external symptom appears.",
  },
  {
    q: "How often should dryer vents be cleaned in San Jose?",
    a: "Annual cleaning is the standard recommendation for most households. Households with more laundry volume — families, shared homes — may benefit from cleaning every six to nine months. San Jose townhomes and attached homes sometimes have longer duct runs with more bends than detached single-family homes, which increases the rate at which lint accumulates.",
  },
  {
    q: "Can dryer vent cleaning help clothes dry faster?",
    a: "Yes. A restricted vent prevents moisture from escaping the drum efficiently, forcing the dryer to run multiple cycles to finish what should be a single load. Restoring full airflow through a thorough cleaning typically brings drying times back to manufacturer-rated performance within a load or two.",
  },
  {
    q: "Is lint buildup a fire risk?",
    a: "It is. The U.S. Fire Administration attributes approximately 2,900 residential dryer fires per year to failure to clean dryer vents. Lint is highly flammable, and when it accumulates in a restricted duct, normal drying heat can be enough to ignite it. This is a preventable hazard with straightforward annual maintenance.",
  },
  {
    q: "Do you inspect airflow after cleaning?",
    a: "Yes. After cleaning we test airflow at the exterior vent cover to confirm it has been fully restored, and verify the vent flap is opening and closing correctly. If we find a damaged duct section, an improper flexible duct material, or a disconnected joint in the run, we document it and explain the options before we leave.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dryer Vent Cleaning San Jose",
  serviceType: "Dryer Vent Cleaning",
  description:
    "Dryer vent cleaning in San Jose for lint buildup, clogged dryer vents, poor airflow, overheating dryers, and long drying times.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Jose",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "City", name: "San Jose" },
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

export default function DryerVentCleaningSanJosePage() {
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
              { label: "San Jose", href: "/areas/san-jose/" },
              { label: "Dryer Vent Cleaning" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Technician performing residential chimney and vent service in San Jose"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · San Jose
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Dryer Vent Cleaning in San Jose, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Professional dryer vent cleaning for San Jose homeowners and townhome residents — full duct cleaning from dryer exhaust to exterior, with an airflow test after every service.
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
                  Dryer vent cleaning is one of the most straightforward residential maintenance tasks, and one of the most reliably skipped. In San Jose, where a significant share of housing is townhomes and attached single-family homes, dryer vent ducts are often longer and have more bends than in detached homes with short exterior wall runs. Longer ducts accumulate lint faster and are more likely to have restrictions develop in multiple sections.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We service dryer vents in all residential configurations — short runs through an exterior wall, longer runs through the attic or under the floor, and installations in multi-story buildings. The process is consistent: clear the full length of the duct, verify airflow at the exterior, and check that the vent cover is functioning correctly.
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
                      desc: "A normal load that used to dry in one cycle but now routinely needs two is the most common indicator that the vent is restricting airflow.",
                    },
                    {
                      title: "The dryer runs unusually hot",
                      desc: "A dryer exterior or the laundry room that is noticeably hot during a cycle suggests heat is not escaping through the vent properly.",
                    },
                    {
                      title: "A burning smell during drying",
                      desc: "Any burning smell from a dryer should be treated as a warning. Stop using the dryer and schedule a vent cleaning — lint in a restricted duct can ignite from normal drying heat.",
                    },
                    {
                      title: "The exterior vent flap does not move",
                      desc: "During a drying cycle, the exterior vent cover should open with airflow. If it stays shut or barely moves, the duct is restricted.",
                    },
                    {
                      title: "More than a year since the last cleaning",
                      desc: "Annual cleaning is the right interval for most households. If you do not recall the last cleaning, it has likely been too long.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 bg-[#F8FAFC] border border-gray-100 rounded-xl p-4">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" className="shrink-0 mt-1" aria-hidden="true">
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
                  Lint is highly flammable. The U.S. Fire Administration attributes roughly 2,900 residential dryer fires annually to failure to clean dryer vents — making it one of the most preventable causes of home fires. Once lint has packed a duct over years of use, a single normal drying cycle can generate enough heat to ignite the accumulated material.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Beyond fire risk, lint restriction forces the dryer to work harder per load — increasing energy use and wearing out mechanical components faster. Most homeowners who schedule a first professional cleaning after years of only cleaning the lint trap are surprised by how much material has accumulated in the duct itself.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  In San Jose townhomes and attached homes with longer duct runs, the buildup point is often in a bend or elbow fitting where lint tends to catch and accumulate faster than in straight sections.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  What Dryer Vent Cleaning Includes
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We clean the complete dryer vent system from the dryer exhaust port to the exterior vent cover. A rotary brush system clears the full diameter of the duct along its entire length, and a high-powered vacuum removes all loosened lint and debris. The dryer connection is properly reconnected afterward so there are no gaps or leaks.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  After cleaning, we test airflow at the exterior and confirm the vent flap operates correctly. If we identify a damaged duct section, improper flexible duct material, or a disconnected joint anywhere in the run, we document it and explain the repair options before we leave.
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
                  goes beyond the cleaning to assess the complete duct system — total run length, number of bends, duct material, and compliance with the California Mechanical Code requirements for maximum duct length and bend count. Many older San Jose installations, including those in 1980s and 1990s townhome developments, use foil accordion duct that does not meet current fire code standards.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If your dryer has had persistent performance issues despite regular cleaning, or if the duct has never been professionally inspected, a full inspection is the right starting point. We measure actual airflow and compare it against your dryer manufacturer requirements.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Ready to schedule dryer vent cleaning in San Jose?</p>
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
                    { name: "San Jose service area", href: "/areas/san-jose/" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors">
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm heading="Get a Free Estimate" subheading="Dryer vent cleaning in San Jose. We respond within 2 business hours." dark={false} />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in San Jose</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/san-jose/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/san-jose/chimney-repair/" },
                    { name: "Chimney Sweep", href: "/areas/san-jose/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/san-jose/fireplace-repair/" },
                    { name: "All San Jose Services", href: "/areas/san-jose/" },
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

      <FAQSection faqs={FAQS} heading="Dryer Vent Cleaning San Jose — FAQ" addSchema={false} />
      <CTABanner heading="Schedule dryer vent cleaning in San Jose" />
    </>
  );
}
