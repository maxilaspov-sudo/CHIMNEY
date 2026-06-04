import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import TrustBadges from "@/components/TrustBadges";
import { SITE, NAV_SERVICES, NAV_AREAS } from "@/lib/constants";
import { californiaRegions } from "@/lib/regions";
import { areas } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Chimney Services in California | Statewide Coverage | Chimney Peak California",
  description:
    "Chimney cleaning, repair, and inspection across all of California. Serving Southern California, Bay Area, Central Valley, and 120+ cities statewide. CSIA-certified.",
  alternates: { canonical: "/areas/california/" },
  openGraph: {
    title: "Chimney Services in California | Chimney Peak California",
    description:
      "Chimney cleaning, repair, and inspection statewide. Southern California, Bay Area, Central Valley, and 120+ cities. CSIA-certified.",
    url: "/areas/california/",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
};

const CALIFORNIA_FAQS = [
  {
    q: "Do you serve all of California?",
    a: "We serve all major California metro areas — Southern California (Los Angeles, San Diego, Orange County, Inland Empire), the Bay Area (San Francisco, San Jose, Oakland), the Central Valley (Sacramento, Fresno, Bakersfield, Stockton, Modesto), the Central Coast (Santa Barbara), and Wine Country (Santa Rosa). If your city is not listed, call us to confirm availability.",
  },
  {
    q: "Why do California chimneys need annual inspection?",
    a: "California's climate diversity creates distinct chimney maintenance needs. Coastal salt air corrodes metal components faster than inland areas. Earthquake activity — particularly in the Bay Area and LA Basin — cracks flue liners in ways that standard home inspectors miss. Wildfire risk in Eastern Southern California, the Oakland Hills, and Wine Country makes spark-arrestor caps and clean flues a fire-safety requirement, not just a maintenance preference. The NFPA 211 standard requires annual inspection for any chimney in use.",
  },
  {
    q: "Are you familiar with California building codes for chimney work?",
    a: "Yes. California follows the Uniform Mechanical Code and CBC Title 24 for fireplace and chimney installations. Our technicians are familiar with local permit requirements for liner replacement and cap installation. We also know the BAAQMD (Bay Area), SCAQMD (Southern California), and SJVAPCD (Central Valley) wood-burning regulations that affect which days clients can legally burn.",
  },
  {
    q: "How do California air quality rules affect my chimney?",
    a: "The BAAQMD, SCAQMD, and SJVAPCD each issue 'Spare the Air' or wood-burning curtailment notices on high-pollution days. Wood burning on those days is illegal. Many California homeowners have converted wood-burning fireplaces to gas inserts as a result — which still require annual inspection for carbon monoxide safety and vent integrity.",
  },
  {
    q: "How quickly can I get an appointment in California?",
    a: "Most California customers get an appointment within 3 business days. During peak season (October–February) and in Bay Area markets, lead times may extend to 5–7 days. Real estate transaction inspections receive priority scheduling.",
  },
  {
    q: "Do you provide Level 2 inspections for California home sales?",
    a: "Yes. We provide NFPA 211 Level 2 chimney inspections for real estate transactions throughout California. Our written reports include the technician's CSIA certification number and are accepted by all major California lenders, escrow companies, and insurers. Same-day report delivery is available for time-sensitive closings.",
  },
];

const CLIMATE_ZONES = [
  {
    zone: "Coastal California",
    risk: "Salt-air corrosion",
    note: "Marine air corrodes stainless caps and dampers 2–3× faster than inland. 316L marine-grade stainless recommended for all coastal properties.",
    cities: ["Santa Monica", "Long Beach", "Santa Barbara"],
  },
  {
    zone: "Bay Area",
    risk: "Earthquake damage + BAAQMD rules",
    note: "Seismic activity cracks clay flue liners in ways hidden to the naked eye. Level 2 camera inspection recommended for any pre-1990 Bay Area home.",
    cities: ["San Francisco", "Oakland", "San Jose"],
  },
  {
    zone: "Central Valley",
    risk: "Tule fog moisture + heavy wood burning",
    note: "Persistent winter fog and heavy wood-burning seasons deposit creosote faster than coastal areas. Semi-annual cleaning recommended for high-use households.",
    cities: ["Sacramento", "Fresno", "Stockton", "Modesto", "Bakersfield"],
  },
  {
    zone: "Inland Southern California",
    risk: "Santa Ana winds + wildfire ember exposure",
    note: "Santa Ana wind events draft unusual amounts of air through flues, accelerating creosote drying. Uncapped chimneys are a significant fire risk during red-flag conditions.",
    cities: ["Riverside", "Anaheim", "Pasadena", "Glendale"],
  },
  {
    zone: "Wine Country",
    risk: "Post-wildfire rebuild + cold rainy winters",
    note: "Post-2017 Tubbs Fire rebuilds created thousands of new fireplace installations. Those systems are now reaching the 5-year mark for their first formal inspection.",
    cities: ["Santa Rosa"],
  },
];

