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
  title: "Chimney Repair Fresno | Brick, Leak & Masonry Repair",
  description:
    "Chimney repair in Fresno for cracked brick, chimney leaks, damaged mortar, crown problems, flashing issues, and fireplace draft concerns. Central Valley specialists.",
  alternates: { canonical: "/areas/fresno/chimney-repair/" },
  openGraph: {
    title: "Chimney Repair Fresno | Brick, Leak & Masonry Repair",
    description:
      "Chimney repair in Fresno for cracked brick, chimney leaks, damaged mortar, crown problems, flashing issues, and fireplace draft concerns.",
    url: `${SITE.baseUrl}/areas/fresno/chimney-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Repair Fresno | Brick, Leak & Masonry Repair",
    description: "Chimney repair in Fresno — brick, mortar, crown, flashing, thermal cycling damage. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What are the most common chimney repairs in Fresno?",
    a: "Mortar joint repointing is the most frequent repair in Fresno&apos;s older neighborhoods — the extreme temperature range between summer highs above 105°F and winter freezing accelerates mortar deterioration faster than in coastal cities. Chimney crown repair or replacement, cap installation, and flashing repair are also common. Tule fog season introduces persistent moisture that infiltrates any existing cracks, so early repair matters more here than in drier climates.",
  },
  {
    q: "Can cracked chimney bricks cause leaks?",
    a: "Yes. Spalled or cracked bricks create pathways for water infiltration. In Fresno, this most often happens in a cycle: thermal stress opens a small crack, Tule fog moisture enters and saturates the masonry, and the next freeze-thaw cycle expands the crack further. Left unaddressed, brick damage progresses from surface spalling to structural weakening of the chimney stack.",
  },
  {
    q: "What causes water damage around a chimney in Fresno?",
    a: "The most common sources are a failed chimney crown, deteriorated or improperly installed flashing at the roofline, open mortar joints in the chimney stack, and a missing or damaged cap that allows rain directly into the flue. In Fresno, winter rainfall combined with Tule fog moisture means that any unprotected opening will eventually allow water into the chimney structure.",
  },
  {
    q: "Should I repair or rebuild my chimney?",
    a: "Most Fresno chimney problems — deteriorated mortar, a cracked crown, flashing failure, and minor brick damage — fall into the repair category. Rebuilding is typically warranted only when the chimney stack has tilted or shifted, when brick damage has progressed beyond what can be addressed through patching and repointing, or when the firebox has structural damage that affects the full system. We provide honest assessments of what actually needs repair versus what can be monitored.",
  },
  {
    q: "How do I know if my chimney flashing is leaking?",
    a: "Water stains on the ceiling or wall near the chimney, water in the firebox after rain, and rust staining on the interior chimney breast are all indicators of a flashing problem. The flashing itself is the metal junction between the chimney and the roof surface — when it lifts, cracks, or loses its sealant, every rain event allows water into the roof assembly. A visual inspection from the roof or attic can usually confirm the source.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Repair Fresno",
  serviceType: "Chimney Repair",
  description: "Chimney repair in Fresno for cracked brick, chimney leaks, damaged mortar, crown problems, and flashing issues.",
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

export default function ChimneyRepairFresnoPage() {
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
            { label: "Chimney Repair" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Technician sealing chimney flashing and repairing a chimney leak on a Fresno home" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Fresno
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Repair in Fresno, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Brick and mortar repair, chimney leak diagnosis, crown replacement, and flashing repair for Fresno homes — addressing damage from the Central Valley&apos;s extreme thermal cycling and seasonal moisture.
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
                  Fresno chimneys age faster than those in most California cities. The temperature range between a July afternoon above 105°F and a January night below freezing represents a thermal swing of 120°F or more — and every degree of that range drives expansion and contraction through brick, mortar, and metal. Over years and decades, this cycling is the primary cause of the mortar joint deterioration and crown cracking that Fresno homeowners encounter.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Starting with a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">chimney inspection</Link>{" "}
                  before any repair work ensures the actual extent of damage is understood. Treating a visible symptom while missing an underlying cause is the most common reason Fresno homeowners encounter the same problem again within a few years.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Common Chimney Repair Issues in Fresno</h2>
                <ul className="space-y-3">
                  {[
                    { title: "Mortar joint repointing", desc: "Soft or recessed mortar in Fresno&apos;s older brick chimneys — Tower District, Fig Garden, Woodward Park — is a direct result of thermal cycling over decades. Repointing before bricks spall keeps repair costs manageable." },
                    { title: "Chimney crown repair or replacement", desc: "Crowns crack from thermal stress and allow water to enter the chimney structure during Fresno&apos;s winter rains. A damaged crown is one of the highest-priority repairs for preventing structural water damage." },
                    { title: "Chimney flashing repair", desc: "Flashing at the roof-chimney junction is the most common source of interior water damage. Lifted or cracked flashing allows every rain event to deposit water into the roof assembly and ceiling framing." },
                    { title: "Chimney cap installation or replacement", desc: "A missing or damaged cap allows rain, birds, and debris directly into the flue. Without a cap, Tule fog moisture also enters the flue continuously throughout the winter season." },
                    { title: "Chimney liner repair or relining", desc: "Older clay tile liners crack under years of thermal cycling. Stainless relining resolves draft, safety, and code compliance issues that a compromised clay liner creates." },
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
                  A chimney that shows visible mortar deterioration on the exterior may also have liner cracks or smoke chamber damage that are not visible without a camera inspection. Repairing only what is visible from the outside, while leaving internal damage unaddressed, typically results in the same problem recurring — or a different problem appearing shortly after.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For Fresno homes that have not had a professional inspection in more than two years — particularly homes built before 1985 with original clay tile liners — a Level 2 camera inspection is the appropriate starting point before any structural repair work begins.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Noticed damage on your chimney?</p>
                <p className="text-gray-300 text-sm mb-4">Describe what you see — cracked mortar, a leak stain, crown damage — when requesting an estimate.</p>
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
              <LeadForm heading="Get a Free Estimate" subheading="Chimney repair in Fresno. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Fresno</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/fresno/chimney-cleaning/" },
                    { name: "Chimney Sweep", href: "/areas/fresno/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/fresno/fireplace-repair/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Repair Fresno — FAQ" addSchema={false} />
      <CTABanner heading="Schedule chimney repair in Fresno" />
    </>
  );
}
