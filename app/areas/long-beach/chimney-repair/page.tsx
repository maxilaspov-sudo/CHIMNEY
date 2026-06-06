import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/chimney-repair.jpg";

export const metadata: Metadata = {
  title: "Chimney Repair Long Beach | Brick, Leak & Masonry Repair",
  description:
    "Chimney repair in Long Beach for cracked brick, chimney leaks, damaged mortar, crown problems, flashing issues, and salt air corrosion. Marine environment specialists.",
  alternates: { canonical: "/areas/long-beach/chimney-repair/" },
  openGraph: {
    title: "Chimney Repair Long Beach | Brick, Leak & Masonry Repair",
    description:
      "Chimney repair in Long Beach for cracked brick, chimney leaks, damaged mortar, crown problems, and flashing issues.",
    url: `${SITE.baseUrl}/areas/long-beach/chimney-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Repair Long Beach | Brick, Leak & Masonry Repair",
    description: "Chimney repair in Long Beach — salt air corrosion, flashing, Craftsman bungalows, masonry. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What are the most common chimney repairs in Long Beach?",
    a: "In Long Beach, the most frequent repairs are related to the coastal environment: corroded or failed chimney caps (standard 304 stainless fails faster here than inland), flashing deterioration at the roofline from salt air exposure, and mortar joint repointing in Craftsman bungalows where original masonry is several decades old. Crown repair or replacement is also common — Long Beach&apos;s marine moisture is persistent enough to find and widen any existing crown crack.",
  },
  {
    q: "Can cracked chimney bricks cause leaks in a Long Beach home?",
    a: "Yes. Cracked bricks create pathways for water infiltration, and in Long Beach the salt in that water accelerates the deterioration of adjacent mortar joints. A small crack that would progress slowly in a dry inland climate progresses faster here because marine moisture cycles through it continuously. Early repair prevents the damage from spreading to surrounding masonry.",
  },
  {
    q: "What causes water damage around a chimney in Long Beach?",
    a: "Failed flashing at the chimney-roof junction is the most common source. In Long Beach, flashing sealant and step flashing joints are under constant stress from the marine moisture cycle — they degrade faster than in drier climates. A cracked chimney crown, open mortar joints, and a missing or damaged cap are the other primary sources. Often more than one is contributing simultaneously.",
  },
  {
    q: "Should I use a marine-grade chimney cap in Long Beach?",
    a: "Yes. Standard 304 stainless chimney caps are rated for approximately 20+ years inland, but in Long Beach the marine environment — particularly within three miles of the port or ocean — shortens that to 8–12 years. Marine-grade 316L stainless is the correct material for Long Beach coastal properties. It costs more upfront but outperforms standard caps significantly in this environment.",
  },
  {
    q: "How do I know if my chimney flashing is leaking?",
    a: "Water stains on the ceiling or wall adjacent to the chimney, water inside the firebox after rain, or rust staining on the chimney breast are all indicators. In Long Beach, roofline flashing is the highest-priority maintenance item on any chimney — the combination of marine moisture and thermal cycling degrades flashing sealant faster than in most California climates.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Repair Long Beach",
  serviceType: "Chimney Repair",
  description: "Chimney repair in Long Beach for cracked brick, chimney leaks, damaged mortar, crown problems, and flashing issues.",
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

export default function ChimneyRepairLongBeachPage() {
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
            { label: "Chimney Repair" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Technician sealing chimney flashing and repairing a chimney leak on a Long Beach home" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Long Beach
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Repair in Long Beach, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Chimney repair for Long Beach coastal homes — salt air corrosion, flashing failure, marine-grade cap replacement, and masonry repair for Craftsman bungalows and waterfront properties.
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
                  Long Beach chimneys face a specific combination of stressors that most Southern California cities do not share. Marine air from the Pacific and the port deposits salt on metal components continuously — chimney caps, damper assemblies, and any exposed flashing hardware corrode faster here than anywhere else in the region. The Craftsman bungalows that make up a significant portion of Long Beach&apos;s housing stock have original masonry that is now 80-100 years old and requires periodic professional attention.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  A{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">chimney inspection</Link>{" "}
                  before repair ensures all contributing problems are identified. In Long Beach&apos;s marine environment, flashing, cap, crown, and mortar issues often appear together — addressing only the most visible symptom typically means the same leak returns.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Common Chimney Repairs in Long Beach</h2>
                <ul className="space-y-3">
                  {[
                    { title: "Chimney cap replacement — marine grade", desc: "Standard 304 stainless caps last 8–12 years in Long Beach&apos;s marine environment versus 20+ years inland. Marine-grade 316L stainless is the correct specification for coastal Long Beach properties." },
                    { title: "Flashing repair at the roofline", desc: "Salt air and marine moisture cycling through flashing joints accelerate sealant degradation. Flashing repair is one of the most common chimney repairs in Long Beach and one of the most important for preventing interior water damage." },
                    { title: "Chimney crown repair or replacement", desc: "Marine moisture finds and expands any existing crown crack. A damaged crown in Long Beach allows persistent moisture infiltration throughout the year, not just during rain events." },
                    { title: "Mortar joint repointing", desc: "Long Beach Craftsman bungalows with original masonry commonly need repointing. Salt-laden moisture infiltrating open mortar joints accelerates both mortar and brick deterioration." },
                    { title: "Damper corrosion repair or replacement", desc: "Cast iron and standard steel damper assemblies corrode faster in coastal environments. A top-mounted stainless damper is often the right long-term solution for Long Beach properties." },
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
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Why Inspection Should Come Before Repair</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Long Beach chimney leaks almost never have a single source. Marine moisture finds every available opening — a repair that addresses the flashing while leaving the crown cracked, or replaces the cap while leaving the mortar open, will result in the same leak continuing through a different pathway. Starting with a full inspection ensures the repair scope addresses all active water entry points.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For recently purchased Long Beach homes, a{" "}
                  <Link href="/services/chimney-leak-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">chimney leak repair</Link>{" "}
                  visit that includes a Level 2 camera inspection is the right starting point — prior maintenance history is often unknown, and the coastal environment means damage can develop faster than a typical California home.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Long Beach coastal chimney repair</p>
                <p className="text-gray-300 text-sm mb-4">Describe what you see — a leak stain, corroded cap, damaged flashing — when requesting an estimate. We bring the right materials for marine environments.</p>
                <Link href="/contact/" className="btn-primary inline-block">Request Free Estimate</Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Chimney Repair (All California)", href: "/services/chimney-repair/" },
                    { name: "Chimney Leak Repair", href: "/services/chimney-leak-repair/" },
                    { name: "Chimney Masonry Repair", href: "/services/chimney-masonry-repair/" },
                    { name: "Chimney Crown Repair", href: "/services/chimney-crown-repair/" },
                    { name: "Chimney Flashing Repair", href: "/services/chimney-flashing-repair/" },
                    { name: "Chimney Cap Replacement", href: "/services/chimney-cap-replacement/" },
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
              <LeadForm heading="Get a Free Estimate" subheading="Chimney repair in Long Beach. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Long Beach</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/long-beach/chimney-cleaning/" },
                    { name: "Chimney Sweep", href: "/areas/long-beach/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/long-beach/fireplace-repair/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Repair Long Beach — FAQ" addSchema={false} />
      <CTABanner heading="Schedule chimney repair in Long Beach" />
    </>
  );
}
