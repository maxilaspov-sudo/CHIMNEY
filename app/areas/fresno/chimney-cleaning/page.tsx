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
  title: "Chimney Cleaning Fresno | Fireplace & Flue Cleaning",
  description:
    "Professional chimney cleaning in Fresno for soot, creosote buildup, fireplace odors, poor draft, and annual chimney maintenance. Central Valley specialists.",
  alternates: { canonical: "/areas/fresno/chimney-cleaning/" },
  openGraph: {
    title: "Chimney Cleaning Fresno | Fireplace & Flue Cleaning",
    description:
      "Professional chimney cleaning in Fresno for soot, creosote buildup, fireplace odors, poor draft, and annual chimney maintenance. Central Valley specialists.",
    url: `${SITE.baseUrl}/areas/fresno/chimney-cleaning/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Cleaning Fresno | Fireplace & Flue Cleaning",
    description:
      "Chimney cleaning in Fresno — creosote removal, soot, SJVAPCD burning season prep. Free estimate.",
  },
};

const FAQS = [
  {
    q: "How often should I schedule chimney cleaning in Fresno?",
    a: "Once per year is the standard recommendation, and for Fresno homes the best window is September or October — before the SJVAPCD burning season begins and before Tule fog settles in for the winter. Fresno households that burn wood frequently should consider whether a mid-season cleaning is warranted if the fireplace is used more than three nights per week.",
  },
  {
    q: "What are signs my chimney needs cleaning?",
    a: "The clearest signs are smoke entering the room when the fireplace is in use, a strong musty or acrid smell when the fireplace is not in use, black soot visible around the firebox opening, or noticeably reduced draft that makes it difficult to keep a fire going. In Fresno, the Tule fog season can intensify existing chimney odors as moisture activates residual soot and creosote deposits.",
  },
  {
    q: "Is chimney cleaning the same as a chimney sweep?",
    a: "They refer to the same core process: mechanically removing soot, creosote, and debris from the flue. The terms are used interchangeably in the industry. A chimney sweep or cleaning visit typically includes a visual inspection of accessible components alongside the cleaning itself.",
  },
  {
    q: "Can chimney cleaning help with fireplace odors in Fresno homes?",
    a: "Yes. Chimney odors in Fresno are often caused by soot and creosote deposits that become more volatile as Central Valley humidity rises during Tule fog season. Removing those deposits through cleaning eliminates the primary source. If odor persists after cleaning, it usually points to a damper that does not seal properly — which we check during every visit.",
  },
  {
    q: "Do you inspect the chimney during cleaning?",
    a: "Yes. Every cleaning visit includes a NFPA 211 Level 1 visual inspection of accessible chimney components — cap, crown, visible liner, damper, firebox, and smoke chamber. If we identify anything that warrants a closer look, we will recommend a camera inspection before the burning season starts.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Cleaning Fresno",
  serviceType: "Chimney Cleaning",
  description:
    "Professional chimney cleaning in Fresno for soot, creosote buildup, fireplace odors, poor draft, and annual chimney maintenance.",
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

export default function ChimneyCleaningFresnoPage() {
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
            { label: "Chimney Cleaning" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Technician performing chimney cleaning inside a Fresno fireplace" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Fresno
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Cleaning in Fresno, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Annual chimney cleaning for Central Valley homes — creosote and soot removal, SJVAPCD burning season prep, and a Level 1 inspection included with every visit.
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
                  Fresno&apos;s Central Valley climate creates chimney conditions that differ from coastal California. The wide temperature swing — freezing winter nights and 105°F+ summers — drives more thermal cycling through masonry and metal components than most of the state sees. Combined with the region&apos;s winter Tule fog, which introduces persistent low-level moisture, and the Central Valley&apos;s dust, chimneys here accumulate deposits differently than in drier or milder climates.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  For most Fresno homeowners, the practical question is timing. Scheduling cleaning before the SJVAPCD burning season ensures the chimney is ready on permitted burn days without last-minute scrambles. A{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">chimney inspection</Link>{" "}
                  run alongside the first annual cleaning is the right starting point for any home where prior maintenance history is unclear.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Why Chimney Cleaning Matters in Fresno Homes</h2>
                <ul className="space-y-3">
                  {[
                    { title: "Tule fog and moisture exposure", desc: "Fresno&apos;s December through February fog season introduces persistent ground-level moisture that activates soot and creosote deposits — intensifying chimney odors and accelerating deposit buildup in less-used flues." },
                    { title: "SJVAPCD burning restrictions", desc: "The San Joaquin Valley Air Pollution Control District restricts wood-burning on many winter days. Having a clean, inspected chimney means you can use every permitted burn day without safety concerns." },
                    { title: "Central Valley dust and soot combination", desc: "Fresno&apos;s agricultural dust environment means chimneys accumulate a mix of combustion byproducts and fine particulate. Annual cleaning keeps this from building to levels that affect draft or increase fire risk." },
                    { title: "Older brick neighborhoods", desc: "Tower District, Fig Garden, Bullard, and Woodward Park contain a significant number of original masonry chimneys from the 1940s through 1970s. These older clay tile liners need periodic cleaning and inspection." },
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
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Signs Your Chimney May Need Cleaning</h2>
                <ul className="space-y-2">
                  {[
                    "Smoke enters the room when the fireplace is in use",
                    "A strong smell from the fireplace when it is not in use",
                    "Black soot visible around the firebox opening or on the hearth",
                    "Difficulty starting or maintaining a fire (poor draft)",
                    "A crackling or popping sound from inside the flue during a fire",
                    "More than one year since the last professional cleaning",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" className="shrink-0 mt-1" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Chimney Cleaning Service Includes</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use rotary brush equipment matched to your flue dimensions, combined with high-powered vacuum extraction at the firebox. This removes first, second, and third-stage creosote, along with soot and any debris that has entered the flue from the top.
                </p>
                <ul className="space-y-2">
                  {[
                    "Full-length flue brush cleaning from cap to firebox",
                    "Smoke chamber and damper shelf cleaning",
                    "Vacuum extraction of all removed material",
                    "Firebox vacuuming and visual check",
                    "NFPA 211 Level 1 inspection of accessible components",
                    "Written report of findings and any recommendations",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" className="shrink-0 mt-1" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Chimney Cleaning vs Chimney Sweep</h2>
                <p className="text-gray-600 leading-relaxed">
                  The terms are used interchangeably. A{" "}
                  <Link href="/services/chimney-sweep/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">chimney sweep</Link>{" "}
                  and a chimney cleaning describe the same service: mechanically removing combustion deposits from the flue. The distinction, when one exists at all, is typically in the deposit level — heavier third-stage glazed creosote requires additional chemical treatment before mechanical removal, and that process is sometimes called a cleaning rather than a standard sweep.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Ready before the burning season</p>
                <p className="text-gray-300 text-sm mb-4">Schedule in September or October to ensure your chimney is clean before SJVAPCD permitted burn days begin.</p>
                <Link href="/contact/" className="btn-primary inline-block">Request Free Estimate</Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Chimney Cleaning (All California)", href: "/services/chimney-cleaning/" },
                    { name: "Chimney Sweep", href: "/services/chimney-sweep/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Creosote Removal", href: "/services/creosote-removal/" },
                    { name: "Chimney Repair in Fresno", href: "/areas/fresno/chimney-repair/" },
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
              <LeadForm heading="Get a Free Estimate" subheading="Chimney cleaning in Fresno. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Fresno</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Repair", href: "/areas/fresno/chimney-repair/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Cleaning Fresno — FAQ" addSchema={false} />
      <CTABanner heading="Schedule chimney cleaning in Fresno" />
    </>
  );
}
