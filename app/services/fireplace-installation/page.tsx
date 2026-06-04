import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, NAV_SERVICES, NAV_AREAS } from "@/lib/constants";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Fireplace Installation in California | Wood, Gas & Electric | Chimney Peak California",
  description:
    "Professional fireplace installation across California — wood-burning, gas, electric, and prefabricated. Permits handled. CSIA-certified technicians. Free estimate.",
  alternates: { canonical: "/services/fireplace-installation/" },
  openGraph: {
    title: "Fireplace Installation in California | Wood, Gas & Electric | Chimney Peak California",
    description:
      "Professional fireplace installation across California — wood-burning, gas, electric, and prefabricated. Permits handled. Free estimate.",
    url: "/services/fireplace-installation/",
    images: [
      {
        url: "https://images.pexels.com/photos/19227257/pexels-photo-19227257.jpeg?auto=compress&cs=tinysrgb&h=350",
        alt: "Stylish living room with a modern fireplace — fireplace installation service in California",
      },
    ],
  },
};

const HERO_IMAGE =
  "https://images.pexels.com/photos/19227257/pexels-photo-19227257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const INSTALL_TYPES = [
  {
    name: "Wood-Burning Fireplace",
    desc: "Masonry or factory-built wood fireplaces with a properly sized clay tile or stainless liner. Requires a building permit in all California jurisdictions.",
  },
  {
    name: "Gas Fireplace",
    desc: "Direct-vent, natural-vent, and ventless gas fireplaces connected to existing gas service. Direct-vent is the most common California installation — no chimney required.",
  },
  {
    name: "Electric Fireplace",
    desc: "No venting, no gas line, no permit in most cases. The only option for apartments and condos that prohibit combustion appliances.",
  },
  {
    name: "Prefabricated (Factory-Built)",
    desc: "Listed factory-built firebox with a matching metal chimney system. Less expensive than masonry and still code-compliant — but requires a permit.",
  },
  {
    name: "Modern Linear Fireplace",
    desc: "Long, low burner profile — typically gas or electric — set into a custom feature wall. Popular in contemporary California homes.",
  },
  {
    name: "Custom Masonry Fireplace",
    desc: "Built on-site from brick, block, or stone. Fully unique to your home, longest timeline, and highest cost. The only type designed to last 100+ years.",
  },
];

const FAQS = [
  {
    q: "Do I need a permit to install a fireplace in California?",
    a: "Almost always, yes. California building code requires a permit for any new fireplace installation — including gas line work, structural modifications, and chimney construction. We handle the permit application as part of our service. An unpermitted installation must be disclosed when you sell the home and may void your homeowner's insurance.",
  },
  {
    q: "How long does fireplace installation take?",
    a: "An electric insert takes a few hours. A prefabricated gas fireplace installation typically takes one to two days. A custom masonry wood-burning fireplace with a new chimney takes one to two weeks, depending on permit timing and scope.",
  },
  {
    q: "What type of fireplace should I install?",
    a: "It depends on whether you have existing gas service to the house, your local air quality rules (some California counties restrict wood burning on spare-the-air days), and how often you plan to use it. We walk through the options at the free estimate before you commit to anything.",
  },
  {
    q: "Can I install a gas fireplace without an existing chimney?",
    a: "Yes. Direct-vent gas fireplaces vent through an exterior wall with a coaxial pipe — no chimney required. This is the most common gas fireplace installation in California. It is faster and less expensive than building a new chimney.",
  },
  {
    q: "Will a new fireplace add value to my home?",
    a: "A professionally installed, permitted fireplace typically adds value. In California real estate, a gas insert in an existing wood-burning fireplace is one of the more consistently valued upgrades. An unpermitted installation, by contrast, must be disclosed and can complicate or delay a sale.",
  },
];

const RELATED_SERVICES = NAV_SERVICES.filter((s) =>
  [
    "/services/fireplace-cleaning/",
    "/services/chimney-inspection/",
    "/services/chimney-repair/",
    "/services/chimney-liner-repair/",
  ].includes(s.href)
);

