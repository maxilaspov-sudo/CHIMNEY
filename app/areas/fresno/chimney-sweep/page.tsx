import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/chimney-sweep-service.jpg";

export const metadata: Metadata = {
  title: "Chimney Sweep Fresno | Chimney & Fireplace Service",
  description:
    "Professional chimney sweep service in Fresno for soot, creosote, fireplace cleaning, chimney flue buildup, and draft problems. Schedule before SJVAPCD burning season.",
  alternates: { canonical: "/areas/fresno/chimney-sweep/" },
  openGraph: {
    title: "Chimney Sweep Fresno | Chimney & Fireplace Service",
    description:
      "Professional chimney sweep service in Fresno for soot, creosote, fireplace cleaning, chimney flue buildup, and draft problems.",
    url: `${SITE.baseUrl}/areas/fresno/chimney-sweep/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Sweep Fresno | Chimney & Fireplace Service",
    description: "Chimney sweep in Fresno — SJVAPCD burning season prep, creosote removal, NFPA 211 inspection. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What does a chimney sweep service include in Fresno?",
    a: "A chimney sweep in Fresno includes mechanical cleaning of the full flue length using rotary brush equipment, removal of soot and creosote from the smoke chamber and damper shelf, vacuuming the firebox, and a NFPA 211 Level 1 visual inspection of accessible components — cap, crown, visible liner, damper, and firebox. We note any concerns in a written report provided after the visit.",
  },
  {
    q: "How often should I hire a chimney sweep in Fresno?",
    a: "Once per year is the standard for Fresno households. The best timing is September through early October, before the SJVAPCD burning season begins. Fresno households that burn wood frequently — more than three times per week during the season — may accumulate deposits quickly enough to warrant a mid-season check as well.",
  },
  {
    q: "Is chimney sweeping messy?",
    a: "Not when done properly. We use high-powered vacuum extraction at the firebox opening to capture all material as it falls from the flue. The work area is protected before we start, and we clean up completely before leaving. Most customers cannot tell we were there except for the clean firebox.",
  },
  {
    q: "Can chimney sweep service remove creosote?",
    a: "Yes. Rotary brush cleaning removes first-stage (flaky) and second-stage (tar-coated) creosote effectively. Third-stage glazed creosote — a hard, shiny deposit — requires chemical treatment to break it down before mechanical removal. We identify the deposit type during every visit and advise on the appropriate treatment.",
  },
  {
    q: "Should I schedule an inspection with chimney sweeping in Fresno?",
    a: "Yes — and this is included with every sweep visit. For Fresno homes with chimneys that have not had a camera inspection in more than two years, particularly pre-1985 homes with original clay tile liners, we recommend adding a Level 2 camera inspection to get a complete picture of the liner condition.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Sweep Fresno",
  serviceType: "Chimney Sweep",
  description: "Professional chimney sweep service in Fresno for soot, creosote, fireplace cleaning, flue buildup, and draft problems.",
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

export default function ChimneySweepFresnoPage() {
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
            { label: "Chimney Sweep" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Technician sweeping a fireplace chimney in a Fresno home" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Fresno
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Sweep in Fresno, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              NFPA 211 chimney sweep and inspection for Fresno homeowners. Schedule in September or October to be ready before SJVAPCD permitted burn days begin.
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
                  In Fresno, chimney sweeping is primarily a pre-season task. The SJVAPCD restricts wood-burning on a significant number of winter days, which means Fresno homeowners want their chimneys ready for every permitted burn day — not scrambling to schedule a sweep when the first cold front arrives in October.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Beyond timing, the Central Valley&apos;s combination of dust, soot, and seasonal moisture means Fresno chimneys can accumulate deposits differently than in drier climates. A{" "}
                  <Link href="/areas/fresno/chimney-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">chimney cleaning</Link>{" "}
                  visit handles all of this — the terms sweep and cleaning refer to the same core process.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What a Chimney Sweep Service Includes</h2>
                <ul className="space-y-3">
                  {[
                    { title: "Full-length flue brush cleaning", desc: "Rotary brushes matched to your flue dimensions clean the full length from cap to firebox, dislodging creosote and soot from the liner surface." },
                    { title: "Smoke chamber and damper shelf cleaning", desc: "Deposits on the smoke chamber and damper shelf are removed — these areas are often missed in DIY cleaning attempts." },
                    { title: "Vacuum extraction", desc: "All material dislodged during cleaning is captured by high-powered vacuum at the firebox opening. The home is left clean." },
                    { title: "NFPA 211 Level 1 inspection", desc: "We inspect the cap, crown, visible liner, damper, firebox, and smoke chamber — noting anything that warrants further attention." },
                    { title: "Written report", desc: "A written summary of what was found and any recommendations is provided at the end of every visit." },
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
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Chimney Sweep vs Chimney Cleaning</h2>
                <p className="text-gray-600 leading-relaxed">
                  The terms refer to the same process. A chimney sweep or{" "}
                  <Link href="/services/chimney-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">chimney cleaning</Link>{" "}
                  mechanically removes combustion deposits from the flue liner. The only practical distinction is when third-stage glazed creosote is present — that situation requires a chemical treatment step before mechanical removal, and may be described as a cleaning to reflect the additional scope. Standard first and second-stage deposits are handled in a single sweep visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Problems a Sweep May Reveal in Fresno</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Level 1 inspection that accompanies every sweep visit sometimes identifies issues that are not visible from outside the home. Fresno chimneys commonly show crown cracking from thermal stress, soft mortar at upper chimney courses, and deteriorated clay liner sections in homes built before the 1980s. Identifying these during a routine sweep visit — rather than after a leak or fire — keeps repair costs manageable.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Book your sweep before October</p>
                <p className="text-gray-300 text-sm mb-4">September and October fill quickly in Fresno as the burning season approaches. Early scheduling ensures you get your preferred date.</p>
                <Link href="/contact/" className="btn-primary inline-block">Request Free Estimate</Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Chimney Sweep (All California)", href: "/services/chimney-sweep/" },
                    { name: "Chimney Cleaning in Fresno", href: "/areas/fresno/chimney-cleaning/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Creosote Removal", href: "/services/creosote-removal/" },
                    { name: "Chimney Blockage Removal", href: "/services/chimney-blockage-removal/" },
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
              <LeadForm heading="Get a Free Estimate" subheading="Chimney sweep in Fresno. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Fresno</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/fresno/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/fresno/chimney-repair/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Sweep Fresno — FAQ" addSchema={false} />
      <CTABanner heading="Schedule a chimney sweep in Fresno" />
    </>
  );
}
