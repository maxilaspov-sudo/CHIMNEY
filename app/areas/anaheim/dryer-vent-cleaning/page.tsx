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
  title: "Dryer Vent Cleaning Anaheim | Lint & Airflow Service",
  description:
    "Dryer vent cleaning in Anaheim for lint buildup, clogged dryer vents, poor airflow, overheating dryers, and long drying times. Orange County residential service.",
  alternates: { canonical: "/areas/anaheim/dryer-vent-cleaning/" },
  openGraph: {
    title: "Dryer Vent Cleaning Anaheim | Lint & Airflow Service",
    description:
      "Dryer vent cleaning in Anaheim for lint buildup, clogged dryer vents, poor airflow, and overheating dryers.",
    url: `${SITE.baseUrl}/areas/anaheim/dryer-vent-cleaning/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dryer Vent Cleaning Anaheim | Lint & Airflow Service",
    description: "Dryer vent cleaning in Anaheim — lint removal, airflow restoration, summer heat attic ducts. Free estimate.",
  },
};

const FAQS = [
  {
    q: "How often should I clean dryer vents in Anaheim?",
    a: "Once per year is appropriate for most Anaheim households. Southern California&apos;s dry season means lint in Anaheim vents tends to be drier than in coastal areas, but dry lint still accumulates. Homes that do many loads per week, or homes where the dryer duct runs through an attic space that reaches high temperatures in summer, should consider twice-yearly cleaning.",
  },
  {
    q: "What are the signs that my Anaheim dryer vent needs cleaning?",
    a: "Clothes taking more than one full cycle to dry, the dryer running hot to the touch during operation, a burning smell at any point during the cycle, the dryer shutting off before the cycle completes, or reduced airflow at the exterior vent cap. In Anaheim, exterior vent caps can also accumulate dust from the dry season and should be checked for debris during each cleaning visit.",
  },
  {
    q: "Does summer heat affect dryer vents in Anaheim?",
    a: "Yes. Anaheim attic temperatures can exceed 140°F in summer. Dryer ducts routed through attic spaces in these conditions are under additional thermal stress, and any lint restriction that reduces airflow raises the temperature inside the duct further. This combination makes attic-routed dryer ducts in Anaheim&apos;s hot summers a higher-priority maintenance item than in milder climates.",
  },
  {
    q: "How is dryer vent cleaning done?",
    a: "We use a rotary brush to clean the full duct run from the dryer connection to the exterior cap, combined with high-powered vacuum extraction at the dryer end to capture all dislodged lint. We also inspect the flexible connector between the dryer and the wall duct for kinks or loose connections, check the exterior cap for obstructions or bird nesting, and confirm measurable airflow at the exterior termination before completing the visit.",
  },
  {
    q: "Can dryer vent cleaning reduce my Anaheim electricity bill?",
    a: "Yes. A restricted dryer vent forces longer cycle times to dry the same load — some Orange County households running restricted vents use 30–40% more energy per load than they would with a clear vent. Cleaning restores proper airflow and the efficiency the dryer was designed for. The reduction in cycle time also extends the appliance lifespan.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dryer Vent Cleaning Anaheim",
  serviceType: "Dryer Vent Cleaning",
  description: "Dryer vent cleaning in Anaheim for lint buildup, clogged dryer vents, poor airflow, and overheating dryers.",
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

export default function DryerVentCleaningAnaheimPage() {
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
            { label: "Dryer Vent Cleaning" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Technician providing dryer vent cleaning service in an Anaheim residential home" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Anaheim
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Dryer Vent Cleaning in Anaheim, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Lint removal and airflow restoration for Anaheim homes. Annual dryer vent cleaning keeps the appliance safe and efficient — particularly important where ducts run through attic spaces.
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
                  Anaheim&apos;s single-family tract homes — many built during the housing expansion of the 1970s through 1990s — commonly have dryer ducts routed through attic spaces. Anaheim attics reach 140°F or higher during summer. A dryer duct running through an attic at those temperatures, when restricted by lint, raises the operating temperature inside the duct significantly. Annual cleaning reduces this risk and restores the airflow the dryer was designed to operate within.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Southern California&apos;s dry season also contributes particulate accumulation at exterior vent caps. Dust from Orange County&apos;s dry months deposits at and around the cap opening, and should be checked and cleared during each cleaning visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Signs Your Dryer Vent Needs Cleaning</h2>
                <ul className="space-y-2">
                  {[
                    "Clothes take more than one full cycle to dry completely",
                    "The dryer exterior feels hot during operation",
                    "A burning smell occurs at any point during the drying cycle",
                    "The dryer shuts off before the cycle ends",
                    "Airflow at the exterior vent cap is weak or absent when the dryer is running",
                    "The laundry room is warmer than usual when the dryer is running",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" className="shrink-0 mt-1" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Dryer Vent Cleaning Includes</h2>
                <ul className="space-y-3">
                  {[
                    { title: "Rotary brush cleaning, full duct length", desc: "From the dryer connection through the full duct run to the exterior cap, including any bends or attic sections." },
                    { title: "Vacuum extraction at the dryer end", desc: "All dislodged lint is captured — not deposited in the room or left in the duct." },
                    { title: "Exterior cap inspection and clearing", desc: "Cap cleared of lint, dust, and any bird or insect nesting. We confirm the damper opens freely when the dryer runs." },
                    { title: "Duct connection and flexible connector check", desc: "The flexible connector between the dryer and the wall duct is checked for kinks, crushing, or loose connections." },
                    { title: "Airflow confirmation at exterior termination", desc: "We verify measurable airflow at the exterior cap before completing the visit." },
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

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Schedule dryer vent cleaning in Anaheim</p>
                <p className="text-gray-300 text-sm mb-4">We serve Anaheim, Anaheim Hills, Colony Historic District, Brookhurst, West Anaheim, and surrounding Orange County neighborhoods.</p>
                <Link href="/contact/" className="btn-primary inline-block">Request Free Estimate</Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Dryer Vent Cleaning (All California)", href: "/services/dryer-vent-cleaning/" },
                    { name: "Dryer Vent Blockage Removal", href: "/services/dryer-vent-blockage-removal/" },
                    { name: "Dryer Vent Lint Removal", href: "/services/dryer-vent-lint-removal/" },
                    { name: "Chimney Cleaning in Anaheim", href: "/areas/anaheim/chimney-cleaning/" },
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
              <LeadForm heading="Get a Free Estimate" subheading="Dryer vent cleaning in Anaheim. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Anaheim</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/anaheim/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/anaheim/chimney-repair/" },
                    { name: "Chimney Sweep", href: "/areas/anaheim/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/anaheim/fireplace-repair/" },
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

      <FAQSection faqs={FAQS} heading="Dryer Vent Cleaning Anaheim — FAQ" addSchema={false} />
      <CTABanner heading="Schedule dryer vent cleaning in Anaheim" />
    </>
  );
}