const SPECIALIZED_SERVICES = [
  { name: "Gas Fireplace Repair", href: "/services/gas-fireplace-repair/" },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fireplace Installation",
  description:
    "Professional fireplace installation across California — wood-burning, gas, electric, and prefabricated. Permits handled. CSIA-certified technicians.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
  },
  areaServed: { "@type": "State", name: "California" },
  offers: {
    "@type": "Offer",
    price: "Free estimate — varies by type and scope",
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
      name: "Fireplace Installation",
      item: SITE.baseUrl + "/services/fireplace-installation/",
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

export default function FireplaceInstallationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services/" },
              { label: "Fireplace Installation" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Stylish living room with a modern fireplace — fireplace installation service in California"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/90 via-[#0F2238]/75 to-[#0F2238]/20" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Permits handled
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Fireplace Installation Services in California
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Licensed installation for wood, gas, electric, and prefabricated fireplaces — permitted and inspected.
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
                  About Our Fireplace Installation Service
                </h2>
                <div className="text-gray-600 leading-relaxed text-lg space-y-4">
                  <p>
                    A fireplace installation is a major home project that involves structural, mechanical, and fire safety systems. California building code requires a permit for most new fireplaces — including gas line work, structural modifications, and chimney construction — and pulling that permit requires a licensed contractor. We handle the full scope: permit application, structural assessment, firebox installation, liner sizing, gas line connection where applicable, and final inspection sign-off.
                  </p>
                  <p>
                    The type of fireplace you choose affects cost, permit requirements, and how you use the space. Wood-burning fireplaces give the most authentic experience but carry the highest installation cost and the strictest local air quality requirements in California. Gas fireplaces are the most practical choice for most homes — direct-vent models run a coaxial pipe through an exterior wall, so no chimney is required. Electric fireplaces skip permitting in most cases and are the only option in apartments and condos where combustion appliances are not allowed. We walk through these trade-offs at the estimate appointment before any contract is signed.
                  </p>
                </div>
              </div>

              {/* Types of installation */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#1E3A5F] mb-5">
                  Types of Fireplace Installation We Handle
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {INSTALL_TYPES.map((type, i) => (
                    <div
                      key={i}
                      className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-5"
                    >
                      <h3 className="font-bold text-[#1E3A5F] mb-2 text-base">{type.name}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{type.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why professional installation */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#1E3A5F] mb-4">
                  Why Homeowners Choose Professional Installation
                </h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "California building permits require a licensed contractor — DIY installations cannot be permitted",
                    "Improper venting creates carbon monoxide risk that a final inspection would catch",
                    "Incorrect hearth clearances are a fire hazard and void homeowner's insurance",
                    "Manufacturer warranties on gas and electric units require professional installation",
                    "Unpermitted work must be disclosed at sale and can delay or kill a real estate transaction",
                    "We attend the building department inspection — you receive the completed permit card",
                  ].map((b, i) => (
                    <li key={i} className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-lg p-3">
                      <CheckIcon />
                      <span className="text-sm text-gray-700">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Safety and inspection */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <h2 className="text-xl font-bold mb-3">Safety and Inspection Requirements</h2>
                <div className="text-gray-300 text-sm leading-relaxed space-y-3">
                  <p>
                    Every gas fireplace installation includes a pressure test of the gas supply line before it is commissioned. Wood-burning installations include a video inspection of the completed liner to confirm it is properly seated and clear from top to bottom. We submit the permit documentation, schedule the building department inspection, and attend it on your behalf.
                  </p>
                  <p>
                    After the inspection passes, you receive the completed permit card for your property records. If the building department requires a follow-up visit, we return at no additional charge.
                  </p>
                </div>
              </div>

              {/* Our process */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#1E3A5F] mb-5">Our Installation Process</h2>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      title: "Site assessment and estimate",
                      desc: "We measure the installation space, confirm clearances, and assess structural requirements. You receive a written flat-price quote before any work is agreed.",
                    },
                    {
                      title: "Permit application",
                      desc: "We prepare and submit all required plans and documents to your local building department. Most California permits issue within one to three weeks.",
                    },
                    {
                      title: "Structural and framing work",
                      desc: "We prepare the firebox opening, hearth extension, and mantel area to current California building code.",
                    },
                    {
                      title: "Fireplace and liner installation",
                      desc: "Firebox installed, liner run and connected, gas lines or electrical completed as applicable to your fuel type.",
                    },
                    {
                      title: "Final inspection and handover",
                      desc: "We schedule and attend the building department inspection, then hand you the completed permit card and our written installation report.",
                    },
                  ].map((step, i) => (
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

              {/* Service areas */}
              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-[#1E3A5F] mb-1">
                  Fireplace Installation Available In
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
                heading="Get a Fireplace Installation Quote"
                subheading="We respond within 2 business hours."
                dark={false}
              />

              {/* Specialized services */}
              <div className="bg-[#F8FAFC] rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3">Specialized Services</h3>
                <ul className="flex flex-col gap-1">
                  {SPECIALIZED_SERVICES.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="text-sm text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-1"
                      >
                        <span className="text-orange-400">›</span> {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related services */}
              <div className="bg-[#F8FAFC] rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3">Related Services</h3>
                <ul className="flex flex-col gap-1">
                  {RELATED_SERVICES.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="text-sm text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-1"
                      >
                        <span className="text-orange-400">›</span> {s.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/services/"
                      className="text-sm text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-1"
                    >
                      <span className="text-orange-400">›</span> All Services
                    </Link>
                  </li>
                </ul>
              </div>

              {/* When NOT to hire us */}
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
                <h3 className="font-semibold text-[#1E3A5F] mb-2 text-sm">When to call someone else</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  If you only need a plug-in electric fireplace set into an existing opening, any handyman can do it. Call us when the project involves a permit, structural work, a new gas line, or a masonry firebox.
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
        heading="Fireplace Installation FAQ"
        addSchema={false}
      />

      <CTABanner heading="Ready to discuss your fireplace installation?" />
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

