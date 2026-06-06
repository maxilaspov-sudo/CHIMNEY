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
  title: "Fireplace Repair San Jose | Gas & Wood Fireplace Service",
  description:
    "Fireplace repair in San Jose for smoke problems, damaged fireboxes, gas fireplace issues, poor draft, broken dampers, and fireplace safety concerns.",
  alternates: { canonical: "/areas/san-jose/fireplace-repair/" },
  openGraph: {
    title: "Fireplace Repair San Jose | Gas & Wood Fireplace Service",
    description:
      "Fireplace repair in San Jose for smoke problems, damaged fireboxes, gas fireplace issues, poor draft, broken dampers, and fireplace safety concerns.",
    url: `${SITE.baseUrl}/areas/san-jose/fireplace-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fireplace Repair San Jose | Gas & Wood Fireplace Service",
    description:
      "Fireplace repair in San Jose — gas and wood-burning fireplaces, smoke issues, broken dampers, cracked fireboxes. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What are common fireplace repair problems in San Jose?",
    a: "The most common issues we see in San Jose are smoke backing into the room during a fire, cracked refractory panels in factory-built fireplaces, corroded or stuck damper assemblies, and gas fireplace ignition failures. In older South Bay homes — particularly in Willow Glen and Rose Garden — masonry fireboxes sometimes have deteriorated refractory mortar that needs patching or replacement before the fireplace is safe to use.",
  },
  {
    q: "Why is smoke coming back into my room?",
    a: "Smoke backing into a room is a draft problem with several possible causes: a blocked flue, a damper that will not open fully, a chimney too short relative to the roofline, or negative pressure inside the home. In well-insulated South Bay homes — particularly newer townhomes and single-family homes in San Jose — negative house pressure is a more common cause than most homeowners expect. We diagnose the actual cause before recommending a fix.",
  },
  {
    q: "Can a cracked firebox be repaired?",
    a: "Most cracked fireboxes can be repaired. In factory-built fireplaces — which are common in San Jose homes built since the 1980s — cracked refractory panels are replaced with manufacturer-specified panels. In masonry fireboxes, cracks can often be patched with refractory mortar, though extensive damage may require refacing the firebox interior. The correct approach depends on the type of fireplace and the extent of the damage.",
  },
  {
    q: "Do you repair gas fireplaces?",
    a: "Yes. Common gas fireplace repairs include replacing ignition systems, cleaning or replacing pilot assemblies, diagnosing gas valve issues, and replacing thermocouples or thermopiles. We also address problems like intermittent flames, discolored glass, and malfunctioning remote controls. If a gas component needs replacement rather than repair, we provide a clear quote before any work begins.",
  },
  {
    q: "Is fireplace repair connected to chimney repair?",
    a: "Often yes. The firebox is the lower part of the chimney system, and problems in the firebox — a cracked refractory wall, a failing damper, smoke entering the room — are frequently related to conditions higher in the flue. A fireplace inspection that covers the full system is the most reliable way to identify all contributing factors before a repair scope is set.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fireplace Repair San Jose",
  serviceType: "Fireplace Repair",
  description:
    "Fireplace repair in San Jose for smoke problems, damaged fireboxes, gas fireplace issues, poor draft, broken dampers, and fireplace safety concerns.",
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

export default function FireplaceRepairSanJosePage() {
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
              { label: "Fireplace Repair" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Technician repairing a gas fireplace insert and burner system in a San Jose home"
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
              Fireplace Repair in San Jose, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Gas and wood-burning fireplace repair for San Jose homeowners — smoke problems, draft issues, broken dampers, cracked fireboxes, and gas ignition failures diagnosed at the source.
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
                  San Jose has a diverse fireplace inventory — original masonry fireplaces in older Willow Glen and Rose Garden homes, factory-built systems in the South Bay housing boom of the 1980s and 1990s, and gas inserts in newer construction throughout Almaden Valley, Evergreen, and Berryessa. Each type has its own failure modes, and the right repair approach depends on what you have and what is actually wrong with it.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  If the fireplace has not been inspected recently, we recommend starting with a{" "}
                  <Link href="/services/fireplace-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace inspection
                  </Link>{" "}
                  before a targeted repair. An inspection identifies all the contributing factors so the repair scope is accurate from the start.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Common Fireplace Problems in San Jose Homes
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Smoke entering the room",
                      desc: "Causes include a blocked flue, a stuck or partially open damper, inadequate chimney height, or negative air pressure in a well-sealed home pulling smoke back through the firebox opening.",
                    },
                    {
                      title: "Gas fireplace that will not ignite",
                      desc: "Ignition failures typically trace to a faulty thermocouple, a clogged pilot tube, a worn igniter, or a gas valve that needs cleaning or replacement.",
                    },
                    {
                      title: "Cracked refractory panels",
                      desc: "Factory-built fireplaces in San Jose homes from the 1980s and 1990s commonly develop cracks in their refractory panels from decades of thermal cycling. Cracked panels reduce the insulation between the fire chamber and the framing.",
                    },
                    {
                      title: "Stuck or corroded damper",
                      desc: "A damper that will not open or close fully is one of the most common fireplace complaints. Cast-iron throat dampers corrode over time, particularly in homes where moisture has been entering the flue.",
                    },
                    {
                      title: "Fireplace odor when not in use",
                      desc: "A persistent smell from an unused fireplace usually indicates creosote in the flue, a damper that is not sealing, or outside air drafting down through the chimney — each with a different fix.",
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
                  Older masonry fireplaces in San Jose neighborhoods like Willow Glen, Rose Garden, and Almaden Valley were well-built but are now showing the age-related wear common to mid-century construction. Refractory mortar deteriorates with thermal cycling, damper hardware corrodes from moisture exposure, and smoke chamber surfaces can develop rough deposits that restrict airflow and create draft problems.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Common wood-burning repairs include refractory mortar patching or panel replacement, damper plate replacement or upgrade to a top-mounted damper, and smoke chamber parge coating to restore smooth geometry and improve draft. If smoke problems persist in an otherwise clean fireplace, the smoke chamber is usually where to look.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Gas Fireplace Repair
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Gas fireplaces are common in San Jose homes built since the mid-1980s. They require less routine maintenance than wood-burning fireplaces, but they do fail — and the failures are not always obvious until the fireplace stops working at the start of a cold stretch.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The most common gas fireplace repairs in the South Bay are thermocouple and thermopile replacement, pilot tube cleaning, gas valve diagnosis, and burner cleaning after extended periods of non-use. We also address glass panel discoloration, intermittent ignition, and issues with remote or wall switch controls. If a component needs full replacement rather than repair, we explain that clearly before any work begins.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Smoke, Draft, Damper, and Firebox Issues
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Draft problems in San Jose homes are sometimes a building pressure issue rather than a chimney problem. Modern energy-efficient homes — particularly newer townhomes and single-family homes in San Jose developments — can create negative pressure that overwhelms chimney draft. Opening a window near the fireplace during operation often reveals whether house pressure is the culprit.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For damper issues, we assess whether repair or replacement is the better long-term option. A top-mounted{" "}
                  <Link href="/services/chimney-damper-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    damper replacement
                  </Link>{" "}
                  is often the more durable solution — it seals at the top of the chimney, preventing rain, debris, and animals from entering the flue when the fireplace is not in use.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Fireplace not working as it should?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Tell us what is happening when you request your free estimate — we will come prepared for the right diagnosis.
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
              <LeadForm heading="Get a Free Estimate" subheading="Fireplace repair in San Jose. We respond within 2 business hours." dark={false} />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in San Jose</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/san-jose/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/san-jose/chimney-repair/" },
                    { name: "Chimney Sweep", href: "/areas/san-jose/chimney-sweep/" },
                    { name: "Dryer Vent Cleaning", href: "/areas/san-jose/dryer-vent-cleaning/" },
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

      <FAQSection faqs={FAQS} heading="Fireplace Repair San Jose — FAQ" addSchema={false} />
      <CTABanner heading="Schedule fireplace repair in San Jose" />
    </>
  );
}
