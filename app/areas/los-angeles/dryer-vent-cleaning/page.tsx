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
  title: "Dryer Vent Cleaning Los Angeles | Lint & Airflow Service",
  description:
    "Dryer vent cleaning in Los Angeles for lint buildup, clogged dryer vents, poor airflow, overheating dryers, and long drying times.",
  alternates: { canonical: "/areas/los-angeles/dryer-vent-cleaning/" },
  openGraph: {
    title: "Dryer Vent Cleaning Los Angeles | Lint & Airflow Service",
    description:
      "Dryer vent cleaning in Los Angeles for lint buildup, clogged dryer vents, poor airflow, overheating dryers, and long drying times.",
    url: `${SITE.baseUrl}/areas/los-angeles/dryer-vent-cleaning/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dryer Vent Cleaning Los Angeles | Lint & Airflow Service",
    description:
      "Dryer vent cleaning in Los Angeles — lint removal, airflow restoration, blockage clearing. Free estimate.",
  },
};

const FAQS = [
  {
    q: "How do I know if my dryer vent is clogged?",
    a: "The clearest sign is clothes that take two or more drying cycles to dry when they used to dry in one. Other signs include the dryer feeling hot to the touch during a cycle, a burning or musty smell during operation, and the exterior vent flap staying closed when the dryer runs — which means air is not moving through the duct.",
  },
  {
    q: "How often should dryer vents be cleaned in Los Angeles?",
    a: "Annual cleaning is the standard recommendation for most households. Families that do five or more loads per week, or anyone with a long duct run or multiple bends, should clean every six months. Lint accumulation rate depends on duct length, duct configuration, and laundry volume.",
  },
  {
    q: "Can dryer vent cleaning help clothes dry faster?",
    a: "Yes. A clogged or partially blocked dryer vent restricts the airflow the dryer needs to exhaust moist air. When airflow is restored, drying times return to the appliance's designed performance. Most homeowners notice a difference in the first cycle after cleaning.",
  },
  {
    q: "Is lint buildup a fire risk?",
    a: "Yes. The US Fire Administration reports approximately 2,900 dryer fires per year nationwide, and failure to clean is the leading cause. Lint is highly flammable, and a duct that is clogged or restricted creates heat buildup that can ignite the accumulated material. Cleaning is fire prevention, not optional maintenance.",
  },
  {
    q: "Do you inspect airflow after cleaning?",
    a: "Yes. After cleaning, we reconnect the dryer and run a short cycle to confirm adequate airflow at the exterior vent cap. We also check the duct material and routing for conditions that restrict airflow — kinks, sags, improper flex hose, and transitions that slow air movement.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dryer Vent Cleaning Los Angeles",
  serviceType: "Dryer Vent Cleaning",
  description:
    "Dryer vent cleaning in Los Angeles for lint buildup, clogged dryer vents, poor airflow, overheating dryers, and long drying times.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "City", name: "Los Angeles" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.baseUrl}/` },
    { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE.baseUrl}/areas/` },
    { "@type": "ListItem", position: 3, name: "Los Angeles", item: `${SITE.baseUrl}/areas/los-angeles/` },
    { "@type": "ListItem", position: 4, name: "Dryer Vent Cleaning", item: `${SITE.baseUrl}/areas/los-angeles/dryer-vent-cleaning/` },
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

export default function DryerVentCleaningLosAngelesPage() {
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
              { label: "Service Areas", href: "/areas/" },
              { label: "Los Angeles", href: "/areas/los-angeles/" },
              { label: "Dryer Vent Cleaning" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Technician performing residential chimney and vent service in Los Angeles"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Los Angeles
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Dryer Vent Cleaning in Los Angeles, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Professional dryer vent cleaning for Los Angeles homes — lint removal, airflow restoration, and blockage clearing to reduce fire risk and improve dryer performance.
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
                  Dryer vent cleaning is less visible than chimney service, but the risk from a clogged vent is significant. The US Fire Administration reports approximately 2,900 residential dryer fires per year nationwide, and failure to clean is the leading cause. Lint accumulates inside the vent duct with every load of laundry, and once the buildup reaches a certain density, heat cannot escape fast enough to prevent ignition.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Most Los Angeles homeowners do not need dryer vent cleaning more than once a year. If you do five or more loads per week, or if your duct has multiple bends or a long run through a wall, twice a year is a better schedule. If you cannot remember the last time it was cleaned, now is a reasonable time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Signs Your Dryer Vent Needs Cleaning
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Clothes take two or more cycles to dry",
                      desc: "The most common and reliable sign of a clogged dryer vent. Restricted airflow means moisture cannot exhaust properly, so the dryer runs longer to dry the same load.",
                    },
                    {
                      title: "The dryer feels hot to the touch",
                      desc: "When exhaust cannot escape, heat builds up inside the dryer cabinet. This stresses the motor, heating element, and drum seals — shortening appliance life.",
                    },
                    {
                      title: "Burning smell during operation",
                      desc: "Lint inside a hot dryer duct produces a distinct burning smell before it ignites. This symptom requires immediate attention — do not continue using the dryer until the vent is cleared.",
                    },
                    {
                      title: "Exterior vent flap stays closed when dryer runs",
                      desc: "The flap at the exterior termination should open when the dryer is running. If it stays shut or barely moves, airflow through the duct is severely restricted.",
                    },
                    {
                      title: "More lint than usual in the lint trap",
                      desc: "Paradoxically, a clogged duct can push lint back toward the trap. If you are cleaning the trap more frequently than normal, check the duct as well.",
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
                  Lint is highly flammable. It ignites at relatively low temperatures — well within the range a dryer duct can reach when airflow is restricted. A dryer running two or three cycles back-to-back on a partially blocked duct is a fire risk that gets larger with each load.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The secondary problem is appliance damage. When a dryer cannot exhaust properly, the motor works harder, the heating element runs longer, and the drum seals deteriorate faster from excess heat. A dryer that should last 10 to 15 years may fail in five if the vent is consistently restricted.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Los Angeles homes present some specific challenges. Older construction in neighborhoods like Silver Lake, Koreatown, and East LA often has long duct runs hidden inside walls, with multiple 90-degree bends that accumulate lint faster than a straight exterior run. Condominiums and townhomes sometimes have shared or concealed duct systems that run farther than residents realize.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  What Dryer Vent Cleaning Includes
                </h2>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      step: "1",
                      title: "Disconnect dryer and inspect connections",
                      desc: "We disconnect the dryer, check the connection fitting between the appliance and the wall duct, and assess the duct material for condition.",
                    },
                    {
                      step: "2",
                      title: "Inspect exterior vent cap",
                      desc: "The exterior termination cap is checked for damage, obstruction, or pest intrusion. A damaged cap is a common cause of partial blockage and backdraft.",
                    },
                    {
                      step: "3",
                      title: "Flexible brush cleaning",
                      desc: "A lint brush system runs through the full duct length, loosening compacted lint from the duct walls. We work from both ends when the run permits.",
                    },
                    {
                      step: "4",
                      title: "High-velocity air flush",
                      desc: "Compressed air pushes all loosened lint from the duct to the exterior termination. This step clears what brushing loosens but does not remove.",
                    },
                    {
                      step: "5",
                      title: "Airflow verification",
                      desc: "We reconnect the dryer and run a short cycle to confirm adequate airflow at the exterior cap. If something restricts flow, we identify it before we leave.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Dryer Vent Inspection and Airflow Check
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Cleaning removes lint — but some dryer vent problems are structural. Flexible vinyl duct is still installed in many older Los Angeles homes, and it is not approved for dryer exhaust under current California building code. Vinyl accumulates static charge that attracts lint, collapses easily, and does not handle heat safely. If your home has vinyl dryer duct, it should be replaced with rigid or semi-rigid metal duct.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Duct runs with too many bends — more than four 90-degree turns — add effective length that exceeds what most residential dryers can push air through. A{" "}
                  <Link href="/services/dryer-vent-blockage-removal/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    blockage assessment
                  </Link>{" "}
                  can determine whether the issue is lint accumulation, an improper duct configuration, or both. We also offer{" "}
                  <Link href="/services/dryer-vent-lint-removal/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    targeted lint removal
                  </Link>{" "}
                  for heavily compacted sections that standard brushing cannot clear.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Dryer taking longer than it should?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and we will schedule cleaning for your Los Angeles home.
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
                    { name: "Dryer Vent Blockage Removal", href: "/services/dryer-vent-blockage-removal/" },
                    { name: "Dryer Vent Lint Removal", href: "/services/dryer-vent-lint-removal/" },
                    { name: "Los Angeles service area", href: "/areas/los-angeles/" },
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
                subheading="Dryer vent cleaning in Los Angeles. We respond within 2 business hours."
                dark={false}
              />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">
                  More in Los Angeles
                </h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/los-angeles/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/los-angeles/chimney-repair/" },
                    { name: "Chimney Sweep", href: "/areas/los-angeles/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/los-angeles/fireplace-repair/" },
                    { name: "All LA Services", href: "/areas/los-angeles/" },
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

      <FAQSection faqs={FAQS} heading="Dryer Vent Cleaning Los Angeles — FAQ" addSchema={false} />
      <CTABanner heading="Schedule dryer vent cleaning in Los Angeles" />
    </>
  );
}
