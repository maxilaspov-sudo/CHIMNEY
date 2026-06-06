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
  title: "Chimney Repair San Jose | Brick, Leak & Masonry Repair",
  description:
    "Chimney repair in San Jose for cracked brick, chimney leaks, damaged mortar, crown problems, flashing issues, and fireplace draft concerns.",
  alternates: { canonical: "/areas/san-jose/chimney-repair/" },
  openGraph: {
    title: "Chimney Repair San Jose | Brick, Leak & Masonry Repair",
    description:
      "Chimney repair in San Jose for cracked brick, chimney leaks, damaged mortar, crown problems, flashing issues, and fireplace draft concerns.",
    url: `${SITE.baseUrl}/areas/san-jose/chimney-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Repair San Jose | Brick, Leak & Masonry Repair",
    description:
      "Chimney repair in San Jose — cracked brick, flashing, crown, and masonry. Licensed technicians. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What are the most common chimney repairs in San Jose?",
    a: "In San Jose, the most frequent repairs are mortar joint repointing, chimney crown repair, flashing replacement, and liner inspection or repair stemming from the 1989 Loma Prieta earthquake. Many South Bay homes built before 1990 have flue liners that were cracked by the earthquake and never properly repaired — they may have been patched or simply ignored when the home changed ownership.",
  },
  {
    q: "Can cracked chimney bricks cause leaks?",
    a: "Yes. Spalled or cracked brick allows water to penetrate the masonry. In San Jose, winter rain seasons are the main driver — water enters through porous or cracked masonry, expands and contracts with temperature changes, and progressively worsens the damage. The result is often water in the firebox, damp walls near the fireplace, or ceiling stains that show up months after the initial entry point formed.",
  },
  {
    q: "What causes water damage around a chimney?",
    a: "The most common sources are a cracked chimney crown, damaged or incorrectly installed flashing at the roofline, a missing or undersized chimney cap, and porous brick that absorbs rainwater. San Jose's rainy winters — typically November through March — provide sustained moisture loading that reveals any weak point in the chimney system.",
  },
  {
    q: "Should I repair or rebuild my chimney?",
    a: "Most San Jose chimneys can be repaired rather than fully rebuilt. A full rebuild is warranted when the masonry is structurally unsound or when damage is too widespread for targeted repairs. An inspection — ideally with a camera scan of the flue — is the only reliable way to determine which situation you are in. We do not recommend a full rebuild without first confirming it is necessary.",
  },
  {
    q: "How do I know if my chimney flashing is leaking?",
    a: "Signs include water stains on the ceiling near the chimney after rain, damp areas on interior walls adjacent to the fireplace, and visible rust or mineral staining where the chimney meets the roofline. Flashing leaks are commonly misidentified as roof leaks — and a targeted inspection of the chimney-to-roof joint is necessary to confirm the source.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Repair San Jose",
  serviceType: "Chimney Repair",
  description:
    "Chimney repair in San Jose for cracked brick, chimney leaks, damaged mortar, crown problems, flashing issues, and fireplace draft concerns.",
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

export default function ChimneyRepairSanJosePage() {
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
              { label: "Chimney Repair" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Technician sealing chimney flashing and repairing a chimney leak on a San Jose home"
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
              Chimney Repair in San Jose, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Mortar repointing, flashing replacement, crown repair, and chimney leak repair for San Jose homes — identifying the actual source of the problem before any work begins.
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
                  Chimney repair in San Jose frequently starts with a history question: has the fireplace been inspected since the 1989 Loma Prieta earthquake? The earthquake cracked thousands of flue liners throughout Santa Clara County, and a significant number were never properly repaired — they were cosmetically patched or simply overlooked as homes changed hands over the following decades. Getting a chimney repair right means knowing what condition the liner is in before addressing visible exterior damage.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We recommend beginning with a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  before any repair work. An inspection maps the actual failure points so the repair scope reflects the real problem — not what is visible from the rooftop.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Common Chimney Repair Issues in San Jose
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  South Bay chimney repairs tend to cluster around three primary causes. The first is earthquake-related liner damage — cracks from the 1989 Loma Prieta event that were never addressed. The second is standard masonry aging: mortar joint deterioration in homes built in the 1950s through 1970s is common across Willow Glen, Almaden Valley, Berryessa, and Rose Garden.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The third cause is water intrusion from failed flashing or damaged chimney crowns. San Jose receives meaningful winter rainfall — typically 12 to 14 inches per year — and any gap in the flashing or crown provides a path for water into the masonry. Once moisture is inside the chimney structure, damage accelerates quickly through the wet-dry cycling of the rainy season.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Townhomes and single-family homes in newer San Jose developments built in the 1990s have their own set of issues: factory-built fireplaces with proprietary liner systems that require manufacturer-authorized repair, and aluminum flashing that corrodes faster than copper or steel alternatives.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Signs Your Chimney Needs Repair
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      title: "White staining on brick (efflorescence)",
                      desc: "Mineral deposits left on the chimney face when water moves through masonry and evaporates. Indicates active water penetration through brick or mortar joints.",
                    },
                    {
                      title: "Crumbling or recessed mortar joints",
                      desc: "Mortar that can be scraped out easily or that is recessed more than a quarter inch needs repointing before rain accelerates the damage further.",
                    },
                    {
                      title: "Spalled brick faces",
                      desc: "When the face of a brick breaks off or flakes away, the exposed core absorbs water much faster. Spalling accelerates once it starts.",
                    },
                    {
                      title: "Water in the firebox after rain",
                      desc: "Water appearing inside the firebox, or ceiling stains near the chimney, indicate an active leak entering somewhere in the chimney system.",
                    },
                    {
                      title: "Rust on the damper or firebox hardware",
                      desc: "Rust inside the firebox confirms that water has been entering the system. The smoke shelf, damper, and firebox floor should all be checked.",
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
                  Chimney Leaks, Masonry, Crowns, and Flashing
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Each component that can leak or deteriorate requires a different repair approach. A{" "}
                  <Link href="/services/chimney-leak-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney leak
                  </Link>{" "}
                  from failed flashing is a sheet metal and sealant repair. A cracked{" "}
                  <Link href="/services/chimney-crown-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney crown
                  </Link>{" "}
                  needs to be reshaped and rebuilt — not just patched — so it properly sheds water away from the masonry. Porous brick should receive a vapor-permeable waterproofing sealer after repointing, not paint or a film sealer that traps moisture inside the brick.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For{" "}
                  <Link href="/services/chimney-masonry-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    masonry repair
                  </Link>
                  , we match Type S mortar to the existing joint profile and color. When brick replacement is needed, we source regionally and bring samples for approval before work begins.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Why Inspection Should Come Before Repair
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A repair estimate based on exterior appearance can miss what is happening inside the flue. Video camera inspection maps every crack, joint separation, and liner defect before we set a repair scope. This is particularly important in San Jose, where Loma Prieta damage may be present in the liner even when the exterior masonry looks intact.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If you have had an unusually smoky fire, or if the fireplace was used by previous owners without documented maintenance, an inspection before repair is not optional — it is the only way to know what you are actually dealing with.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Seeing damage or water near your chimney?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and describe what you are observing — we will recommend the right starting point.
                </p>
                <Link href="/contact/" className="btn-primary inline-block">
                  Request Free Estimate
                </Link>
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
              <LeadForm heading="Get a Free Estimate" subheading="Chimney repair in San Jose. We respond within 2 business hours." dark={false} />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in San Jose</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/san-jose/chimney-cleaning/" },
                    { name: "Chimney Sweep", href: "/areas/san-jose/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/san-jose/fireplace-repair/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Repair San Jose — FAQ" addSchema={false} />
      <CTABanner heading="Schedule chimney repair in San Jose" />
    </>
  );
}
