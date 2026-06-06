import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, NAV_AREAS } from "@/lib/constants";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Gas Fireplace Repair in California | Professional Service | Chimney Peak California",
  description:
    "Gas fireplace repair across California. Pilot lights, thermocouples, burners, and igniters serviced. Licensed technicians. Free estimate.",
  alternates: { canonical: "/services/gas-fireplace-repair/" },
  openGraph: {
    title: "Gas Fireplace Repair in California | Professional Service | Chimney Peak California",
    description:
      "Gas fireplace repair across California — pilot lights, thermocouples, burners, and ignition systems. Licensed technicians. Free estimate.",
    url: "/services/gas-fireplace-repair/",
    images: [
      {
        url: "https://images.pexels.com/photos/14681670/pexels-photo-14681670.jpeg?auto=compress&cs=tinysrgb&h=350",
        alt: "Blue and orange gas fireplace flames — gas fireplace repair service in California",
      },
    ],
  },
};

const HERO_IMAGE = "/images/services/Gas-fireplace-repair.jpg";

const SIGNS = [
  {
    title: "Pilot light won't stay lit",
    desc: "The most common gas fireplace problem. Usually a faulty thermocouple or thermopile — the sensor that tells the gas valve it's safe to stay open.",
  },
  {
    title: "Fireplace won't ignite",
    desc: "When the pilot is lit but the main burner doesn't fire, the issue is typically the igniter, ignition module, or gas valve.",
  },
  {
    title: "Yellow or orange flames instead of blue",
    desc: "Gas should burn blue with small orange tips. A predominantly yellow or orange flame means the air-to-fuel mixture is off — incomplete combustion and elevated CO output.",
  },
  {
    title: "Gas smell near the fireplace",
    desc: "Shut it off immediately, ventilate, and call. A faint smell when first igniting is normal for some units. A persistent smell, or any smell when the fireplace is off, is not.",
  },
  {
    title: "Repeated clicking without ignition",
    desc: "The igniter is firing but not catching. Could be a dirty or misaligned electrode, a wet pilot orifice, or a failed ignition module.",
  },
  {
    title: "Remote or wall switch doesn't respond",
    desc: "Check the receiver battery first. If that's not it, the receiver, thermopile output, or wiring is the likely cause.",
  },
  {
    title: "Milky glass or black soot that doesn't clear",
    desc: "Hazy glass after cleaning suggests the air-fuel ratio is wrong. Persistent soot on the glass points to a burner or venting issue.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Inspect firebox, burner, and vent connections",
    desc: "We assess the physical condition of the burner assembly, ceramic logs or media, and the vent termination before touching a control.",
  },
  {
    title: "Test pilot and thermocouple",
    desc: "We measure millivolt output from the thermocouple and thermopile to confirm they're producing enough current to hold the gas valve open.",
  },
  {
    title: "Check ignition module and electrodes",
    desc: "The spark electrode is inspected for position and condition. The ignition module is tested for output.",
  },
  {
    title: "Assess gas valve and pressure",
    desc: "Gas pressure at the valve is checked against manufacturer spec. A valve that's reading in range but not opening correctly needs replacement.",
  },
  {
    title: "Test remote receiver and controls",
    desc: "Receiver, wall switch, and any smart-home integration are tested in sequence to isolate control failures.",
  },
  {
    title: "Clean and reassemble",
    desc: "Burner tray, ceramic logs, and glass are cleaned. The system is run through a full cycle to confirm the repair before we leave.",
  },
];

