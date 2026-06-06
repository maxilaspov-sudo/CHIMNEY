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
  title: "Fireplace Repair Anaheim | Gas & Factory-Built Fireplace Service",
  description:
    "Fireplace repair in Anaheim for gas ignition problems, refractory panel damage, factory-built system components, smoke issues, and broken dampers. Orange County service.",
  alternates: { canonical: "/areas/anaheim/fireplace-repair/" },
  openGraph: {
    title: "Fireplace Repair Anaheim | Gas & Factory-Built Fireplace Service",
    description:
      "Fireplace repair in Anaheim for gas ignition problems, refractory panel damage, factory-built system components, and smoke issues.",
    url: `${SITE.baseUrl}/areas/anaheim/fireplace-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fireplace Repair Anaheim | Gas & Factory-Built Fireplace Service",
    description: "Fireplace repair in Anaheim — gas log inserts, factory-built systems, refractory panels, ignition service. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What are the most common fireplace repairs in Anaheim?",
    a: "In Anaheim, the most common fireplace repairs are: cracked or spalled refractory panels in factory-built systems (a natural result of thermal cycling in systems now 30+ years old), gas ignition failures including pilot outages and thermocouple replacement, and damper issues ranging from dampers that stick open or closed to dampers that no longer seal. For older masonry fireplaces in Colony Historic District and West Anaheim, firebox refractory mortar wear and smoke chamber deterioration are common findings.",
  },
  {
    q: "My Anaheim gas fireplace won&apos;t ignite — what does repair involve?",
    a: "Gas fireplace ignition failures in Anaheim most commonly trace to a failed thermocouple or thermopile, a dirty or clogged pilot orifice, or a faulty igniter. Southern California&apos;s dry season means unused gas fireplaces accumulate dust and spider webs in the burner assembly and pilot orifice over the months between uses. In many cases the fix is cleaning plus one component replacement. We diagnose before recommending parts.",
  },
  {
    q: "When do cracked refractory panels need to be replaced?",
    a: "Small hairline cracks in refractory panels are normal and do not require immediate replacement. Panels need replacement when cracks extend through the full panel thickness, when chunks of panel material are missing or loose, or when the surface is significantly spalled. Cracked-through panels allow heat to reach the factory-built unit&apos;s combustible framing — continuing to use a fireplace with through-cracked panels is a safety concern.",
  },
  {
    q: "Do you repair gas log inserts in Anaheim?",
    a: "Yes. Gas log inserts are very common throughout Anaheim and Orange County — many homeowners converted their wood-burning factory-built fireplaces to gas logs following SCAQMD restrictions. Common gas log insert repairs include: thermocouple and igniter replacement, burner port cleaning (Central Valley dust and Orange County dry-season particulate accumulate in burner ports), and gas valve service for older units.",
  },
  {
    q: "Can you diagnose why smoke is entering the room from my Anaheim fireplace?",
    a: "Yes. Smoke entering the room from an Anaheim fireplace has several possible causes: a blocked or partially blocked flue (bird nest, debris from the dry season), a damaged or stuck damper, an undersized flue relative to the fireplace opening, or negative pressure in the home (common in tightly sealed newer construction). We identify the specific cause before recommending a repair — the fix for each is different.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fireplace Repair Anaheim",
  serviceType: "Fireplace Repair",
  description: "Fireplace repair in Anaheim for gas ignition problems, refractory panel damage, factory-built system components, and smoke issues.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: { "@type": "PostalAddress", addressLocality: "Anaheim", addressRegion: "CA", addressCountry: "US" },
  },
  areaServed: { "@type": "City", name: "Anaheim" },
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

export default function FireplaceRepairAnaheimPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/areas/" },
            { label: "Anaheim", href: "/areas/anaheim/" },
            { label: "Fireplace Repair" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Technician diagnosing and repairing a gas fireplace insert in an Anaheim home" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Anaheim
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Fireplace Repair in Anaheim, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Gas and factory-built fireplace repair for Anaheim homes — ignition failures, refractory panel damage, gas log inserts, and aging zero-clearance systems approaching their design life.
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
                  Anaheim&apos;s housing stock has one of the highest concentrations of factory-built zero-clearance fireplaces in California. The 1970s through 1990s construction boom across Orange County meant these systems were installed by the thousands in new tract homes. Many are now 30 or more years old — at the upper end of their manufacturers&apos; design life. The most common issue at this age is refractory panel deterioration from decades of thermal cycling.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Gas fireplace systems and gas log inserts are also very common in Anaheim, particularly in homes where wood-burning was converted following SCAQMD restrictions. These systems have their own maintenance needs. Southern California&apos;s dry season leaves gas pilot assemblies and burner ports exposed to dust and spider activity during the months the fireplace sits unused — a{" "}
                  <Link href="/services/fireplace-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">fireplace inspection</Link>{" "}
                  before the first use of the season is appropriate.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Common Fireplace Problems in Anaheim</h2>
                <ul className="space-y-3">
                  {[
                    { title: "Cracked or spalled refractory panels", desc: "Factory-built fireplace refractory panels in 30+ year old Anaheim systems show wear from thermal cycling. Surface hairline cracks are normal; panels cracked through the full thickness need replacement before the system is used." },
                    { title: "Gas ignition failure — pilot won&apos;t stay lit", desc: "A thermocouple or thermopile that no longer holds the pilot on is one of the most common gas fireplace repair calls in Anaheim. Southern California&apos;s dry season also deposits dust and debris in pilot orifices during the months the fireplace sits unused." },
                    { title: "Gas log insert service", desc: "Gas log inserts converted from wood-burning factory-built systems need periodic maintenance — burner port cleaning, thermocouple inspection, and igniter checks are the common service items for these units." },
                    { title: "Damper failure — won&apos;t open or seal", desc: "A damper that no longer opens reduces draft and can cause smoke to enter the room. A damper that does not seal allows conditioned air to escape in summer and cold air infiltration in winter." },
                    { title: "Smoke in the room", desc: "In Anaheim&apos;s newer construction, negative pressure from tight building envelopes can cause smoke to backdraft into the room. In older homes, a blocked flue or deteriorated smoke chamber are the more common causes." },
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
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Gas Fireplace Repair in Anaheim</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <Link href="/services/gas-fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">Gas fireplace repair</Link>{" "}
                  in Anaheim frequently involves systems that have not been regularly maintained. A gas fireplace that has worked reliably for years and then suddenly stops igniting usually has a single component failure — thermocouple, thermopile, or igniter — that is straightforward to diagnose and replace.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Gas fireplaces in Anaheim that have not been used for a season should be inspected before lighting. Spiders and other insects commonly nest in burner ports and pilot orifices in Southern California — a gas fireplace that has sat unused through the summer may have obstructions that need to be cleared before ignition.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Anaheim fireplace repair service</p>
                <p className="text-gray-300 text-sm mb-4">Describe the problem — ignition failure, smoke, refractory crack, damper — when requesting an estimate. We serve Anaheim, Anaheim Hills, Colony Historic District, Brookhurst, West Anaheim, and surrounding areas.</p>
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
                    { name: "Chimney Sweep in Anaheim", href: "/areas/anaheim/chimney-sweep/" },
                    { name: "Anaheim service area", href: "/areas/anaheim/" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors">
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm heading="Get a Free Estimate" subheading="Fireplace repair in Anaheim. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Anaheim</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/anaheim/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/anaheim/chimney-repair/" },
                    { name: "Chimney Sweep", href: "/areas/anaheim/chimney-sweep/" },
                    { name: "Dryer Vent Cleaning", href: "/areas/anaheim/dryer-vent-cleaning/" },
                    { name: "All Anaheim Services", href: "/areas/anaheim/" },
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

      <FAQSection faqs={FAQS} heading="Fireplace Repair Anaheim — FAQ" addSchema={false} />
      <CTABanner heading="Schedule fireplace repair in Anaheim" />
    </>
  );
}
