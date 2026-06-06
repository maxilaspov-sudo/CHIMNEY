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
  title: "Chimney Repair Sacramento | Brick, Mortar & Liner Restoration",
  description:
    "Chimney repair in Sacramento for deteriorated mortar joints, damaged brick, cracked liners, and heat-cycled masonry. Free estimate for Land Park, Midtown, East Sacramento.",
  alternates: { canonical: "/areas/sacramento/chimney-repair/" },
  openGraph: {
    title: "Chimney Repair Sacramento | Brick, Mortar & Liner Restoration",
    description:
      "Chimney repair in Sacramento for deteriorated mortar joints, damaged brick, cracked liners, and heat-cycled masonry. Free estimate for Land Park, Midtown, East Sacramento.",
    url: `${SITE.baseUrl}/areas/sacramento/chimney-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Repair Sacramento | Brick, Mortar & Liner Restoration",
    description:
      "Chimney repair in Sacramento — brick and mortar restoration, cracked liner, crown, summer heat damage. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What types of chimney repair are most common in Sacramento?",
    a: "In Sacramento, the most common repairs are mortar joint repointing in older brick chimneys, chimney crown repair or replacement, and chimney liner repair or relining. Sacramento&apos;s extreme summer heat — regularly exceeding 100°F — accelerates thermal cycling damage to masonry, causing mortar joints to deteriorate faster than in milder coastal climates. Homes with older brick chimneys in Land Park, Curtis Park, and Midtown frequently require repointing every 20–30 years.",
  },
  {
    q: "How does Sacramento's summer heat damage chimneys?",
    a: "Brick and mortar expand and contract with temperature. The larger the temperature swing, the more cycles occur and the more stress accumulates in the masonry. Sacramento regularly sees summer highs above 105°F and winter nights below freezing — that 130°F+ annual range is significantly wider than coastal California cities. Over time, this causes mortar joints to crack, open, and eventually crumble, allowing water to infiltrate the chimney structure.",
  },
  {
    q: "Can you repair a chimney that is leaking?",
    a: "Yes. Chimney leaks in Sacramento homes usually trace to one of several sources: a failed chimney crown, deteriorated flashing at the roof line, open mortar joints in the chimney stack, or a missing or damaged chimney cap. We identify the actual source before recommending any repair, since addressing only one source when multiple exist will leave the problem partially unresolved.",
  },
  {
    q: "What is tuckpointing and does my Sacramento chimney need it?",
    a: "Tuckpointing (also called repointing) is the process of removing deteriorated mortar from brick joints and replacing it with fresh mortar. In Sacramento, if you can push a screwdriver into the mortar joints of the chimney stack with light pressure, repointing is overdue. Soft or recessed mortar no longer protects the brick from water infiltration and thermal stress. Addressing it early prevents more expensive structural damage to the brick itself.",
  },
  {
    q: "How do I know if my chimney liner needs repair?",
    a: "In Sacramento, a camera inspection is the definitive way to assess liner condition. Symptoms that suggest liner damage include a burning smell when the fireplace is not in use, unusual drafting behavior, visible smoke at joints in the chimney exterior, or a prior chimney fire (even a small one). Chimneys in Sacramento homes that burn 1.8 cords or more per winter should have a camera inspection every 3–5 years, not only when a symptom appears.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Repair Sacramento",
  serviceType: "Chimney Repair",
  description:
    "Chimney repair in Sacramento for deteriorated mortar joints, damaged brick, cracked liners, and heat-cycled masonry.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sacramento",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "City", name: "Sacramento" },
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

export default function ChimneyRepairSacramentoPage() {
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
              { label: "Sacramento", href: "/areas/sacramento/" },
              { label: "Chimney Repair" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Chimney repair technician working on brick and mortar restoration on a Sacramento home"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Sacramento
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Repair in Sacramento, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Brick and mortar restoration, liner repair, crown replacement, and leak diagnosis for Sacramento&apos;s older masonry chimneys damaged by extreme summer heat cycling and heavy winter use.
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
                  Sacramento&apos;s climate is unusually hard on brick masonry. The same valley geography that traps cold air in winter inversions also produces extreme summer heat — a temperature swing from below freezing to above 105°F that few California cities experience. This annual thermal stress, combined with high burning rates during winter, means Sacramento chimneys deteriorate faster than average and require more attention than homeowners often expect.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Repairing chimney damage in Sacramento is most effective when caught early. A mortar joint that is crumbling but still intact costs significantly less to repoint than a brick that has spalled and needs replacement. Starting with a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  before any visible problem becomes a structural issue is the most cost-effective approach.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Common Chimney Repairs in Sacramento
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Mortar joint repointing (tuckpointing)",
                      desc: "Older brick chimneys in Land Park, Curtis Park, Midtown, and East Sacramento commonly need repointing. Soft, recessed, or crumbling mortar joints no longer protect against water infiltration and should be addressed before the brick itself is compromised.",
                    },
                    {
                      title: "Chimney crown repair or replacement",
                      desc: "Sacramento&apos;s thermal cycling is particularly hard on chimney crowns. Cracks that develop over summer let winter rain penetrate the chimney structure. A damaged crown should be repaired before the next wet season.",
                    },
                    {
                      title: "Chimney liner repair or relining",
                      desc: "Older clay tile liners crack under years of thermal cycling and heavy use. Stainless steel relining is the standard repair and resolves draft, safety, and efficiency issues that a cracked clay liner creates.",
                    },
                    {
                      title: "Flashing repair",
                      desc: "Flashing at the chimney-roof junction is the most common source of chimney leaks in Sacramento. Deteriorated caulk, lifted flashing, or improperly installed step flashing allows water into the roof framing and attic.",
                    },
                    {
                      title: "Chimney cap installation or replacement",
                      desc: "A missing or damaged chimney cap allows rain, birds, and debris directly into the flue. In Sacramento, where chimneys are heavily used in winter, a compromised cap accelerates liner and smoke chamber deterioration.",
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
                  Brick Chimneys in Older Sacramento Neighborhoods
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Land Park, Curtis Park, Midtown, and East Sacramento have a high concentration of mid-century brick chimneys — many built in the 1930s through 1960s using materials and construction standards that predate modern chimney codes. These chimneys are substantial, durable, and often repairable, but they require periodic attention that their younger stucco or metal-insert counterparts do not.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For Sacramento chimneys that have not had a camera inspection in the past several years, a Level 2 inspection is the starting point — particularly if the home has recently changed ownership, if the chimney has been heavily used without servicing, or if any visible mortar or crown deterioration is apparent from the ground.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  What Triggers Repair vs. Rebuild
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Most Sacramento chimney damage falls into the repair category, not rebuild. Mortar repointing, crown replacement, and liner relining address the issues that commonly develop in Sacramento&apos;s climate without requiring structural chimney work. We provide honest assessments of what actually needs repair versus what could simply be monitored, so homeowners are not paying for work that is not yet necessary.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The cases that require more substantial work are: a chimney stack that has shifted or tilted, brick spalling that has progressed beyond the repair threshold, or a liner failure combined with firebox deterioration that affects the full system. These situations are less common than routine maintenance repairs, but they do occur in Sacramento&apos;s older homes.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Noticed something on your chimney?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Describe what you see when you request an estimate — cracked mortar, a leak, a smell, or something visible from the ground.
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
                    { name: "Chimney Tuckpointing", href: "/services/chimney-tuckpointing/" },
                    { name: "Chimney Crown Repair", href: "/services/chimney-crown-repair/" },
                    { name: "Chimney Liner Repair", href: "/services/chimney-liner-repair/" },
                    { name: "Chimney Cleaning in Sacramento", href: "/areas/sacramento/chimney-cleaning/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Sacramento service area", href: "/areas/sacramento/" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors">
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm heading="Get a Free Estimate" subheading="Chimney repair in Sacramento. We respond within 2 business hours." dark={false} />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Sacramento</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/sacramento/chimney-cleaning/" },
                    { name: "Chimney Sweep", href: "/areas/sacramento/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/sacramento/fireplace-repair/" },
                    { name: "Dryer Vent Cleaning", href: "/areas/sacramento/dryer-vent-cleaning/" },
                    { name: "All Sacramento Services", href: "/areas/sacramento/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Repair Sacramento — FAQ" addSchema={false} />
      <CTABanner heading="Schedule chimney repair in Sacramento" />
    </>
  );
}
