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
  title: "Fireplace Repair San Diego | Gas & Wood Fireplace Service",
  description:
    "Fireplace repair in San Diego for smoke problems, damaged fireboxes, gas fireplace issues, poor draft, broken dampers, and fireplace safety concerns.",
  alternates: { canonical: "/areas/san-diego/fireplace-repair/" },
  openGraph: {
    title: "Fireplace Repair San Diego | Gas & Wood Fireplace Service",
    description:
      "Fireplace repair in San Diego for smoke problems, damaged fireboxes, gas fireplace issues, poor draft, broken dampers, and fireplace safety concerns.",
    url: `${SITE.baseUrl}/areas/san-diego/fireplace-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fireplace Repair San Diego | Gas & Wood Fireplace Service",
    description:
      "Fireplace repair in San Diego — gas and wood-burning fireplaces, smoke issues, broken dampers, cracked fireboxes. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What are common fireplace repair problems in San Diego?",
    a: "The most frequent issues we handle in San Diego include smoke backing into the room due to draft problems, cracked fireboxes in older wood-burning fireplaces, broken or corroded damper assemblies, and gas fireplace ignition failures. Coastal properties also see more corrosion-related failures — salt air is particularly hard on gas valve components, pilot assemblies, and the metal parts of wood-burning fireplaces.",
  },
  {
    q: "Why is smoke coming back into my room?",
    a: "Smoke backing into the room is a draft problem. The most common causes are a closed or stuck damper, a blocked flue from debris or nesting material, a chimney that is too short relative to the roofline, or strong negative pressure inside the house pulling smoke back through the opening. In San Diego homes with good weatherization and central HVAC, negative pressure is a more common cause than most homeowners expect. We diagnose the actual cause before recommending a fix.",
  },
  {
    q: "Can a cracked firebox be repaired?",
    a: "Most cracked fireboxes can be repaired rather than replaced. Small cracks in the refractory panels of a factory-built firebox are typically addressed by replacing the damaged panels. Cracks in a masonry firebox may need patching with refractory mortar or — if the damage is more extensive — full refacing of the firebox interior. The right repair depends on the type of fireplace and how far the cracks have progressed.",
  },
  {
    q: "Do you repair gas fireplaces?",
    a: "Yes. Common gas fireplace repairs include ignition system replacement, pilot assembly cleaning or replacement, gas valve diagnosis, and thermocouple or thermopile replacement. We also address cosmetic and functional issues like discolored glass, intermittent flames, and malfunctioning remote controls. If a gas component is beyond repair, we provide a clear quote for replacement.",
  },
  {
    q: "Is fireplace repair connected to chimney repair?",
    a: "Often yes. The firebox is the lower portion of the chimney system, and problems in the firebox — cracked refractory, a failing damper, smoke entering the room — are frequently connected to conditions higher in the chimney. A chimney inspection that covers the full system is the most reliable way to identify all the contributing factors before a repair is done. Fixing only the visible problem without checking the chimney above often means the issue returns.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fireplace Repair San Diego",
  serviceType: "Fireplace Repair",
  description:
    "Fireplace repair in San Diego for smoke problems, damaged fireboxes, gas fireplace issues, poor draft, broken dampers, and fireplace safety concerns.",
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

export default function FireplaceRepairSanDiegoPage() {
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
              { label: "Fireplace Repair" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Technician repairing a gas fireplace insert and burner system in a San Diego home"
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
              Fireplace Repair in San Diego, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Gas and wood-burning fireplace repair for San Diego homeowners — smoke issues, draft problems, broken dampers, cracked fireboxes, and gas ignition failures diagnosed and fixed at the source.
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
                  Fireplace problems in San Diego range from straightforward fixes — a stuck damper, a pilot light that will not stay lit — to more involved repairs like cracked firebox panels, smoke backing into the room, or corroded gas components in coastal homes. The right starting point is identifying the actual cause, not just the symptom. Smoke entering the room during a fire, for example, can come from a blocked flue, a pressure imbalance in the home, an open damper that will not seal, or a combination of all three.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  If the fireplace has not been inspected in several years, we recommend a{" "}
                  <Link href="/services/fireplace-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace inspection
                  </Link>{" "}
                  before a targeted repair. An inspection identifies all the contributing factors so the repair scope is accurate from the start.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Common Fireplace Problems in San Diego Homes
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Smoke entering the room",
                      desc: "The most common complaint we receive. Causes include a blocked flue, a stuck damper, inadequate chimney height, or negative air pressure inside a well-sealed home pulling smoke back through the firebox opening.",
                    },
                    {
                      title: "Gas fireplace that will not ignite",
                      desc: "Ignition failures are usually traced to a faulty thermocouple, a clogged pilot tube, a failed igniter, or a gas valve that needs cleaning or replacement.",
                    },
                    {
                      title: "Cracked firebox panels",
                      desc: "Refractory panels inside factory-built fireplaces develop cracks over time from thermal cycling. Cracked panels reduce the insulation between the fire chamber and combustible framing — they should be replaced when damage is visible.",
                    },
                    {
                      title: "Broken or corroded damper",
                      desc: "A damper that will not open, will not close fully, or that has corroded shut is a common issue in San Diego — particularly in coastal homes where salt air accelerates metal deterioration.",
                    },
                    {
                      title: "Persistent fireplace odor",
                      desc: "A smell from an unused fireplace usually means either creosote buildup in the flue, a damper that is not sealing, or outside air drafting down through the chimney. Each has a different fix.",
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
                  Wood-Burning Fireplace Repair
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  San Diego&apos;s older residential neighborhoods — North Park, Kensington, Mission Hills, Normal Heights — have a large stock of original masonry fireplaces built in the 1920s through 1950s. These fireplaces were well-built, but decades of use have taken a toll on the refractory mortar, damper hardware, and smoke chamber surfaces.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Common wood-burning repairs include refractory mortar patching or replacement, damper plate replacement or upgrade to a top-mounted damper, smoke chamber parge coating to improve airflow geometry, and firebox floor repair. For fireplaces that have developed chronic smoke problems despite a clean flue, the smoke chamber shape is often the culprit — and a proper parge coat resolves the issue without a major rebuild.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If you are not sure whether your wood-burning fireplace is safe to use, schedule a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  before the next fire. We will tell you the condition of the firebox and liner and what, if anything, needs to be addressed.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Gas Fireplace Repair
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Gas fireplaces are common in San Diego&apos;s newer construction — particularly in communities developed since the 1990s in areas like Eastlake, Rancho Bernardo, and Scripps Ranch. They require less maintenance than wood-burning fireplaces overall, but they do fail, and the failures are not always obvious.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The most common gas fireplace issues we see in San Diego are pilot lights that will not stay lit (usually a thermocouple or thermopile failure), intermittent flames (often a gas valve or pressure issue), burner assemblies that need cleaning after years of light use, and glass panels that have developed permanent staining from moisture or incomplete combustion.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Coastal homes should have their gas fireplace components inspected every two to three years regardless of use, because salt air degradation of pilot assemblies, gas valves, and igniter components is faster near the ocean than in inland areas.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Smoke, Draft, Damper, and Firebox Issues
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Draft problems are the most misunderstood category of fireplace issues. Smoke entering the room during a fire is not always a fireplace problem — sometimes it is a building pressure problem. Modern San Diego homes with good insulation and sealed construction can create negative pressure that overcomes the chimney draft. Opening a nearby window slightly often reveals whether house pressure is the culprit.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For damper issues, we assess whether repair or replacement is the better option. A cast-iron throat damper that has warped or corroded can sometimes be repaired, but a top-mounted{" "}
                  <Link href="/services/chimney-damper-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    damper replacement
                  </Link>{" "}
                  is often the more durable long-term solution — it also acts as a chimney cap, preventing rain, debris, and animals from entering the flue when the fireplace is not in use.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Fireplace not working right?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Describe what is happening when you request your free estimate — we will come prepared with the right parts and tools.
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
                subheading="Fireplace repair in San Diego. We respond within 2 business hours."
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
                    { name: "Dryer Vent Cleaning", href: "/areas/san-diego/dryer-vent-cleaning/" },
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

      <FAQSection faqs={FAQS} heading="Fireplace Repair San Diego — FAQ" addSchema={false} />
      <CTABanner heading="Schedule fireplace repair in San Diego" />
    </>
  );
}
