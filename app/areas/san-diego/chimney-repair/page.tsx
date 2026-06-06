import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/Chimney-leak-repair.jpg";

export const metadata: Metadata = {
  title: "Chimney Repair San Diego | Brick, Leak & Masonry Repair",
  description:
    "Chimney repair in San Diego for cracked brick, chimney leaks, damaged mortar, crown problems, flashing issues, and fireplace draft concerns.",
  alternates: { canonical: "/areas/san-diego/chimney-repair/" },
  openGraph: {
    title: "Chimney Repair San Diego | Brick, Leak & Masonry Repair",
    description:
      "Chimney repair in San Diego for cracked brick, chimney leaks, damaged mortar, crown problems, flashing issues, and fireplace draft concerns.",
    url: `${SITE.baseUrl}/areas/san-diego/chimney-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Repair San Diego | Brick, Leak & Masonry Repair",
    description:
      "Chimney repair in San Diego — cracked brick, flashing, crown, and masonry. Licensed technicians. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What are the most common chimney repairs in San Diego?",
    a: "The most frequent repairs we handle in San Diego are mortar joint repointing, chimney crown repair, flashing replacement, and brick repair from spalling. Coastal homes in La Jolla, Del Mar, and Coronado also see a higher rate of chimney cap and damper replacement due to salt air corrosion. In eastern communities like El Cajon and Santee, we encounter more heat-related mortar deterioration from the wide seasonal temperature swings in inland valleys.",
  },
  {
    q: "Can cracked chimney bricks cause leaks?",
    a: "Yes. Spalled or cracked brick allows water to enter the masonry. Once moisture is inside, it expands and contracts with temperature changes — accelerating the damage and eventually working its way through to the chimney interior. In San Diego, this is most visible on south- and west-facing chimneys that take direct sun exposure through the dry season and then face winter rain.",
  },
  {
    q: "What causes water damage around a chimney?",
    a: "The most common sources are a cracked chimney crown, damaged or improperly installed flashing where the chimney meets the roofline, a missing or undersized chimney cap, and porous masonry that absorbs rainwater directly. In practice, more than one of these is usually present at the same time. San Diego's dry climate can mask water intrusion for years because the damage dries quickly — but it accumulates.",
  },
  {
    q: "Should I repair or rebuild my chimney?",
    a: "Most San Diego chimneys can be repaired rather than rebuilt. A full rebuild is necessary when the masonry is structurally unsound, the chimney has shifted noticeably from vertical, or the damage is too widespread to address with targeted repairs. The only way to know for certain is a proper inspection — and many homeowners who come to us expecting a rebuild find that targeted repointing and crown repair is all that is needed.",
  },
  {
    q: "How do I know if my chimney flashing is leaking?",
    a: "Water stains on the ceiling near the chimney, damp or discolored areas on walls adjacent to the fireplace, and visible rust or mineral deposits where the chimney meets the roofline are the clearest signs. Flashing leaks are often mistaken for roof leaks — a targeted inspection of the joint between the chimney and roof is needed to confirm the source.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Repair San Diego",
  serviceType: "Chimney Repair",
  description:
    "Chimney repair in San Diego for cracked brick, chimney leaks, damaged mortar, crown problems, flashing issues, and fireplace draft concerns.",
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

export default function ChimneyRepairSanDiegoPage() {
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
              { label: "Chimney Repair" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Technician sealing chimney flashing and repairing a chimney leak on a San Diego home"
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
              Chimney Repair in San Diego, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Brick repair, mortar repointing, flashing replacement, crown repair, and chimney leak repair for San Diego homes — targeted at the actual source, not just the visible symptom.
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
                  Chimney repair in San Diego covers a wide range — from routine mortar repointing on an older Mission Hills bungalow to flashing replacement after winter rain damage in a newer Eastlake home. Getting the repair right starts with identifying the actual source of the problem, which is rarely the first visible sign. A crack in the chimney crown, for example, often leads to water entering the masonry, which shows up months later as water in the firebox — but treating the firebox without repairing the crown means the problem returns.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We recommend starting with a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  before any repair work. An inspection identifies what is actually failing so the repair scope reflects the real problem, not a guess based on surface appearance.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Common Chimney Repair Issues in San Diego
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  San Diego chimneys face a specific combination of environmental stresses. Coastal properties in La Jolla, Del Mar, Pacific Beach, and Coronado experience accelerated corrosion of metal components — chimney caps, damper plates, and flashing hardware deteriorate faster in marine air than in inland areas. Caps that last 15 years in Escondido may need replacement in 8 to 10 years near the ocean.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Inland valley homes in El Cajon, Santee, and Lakeside deal with a wide temperature range — summer highs regularly exceed 100°F while nights can drop sharply in winter. This thermal cycling stresses mortar joints more aggressively than the moderate coastal climate, and chimneys in these areas often need repointing sooner than expected. The same communities sit in fire-hazard zones, which adds urgency to keeping chimney flues clean and structurally sound.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Older San Diego neighborhoods — North Park, South Park, Kensington, Normal Heights — have a high concentration of Craftsman and Spanish Colonial homes with original brick chimneys built in the 1920s through 1950s. These have not been significantly earthquake-stressed in the same way as Los Angeles, but decades of wet-dry cycles have taken a steady toll on mortar joints and crown surfaces.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Signs Your Chimney Needs Repair
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Efflorescence — white staining on brick",
                      desc: "White mineral deposits on the chimney face are left behind as water moves through masonry and evaporates. It means water is penetrating the brick or mortar joints.",
                    },
                    {
                      title: "Crumbling or recessed mortar joints",
                      desc: "Mortar that can be scraped out easily, or joints that are recessed more than a quarter inch, need repointing before water accelerates the deterioration.",
                    },
                    {
                      title: "Spalled brick faces",
                      desc: "When the outer face of a brick breaks off or flakes away, the exposed core absorbs water much faster than finished brick. Spalling progresses quickly once it starts.",
                    },
                    {
                      title: "Water in the firebox or ceiling stains",
                      desc: "Water appearing inside the firebox after rain, or damp staining on ceilings near the chimney, are clear signs of an active leak somewhere in the chimney system.",
                    },
                    {
                      title: "Rust on the damper or firebox components",
                      desc: "Rust inside the firebox means water has been entering the system. The damper plate, smoke shelf, and firebox floor should all be checked when rust appears.",
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
                  Chimney Leaks, Masonry, Crowns, and Flashing
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Each part of the chimney system that can fail requires a different repair approach. A{" "}
                  <Link href="/services/chimney-leak-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney leak
                  </Link>{" "}
                  coming from damaged flashing at the roofline is a sheet metal and sealant repair. A cracked{" "}
                  <Link href="/services/chimney-crown-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney crown
                  </Link>{" "}
                  requires a concrete repair that rebuilds the correct water-shedding profile — not just patching the visible crack. Porous brick needs a vapor-permeable waterproofing sealer after repointing, not paint or a standard sealant that traps moisture inside the masonry.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For{" "}
                  <Link href="/services/chimney-masonry-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    masonry repair
                  </Link>
                  , we match Type S mortar to the existing joint profile. When brick replacement is needed, we source materials locally and bring samples before work begins. The repair should be functionally sound and visually consistent with the existing chimney — not visibly patched.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Why Inspection Should Come Before Repair
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A repair estimate based on what is visible from street level or the rooftop can miss what is happening inside the flue. Video camera inspection maps liner cracks, joint separations, and any structural defects before we set a repair scope. In practice, this protects homeowners from paying for repairs in the wrong location.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  In San Diego&apos;s fire-risk eastern communities, we particularly recommend camera inspection for any home where the fireplace has not been professionally evaluated in more than three years. The liner condition determines whether the fireplace is safe to use — and that cannot be assessed from the firebox opening alone.
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
                subheading="Chimney repair in San Diego. We respond within 2 business hours."
                dark={false}
              />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">
                  More in San Diego
                </h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/san-diego/chimney-cleaning/" },
                    { name: "Chimney Sweep", href: "/areas/san-diego/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/san-diego/fireplace-repair/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Repair San Diego — FAQ" addSchema={false} />
      <CTABanner heading="Schedule chimney repair in San Diego" />
    </>
  );
}
