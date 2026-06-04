import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";
import LeadForm from "@/components/LeadForm";
import { NAV_SERVICES, SITE } from "@/lib/constants";
import { californiaRegions } from "@/lib/regions";
import { areas } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Chimney Service Areas in California | Chimney Peak California",
  description:
    "CSIA-certified chimney cleaning, repair, and inspection across all of California. Serving Los Angeles, San Diego, San Francisco, Sacramento, and 120+ cities statewide.",
  alternates: { canonical: "/areas/" },
  openGraph: {
    title: "Chimney Service Areas in California | Chimney Peak California",
    description:
      "Find your California city. CSIA-certified chimney services in Southern California, Bay Area, Central Valley, Central Coast, and Wine Country.",
    url: "/areas/",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
};

const areasBySlug = Object.fromEntries(areas.map((a) => [a.slug, a]));
const cityCount = areas.filter((a) => a.slug !== "california").length;

export default function AreasIndexPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: SITE.name,
    url: `${SITE.baseUrl}/areas/`,
    areaServed: {
      "@type": "State",
      name: "California",
    },
    serviceArea: californiaRegions
      .flatMap((r) => r.counties)
      .flatMap((c) => c.cities)
      .map((slug) => areasBySlug[slug])
      .filter(Boolean)
      .map((a) => ({ "@type": "City", name: a.name, containedInPlace: { "@type": "State", name: "California" } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Service Areas" }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#1E3A5F] py-16 md:py-20">
        <div className="container-base">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-semibold px-4 py-2 rounded-full mb-5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s-8-7-8-12a8 8 0 1 1 16 0c0 5-8 12-8 12z" /><circle cx="12" cy="10" r="2" />
              </svg>
              Statewide California Coverage
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Chimney Services Across California
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed mb-6">
              CSIA-certified chimney cleaning, repair, and inspection in every major California city.
              Southern California to the Bay Area, Central Valley to the Coast.
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

      {/* At-a-glance stats */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="container-base">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: `${cityCount}`, label: "Cities Served" },
              { number: "6", label: "California Regions" },
              { number: "18+", label: "Counties Covered" },
              { number: `${SITE.googleRating}★`, label: "Average Rating" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-extrabold text-orange-500">{s.number}</p>
                <p className="text-sm text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions + Cities */}
      <section className="section-pad bg-white">
        <div className="container-base">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-3">
              Find Your California City
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Browse by region or jump directly to your city page for local chimney service information, pricing, and scheduling.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {californiaRegions.map((region) => {
              const regionCities = region.counties
                .flatMap((c) => c.cities)
                .map((slug) => areasBySlug[slug])
                .filter(Boolean);

              return (
                <div key={region.name}>
                  {/* Region header */}
                  <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6 pb-4 border-b border-gray-100">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1E3A5F] mb-1">{region.name}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">{region.description}</p>
                    </div>
                    <div className="shrink-0">
                      <span className="text-xs text-gray-400 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">
                        {regionCities.length} {regionCities.length === 1 ? "city" : "cities"} · {region.counties.length} {region.counties.length === 1 ? "county" : "counties"}
                      </span>
                    </div>
                  </div>

                  {/* County groupings */}
                  <div className="flex flex-col gap-6">
                    {region.counties.map((county) => {
                      const countyCities = county.cities
                        .map((slug) => areasBySlug[slug])
                        .filter(Boolean);
                      return (
                        <div key={county.name}>
                          {/* County header — linked if page exists */}
                          <div className="flex items-center gap-2 mb-3">
                            {county.hasPage ? (
                              <Link
                                href={`/areas/${county.slug}/`}
                                className="text-xs font-semibold text-orange-600 uppercase tracking-widest hover:underline flex items-center gap-1"
                              >
                                {county.name}
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                                </svg>
                              </Link>
                            ) : (
                              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                                {county.name}
                              </p>
                            )}
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {/* County page card (if page exists) */}
                            {county.hasPage && (
                              <Link
                                href={`/areas/${county.slug}/`}
                                className="group flex items-start gap-3 border border-orange-100 hover:border-orange-300 bg-orange-50 hover:bg-orange-100 rounded-xl p-4 transition-all duration-150"
                              >
                                <div className="w-8 h-8 bg-orange-200 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EA6C0A" strokeWidth="2.5">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                                  </svg>
                                </div>
                                <div className="min-w-0">
                                  <p className="font-bold text-orange-800 text-sm group-hover:text-orange-900 transition-colors leading-tight">
                                    All of {county.name}
                                  </p>
                                  <p className="text-xs text-orange-600 mt-0.5">County overview →</p>
                                </div>
                              </Link>
                            )}
                            {countyCities.map((city) => (
                              <Link
                                key={city.slug}
                                href={`/areas/${city.slug}/`}
                                className="group flex items-start gap-3 border border-gray-100 hover:border-orange-200 bg-white hover:bg-orange-50 rounded-xl p-4 transition-all duration-150"
                              >
                                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5">
                                    <path d="M12 22s-8-7-8-12a8 8 0 1 1 16 0c0 5-8 12-8 12z" /><circle cx="12" cy="10" r="2" />
                                  </svg>
                                </div>
                                <div className="min-w-0">
                                  <p className="font-semibold text-gray-900 text-sm group-hover:text-orange-600 transition-colors leading-tight">
                                    {city.name}
                                  </p>
                                  <p className="text-xs text-gray-400 mt-0.5 truncate">{city.region}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Counties served (future-ready section) */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container-base">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-4">
                California Counties Covered
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Our dispatch network covers the full California coast and Central Valley.
                If your city is not listed, call us — we may still be able to reach you depending on location.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {californiaRegions.flatMap((r) => r.counties).map((county) => (
                  <div key={county.name} className="flex items-center gap-1.5 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
                    {county.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-bold text-[#1E3A5F] mb-1">Don&apos;t see your city?</h3>
              <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                We cover a wider area than our current city pages. Submit a request and we&apos;ll confirm availability for your location.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/contact/" className="btn-primary justify-center">
                  Request Free Estimate
                </Link>
                <a href={`mailto:${SITE.email}`} className="btn-outline justify-center">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services we provide everywhere */}
      <section className="section-pad bg-white">
        <div className="container-base">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-3">
              Services Available in Every California City
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every CSIA-certified service we offer is available across our full California dispatch area.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {NAV_SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex items-center gap-3 border border-gray-100 rounded-xl p-4 hover:border-orange-200 hover:bg-orange-50 transition-all group"
              >
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors">
                  {s.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section className="section-pad bg-[#F8FAFC]" id="estimate">
        <div className="container-base">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-4">
                Get a Free Estimate in Your City
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Tell us your city and the service you need. We&apos;ll match you with an available CSIA-certified technician and call you within 2 business hours.
              </p>
              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <p className="text-sm font-semibold text-gray-900 mb-3">Why choose us statewide:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    "Same technician standards at every California location",
                    "Flat pricing — no regional markups",
                    "Written NFPA 211 inspection report on every sweep",
                    `${SITE.yearsInBusiness}+ years serving California homes`,
                    `${SITE.jobsCompleted} jobs completed statewide`,
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 shrink-0 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <LeadForm heading="Request Service in Your City" subheading="We respond within 2 hours." />
          </div>
        </div>
      </section>

      <CTABanner heading="Serving all of California since 2009" subtext="CSIA-certified. Licensed. Same-week scheduling." />
    </>
  );
}