const areasBySlug = Object.fromEntries(areas.map((a) => [a.slug, a]));

export default function CaliforniaPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: SITE.name,
    url: `${SITE.baseUrl}/areas/california/`,
    email: SITE.email,
    logo: `${SITE.baseUrl}/favicon.svg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "State",
      name: "California",
    },
    priceRange: "$$",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "17:00" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.googleRating,
      reviewCount: SITE.reviewCount,
      bestRating: "5",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Chimney Peak California",
      itemListElement: NAV_SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: `${SITE.baseUrl}${s.href}`,
        },
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/areas/" },
              { label: "California" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[460px] md:min-h-[540px] flex items-center overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/19309671/pexels-photo-19309671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Charming California suburban street with mid-century homes — chimney services across California"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/90 via-[#0F2238]/75 to-[#0F2238]/20" />
        <div className="relative container-base py-14">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Statewide · All of California
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 leading-tight">
              Chimney Services<br />Across California
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              CSIA-certified chimney cleaning, repair, and inspection from San Diego to Santa Rosa.
              Same-week appointments. Written reports. Flat pricing statewide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link href="/contact/" className="btn-primary">
                Request Free Estimate
              </Link>
              <a href="#estimate-form" className="btn-secondary">
                Get Online Quote
              </a>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-gray-300">
              <span className="flex items-center gap-1"><CheckIcon /> CSIA Certified</span>
              <span className="flex items-center gap-1"><CheckIcon /> 120+ Cities</span>
              <span className="flex items-center gap-1"><CheckIcon /> {SITE.googleRating}★ Rated</span>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* California chimney landscape */}
      <section className="section-pad bg-white">
        <div className="container-base">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-4">
                Why California Chimneys Need Professional Service
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  California has more than 1.2 million wood-burning fireplaces — second only to the northeastern US — yet the state&apos;s mild reputation leads many homeowners to skip annual maintenance. That&apos;s a mistake. California&apos;s diverse climate creates conditions that damage chimneys faster than most other states.
                </p>
                <p>
                  Coastal salt air corrodes metal components at 2–3× the rate seen in dry inland areas. Bay Area seismic activity cracks clay flue liners in ways that home inspectors routinely miss. Central Valley Tule fog deposits moisture into masonry for months at a time, accelerating mortar joint failure. And wildfire risk makes an uncapped, unswept chimney a genuine liability in high-fire-risk zones.
                </p>
                <p>
                  Add the BAAQMD, SCAQMD, and SJVAPCD wood-burning restrictions — and the legal and safety complexity of California chimney ownership becomes clear. We understand all of it. Our technicians are trained in California-specific code requirements, regional air quality rules, and the structural failure patterns common to each California climate zone.
                </p>
              </div>
            </div>

            {/* Climate zone quick-ref */}
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-bold text-[#1E3A5F]">California Climate Zones — Chimney Risk Profile</h3>
              {CLIMATE_ZONES.map((z) => (
                <div key={z.zone} className="border border-gray-100 rounded-xl p-4 bg-gray-50">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <p className="font-semibold text-gray-900 text-sm">{z.zone}</p>
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full shrink-0 font-medium">
                      {z.risk}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-2">{z.note}</p>
                  <div className="flex flex-wrap gap-1">
                    {z.cities.map((c) => (
                      <span key={c} className="text-xs bg-white border border-gray-200 px-2 py-0.5 rounded-full text-gray-600">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container-base">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-2 text-center">
            Chimney Services Available Statewide
          </h2>
          <p className="text-gray-500 text-center mb-8 max-w-xl mx-auto">
            Every service is available across our full California dispatch area.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {NAV_SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-white border border-gray-100 hover:border-orange-200 hover:shadow-sm rounded-xl p-5 transition-all"
              >
                <div className="w-9 h-9 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-900 text-sm group-hover:text-orange-500 transition-colors mb-1">
                  {s.name}
                </p>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  View in California
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All cities by region */}
      <section className="section-pad bg-white">
        <div className="container-base">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-2 text-center">
            Cities We Serve Across California
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Click any city to see local pricing, chimney insights, and available appointments.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {californiaRegions.map((region) => {
              const regionCities = region.counties
                .flatMap((c) => c.cities)
                .map((slug) => areasBySlug[slug])
                .filter(Boolean);
              return (
                <div key={region.name} className="bg-[#F8FAFC] rounded-2xl border border-gray-100 p-5">
                  <h3 className="font-bold text-[#1E3A5F] text-base mb-1">{region.name}</h3>
                  <p className="text-xs text-gray-400 mb-4">{regionCities.length} cities</p>
                  <ul className="flex flex-col gap-1.5">
                    {regionCities.map((city) => (
                      <li key={city.slug}>
                        <Link
                          href={`/areas/${city.slug}/`}
                          className="flex items-center justify-between text-sm text-gray-700 hover:text-orange-500 transition-colors group py-0.5"
                        >
                          <span className="flex items-center gap-1.5">
                            <span className="w-1 h-1 bg-orange-400 rounded-full"></span>
                            {city.name}
                          </span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link href="/areas/" className="btn-outline">
              View Full Service Area Map
            </Link>
          </div>
        </div>
      </section>

      {/* Counties — now linked */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container-base">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2 text-center">
            California Counties We Cover
          </h2>
          <p className="text-gray-500 text-center mb-8 max-w-lg mx-auto text-sm">
            Click any county for local service details, city listings, climate context, and direct scheduling.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {californiaRegions.flatMap((r) => r.counties).map((county) =>
              county.hasPage ? (
                <Link
                  key={county.name}
                  href={`/areas/${county.slug}/`}
                  className="group bg-white border border-orange-100 hover:border-orange-300 hover:bg-orange-50 rounded-xl px-4 py-3 text-center transition-all"
                >
                  <p className="text-sm font-semibold text-orange-700 group-hover:text-orange-800 leading-tight">
                    {county.name}
                  </p>
                  <p className="text-xs text-orange-400 mt-0.5">View county →</p>
                </Link>
              ) : (
                <div
                  key={county.name}
                  className="bg-white border border-gray-100 rounded-xl px-4 py-3 text-center"
                >
                  <p className="text-sm font-medium text-gray-700 leading-tight">{county.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {county.cities.length} {county.cities.length === 1 ? "city" : "cities"}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Lead form + sidebar */}
      <section className="section-pad bg-white" id="estimate">
        <div className="container-base">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-4">
                Schedule Chimney Service in California
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Fill out the form and we&apos;ll call you within 2 business hours with a flat price quote for your California location.
              </p>

              {/* Quick trust points */}
              <div className="space-y-3 mb-6">
                {[
                  { label: "CSIA-certified technician dispatched to your address" },
                  { label: "Flat pricing — quoted before we arrive" },
                  { label: "Written NFPA 211 inspection report included" },
                  { label: `Same-week availability in most California cities` },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon color="#16a34a" />
                    </div>
                    <span className="text-sm text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 text-sm text-orange-800">
                <strong>Prefer email?</strong>{" "}
                <a href={`mailto:${SITE.email}`} className="font-bold underline underline-offset-2 break-all">
                  {SITE.email}
                </a>{" "}
                — Mon–Fri 7am–7pm, Sat 8am–5pm.
              </div>
            </div>
            <LeadForm
              heading="Get a Free California Estimate"
              subheading="We respond within 2 hours during business hours."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={CALIFORNIA_FAQS}
        heading="California Chimney Service FAQ"
        addSchema={true}
      />

      <CTABanner heading="Serving California homeowners since 2009" subtext="CSIA-certified. Licensed. Same-week scheduling statewide." />

      {/* Bottom internal links */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="container-base">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">All Services in California</h3>
              <ul className="grid grid-cols-2 gap-1.5">
                {NAV_SERVICES.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="text-xs text-gray-500 hover:text-orange-500 transition-colors flex items-center gap-1">
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">All California Cities</h3>
              <ul className="grid grid-cols-2 gap-1.5">
                {NAV_AREAS.filter((a) => a.href !== "/areas/california/").map((a) => (
                  <li key={a.href}>
                    <Link href={a.href} className="text-xs text-gray-500 hover:text-orange-500 transition-colors flex items-center gap-1">
                      <span className="text-orange-400">›</span> {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CheckIcon({ color = "currentColor" }: { color?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

