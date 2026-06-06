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
  title: "Chimney Repair San Francisco | Brick, Leak & Masonry Repair",
  description:
    "Chimney repair in San Francisco for cracked brick, chimney leaks, damaged mortar, crown problems, flashing issues, and fireplace draft concerns.",
  alternates: { canonical: "/areas/san-francisco/chimney-repair/" },
  openGraph: {
    title: "Chimney Repair San Francisco | Brick, Leak & Masonry Repair",
    description:
      "Chimney repair in San Francisco for cracked brick, chimney leaks, damaged mortar, crown problems, flashing issues, and fireplace draft concerns.",
    url: `${SITE.baseUrl}/areas/san-francisco/chimney-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Repair San Francisco | Brick, Leak & Masonry Repair",
    description:
      "Chimney repair in San Francisco — cracked brick, flashing, crown, and masonry. Licensed technicians. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What are the most common chimney repairs in San Francisco?",
    a: "In San Francisco, we most frequently handle stainless liner inspection and replacement (many installed post-1989 are now past their service life), mortar joint repointing on pre-war Victorian and Edwardian chimneys, chimney crown repair, and flashing replacement. Coastal moisture accelerates mortar joint deterioration faster in San Francisco than in drier inland cities, so repointing timelines can be shorter than homeowners expect.",
  },
  {
    q: "Can cracked chimney bricks cause leaks?",
    a: "Yes. Spalled or cracked brick allows moisture to penetrate — and in San Francisco, persistent coastal fog and rain provide sustained moisture loading that a compromised chimney face cannot resist. Water enters through cracked masonry, works through the chimney wall, and can appear as ceiling stains, damp areas near the firebox, or water on the smoke shelf after rain.",
  },
  {
    q: "What causes water damage around a chimney?",
    a: "In San Francisco, the causes are the same as elsewhere — cracked crown, failed flashing, missing chimney cap, porous masonry — but the city's high moisture environment means any one of these entry points produces damage faster than in a drier climate. Chimneys on homes in the Outer Richmond, Outer Sunset, and other fog-belt neighborhoods are particularly susceptible to accelerated mortar erosion.",
  },
  {
    q: "Should I repair or rebuild my chimney?",
    a: "Most San Francisco chimneys can be repaired rather than rebuilt. Victorian and Edwardian brick chimneys are well-built masonry structures that hold up well when maintained — most repair needs are targeted repointing, crown repair, and flashing replacement. A full rebuild is warranted only when the masonry has deteriorated beyond targeted repair or when earthquake damage has compromised the structural integrity.",
  },
  {
    q: "How do I know if my chimney flashing is leaking?",
    a: "Water stains on the ceiling or wall adjacent to the chimney after heavy fog or rain, rust staining on the roofline near the chimney, and water appearing inside the firebox after a rainy period are the clearest indicators. In San Francisco row houses with flat or low-pitch roof sections adjacent to the chimney, flashing leaks are a frequent source of interior water damage that gets misattributed to the roof itself.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Repair San Francisco",
  serviceType: "Chimney Repair",
  description:
    "Chimney repair in San Francisco for cracked brick, chimney leaks, damaged mortar, crown problems, flashing issues, and fireplace draft concerns.",
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

export default function ChimneyRepairSanFranciscoPage() {
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
              { label: "Chimney Repair" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Technician sealing chimney flashing and repairing a chimney leak on a San Francisco home"
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
              Chimney Repair in San Francisco, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Mortar repointing, liner inspection, flashing replacement, crown repair, and masonry repair for San Francisco Victorian and Edwardian homes — targeted at the actual source of the problem.
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
                  San Francisco chimneys carry the weight of the city&apos;s seismic and moisture history in a way that few other California markets match. The 1906 earthquake destroyed thousands of chimneys outright; the 1989 Loma Prieta earthquake cracked thousands more liners. Add to that the persistent coastal fog that keeps masonry wet through the summer months when most California mortar gets a chance to dry out, and you have a chimney maintenance environment that requires more attention, not less.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We recommend beginning with a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  before any repair work. San Francisco chimneys are complex enough that an inspection consistently identifies problems not visible from the exterior.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Common Chimney Repair Issues in San Francisco
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The most significant issue unique to San Francisco is aging stainless steel liners. After the 1989 Loma Prieta earthquake damaged clay tile flue liners across the Bay Area, many SF homes had stainless liners installed as part of the rebuild. Those liners are now 35 years old — well past the standard 25-year service window for Type 316L stainless. Homeowners who have not had a liner inspection since installation should schedule one.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Pre-war Victorian and Edwardian chimneys — common throughout Pacific Heights, Noe Valley, the Mission, and the Richmond and Sunset Districts — show specific aging patterns. Original soft brick and lime mortar erodes faster in coastal fog than in drier climates. Mortar that last full-depth in 1970 may be at half-depth by now. The crowns on these older chimneys are also more susceptible to cracking because they were often built with weaker historic concrete mixes.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Row houses and attached properties with shared chimney stacks introduce additional complexity. A flashing or crown problem on one unit can introduce moisture that affects adjacent flues — and the repair responsibility may span multiple owners.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Signs Your Chimney Needs Repair
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Efflorescence on the chimney face",
                      desc: "White mineral deposits on brick indicate active water movement through the masonry. In San Francisco, fog alone can drive this even without direct rain.",
                    },
                    {
                      title: "Eroded or missing mortar joints",
                      desc: "Soft lime mortar on older SF chimneys erodes faster than Portland cement mortar. Joints recessed more than a quarter inch need repointing before moisture penetrates further.",
                    },
                    {
                      title: "Spalled brick faces",
                      desc: "Water freezing inside porous brick can spall the face off — less common in mild San Francisco but a risk during occasional cold snaps combined with saturated masonry.",
                    },
                    {
                      title: "Water in the firebox after rain or heavy fog",
                      desc: "Water inside the firebox indicates an active leak entering through the crown, cap, flashing, or masonry. Each source requires a different repair.",
                    },
                    {
                      title: "Interior stains near the chimney",
                      desc: "Ceiling or wall staining adjacent to the chimney after rain is a reliable indicator of a chimney leak that has been active long enough to saturate the surrounding materials.",
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
                  Each component that can fail requires a different repair approach. A{" "}
                  <Link href="/services/chimney-leak-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney leak
                  </Link>{" "}
                  from failed flashing at the roofline is a sheet metal repair. A cracked{" "}
                  <Link href="/services/chimney-crown-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney crown
                  </Link>{" "}
                  needs to be rebuilt with the correct water-shedding geometry, not just patched. In San Francisco, porous brick should receive a vapor-permeable waterproofing sealer after repointing — not paint or a film sealer that traps moisture inside the masonry and accelerates deterioration.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For{" "}
                  <Link href="/services/chimney-masonry-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    masonry repair
                  </Link>{" "}
                  on Victorian and Edwardian chimneys, we match the mortar composition and profile to the existing construction — using softer lime mortar where appropriate rather than Portland cement, which can damage historic soft brick.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Why Inspection Should Come Before Repair
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  San Francisco chimneys benefit more from pre-repair inspection than chimneys in most California markets. The combination of seismic history and chronic moisture means there can be multiple failure points that are not visible from the exterior. A video camera inspection of the flue is the only way to assess liner condition accurately.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For any home in San Francisco built before 1990 that has not had a liner inspection since the Loma Prieta earthquake, we recommend scheduling an inspection before any other repair work — particularly if the fireplace has been in active use.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Seeing damage or moisture near your chimney?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and describe what you are seeing — we will recommend the right starting point.
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
              <LeadForm heading="Get a Free Estimate" subheading="Chimney repair in San Francisco. We respond within 2 business hours." dark={false} />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in San Francisco</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/san-francisco/chimney-cleaning/" },
                    { name: "Chimney Sweep", href: "/areas/san-francisco/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/san-francisco/fireplace-repair/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Repair San Francisco — FAQ" addSchema={false} />
      <CTABanner heading="Schedule chimney repair in San Francisco" />
    </>
  );
}
