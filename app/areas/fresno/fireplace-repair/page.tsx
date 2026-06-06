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
  title: "Fireplace Repair Fresno | Gas & Wood Fireplace Service",
  description:
    "Fireplace repair in Fresno for smoke problems, damaged fireboxes, gas fireplace issues, poor draft, broken dampers, and fireplace safety concerns. Free estimate.",
  alternates: { canonical: "/areas/fresno/fireplace-repair/" },
  openGraph: {
    title: "Fireplace Repair Fresno | Gas & Wood Fireplace Service",
    description:
      "Fireplace repair in Fresno for smoke problems, damaged fireboxes, gas fireplace issues, poor draft, broken dampers, and fireplace safety concerns.",
    url: `${SITE.baseUrl}/areas/fresno/fireplace-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fireplace Repair Fresno | Gas & Wood Fireplace Service",
    description: "Fireplace repair in Fresno — gas and wood-burning, smoke issues, cracked firebox, damper repair. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What are common fireplace repair problems in Fresno?",
    a: "The most common fireplace issues in Fresno homes are cracked refractory mortar in the firebox from thermal cycling, gas fireplace ignition failures (particularly in dust-heavy environments where pilot assemblies clog), smoke entering the room during valley inversion events, and deteriorated dampers that no longer seal properly. Fresno&apos;s extreme temperature range stresses fireplace components more than in coastal California climates.",
  },
  {
    q: "Why is smoke coming back into my room?",
    a: "In Fresno, smoke backdraft is sometimes atmospheric — cold inversion events in the Central Valley can reduce or reverse chimney draft on otherwise-functional fireplaces. Structural causes include a blocked flue, a stuck or partially closed damper, smoke chamber deterioration, or a fire built too small to establish draft in a cold flue. We assess both the fireplace condition and environmental factors during a diagnosis visit.",
  },
  {
    q: "Can a cracked firebox be repaired?",
    a: "Yes. Most cracked fireboxes in Fresno homes can be repaired with refractory mortar. Hairline cracks in the mortar joints between firebricks are the most common presentation and are straightforward to address. Larger cracks that affect the firebrick itself, or deterioration that has progressed to the backing material, may require partial or full firebox refacing with new refractory panels.",
  },
  {
    q: "Do you repair gas fireplaces in Fresno?",
    a: "Yes. Gas fireplaces are increasingly common in Fresno because SJVAPCD restrictions have led many homeowners to convert from wood-burning. Common gas fireplace repairs include thermocouple and thermopile replacement, pilot assembly cleaning or replacement, gas valve diagnosis, and burner cleaning. In Fresno&apos;s dusty Central Valley environment, pilot orifices and gas tubes are susceptible to clogging during dry months.",
  },
  {
    q: "Is fireplace repair connected to chimney repair?",
    a: "Often, yes. Smoke problems that present at the fireplace level frequently trace back to the chimney above — a damaged smoke chamber, a cracked liner, or a blocked flue cap. Repairing only the visible symptom in the firebox without assessing the chimney typically means the problem returns. A full system inspection is the correct starting point when the root cause is not obvious.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fireplace Repair Fresno",
  serviceType: "Fireplace Repair",
  description: "Fireplace repair in Fresno for smoke problems, damaged fireboxes, gas fireplace issues, poor draft, and broken dampers.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: { "@type": "PostalAddress", addressLocality: "Fresno", addressRegion: "CA", addressCountry: "US" },
  },
  areaServed: { "@type": "City", name: "Fresno" },
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

export default function FireplaceRepairFresnoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/areas/" },
            { label: "Fresno", href: "/areas/fresno/" },
            { label: "Fireplace Repair" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Technician repairing a gas fireplace insert and burner system in a Fresno home" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Fresno
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Fireplace Repair in Fresno, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Gas and wood-burning fireplace repair for Fresno homes — smoke problems, cracked fireboxes, gas ignition failures, and damper issues diagnosed accurately before the burning season.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact/" className="btn-primary">Request Free Estimate</Link>
              <a href="#estimate-form" className="btn-secondary">Get Online Quote</a>
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
                  Fresno has a mix of older masonry fireplaces in established neighborhoods like Tower District, Fig Garden, and Clovis, alongside newer factory-built and gas fireplace systems in post-1990 construction. Each type has its own common failure modes, and Fresno&apos;s climate adds specific stressors — extreme summer heat cycling metal components and cracking refractory mortar, while winter inversion events create atmospheric pressure that can temporarily defeat draft in an otherwise-healthy chimney.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  A{" "}
                  <Link href="/services/fireplace-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">fireplace inspection</Link>{" "}
                  before the burning season is the most cost-effective way to find problems while they are still minor. Most repair visits take a single day; unchecked problems compound over a season of use.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Common Fireplace Problems in Fresno Homes</h2>
                <ul className="space-y-3">
                  {[
                    { title: "Cracked firebox refractory mortar", desc: "Thermal cycling from Fresno&apos;s extreme temperature range stresses firebox mortar joints over seasons. Hairline cracks that are not repaired eventually allow heat to reach the framing behind the firebox." },
                    { title: "Smoke entering the room", desc: "Both atmospheric and structural causes are common in Fresno. Valley inversion events weaken draft; structural issues (blocked flue, stuck damper, smoke chamber deterioration) also present the same symptom." },
                    { title: "Gas fireplace ignition failure", desc: "Pilot assembly clogging from Central Valley dust is a specific Fresno issue. Thermocouple wear and gas valve problems are also common repair items in gas fireplaces of any age." },
                    { title: "Damper not sealing", desc: "In Fresno&apos;s summer heat, a damper that does not fully close allows hot outside air, insects, and dust into the living space. Many older dampers warp or corrode past the point of forming a reliable seal." },
                    { title: "Factory-built fireplace end-of-life", desc: "Factory-built systems installed in the 1990s in Fresno&apos;s newer neighborhoods are approaching their 30-year design life. Refractory panel replacement and system inspection are standard service items for these units." },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 bg-[#F8FAFC] border border-gray-100 rounded-xl p-4">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" className="shrink-0 mt-1" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                        <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Wood-Burning Fireplace Repair</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Older masonry fireplaces in Fresno&apos;s established neighborhoods are generally repairable rather than requiring replacement. The most common repairs are refractory mortar patching in the firebox, smoke chamber parging to improve draft in fireplaces with original stepped chamber profiles, and damper replacement where the existing assembly can no longer be made to function reliably.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For wood-burning fireplaces converted to gas log sets, we also check that the conversion was done correctly — adequate combustion air, proper log positioning for the specific burner, and a liner suitable for gas appliance flue gases. Conversions done without proper assessment sometimes create ongoing odor or efficiency problems.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Gas Fireplace Repair</h2>
                <p className="text-gray-600 leading-relaxed">
                  Gas fireplaces in Fresno require annual inspection regardless of SJVAPCD restrictions, because the burner assembly, ignition system, and liner still need to be clear of debris and functioning correctly. Common{" "}
                  <Link href="/services/gas-fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">gas fireplace repairs</Link>{" "}
                  include thermocouple replacement, pilot assembly service, gas valve diagnosis, and cleaning of burner ports. In Fresno, the dust environment means pilot assemblies benefit from cleaning even on fireplaces that have not been actively burning.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Fireplace not working right?</p>
                <p className="text-gray-300 text-sm mb-4">Describe the specific symptom — smoke, ignition issue, smell, or visible damage — when requesting an estimate.</p>
                <Link href="/contact/" className="btn-primary inline-block">Request Free Estimate</Link>
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
                    { name: "Fresno service area", href: "/areas/fresno/" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors">
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm heading="Get a Free Estimate" subheading="Fireplace repair in Fresno. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Fresno</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/fresno/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/fresno/chimney-repair/" },
                    { name: "Chimney Sweep", href: "/areas/fresno/chimney-sweep/" },
                    { name: "Dryer Vent Cleaning", href: "/areas/fresno/dryer-vent-cleaning/" },
                    { name: "All Fresno Services", href: "/areas/fresno/" },
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
                <a href={`mailto:${SITE.email}`} className="text-orange-400 text-sm font-bold hover:text-orange-300 transition-colors break-all">{SITE.email}</a>
                <p className="text-xs text-gray-400 mt-2">We reply within one business day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} heading="Fireplace Repair Fresno — FAQ" addSchema={false} />
      <CTABanner heading="Schedule fireplace repair in Fresno" />
    </>
  );
}
