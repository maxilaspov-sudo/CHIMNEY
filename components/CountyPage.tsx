import Link from "next/link";
import type { County } from "@/lib/counties";
import { NAV_SERVICES, SITE } from "@/lib/constants";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import TrustBadges from "@/components/TrustBadges";

interface CountyPageProps {
  county: County;
}

export default function CountyPage({ county }: CountyPageProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `${SITE.name} — ${county.name}`,
    url: `${SITE.baseUrl}/areas/${county.slug}/`,
    address: {
      "@type": "PostalAddress",
      addressRegion: "CA",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: county.name,
      containedInPlace: { "@type": "State", name: "California" },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.googleRating,
      reviewCount: SITE.reviewCount,
      bestRating: "5",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: county.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const existingCities = county.cities.filter((c) => c.slug);
  const futureCities = county.cities.filter((c) => !c.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/areas/" },
              { label: "California", href: "/areas/california/" },
              { label: county.name },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#1E3A5F] py-16 md:py-20">
        <div className="container-base">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s-8-7-8-12a8 8 0 1 1 16 0c0 5-8 12-8 12z" /><circle cx="12" cy="10" r="2" />
                </svg>
                {county.region}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full">
                {county.population} residents
              </span>
              <span className="inline-flex items-center gap-1.5 bg-red-500/20 border border-red-400/30 text-red-300 text-xs font-medium px-3 py-1.5 rounded-full">
                {county.chimneyRisk}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Chimney Services in<br />{county.name}, CA
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl">
              Professional chimney cleaning, chimney repair, chimney inspection, chimney sweep, fireplace repair, and dryer vent cleaning across {county.name} County. Serving homeowners with chimney and fireplace services.
              Same-week appointments. Written reports. Flat pricing.
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

      {/* Main content */}
      <section className="section-pad bg-white">
        <div className="container-base">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left col: content */}
            <div className="lg:col-span-2 flex flex-col gap-8">

              {/* County description */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-4">
                  Chimney Service in {county.name}
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">{county.description}</p>
              </div>

              {/* Climate + Housing profiles */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                  <h3 className="font-bold text-blue-900 text-base mb-2 flex items-center gap-2">
                    <span>🌤</span> Climate Profile
                  </h3>
                  <p className="text-blue-800 text-sm leading-relaxed">{county.climateProfile}</p>
                </div>
                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                  <h3 className="font-bold text-amber-900 text-base mb-2 flex items-center gap-2">
                    <span>🏠</span> Housing Profile
                  </h3>
                  <p className="text-amber-800 text-sm leading-relaxed">{county.housingProfile}</p>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">
                  Services Available in {county.name}
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {NAV_SERVICES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center gap-3 border border-gray-100 rounded-xl p-3.5 hover:border-orange-200 hover:bg-orange-50 transition-all group"
                    >
                      <div className="w-7 h-7 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5">
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

              {/* Cities served */}
              {(existingCities.length > 0 || futureCities.length > 0) && (
                <div className="bg-[#F8FAFC] rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">
                    Cities We Serve in {county.name}
                  </h3>
                  {existingCities.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {existingCities.map((city) => (
                        <Link
                          key={city.slug}
                          href={`/areas/${city.slug}/`}
                          className="flex items-center gap-1.5 bg-white border border-orange-200 hover:bg-orange-50 hover:border-orange-400 text-orange-700 text-sm font-medium px-3 py-1.5 rounded-full transition-colors"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M12 22s-8-7-8-12a8 8 0 1 1 16 0c0 5-8 12-8 12z" /><circle cx="12" cy="10" r="2" />
                          </svg>
                          {city.name}
                        </Link>
                      ))}
                    </div>
                  )}
                  {futureCities.length > 0 && (
                    <div>
                      <p className="text-xs text-gray-400 mb-2">
                        Additional cities served — dedicated pages coming soon:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {futureCities.map((city) => (
                          <span
                            key={city.name}
                            className="bg-gray-100 text-gray-500 text-xs px-3 py-1.5 rounded-full"
                          >
                            {city.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <p className="text-xs text-gray-400 mt-4">
                    Don&apos;t see your city?{" "}
                    <Link href="/contact/" className="text-orange-500 hover:underline font-medium">
                      Contact us
                    </Link>{" "}
                    to confirm availability in your area.
                  </p>
                </div>
              )}

              {/* Nearby counties */}
              {county.nearbyCounties.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-[#1E3A5F] mb-3">
                    Nearby Counties We Also Serve
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {county.nearbyCounties.map((nc) => (
                      <Link
                        key={nc.slug}
                        href={`/areas/${nc.slug}/`}
                        className="text-sm bg-white border border-gray-200 hover:border-orange-300 hover:text-orange-600 px-4 py-2 rounded-full transition-colors flex items-center gap-1"
                      >
                        {nc.name}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right col: form + trust sidebar */}
            <div className="flex flex-col gap-5">
              <LeadForm
                heading={`Estimate in ${county.shortName} County`}
                subheading="We respond within 2 business hours."
              />

              {/* Stats */}
              <div className="card">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">County at a Glance</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Population</dt>
                    <dd className="font-medium text-gray-900">{county.population}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Households</dt>
                    <dd className="font-medium text-gray-900">{county.households}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Region</dt>
                    <dd className="font-medium text-gray-900">{county.region}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Primary Risk</dt>
                    <dd className="font-medium text-orange-600 text-xs text-right max-w-[120px] leading-tight">{county.chimneyRisk}</dd>
                  </div>
                </dl>
              </div>

              {/* Why choose us */}
              <div className="bg-[#F8FAFC] rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">Why Choose Us in {county.shortName} County</h3>
                <ul className="space-y-2 text-xs text-gray-600">
                  {[
                    "Trained, licensed technicians dispatched locally",
                    `${SITE.yearsInBusiness}+ years serving California`,
                    "Flat pricing — no surprise add-ons",
                    "Written NFPA 211 report included",
                    "Same-week scheduling available",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 shrink-0">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Email CTA */}
              <div className="bg-[#1E3A5F] rounded-xl p-5 text-center">
                <p className="text-gray-300 text-xs mb-1">Email us anytime</p>
                <a href={`mailto:${SITE.email}`} className="text-orange-400 font-bold text-base hover:text-orange-300 block break-all">
                  {SITE.email}
                </a>
                <p className="text-gray-400 text-xs mt-1">Mon–Fri 7am–7pm · Sat 8am–5pm</p>
              </div>

              {/* Back-links */}
              <div className="text-xs text-gray-400 space-y-1">
                <Link href="/areas/california/" className="block hover:text-orange-500 transition-colors">← All California service areas</Link>
                <Link href="/areas/" className="block hover:text-orange-500 transition-colors">← Service area map</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={county.faqs}
        heading={`${county.name} Chimney FAQ`}
        addSchema={false}
      />

      <CTABanner heading={`Schedule chimney service in ${county.name} today`} />
    </>
  );
}

