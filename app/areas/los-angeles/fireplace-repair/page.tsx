import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/Gas-fireplace-repair.jpg";

export const metadata: Metadata = {
  title: "Fireplace Repair Los Angeles | Gas & Wood Fireplace Service",
  description:
    "Fireplace repair in Los Angeles for smoke problems, damaged fireboxes, gas fireplace issues, poor draft, broken dampers, and fireplace safety concerns.",
  alternates: { canonical: "/areas/los-angeles/fireplace-repair/" },
  openGraph: {
    title: "Fireplace Repair Los Angeles | Gas & Wood Fireplace Service",
    description:
      "Fireplace repair in Los Angeles for smoke problems, damaged fireboxes, gas fireplace issues, poor draft, broken dampers, and fireplace safety concerns.",
    url: `${SITE.baseUrl}/areas/los-angeles/fireplace-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fireplace Repair Los Angeles | Gas & Wood Fireplace Service",
    description:
      "Fireplace repair in Los Angeles for gas and wood fireplaces — smoke issues, dampers, fireboxes, and ignition problems. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What are common fireplace repair problems in Los Angeles?",
    a: "The most common issues we see in Los Angeles are smoke backdraft from damper problems or draft imbalances, cracked refractory panels in wood-burning fireboxes, and gas fireplace ignition failures — typically a worn thermocouple or thermocouple, a faulty igniter, or a gas valve that is not functioning correctly. Older masonry fireplaces in pre-1960 homes also develop mortar deterioration in the firebox over time.",
  },
  {
    q: "Why is smoke coming back into my room?",
    a: "Smoke backdraft can have several causes: a closed or stuck damper, a blockage in the flue or chimney cap, a negative pressure issue in the home, a smoke chamber that is not properly shaped to direct exhaust, or a chimney that is not tall enough relative to the roofline. An inspection will identify which of these applies to your situation.",
  },
  {
    q: "Can a cracked firebox be repaired?",
    a: "Yes, in most cases. Cracks in refractory panels — the panels that line the interior of a wood-burning firebox — are repaired by replacing the affected panel or filling the crack with refractory mortar, depending on the location and depth. Widespread cracking usually indicates that the panels need full replacement.",
  },
  {
    q: "Do you repair gas fireplaces?",
    a: "Yes. Gas fireplace repair is a separate skill from chimney cleaning or masonry work — it involves diagnosing fuel system components including thermocouples, thermopiles, ignition modules, gas valves, and control receivers. We service all major gas fireplace brands and carry common parts for same-day repair when possible.",
  },
  {
    q: "Is fireplace repair connected to chimney repair?",
    a: "Sometimes. A fireplace that is not drawing properly may have a chimney problem — a blockage, a damaged liner, or a draft issue caused by the chimney height or configuration. In other cases the problem is entirely within the firebox or gas system. Diagnosing correctly saves you from paying for the wrong repair.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fireplace Repair Los Angeles",
  serviceType: "Fireplace Repair",
  description:
    "Fireplace repair in Los Angeles for smoke problems, damaged fireboxes, gas fireplace issues, poor draft, broken dampers, and fireplace safety concerns.",
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
    { "@type": "ListItem", position: 4, name: "Fireplace Repair", item: `${SITE.baseUrl}/areas/los-angeles/fireplace-repair/` },
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

export default function FireplaceRepairLosAngelesPage() {
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
              { label: "Fireplace Repair" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Technician repairing a gas fireplace insert and burner system in a Los Angeles home"
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
              Fireplace Repair in Los Angeles, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Gas and wood-burning fireplace repair for Los Angeles homes — smoke problems, damaged fireboxes, ignition failures, broken dampers, and draft issues diagnosed and repaired correctly.
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
                  Fireplace repair in Los Angeles covers two very different systems — gas and wood-burning — and getting the right diagnosis matters. A gas fireplace that will not ignite has a different failure mode than a wood-burning fireplace that produces smoke backdraft. Treating the wrong problem wastes time and money. We identify what is actually failing before recommending any repair.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  If you smell gas strongly, ventilate the space and call SoCalGas before contacting us — that situation is their jurisdiction first. For everything else, describe what the fireplace is doing and we will point you to the right starting point.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Common Fireplace Problems</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Smoke entering the room",
                      desc: "Caused by a stuck damper, flue blockage, negative pressure in the home, or a smoke chamber problem. Each has a different fix.",
                    },
                    {
                      title: "Gas fireplace won't ignite",
                      desc: "Usually a failed thermocouple or thermopile — the sensor that keeps the gas valve open. Also can be an igniter, ignition module, or gas valve problem.",
                    },
                    {
                      title: "Pilot light won't stay lit",
                      desc: "The thermocouple is the most likely culprit. It tells the gas valve it is safe to stay open. When it fails, the valve shuts even if the pilot is lit.",
                    },
                    {
                      title: "Cracked firebox panels",
                      desc: "Refractory panels in wood-burning fireboxes crack from thermal stress over time. Cracks wider than 1/4 inch or that allow heat to reach the surrounding masonry need repair.",
                    },
                    {
                      title: "Broken or stuck damper",
                      desc: "A damper that will not open fully restricts draft. One that will not close lets heated or cooled air escape and allows odors to enter from the flue.",
                    },
                    {
                      title: "Unusual flame color or odor",
                      desc: "Gas should burn blue with small orange tips. Yellow or orange flames indicate incomplete combustion. A persistent odor when the fireplace is off requires immediate attention.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-5"
                    >
                      <h3 className="font-bold text-[#1E3A5F] mb-2 text-sm">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Wood-Burning Fireplace Repair
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Most wood-burning fireplace problems in Los Angeles fall into three categories: firebox deterioration, draft problems, and damper failure. Firebox deterioration — cracked refractory panels, eroded mortar joints, or missing firebrick — is common in fireplaces that have been in regular use for 20 or more years. Refractory panels can be replaced individually; full firebox relining is needed when damage is widespread.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Draft problems often involve the{" "}
                  <Link href="/services/smoke-chamber-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    smoke chamber
                  </Link>{" "}
                  — the funnel-shaped area above the firebox that gathers combustion gases before they enter the flue. A smoke chamber with deteriorated mortar or an improper shape produces turbulent airflow that pushes smoke into the room rather than up the chimney.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Damper problems are often straightforward: a warped plate, a failed handle, or a frame that has rusted or shifted. Replacement dampers are available for most fireplace models, including top-mounted dampers that provide a better seal than standard throat dampers. See also our{" "}
                  <Link href="/services/chimney-damper-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney damper repair
                  </Link>{" "}
                  service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Gas Fireplace Repair in Los Angeles
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Los Angeles shifted heavily toward gas fireplaces after the South Coast AQMD began issuing wood-burning curtailment days. Many of these gas units — particularly post-1990 factory-built models — are now aging past the point where components like thermocouples, thermopiles, and ignition modules begin to fail.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Gas fireplace repair requires a technician who understands fuel systems, not just chimney cleaning. Measuring thermocouple millivolt output, confirming gas pressure at the valve, testing the ignition module, and verifying the vent connection are all part of a proper diagnostic. We service all major residential gas fireplace brands.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For more on gas-specific issues, see our statewide{" "}
                  <Link href="/services/gas-fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    gas fireplace repair
                  </Link>{" "}
                  page, which covers the full diagnostic process in detail.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Smoke, Draft, Damper, and Firebox Issues
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  These four problems are related but not interchangeable. Smoke entering the room can originate from any one of them — or from a combination. A blocked chimney flue produces smoke backup. So does a stuck damper. So does negative air pressure in a tightly sealed home pulling air down the flue. Treating a negative pressure problem with a chimney repair accomplishes nothing.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  An inspection that tests draft under actual operating conditions — with the fireplace running — identifies what is actually causing the problem. We do not guess and replace parts. If the issue is a simple adjustment, we say so. If it requires a part or a repair, we explain what and why before any work starts.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Fireplace not working the way it should?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and describe the symptom — we will start with the right diagnostic.
                </p>
                <Link href="/contact/" className="btn-primary inline-block">
                  Request Free Estimate
                </Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Fireplace Repair (All California)", href: "/services/fireplace-repair/" },
                    { name: "Gas Fireplace Repair", href: "/services/gas-fireplace-repair/" },
                    { name: "Wood Fireplace Repair", href: "/services/wood-fireplace-repair/" },
                    { name: "Fireplace Inspection", href: "/services/fireplace-inspection/" },
                    { name: "Chimney Damper Repair", href: "/services/chimney-damper-repair/" },
                    { name: "Smoke Chamber Repair", href: "/services/smoke-chamber-repair/" },
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
                subheading="Fireplace repair in Los Angeles. We respond within 2 business hours."
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
                    { name: "Dryer Vent Cleaning", href: "/areas/los-angeles/dryer-vent-cleaning/" },
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

              <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
                <h3 className="font-semibold text-[#1E3A5F] mb-2 text-sm">When to call the gas company</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  If you smell gas strongly, or if your CO detector alerts while the fireplace is running, shut the unit off, ventilate, and call SoCalGas before calling us. That is their jurisdiction before ours.
                </p>
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

      <FAQSection faqs={FAQS} heading="Fireplace Repair Los Angeles — FAQ" addSchema={false} />
      <CTABanner heading="Schedule fireplace repair in Los Angeles" />
    </>
  );
}
