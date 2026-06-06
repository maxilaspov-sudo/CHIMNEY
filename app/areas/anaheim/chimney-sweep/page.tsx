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
  title: "Chimney Sweep Anaheim | Chimney & Fireplace Service",
  description:
    "Professional chimney sweep service in Anaheim for creosote removal, soot buildup, fireplace cleaning, and SCAQMD season preparation. Factory-built and masonry chimney service.",
  alternates: { canonical: "/areas/anaheim/chimney-sweep/" },
  openGraph: {
    title: "Chimney Sweep Anaheim | Chimney & Fireplace Service",
    description:
      "Professional chimney sweep service in Anaheim for creosote removal, soot buildup, and SCAQMD season preparation.",
    url: `${SITE.baseUrl}/areas/anaheim/chimney-sweep/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Sweep Anaheim | Chimney & Fireplace Service",
    description: "Chimney sweep in Anaheim — factory-built systems, gas inserts, SCAQMD season prep. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What does a chimney sweep include in Anaheim?",
    a: "A chimney sweep in Anaheim includes full-length flue cleaning appropriate to the system type — rotary brush for masonry, appropriate technique for the metal liner in factory-built systems — smoke chamber and damper shelf cleaning, vacuum extraction at the firebox, and a NFPA 211 Level 1 inspection. For Anaheim homes with factory-built systems approaching 30 years of age, we pay particular attention to refractory panel condition and metal liner integrity during the inspection portion.",
  },
  {
    q: "How often should I schedule a chimney sweep in Anaheim?",
    a: "Once per year is the appropriate interval for Anaheim homes. Even gas fireplaces and gas log inserts benefit from annual inspection and liner clearing — spider webs and debris from Southern California&apos;s dry season accumulate in unused flues and need to be cleared before the first burn of the cooler months.",
  },
  {
    q: "When is the best time to schedule a chimney sweep in Anaheim?",
    a: "October is the ideal timing for most Anaheim homeowners — ahead of cooler evenings that prompt fireplace use, and after Southern California&apos;s dry season when the fireplace has been dormant. SCAQMD wood-burning restrictions in Orange County typically activate during certain weather conditions from October through February. Having a clean, inspected system before those restriction windows ensures you are ready to burn on every permitted day.",
  },
  {
    q: "Can a chimney sweep identify problems with a factory-built fireplace?",
    a: "Yes. The Level 1 inspection included with every sweep covers visible components of factory-built systems. Cracked or spalled refractory panels — the most common wear issue in 30+ year old factory-built fireplaces — are identified during the sweep visit. If the panels show significant deterioration, we will document the findings and explain the options.",
  },
  {
    q: "Do you sweep chimneys for gas log inserts in Anaheim?",
    a: "Yes. Gas log inserts are very common in Anaheim — many Anaheim homeowners converted from wood-burning to gas logs following SCAQMD restrictions. The liner still needs annual inspection and clearing even with gas combustion. The deposit types are different from wood burning, but debris, spider webs, and minor combustion deposits still accumulate and should be removed annually.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Sweep Anaheim",
  serviceType: "Chimney Sweep",
  description: "Professional chimney sweep service in Anaheim for creosote removal, soot buildup, and SCAQMD season preparation.",
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

export default function ChimneySweepAnaheimPage() {
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
            { label: "Chimney Sweep" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Chimney sweep technician cleaning a fireplace flue in an Anaheim home" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Anaheim
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Sweep in Anaheim, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Annual chimney sweep with NFPA 211 inspection for Anaheim homes — factory-built systems, gas log inserts, and masonry chimneys. SCAQMD season prep included.
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
                  Anaheim homeowners use their fireplaces less frequently than residents of colder climates, but annual chimney service is still the appropriate maintenance interval. Southern California&apos;s dry season means flues sit unused for months — and an unused flue accumulates spider webs, debris, and in some cases nesting material from birds and rodents seeking protected spaces. These need to be cleared before the first fire of the season.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  For Anaheim homes with factory-built systems installed in the 1980s or 1990s, the annual sweep visit is also the right time to assess refractory panel condition and overall system status. These systems are now at or near their 30-year design life, and the sweep visit with included{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">chimney inspection</Link>{" "}
                  is the appropriate annual maintenance.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What a Chimney Sweep Includes in Anaheim</h2>
                <ul className="space-y-3">
                  {[
                    { title: "Flue cleaning appropriate to system type", desc: "Rotary brush for masonry flues; appropriate technique for metal liners in factory-built systems. We match the equipment to the system to avoid damage to metal liner components." },
                    { title: "Smoke chamber and damper shelf", desc: "Soot and creosote in the smoke chamber contribute to both odors and poor draft. Both areas are cleaned on every sweep visit." },
                    { title: "Debris clearing for seasonal systems", desc: "Anaheim&apos;s dry summer means flues often accumulate spider webs, insect nests, and debris between burning seasons. All of this is removed before the cleaning portion begins." },
                    { title: "Level 1 inspection with written report", desc: "NFPA 211 Level 1 inspection of all accessible components, with a written report of findings and any recommendations." },
                    { title: "Refractory panel condition check", desc: "For factory-built systems, refractory panel condition is specifically assessed. Cracked-through panels are a safety concern that requires attention before the system is used." },
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
                <h2 className="text-2xl font-bold text-[#111827] mb-4">SCAQMD and Anaheim Burning Season</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Orange County falls under SCAQMD jurisdiction. Wood-burning restrictions activate on certain days from October through February when air quality conditions trigger a no-burn notice. Having a clean, inspected chimney before this period means you are ready to burn on every permitted day without last-minute scheduling concerns.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Gas fireplace and gas log insert systems are not subject to SCAQMD wood-burning restrictions. However, annual sweep and inspection is still appropriate — the liner still accumulates debris, and a system that has not been professionally inspected recently warrants a Level 1 check before the season.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Annual chimney sweep for Anaheim homes</p>
                <p className="text-gray-300 text-sm mb-4">We serve Anaheim, Anaheim Hills, Colony Historic District, Brookhurst, West Anaheim, Platinum Triangle, and surrounding Orange County neighborhoods.</p>
                <Link href="/contact/" className="btn-primary inline-block">Request Free Estimate</Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Chimney Sweep (All California)", href: "/services/chimney-sweep/" },
                    { name: "Chimney Cleaning in Anaheim", href: "/areas/anaheim/chimney-cleaning/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Creosote Removal", href: "/services/creosote-removal/" },
                    { name: "Chimney Repair in Anaheim", href: "/areas/anaheim/chimney-repair/" },
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
              <LeadForm heading="Get a Free Estimate" subheading="Chimney sweep in Anaheim. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Anaheim</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/anaheim/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/anaheim/chimney-repair/" },
                    { name: "Fireplace Repair", href: "/areas/anaheim/fireplace-repair/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Sweep Anaheim — FAQ" addSchema={false} />
      <CTABanner heading="Schedule a chimney sweep in Anaheim" />
    </>
  );
}
