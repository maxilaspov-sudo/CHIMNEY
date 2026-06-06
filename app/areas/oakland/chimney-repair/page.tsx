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
  title: "Chimney Repair Oakland | Brick, Leak & Masonry Repair",
  description:
    "Chimney repair in Oakland for cracked brick, chimney leaks, damaged mortar, crown problems, flashing issues, and fireplace draft concerns. East Bay specialists.",
  alternates: { canonical: "/areas/oakland/chimney-repair/" },
  openGraph: {
    title: "Chimney Repair Oakland | Brick, Leak & Masonry Repair",
    description:
      "Chimney repair in Oakland for cracked brick, chimney leaks, damaged mortar, crown problems, and flashing issues.",
    url: `${SITE.baseUrl}/areas/oakland/chimney-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Repair Oakland | Brick, Leak & Masonry Repair",
    description: "Chimney repair in Oakland — older brick, mortar, crown, flashing, hillside homes. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What are the most common chimney repairs in Oakland?",
    a: "Mortar joint repointing in pre-1950 brick chimneys is the most frequent repair across Oakland&apos;s older neighborhoods — Rockridge, Temescal, Fruitvale, and the flatlands. Chimney crown repair or replacement, flashing repair at the roofline, and spark arrestor installation or replacement are also common. Oakland Hills homes have specific repair needs related to fire safety: a damaged or missing spark arrestor cap is a priority repair in high fire risk zones.",
  },
  {
    q: "Can cracked chimney bricks cause leaks?",
    a: "Yes. Cracked or spalled bricks allow water infiltration that then travels down the chimney structure, causing interior water damage and accelerating mortar deterioration. In Oakland, the combination of Bay Area winter rainfall and older masonry that was not sealed or tuckpointed recently makes brick condition an important thing to monitor. Catching spalling early prevents more expensive structural work.",
  },
  {
    q: "What causes water damage around a chimney in Oakland?",
    a: "The most common sources in Oakland are failed flashing at the chimney-roof junction, a cracked or unsealed chimney crown, open mortar joints in the upper chimney stack, and a missing or damaged cap. Oakland&apos;s annual rainfall and maritime humidity mean any unprotected opening will eventually allow water into the structure. A leak that presents as a ceiling stain near the chimney almost always traces to one of these four sources.",
  },
  {
    q: "Should I repair or rebuild my Oakland chimney?",
    a: "Most Oakland chimneys in the repair-category range: mortar repointing, crown replacement, flashing repair, and cap installation can extend a well-built brick chimney&apos;s service life considerably. Rebuilding is warranted when the chimney stack has structural movement, when brick deterioration has progressed past the point where repointing is sufficient, or when the firebox has sustained significant damage. We provide an honest assessment of what is actually needed.",
  },
  {
    q: "How do I know if my chimney flashing is leaking in Oakland?",
    a: "Water stains on the ceiling or wall adjacent to the chimney are the clearest indicator. You may also notice dampness inside the firebox after rain, or rust staining on the fireplace breast. The flashing is the metal junction between the chimney and the roof surface — it degrades over time through lifting, cracking, and loss of sealant. Oakland&apos;s winter rain seasons make flashing one of the most important maintenance items on an older home.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Repair Oakland",
  serviceType: "Chimney Repair",
  description: "Chimney repair in Oakland for cracked brick, chimney leaks, damaged mortar, crown problems, and flashing issues.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: { "@type": "PostalAddress", addressLocality: "Oakland", addressRegion: "CA", addressCountry: "US" },
  },
  areaServed: { "@type": "City", name: "Oakland" },
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

export default function ChimneyRepairOaklandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/areas/" },
            { label: "Oakland", href: "/areas/oakland/" },
            { label: "Chimney Repair" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Technician sealing chimney flashing and repairing a chimney leak on an Oakland home" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Oakland
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Repair in Oakland, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Mortar repointing, chimney leak repair, crown replacement, and spark arrestor service for Oakland&apos;s older brick chimneys and hillside homes.
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
                  Oakland has a high density of pre-1950 homes with original brick chimneys — Rockridge bungalows, Temescal craftsman homes, and Fruitvale flats all share this characteristic. These chimneys were built solidly, but mortar joints from the 1930s, 40s, and 50s have had 70-80 years of rain, thermal cycling, and Bay Area moisture working on them. Repointing before mortar deterioration reaches the brick itself is the most cost-effective maintenance these chimneys require.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  For Oakland Hills homes, chimney repair carries an additional priority: the 1991 Oakland Hills firestorm identified uncapped chimneys emitting sparks as a contributing factor in multiple structure fires. A{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">chimney inspection</Link>{" "}
                  that includes a spark arrestor check is not optional for hillside properties in high fire risk zones.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Common Chimney Repairs in Oakland</h2>
                <ul className="space-y-3">
                  {[
                    { title: "Mortar joint repointing", desc: "Soft, recessed, or crumbling mortar in Oakland&apos;s older brick chimneys is the most common repair. Repointing with appropriate mortar stops water infiltration and restores the chimney&apos;s structural integrity." },
                    { title: "Chimney crown repair or replacement", desc: "Cracked or deteriorated crowns allow rain into the chimney structure. Oakland&apos;s winter rain season makes crown integrity a priority annual inspection item." },
                    { title: "Chimney flashing repair", desc: "The metal junction between chimney and roof fails through lifting, cracking, and sealant loss over time. Flashing failure is the most common cause of interior water damage in Oakland&apos;s older homes." },
                    { title: "Spark arrestor cap installation or replacement", desc: "For Oakland Hills properties, a functioning spark arrestor cap is a fire safety requirement. The Oakland Fire Department specifically recommends it for all hillside properties." },
                    { title: "Chimney liner repair or relining", desc: "Older clay tile liners crack over decades of thermal cycling. Stainless relining resolves safety, draft, and code compliance issues associated with a compromised liner." },
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
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Chimney Leaks, Masonry, Crowns, and Flashing</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In Oakland&apos;s older neighborhoods, a chimney leak is rarely a single-source problem. Flashing, crown, and mortar joints often all show age-related deterioration at the same time. Repairing only the flashing while leaving the crown cracked means water still enters through the crown. A proper repair assessment identifies all active water pathways and addresses them together.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For chimneys that have visibly deteriorated mortar — the test is whether a screwdriver tip pushes into the joint with light pressure — repointing should be prioritized before the next winter rain season. Soft mortar is already failing at its primary job of protecting the brick from water.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Something visible on your Oakland chimney?</p>
                <p className="text-gray-300 text-sm mb-4">Describe what you see — crumbling mortar, a water stain, a missing cap — when requesting an estimate.</p>
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
                    { name: "Oakland service area", href: "/areas/oakland/" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors">
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm heading="Get a Free Estimate" subheading="Chimney repair in Oakland. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Oakland</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/oakland/chimney-cleaning/" },
                    { name: "Chimney Sweep", href: "/areas/oakland/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/oakland/fireplace-repair/" },
                    { name: "Dryer Vent Cleaning", href: "/areas/oakland/dryer-vent-cleaning/" },
                    { name: "All Oakland Services", href: "/areas/oakland/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Repair Oakland — FAQ" addSchema={false} />
      <CTABanner heading="Schedule chimney repair in Oakland" />
    </>
  );
}
