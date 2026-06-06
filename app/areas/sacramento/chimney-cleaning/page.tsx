import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/Chimney-cleaning.jpg";

export const metadata: Metadata = {
  title: "Chimney Cleaning Sacramento | Creosote & Soot Removal Service",
  description:
    "Chimney cleaning in Sacramento for homes with heavy seasonal wood-burning. Creosote removal, NFPA 211 Level 1 inspection, and chimney sweep service.",
  alternates: { canonical: "/areas/sacramento/chimney-cleaning/" },
  openGraph: {
    title: "Chimney Cleaning Sacramento | Creosote & Soot Removal Service",
    description:
      "Chimney cleaning in Sacramento for homes with heavy seasonal wood-burning. Creosote removal, NFPA 211 Level 1 inspection, and chimney sweep service.",
    url: `${SITE.baseUrl}/areas/sacramento/chimney-cleaning/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Cleaning Sacramento | Creosote & Soot Removal Service",
    description:
      "Chimney cleaning in Sacramento — heavy wood-burning season, creosote removal, SMAQMD curtailment periods. Free estimate.",
  },
};

const FAQS = [
  {
    q: "How often should Sacramento homeowners clean their chimney?",
    a: "At minimum, once per year — preferably in late summer before the burning season starts. Sacramento averages 1.8 cords of wood burned per household per winter, which is among the highest in California. That volume of burning produces significant creosote buildup. Homes that burn unseasoned wood or use their fireplace more than three times per week may need cleaning mid-season as well.",
  },
  {
    q: "What is the best time to schedule chimney cleaning in Sacramento?",
    a: "August through October is the practical window before the burning season begins. Scheduling before the first cold snap avoids the rush, ensures the chimney is clean when you need it most, and gives time for any repairs identified during the inspection to be completed before the fireplace is in regular use.",
  },
  {
    q: "Does Sacramento's summer heat affect the chimney?",
    a: "Yes. Temperatures regularly exceeding 100°F in Sacramento summers cause thermal expansion and contraction in chimney masonry and metal liner components. Over seasons, this cycling contributes to mortar joint deterioration and can widen existing cracks. Annual cleaning includes a visual check of these components, so deterioration is caught before it becomes a more expensive repair.",
  },
  {
    q: "Should I avoid burning on SMAQMD curtailment days?",
    a: "Yes — Sacramento Metropolitan Air Quality Management District issues wood-burning curtailment advisories during winter cold inversion events, when smoke is trapped near ground level by atmospheric conditions. Burning on mandatory curtailment days is a violation and is also when air quality is worst. If you primarily burn during curtailment-free periods, your actual burning season is shorter, but the concentration of use during those days can still produce significant buildup.",
  },
  {
    q: "Is chimney cleaning the same as a chimney inspection?",
    a: "No. Cleaning removes creosote, soot, and debris from the flue. A chimney inspection assesses the structural and safety condition of the system — liner, firebox, smoke chamber, exterior masonry, and cap. NFPA 211 recommends a Level 1 inspection with every annual cleaning. We include a basic visual inspection with every cleaning service in Sacramento.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Cleaning Sacramento",
  serviceType: "Chimney Cleaning",
  description:
    "Chimney cleaning in Sacramento for homes with heavy seasonal wood-burning. Creosote removal, NFPA 211 Level 1 inspection, and chimney sweep service.",
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

export default function ChimneyCleaningSacramentoPage() {
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
              { label: "Chimney Cleaning" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Chimney sweep performing professional chimney cleaning and inspection in a Sacramento home"
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
              Chimney Cleaning in Sacramento, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Professional creosote and soot removal for Sacramento&apos;s high wood-burning households. Schedule before the burning season to stay ahead of buildup and SMAQMD curtailment periods.
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
                  Sacramento has the highest residential wood-burning rate of any major California city — 1.8 cords per household per winter on average. That volume of burning, combined with cold valley inversion events that concentrate smoke at ground level, makes annual chimney cleaning a practical necessity rather than a recommendation. The question is not whether buildup occurs, but how much and what type.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  For new customers, the right approach is to combine the first cleaning with a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  — particularly for Sacramento&apos;s older brick chimneys in Land Park, Curtis Park, and Midtown, where the condition of the original mortar joints and smoke chamber is not always known without a camera inspection.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Why Sacramento Chimneys Need More Frequent Cleaning
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      title: "High burning volume",
                      desc: "At 1.8 cords per winter household, Sacramento&apos;s burning rate is significantly above the state average. Creosote and soot buildup is proportional to use — high-volume burning means the flue reaches the NFPA threshold for cleaning sooner.",
                    },
                    {
                      title: "Cold valley inversions",
                      desc: "Sacramento&apos;s geography traps cold air in the valley during winter, creating temperature inversions that reduce chimney draft. Lower draft efficiency causes more incomplete combustion and faster creosote deposition.",
                    },
                    {
                      title: "Summer heat cycling",
                      desc: "Consecutive 100°F+ days in Sacramento summer cause significant thermal expansion and contraction in brick and mortar. Annual cleaning creates the opportunity to identify developing cracks before they affect performance.",
                    },
                    {
                      title: "Older brick chimneys",
                      desc: "Land Park, Curtis Park, Midtown, and East Sacramento have a high density of mid-century brick chimneys. Original mortar joints in these structures require periodic inspection to confirm they are holding up under decades of thermal cycling.",
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
                  What We Remove During Chimney Cleaning
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A standard chimney cleaning removes all three stages of creosote: the flaky first-stage deposits common in frequently used chimneys, the harder second-stage tar-coated deposits, and — if present — the glazed third-stage creosote that requires chemical treatment before mechanical removal. We use rotary brush systems that match the flue size and shape, ensuring contact with the liner surface throughout the full length of the flue.
                </p>
                <ul className="space-y-2">
                  {[
                    "First, second, and third-stage creosote removal",
                    "Soot and ash deposits from the smoke chamber",
                    "Debris from chimney cap area (leaves, organic matter)",
                    "Animal nesting material from cap or crown if present",
                    "Visual check of cap, crown, and visible liner during cleaning",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" className="shrink-0 mt-1" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Burning Season and SMAQMD Curtailment Days
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sacramento&apos;s{" "}
                  <a href="https://www.airquality.org" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    Sacramento Metropolitan Air Quality Management District
                  </a>{" "}
                  issues wood-burning curtailment advisories during winter inversion events. Mandatory no-burn days and voluntary curtailment days typically occur multiple times per season. Scheduling cleaning in August or September means you are ready when burning days are permitted — without needing to cancel plans because the chimney has not been serviced yet.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Creosote from prior seasons also builds up over summer as temperature changes cause deposits to slightly shift and harden. A pre-season cleaning removes this and provides a baseline for what was accumulated from the prior year.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Schedule before the burning season</p>
                <p className="text-gray-300 text-sm mb-4">
                  August through October is the best window for Sacramento homeowners. Spots fill quickly once the first cold weeks arrive.
                </p>
                <Link href="/contact/" className="btn-primary inline-block">
                  Request Free Estimate
                </Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Chimney Cleaning (All California)", href: "/services/chimney-cleaning/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Creosote Removal", href: "/services/creosote-removal/" },
                    { name: "Chimney Repair in Sacramento", href: "/areas/sacramento/chimney-repair/" },
                    { name: "Chimney Sweep in Sacramento", href: "/areas/sacramento/chimney-sweep/" },
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
              <LeadForm heading="Get a Free Estimate" subheading="Chimney cleaning in Sacramento. We respond within 2 business hours." dark={false} />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Sacramento</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Repair", href: "/areas/sacramento/chimney-repair/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Cleaning Sacramento — FAQ" addSchema={false} />
      <CTABanner heading="Schedule chimney cleaning in Sacramento" />
    </>
  );
}