const FAQS = [
  {
    q: "Is it safe to keep using a gas fireplace that won't stay lit?",
    a: "No. A pilot that won't hold usually indicates a faulty thermocouple — the safety device that shuts the gas valve if the pilot flame goes out. Operating a fireplace while this sensor is failing means the gas-shutoff mechanism isn't reliable. Have it repaired before further use.",
  },
  {
    q: "Can I relight the pilot light myself?",
    a: "For most gas fireplaces, yes. The manufacturer's manual has instructions and relighting the pilot is a normal maintenance task. Call a professional when relighting doesn't hold, the flame burns the wrong color, or you smell gas — those are not DIY situations.",
  },
  {
    q: "How long does a repair visit take?",
    a: "A diagnostic and repair visit typically takes one to two hours. If a part needs to be ordered — gas valves, specific thermocouple models — a second visit is needed. Common parts for major gas fireplace brands are usually available within a few business days.",
  },
  {
    q: "Does a functioning gas fireplace still need annual inspection?",
    a: "Yes. NFPA 211 recommends annual inspection for any gas appliance with a venting system. The inspection checks vent connections, burner operation, and gas line integrity — things that don't have visible symptoms until they create a problem.",
  },
  {
    q: "What gas fireplace brands do you service?",
    a: "We service all major residential gas fireplace brands including Majestic, Heat & Glo, Heatilator, Superior, Napoleon, and Empire. If your unit is a less common brand, call us with the model number and we'll confirm parts availability before scheduling.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gas Fireplace Repair",
  description:
    "Gas fireplace repair across California — pilot lights, thermocouples, burners, igniters, and gas valve service by trained chimney technicians.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
  },
  areaServed: { "@type": "State", name: "California" },
  offers: {
    "@type": "Offer",
    price: "Free estimate",
    priceCurrency: "USD",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.baseUrl + "/" },
    { "@type": "ListItem", position: 2, name: "Services", item: SITE.baseUrl + "/services/" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Gas Fireplace Repair",
      item: SITE.baseUrl + "/services/gas-fireplace-repair/",
    },
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

export default function GasFireplaceRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services/" },
              { label: "Gas Fireplace Repair" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Technician repairing a gas fireplace insert and burner system"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Gas appliances
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Gas Fireplace Repair in California
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Professional chimney technicians diagnose and repair gas fireplace ignition, pilot, burner, and control problems across California.
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

      {/* Main content */}
      <section className="section-pad bg-white">
        <div className="container-base">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left: content */}
            <div className="lg:col-span-2 flex flex-col gap-10">

              {/* Overview */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-4">
                  About Our Gas Fireplace Repair Service
                </h2>
                <div className="text-gray-600 leading-relaxed text-lg space-y-4">
                  <p>
                    Gas fireplaces are lower-maintenance than wood-burning systems — but lower-maintenance isn&apos;t no maintenance. When a gas fireplace stops igniting, burns with an abnormal flame, or produces an unusual odor, it&apos;s either a failed component or a safety concern. The important distinction is knowing which.
                  </p>
                  <p>
                    Most gas fireplace problems trace back to a small number of components: the thermocouple or thermopile (the sensor that controls the gas valve), the igniter or ignition module, the gas valve itself, or the control system. These are serviceable parts that wear out over time on any gas appliance. Diagnosis takes a technician familiar with the fuel system — not just chimney cleaning.
                  </p>
                  <p>
                    California homes contain millions of gas fireplaces, with the highest concentration in post-1980 factory-built systems across Southern California and the Bay Area. We service all major brands and carry common parts for same-day repair when possible.
                  </p>
                </div>
              </div>

              {/* Signs */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#1E3A5F] mb-5">
                  Signs Your Gas Fireplace Needs Repair
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {SIGNS.map((sign, i) => (
                    <div key={i} className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-5">
                      <h3 className="font-bold text-[#1E3A5F] mb-2 text-sm">{sign.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{sign.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safety callout */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <h2 className="text-xl font-bold mb-3 text-orange-300">Carbon Monoxide and Gas Appliances</h2>
                <div className="text-gray-300 text-sm leading-relaxed space-y-3">
                  <p>
                    A gas fireplace that isn&apos;t burning correctly produces elevated carbon monoxide — colorless, odorless, and dangerous at concentration. If your CO detector alerts while the fireplace is running, shut the unit off, open windows, and leave the house. Call the gas company first, then a chimney technician.
                  </p>
                  <p>
                    A correctly operating direct-vent gas fireplace exhausts all combustion products through the sealed vent to the exterior. A cracked vent connection or improperly seated collar can allow CO to enter the room before any visible symptom appears. Annual inspection catches these before they become a problem.
                  </p>
                </div>
              </div>

              {/* Why professional */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#1E3A5F] mb-4">
                  Why Gas Fireplace Repair Requires a Qualified Technician
                </h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Gas valve work involves pressurized fuel lines — professional gas appliance training covers the diagnostic protocol",
                    "Manufacturer warranties on gas fireplace units typically require professional service for repair",
                    "Correct thermocouple millivolt range varies by model and requires a meter to verify",
                    "Vent connection integrity must be confirmed after any gas component repair",
                    "Control board and remote receiver diagnosis requires brand-specific knowledge",
                    "An inspection report is issued after every service call for your homeowner records",
                  ].map((b, i) => (
                    <li key={i} className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-lg p-3">
                      <CheckIcon />
                      <span className="text-sm text-gray-700">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#1E3A5F] mb-5">Our Repair Process</h2>
                <div className="flex flex-col gap-4">
                  {PROCESS_STEPS.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{step.title}</p>
                        <p className="text-sm text-gray-500 mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related reading */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
                <h3 className="font-bold text-[#1E3A5F] mb-3">Related Guides</h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="/blog/gas-fireplace-not-turning-on/" className="text-sm text-orange-600 hover:underline font-medium">
                      Gas Fireplace Won&apos;t Turn On? Common Causes and What to Check First →
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/do-gas-fireplaces-need-cleaning/" className="text-sm text-orange-600 hover:underline font-medium">
                      Do Gas Fireplaces Need Cleaning and Inspection? →
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Service areas */}
              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-[#1E3A5F] mb-1">
                  Gas Fireplace Repair Available In
                </h3>
                <p className="text-xs text-gray-400 mb-4">
                  Serving{" "}
                  <Link href="/areas/california/" className="text-orange-500 hover:underline">
                    all of California
                  </Link>{" "}
                  ·{" "}
                  <Link href="/areas/" className="text-orange-500 hover:underline">
                    View all service areas
                  </Link>
                </p>
                <div className="flex flex-wrap gap-2">
                  {NAV_AREAS.slice(0, 14).map((area) => (
                    <Link
                      key={area.href}
                      href={area.href}
                      className="text-xs bg-white border border-gray-200 hover:border-orange-300 hover:text-orange-600 px-3 py-1.5 rounded-full transition-colors"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form + sidebar */}
            <div className="flex flex-col gap-6">
              <LeadForm
                heading="Get a Gas Fireplace Repair Quote"
                subheading="We respond within 2 business hours."
                dark={false}
              />

              {/* Related services */}
              <div className="bg-[#F8FAFC] rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3">Related Services</h3>
                <ul className="flex flex-col gap-1">
                  {[
                    { name: "Fireplace Cleaning", href: "/services/fireplace-cleaning/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Chimney Repair", href: "/services/chimney-repair/" },
                    { name: "Fireplace Installation", href: "/services/fireplace-installation/" },
                  ].map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="text-sm text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-1">
                        <span className="text-orange-400">›</span> {s.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/services/" className="text-sm text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-1">
                      <span className="text-orange-400">›</span> All Services
                    </Link>
                  </li>
                </ul>
              </div>

              {/* When to call someone else */}
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
                <h3 className="font-semibold text-[#1E3A5F] mb-2 text-sm">When to call someone else</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  If your gas fireplace is working normally and only needs routine cleaning, book a{" "}
                  <Link href="/services/fireplace-cleaning/" className="text-orange-600 hover:underline">
                    fireplace cleaning
                  </Link>{" "}
                  instead. If you smell gas strongly or your CO detector is alerting, call the gas company first — that&apos;s their jurisdiction before ours.
                </p>
              </div>

              {/* Email CTA */}
              <div className="bg-[#1E3A5F] rounded-xl p-5 text-center">
                <p className="text-gray-300 text-sm mb-2">Have a question?</p>
                <a href={`mailto:${SITE.email}`} className="text-orange-400 font-bold text-base hover:text-orange-300 block break-all">
                  {SITE.email}
                </a>
                <p className="text-gray-400 text-xs mt-1">Mon–Fri 7am–7pm · Sat 8am–5pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={FAQS}
        heading="Gas Fireplace Repair FAQ"
        addSchema={false}
      />

      <CTABanner heading="Need gas fireplace repair in California?" />
    </>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" className="shrink-0 mt-0.5" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
