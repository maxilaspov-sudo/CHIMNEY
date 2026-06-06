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
  title: "Fireplace Repair San Francisco | Gas & Wood Fireplace Service",
  description:
    "Fireplace repair in San Francisco for smoke problems, damaged fireboxes, gas fireplace issues, poor draft, broken dampers, and fireplace safety concerns.",
  alternates: { canonical: "/areas/san-francisco/fireplace-repair/" },
  openGraph: {
    title: "Fireplace Repair San Francisco | Gas & Wood Fireplace Service",
    description:
      "Fireplace repair in San Francisco for smoke problems, damaged fireboxes, gas fireplace issues, poor draft, broken dampers, and fireplace safety concerns.",
    url: `${SITE.baseUrl}/areas/san-francisco/fireplace-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fireplace Repair San Francisco | Gas & Wood Fireplace Service",
    description:
      "Fireplace repair in San Francisco — gas and wood-burning, Victorian fireplaces, smoke issues, damper repair. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What are common fireplace repair problems in San Francisco?",
    a: "In San Francisco, the most common issues are smoke backing into the room in Victorian and Edwardian homes (often caused by original smoke chamber geometry or deteriorated dampers), gas fireplace ignition failures, corroded damper assemblies in homes with moisture exposure, and cracked or deteriorated firebox refractory mortar in older masonry fireplaces. Homes near the ocean in the Richmond and Sunset Districts also see accelerated corrosion of metal fireplace components.",
  },
  {
    q: "Why is smoke coming back into my room?",
    a: "Smoke backing into the room has several possible causes in San Francisco homes. Victorian fireplace designs sometimes have smoke chamber geometry that was never ideal for draft — a smoke chamber parge coat can improve this significantly. Corroded or stuck dampers, a blocked flue from debris in an inactive chimney, and negative pressure in a well-sealed modern renovation are all common contributors. We diagnose the actual cause before recommending a fix.",
  },
  {
    q: "Can a cracked firebox be repaired?",
    a: "Most cracked fireboxes can be repaired. In older San Francisco masonry fireboxes — common throughout Pacific Heights, Noe Valley, and the Mission — cracks in the refractory mortar or firebrick can be patched with refractory materials. More extensive damage may require refacing the firebox interior. Factory-built fireboxes in newer SF homes have refractory panels that are replaced rather than patched.",
  },
  {
    q: "Do you repair gas fireplaces?",
    a: "Yes. Common gas fireplace repairs in San Francisco homes include replacing thermocouples and thermopiles, cleaning or replacing pilot assemblies, addressing gas valve issues, and fixing intermittent ignition problems. In homes near the coast, we also see faster deterioration of gas components from salt air — particularly on pilot assemblies and gas valve bodies.",
  },
  {
    q: "Is fireplace repair connected to chimney repair?",
    a: "In San Francisco, this connection is particularly important. Many SF fireplaces have issues that originate higher in the chimney — a deteriorated smoke chamber, an aging stainless liner, or a failed chimney cap — that manifest as smoke problems at the firebox level. Repairing only the visible symptom without assessing the chimney above typically means the problem returns. A full system inspection is the right starting point.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fireplace Repair San Francisco",
  serviceType: "Fireplace Repair",
  description:
    "Fireplace repair in San Francisco for smoke problems, damaged fireboxes, gas fireplace issues, poor draft, broken dampers, and fireplace safety concerns.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "City", name: "San Francisco" },
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

export default function FireplaceRepairSanFranciscoPage() {
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
              { label: "San Francisco", href: "/areas/san-francisco/" },
              { label: "Fireplace Repair" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Technician repairing a gas fireplace insert and burner system in a San Francisco home"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · San Francisco
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Fireplace Repair in San Francisco, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Gas and wood-burning fireplace repair for San Francisco homeowners — Victorian and Edwardian masonry, modern gas inserts, smoke problems, and draft issues diagnosed at the source.
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
                  San Francisco has one of the most distinctive fireplace inventories of any California city — a mix of original Victorian and Edwardian masonry fireplaces, gas inserts installed during mid-century conversions, and modern direct-vent systems in newer construction. Fireplace repair here requires familiarity with all three, and the right starting point depends on which type you have and what is actually wrong with it.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  For any fireplace that has not been inspected recently, we recommend starting with a{" "}
                  <Link href="/services/fireplace-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace inspection
                  </Link>{" "}
                  before a targeted repair. This is especially true for Victorian fireplaces that have been recently unsealed or restored — their full system condition may not be known.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Common Fireplace Problems in San Francisco Homes
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Smoke entering the room",
                      desc: "Common in older Victorian homes where the original smoke chamber geometry creates draft challenges. Also caused by a blocked flue in a recently reopened chimney, or negative pressure in a renovated home.",
                    },
                    {
                      title: "Gas fireplace that will not ignite",
                      desc: "Ignition failures trace to thermocouple failure, clogged pilot tubes, worn igniters, or gas valve issues. Coastal homes see faster component deterioration from salt air exposure.",
                    },
                    {
                      title: "Corroded or stuck damper",
                      desc: "San Francisco's persistent moisture environment accelerates damper corrosion. A damper that will not open or close fully is a safety and efficiency issue that needs prompt attention.",
                    },
                    {
                      title: "Deteriorated firebox mortar",
                      desc: "In pre-war masonry fireplaces throughout Pacific Heights, Noe Valley, and the Mission, original refractory mortar deteriorates over decades of thermal cycling and moisture exposure.",
                    },
                    {
                      title: "Fireplace odor in an unused fireplace",
                      desc: "A smell from an unused fireplace in San Francisco is often caused by the combination of creosote or soot deposits and the city's persistent coastal humidity — both amplified by a damper that does not fully seal.",
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
                  Wood-Burning Fireplace Repair
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Victorian and Edwardian fireplaces in San Francisco neighborhoods like Pacific Heights, Noe Valley, the Hayes Valley, and the Mission are substantial masonry structures that, when properly maintained, can last indefinitely. The common repair needs are age-related: deteriorated refractory mortar or firebrick inside the firebox, cast-iron damper plates that have warped or corroded in place, and smoke chamber surfaces that have roughened over decades of use and reduce draft efficiency.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A smoke chamber parge coat is one of the most effective repairs for Victorian fireplaces with chronic smoke problems. The original smoke chamber in many SF Victorians was built with a stepped corbelled profile — which traps smoke rather than directing it smoothly up the flue. Parging creates a smooth tapered surface that dramatically improves draft without requiring structural changes to the fireplace.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Gas Fireplace Repair
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Gas fireplaces are found throughout newer San Francisco construction and in Victorian homes where gas inserts were installed during mid-century conversions. The coastal environment is harder on gas components than most homeowners expect — salt air accelerates corrosion on pilot assemblies, gas valve bodies, and igniter components, particularly in homes near the ocean in the Richmond, Sunset, and Outer Sunset.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Common gas fireplace repairs include thermocouple and thermopile replacement, pilot assembly cleaning or replacement, gas valve diagnosis, and burner cleaning. We also address glass panel issues, intermittent flames, and problems with electronic ignition systems. If a component needs full replacement, we explain that clearly before any work begins.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Smoke, Draft, Damper, and Firebox Issues
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Draft problems in San Francisco homes sometimes trace back to building pressure rather than the fireplace itself. Row houses and attached Victorians that have been renovated for energy efficiency can develop negative pressure that overwhelms chimney draft — particularly when multiple ventilation appliances are running simultaneously. We assess building pressure as part of a smoke problem diagnosis.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For damper issues, a top-mounted{" "}
                  <Link href="/services/chimney-damper-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    damper replacement
                  </Link>{" "}
                  is often the best long-term solution for San Francisco homes — it seals at the top of the flue rather than inside the smoke chamber, preventing the coastal moisture that corrodes conventional throat dampers from reaching the metal components.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Fireplace giving you trouble?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Describe what is happening when you request a free estimate — we will come prepared with the right approach.
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
                    { name: "San Francisco service area", href: "/areas/san-francisco/" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors">
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm heading="Get a Free Estimate" subheading="Fireplace repair in San Francisco. We respond within 2 business hours." dark={false} />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in San Francisco</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/san-francisco/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/san-francisco/chimney-repair/" },
                    { name: "Chimney Sweep", href: "/areas/san-francisco/chimney-sweep/" },
                    { name: "Dryer Vent Cleaning", href: "/areas/san-francisco/dryer-vent-cleaning/" },
                    { name: "All San Francisco Services", href: "/areas/san-francisco/" },
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

      <FAQSection faqs={FAQS} heading="Fireplace Repair San Francisco — FAQ" addSchema={false} />
      <CTABanner heading="Schedule fireplace repair in San Francisco" />
    </>
  );
}
