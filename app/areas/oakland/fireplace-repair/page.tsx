import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/Gas-fireplace-repair.jpg";

export const metadata: Metadata = {
  title: "Fireplace Repair Oakland | Gas & Wood Fireplace Service",
  description:
    "Fireplace repair in Oakland for smoke problems, damaged fireboxes, gas fireplace issues, poor draft, broken dampers, and fireplace safety concerns.",
  alternates: { canonical: "/areas/oakland/fireplace-repair/" },
  openGraph: {
    title: "Fireplace Repair Oakland | Gas & Wood Fireplace Service",
    description:
      "Fireplace repair in Oakland for smoke problems, damaged fireboxes, gas fireplace issues, poor draft, and broken dampers.",
    url: `${SITE.baseUrl}/areas/oakland/fireplace-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fireplace Repair Oakland | Gas & Wood Fireplace Service",
    description: "Fireplace repair in Oakland — gas and wood-burning, smoke issues, older masonry, damper repair. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What are common fireplace repair problems in Oakland homes?",
    a: "Oakland&apos;s older housing stock — particularly pre-1950 bungalows and craftsman homes in Rockridge, Temescal, and the flatlands — presents specific fireplace issues: deteriorated refractory mortar in the firebox from decades of use, smoke chamber geometry that was never ideal in original Victorian-era designs, dampers that have corroded in Oakland&apos;s Bay Area moisture environment, and clay tile liner cracks that affect draft performance.",
  },
  {
    q: "Why is smoke coming back into my room?",
    a: "In Oakland, smoke backdraft can trace to several causes. Older fireplace designs sometimes have smoke chamber profiles that produce turbulent draft even when the system is structurally sound — a smoke chamber parge coat can improve this. A blocked flue (bird nests are common in chimneys that have not been used in years), a stuck damper, or a recently renovated home with tightened air sealing that creates negative pressure are also common contributors. We diagnose the actual cause before recommending a fix.",
  },
  {
    q: "Can a cracked firebox be repaired in an Oakland home?",
    a: "Yes. Cracked refractory mortar joints in the firebox can be patched with refractory-rated material. In Oakland&apos;s older masonry fireplaces, this is a routine repair that extends the firebox life considerably. More significant damage — spalled firebrick or deterioration extending to the backing material — may require partial refacing of the firebox interior.",
  },
  {
    q: "Do you repair gas fireplaces in Oakland?",
    a: "Yes. Gas fireplaces in Oakland range from older conversions installed in original masonry fireplaces to newer direct-vent units in more recent construction. Common repairs include thermocouple replacement, pilot assembly service, gas valve diagnosis, and burner cleaning. Oakland&apos;s Bay Area humidity can accelerate corrosion of pilot assemblies and metal gas components in fireplaces that see infrequent use.",
  },
  {
    q: "Is fireplace repair connected to chimney repair?",
    a: "Often. In Oakland&apos;s older homes, fireplace symptoms — smoke entering the room, draft problems, persistent odor — frequently trace back to the chimney system above rather than the firebox itself. A damaged smoke chamber, cracked clay liner, or blocked flue will present as a fireplace problem but require chimney repair to resolve. A full system assessment is the right starting point.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fireplace Repair Oakland",
  serviceType: "Fireplace Repair",
  description: "Fireplace repair in Oakland for smoke problems, damaged fireboxes, gas fireplace issues, poor draft, and broken dampers.",
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

export default function FireplaceRepairOaklandPage() {
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
            { label: "Fireplace Repair" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Technician repairing a gas fireplace insert and burner system in an Oakland home" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Oakland
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Fireplace Repair in Oakland, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Gas and wood-burning fireplace repair for Oakland&apos;s older bungalows, craftsman homes, and East Bay flats — smoke problems, cracked fireboxes, gas ignition, and damper issues.
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
                  Oakland&apos;s older homes have fireplaces that are worth repairing and maintaining — the original masonry in a 1930s Rockridge bungalow or a 1910 Temescal craftsman is genuinely durable material that can continue functioning well with appropriate care. The common repair needs are age-related: deteriorated mortar, corroded dampers, and smoke chambers that benefit from professional maintenance.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  For any Oakland fireplace that has not been inspected recently, a{" "}
                  <Link href="/services/fireplace-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">fireplace inspection</Link>{" "}
                  before a targeted repair visit identifies the actual scope of work needed. Oakland&apos;s older homes sometimes have fireplace conditions that are not apparent without a thorough inspection — particularly in homes that changed ownership recently.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Common Fireplace Problems in Oakland</h2>
                <ul className="space-y-3">
                  {[
                    { title: "Smoke entering the room", desc: "Caused by atmospheric pressure in tightly renovated homes, old smoke chamber geometry in original fireplace designs, stuck or corroded dampers, or a blocked flue. We identify the actual cause." },
                    { title: "Deteriorated firebox refractory mortar", desc: "Decades of thermal cycling in Oakland&apos;s older masonry fireplaces causes mortar joint deterioration. Patching with refractory mortar is a routine repair." },
                    { title: "Corroded or stuck damper", desc: "Oakland&apos;s Bay Area humidity accelerates corrosion of cast iron damper assemblies. A damper that will not open or close properly is a safety and draft issue." },
                    { title: "Gas fireplace ignition problems", desc: "Thermocouple wear, pilot assembly corrosion from humidity, and gas valve issues are the most common gas fireplace repairs in Oakland homes." },
                    { title: "Smoke chamber deterioration", desc: "In older Oakland fireplaces with original stepped smoke chamber profiles, parging the chamber surface improves draft and reduces smoking problems." },
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
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Gas Fireplace Repair in Oakland</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Gas fireplaces in Oakland range from mid-century gas log sets installed in original masonry fireplaces to newer direct-vent inserts in more recently renovated properties.{" "}
                  <Link href="/services/gas-fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">Gas fireplace repair</Link>{" "}
                  most often involves thermocouple or thermopile replacement, pilot assembly cleaning or replacement, and gas valve diagnosis.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Oakland&apos;s maritime humidity is harder on metal gas components than drier inland climates. Pilot assemblies and gas valve bodies on fireplaces that see infrequent use are particularly susceptible to corrosion. We check these components on every gas fireplace service visit.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Fireplace giving you trouble?</p>
                <p className="text-gray-300 text-sm mb-4">Describe the problem — smoke, ignition, smell, or visible damage — when requesting an estimate. We serve Rockridge, Temescal, Montclair, Fruitvale, and all Oakland neighborhoods.</p>
                <Link href="/contact/" className="btn-primary inline-block">Request Free Estimate</Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Fireplace Repair (All California)", href: "/services/fireplace-repair/" },
                    { name: "Gas Fireplace Repair", href: "/services/gas-fireplace-repair/" },
                    { name: "Wood Fireplace Repair", href: "/services/wood-fireplace-repair/" },
                    { name: "Fireplace Inspection", href: "/services/fireplace-inspection/" },
                    { name: "Chimney Damper Repair", href: "/services/chimney-damper-repair/" },
                    { name: "Smoke Chamber Repair", href: "/services/smoke-chamber-repair/" },
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
              <LeadForm heading="Get a Free Estimate" subheading="Fireplace repair in Oakland. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Oakland</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/oakland/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/oakland/chimney-repair/" },
                    { name: "Chimney Sweep", href: "/areas/oakland/chimney-sweep/" },
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

      <FAQSection faqs={FAQS} heading="Fireplace Repair Oakland — FAQ" addSchema={false} />
      <CTABanner heading="Schedule fireplace repair in Oakland" />
    </>
  );
}
