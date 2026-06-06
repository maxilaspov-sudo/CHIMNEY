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
  title: "Chimney Sweep Long Beach | Chimney & Fireplace Service",
  description:
    "Professional chimney sweep service in Long Beach for soot, creosote, fireplace cleaning, flue buildup, and draft problems. Coastal homes and Craftsman bungalows.",
  alternates: { canonical: "/areas/long-beach/chimney-sweep/" },
  openGraph: {
    title: "Chimney Sweep Long Beach | Chimney & Fireplace Service",
    description:
      "Professional chimney sweep service in Long Beach for soot, creosote, fireplace cleaning, flue buildup, and draft problems.",
    url: `${SITE.baseUrl}/areas/long-beach/chimney-sweep/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Sweep Long Beach | Chimney & Fireplace Service",
    description: "Chimney sweep in Long Beach — coastal homes, salt air component check, Craftsman fireplaces. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What does a chimney sweep service include in Long Beach?",
    a: "A chimney sweep in Long Beach includes full-length flue cleaning with rotary brush equipment, smoke chamber and damper shelf cleaning, vacuum extraction at the firebox, and a NFPA 211 Level 1 inspection. For coastal Long Beach properties, we specifically check metal components — cap, damper assembly, and any liner sections — for salt air corrosion during every sweep visit.",
  },
  {
    q: "How often should I hire a chimney sweep in Long Beach?",
    a: "Once per year is appropriate even for households that burn wood infrequently. Coastal salt air and marine moisture affect metal chimney components throughout the year, regardless of how often the fireplace is used. Annual service keeps these components in check and ensures any corrosion or deterioration is caught early.",
  },
  {
    q: "Is chimney sweeping messy?",
    a: "No. We protect the work area before starting and use high-powered vacuum extraction to capture all material dislodged from the flue. The area is cleaned before we leave. Long Beach homes with ornamental Craftsman fireplaces receive particular care — we use techniques appropriate to the original masonry to avoid surface damage.",
  },
  {
    q: "Can chimney sweep service remove creosote in a Long Beach home?",
    a: "Yes. Long Beach fireplaces used infrequently sometimes accumulate light first-stage creosote that brushes out easily. Fireplaces that see regular winter use accumulate more. We assess the deposit type and use the appropriate technique — standard rotary brush for first and second-stage, chemical treatment plus brush for third-stage glazed deposits.",
  },
  {
    q: "Should I schedule an inspection with chimney sweeping in Long Beach?",
    a: "Yes — a Level 1 inspection is included with every sweep visit. For Long Beach homes that have not had a professional chimney service in more than two years, or for recently purchased properties near the waterfront, we recommend adding a Level 2 camera inspection to assess liner and smoke chamber condition, and to get a full picture of current metal component condition given the accelerated corrosion from the coastal environment.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Sweep Long Beach",
  serviceType: "Chimney Sweep",
  description: "Professional chimney sweep service in Long Beach for soot, creosote, fireplace cleaning, and draft problems.",
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

export default function ChimneySweepLongBeachPage() {
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
            { label: "Chimney Sweep" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Technician sweeping a fireplace chimney in a Long Beach home" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Long Beach
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Sweep in Long Beach, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Annual chimney sweep with NFPA 211 inspection for Long Beach coastal homes. Salt air component check included for waterfront and near-port properties.
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
                  Long Beach homeowners use their fireplaces less frequently than residents of colder inland cities — but the coastal environment means annual chimney service is still the right maintenance interval. Salt air from the Pacific and the port affects metal chimney components throughout the year, not only during fireplace use. The damper, cap, and any exposed hardware in a Long Beach chimney corrode faster than their inland counterparts, and catching this early prevents more expensive repairs.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  A{" "}
                  <Link href="/areas/long-beach/chimney-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">chimney cleaning</Link>{" "}
                  and chimney sweep refer to the same service. The inspection that accompanies every sweep visit includes a specific check of metal components for salt air corrosion — something that standard inland chimney service does not routinely include.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What a Chimney Sweep Includes in Long Beach</h2>
                <ul className="space-y-3">
                  {[
                    { title: "Full-length flue brush cleaning", desc: "Rotary brush equipment matched to your flue dimensions removes creosote and soot from the full liner length." },
                    { title: "Smoke chamber and damper shelf", desc: "Deposits in these areas affect draft and contribute to chimney odors. Both are cleaned on every visit." },
                    { title: "Metal component inspection for corrosion", desc: "Cap, damper assembly, and exposed hardware are checked for salt air deterioration — a specific coastal service checkpoint." },
                    { title: "NFPA 211 Level 1 inspection", desc: "Visual inspection of accessible components with a written report of findings and recommendations." },
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
                <h2 className="text-2xl font-bold text-[#111827] mb-4">When Long Beach Homeowners Should Schedule Sweeping</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  October or November works well for Long Beach — ahead of the limited wood-burning season, when the cooler coastal evenings occasionally prompt a fire. There is no specific air quality restriction authority equivalent to SJVAPCD or BAAQMD for Long Beach, so timing is more about condition than regulation.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For Long Beach Craftsman bungalows with original ornamental brick fireplaces, a sweep visit is also the right opportunity to assess the firebox and smoke chamber condition — these original masonry systems are now several decades old and sometimes show wear that is worth addressing before an active burning season.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Annual sweep for Long Beach homes</p>
                <p className="text-gray-300 text-sm mb-4">We serve Belmont Shore, Naples, Signal Hill, Bixby Knolls, North Long Beach, Downtown, and surrounding neighborhoods.</p>
                <Link href="/contact/" className="btn-primary inline-block">Request Free Estimate</Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Chimney Sweep (All California)", href: "/services/chimney-sweep/" },
                    { name: "Chimney Cleaning in Long Beach", href: "/areas/long-beach/chimney-cleaning/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Creosote Removal", href: "/services/creosote-removal/" },
                    { name: "Chimney Blockage Removal", href: "/services/chimney-blockage-removal/" },
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
              <LeadForm heading="Get a Free Estimate" subheading="Chimney sweep in Long Beach. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Long Beach</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/long-beach/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/long-beach/chimney-repair/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Sweep Long Beach — FAQ" addSchema={false} />
      <CTABanner heading="Schedule a chimney sweep in Long Beach" />
    </>
  );
}
