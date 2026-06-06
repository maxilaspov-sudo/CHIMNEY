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
  title: "Fireplace Repair Long Beach | Gas & Wood Fireplace Service",
  description:
    "Fireplace repair in Long Beach for smoke problems, damaged fireboxes, gas fireplace issues, poor draft, broken dampers, and salt air corrosion concerns.",
  alternates: { canonical: "/areas/long-beach/fireplace-repair/" },
  openGraph: {
    title: "Fireplace Repair Long Beach | Gas & Wood Fireplace Service",
    description:
      "Fireplace repair in Long Beach for smoke problems, damaged fireboxes, gas fireplace issues, poor draft, and broken dampers.",
    url: `${SITE.baseUrl}/areas/long-beach/fireplace-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fireplace Repair Long Beach | Gas & Wood Fireplace Service",
    description: "Fireplace repair in Long Beach — salt air corrosion, Craftsman bungalows, gas fireplace service. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What are common fireplace repair problems in Long Beach homes?",
    a: "In Long Beach, salt air corrosion of gas fireplace components is the most distinctive local issue — gas valve bodies, pilot assemblies, and burner hardware on coastal properties corrode faster than identical equipment inland. Cast iron damper assemblies in Long Beach&apos;s older Craftsman fireplaces are also commonly corroded or warped. Smoke backdraft in homes near the water can sometimes trace to offshore wind patterns affecting chimney draft.",
  },
  {
    q: "Why is smoke coming back into my room?",
    a: "In Long Beach, smoke entering the room has both atmospheric and structural causes. Onshore winds can temporarily overcome chimney draft in fireplaces that are otherwise functioning correctly. Structural causes include a blocked or bird-nested flue (common in chimneys not used all year), a stuck or corroded damper, and smoke chamber deterioration. We assess both the atmospheric conditions and the physical system during a diagnosis visit.",
  },
  {
    q: "Can a cracked firebox be repaired in a Long Beach home?",
    a: "Yes. Cracked refractory mortar joints in the firebox are repaired with refractory-rated material. Long Beach&apos;s Craftsman bungalows often have original masonry fireboxes that are now 80-100 years old — these can typically be repaired and extended rather than replaced, provided the structural condition of the firebox itself is sound.",
  },
  {
    q: "Do you repair gas fireplaces in Long Beach?",
    a: "Yes. Gas fireplace repairs in Long Beach frequently involve salt air corrosion effects: pilot assemblies and thermocouple connections that have corroded more quickly than expected, gas valve bodies showing accelerated wear, and igniter components that have failed prematurely compared to identical equipment in drier inland areas. We account for the coastal environment when assessing expected component lifespans.",
  },
  {
    q: "Is fireplace repair connected to chimney repair?",
    a: "Often, particularly in Long Beach. A smoke problem that presents at the firebox level may trace to the chimney above — a corroded cap that has developed a hole allowing birds in, a blocked flue, or a smoke chamber issue. In Long Beach&apos;s coastal environment, the chimney and fireplace should be assessed together rather than treating each in isolation.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fireplace Repair Long Beach",
  serviceType: "Fireplace Repair",
  description: "Fireplace repair in Long Beach for smoke problems, damaged fireboxes, gas fireplace issues, and broken dampers.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: { "@type": "PostalAddress", addressLocality: "Long Beach", addressRegion: "CA", addressCountry: "US" },
  },
  areaServed: { "@type": "City", name: "Long Beach" },
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

export default function FireplaceRepairLongBeachPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/areas/" },
            { label: "Long Beach", href: "/areas/long-beach/" },
            { label: "Fireplace Repair" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Technician repairing a gas fireplace insert and burner system in a Long Beach home" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Long Beach
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Fireplace Repair in Long Beach, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Gas and wood-burning fireplace repair for Long Beach homes — salt air corrosion, ornamental Craftsman brick fireplaces, gas ignition issues, and coastal draft problems.
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
                  Long Beach has two distinct fireplace types in substantial numbers: the original ornamental brick fireplaces in Craftsman bungalows throughout Belmont Shore, Bixby Knolls, and Signal Hill, and gas fireplace systems in post-war and modern construction. Both are affected by the coastal environment, though in different ways. Masonry fireplaces contend with salt-laden moisture infiltrating mortar joints and damper assemblies. Gas fireplaces face accelerated corrosion of metal components — pilot assemblies, gas valve bodies, and burner hardware all degrade faster near the ocean.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  A{" "}
                  <Link href="/services/fireplace-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">fireplace inspection</Link>{" "}
                  is the right first step for any Long Beach fireplace that has not been recently serviced. The coastal environment means issues can develop between seasons in ways that are not visible from the firebox.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Common Fireplace Problems in Long Beach</h2>
                <ul className="space-y-3">
                  {[
                    { title: "Corroded damper assemblies", desc: "Salt air accelerates corrosion of cast iron and standard steel dampers in Long Beach homes. A damper that no longer seals or will not open fully needs replacement — a top-mounted stainless damper is the right long-term solution in a coastal environment." },
                    { title: "Gas fireplace component corrosion", desc: "Pilot assemblies, thermocouple connections, and gas valve bodies on Long Beach coastal properties deteriorate faster than identical equipment in drier inland areas. Annual inspection catches this before it causes ignition failure." },
                    { title: "Smoke entering the room", desc: "Long Beach&apos;s onshore winds sometimes push against chimney draft. Structural causes — blocked flue, stuck damper, smoke chamber deterioration — also produce the same symptom. We identify the actual cause before recommending a repair." },
                    { title: "Craftsman firebox refractory wear", desc: "Original refractory mortar in Long Beach&apos;s 80-100 year old Craftsman fireplaces shows wear from decades of use and marine moisture cycling. Refractory patching restores the firebox without requiring full replacement." },
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
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Gas Fireplace Repair in Long Beach</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <Link href="/services/gas-fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">Gas fireplace repairs</Link>{" "}
                  in Long Beach commonly involve components that have corroded faster than expected. A thermocouple that would last 5-7 years inland may fail in 3-4 years in a coastal environment. We account for this when assessing what to replace versus monitor.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Gas fireplaces that have not been used in a season or two should be inspected before lighting, particularly in Long Beach. Spiders and insects nest in gas burner ports and pilot orifices in fireplaces that sit unused for months — a common issue in mild-climate coastal homes where the fireplace is used less than in colder inland cities.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Fireplace not working right?</p>
                <p className="text-gray-300 text-sm mb-4">Describe the problem — corrosion, ignition issue, smoke, damper — when requesting an estimate. We serve Belmont Shore, Naples, Signal Hill, Bixby Knolls, and all Long Beach neighborhoods.</p>
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
                    { name: "Long Beach service area", href: "/areas/long-beach/" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors">
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm heading="Get a Free Estimate" subheading="Fireplace repair in Long Beach. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Long Beach</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/long-beach/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/long-beach/chimney-repair/" },
                    { name: "Chimney Sweep", href: "/areas/long-beach/chimney-sweep/" },
                    { name: "Dryer Vent Cleaning", href: "/areas/long-beach/dryer-vent-cleaning/" },
                    { name: "All Long Beach Services", href: "/areas/long-beach/" },
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

      <FAQSection faqs={FAQS} heading="Fireplace Repair Long Beach — FAQ" addSchema={false} />
      <CTABanner heading="Schedule fireplace repair in Long Beach" />
    </>
  );
}
