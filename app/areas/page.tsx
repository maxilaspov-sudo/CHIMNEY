import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";
import LeadForm from "@/components/LeadForm";
import { NAV_SERVICES, SITE } from "@/lib/constants";
import { californiaRegions } from "@/lib/regions";
import { areas } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Chimney Service Areas in California | Chimney Peak California",
  description:
    "Professional chimney cleaning, chimney repair, chimney inspection, chimney sweep, fireplace repair, and dryer vent cleaning across California. Serving Los Angeles, San Diego, San Francisco, Sacramento, and 120+ cities statewide.",
  alternates: { canonical: "/areas/" },
  openGraph: {
    title: "Chimney Service Areas in California | Chimney Peak California",
    description:
      "Find your California city. Professional chimney services in Southern California, Bay Area, Central Valley, Central Coast, and Wine Country.",
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

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#111827] py-16 md:py-20">
        <Image
          src="https://images.pexels.com/photos/3631733/pexels-photo-3631733.jpeg?auto=compress&cs=tinysrgb&w=1400&h=500"
          alt="California homes served by Chimney Peak California"
          fill
          priority
          className="object-cover object-center opacity-25"
          sizes="100vw"
        />
        <div className="relative z-10 container-base">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-wide">
              <PinIcon /> Statewide California Coverage
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Our Service Areas
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed mb-6 max-w-2xl">
              Proudly serving homeowners throughout California.
              Professional chimney cleaning, repair, and inspection in every major city.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact/" className="btn-primary">Request Free Estimate</Link>
              <a href="#areas" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Find Your City
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="container-base">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: `${cityCount}+`, label: "Cities Served" },
              { number: "18+", label: "Counties Covered" },
              { number: `${SITE.jobsCompleted}`, label: "Jobs Completed" },
              { number: `${SITE.googleRating}★`, label: "Average Rating" },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-extrabold text-orange-500">{s.number}</p>
                <p className="text-sm text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map + "Where We Work" ─────────────────────────────────── */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container-base">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <span className="section-label">WHERE WE WORK</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
                Local Experts.<br className="hidden sm:block" /> Trusted Across California.
              </h2>
              <p className="text-gray-500 mb-6 text-lg leading-relaxed">
                We provide professional chimney services to homes and businesses across California.
                If you don&apos;t see your city listed, give us a call — we may still be able to help.
              </p>
              <Link href="/contact/" className="btn-primary mb-8 inline-flex">
                View All Services
              </Link>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[4/3]">
              <iframe
                title="Chimney Peak California service areas — California map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303693.7252048994!2d-120.26076!3d36.7783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "360px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Areas We Serve grid ───────────────────────────────────── */}
      <section className="section-pad bg-white" id="areas">
        <div className="container-base">
          <div className="text-center mb-10">
            <span className="section-label">AREAS WE SERVE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-3">
              Find Your California City
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Browse by region or jump directly to your city page for local chimney service information and scheduling.
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
                      <h3 className="text-xl font-bold text-[#111827] mb-1">{region.name}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">{region.description}</p>
                    </div>
                    <span className="text-xs text-gray-400 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full shrink-0 self-start">
                      {regionCities.length} {regionCities.length === 1 ? "city" : "cities"} · {region.counties.length} {region.counties.length === 1 ? "county" : "counties"}
                    </span>
                  </div>

                  {/* County groupings */}
                  <div className="flex flex-col gap-6">
                    {region.counties.map((county) => {
                      const countyCities = county.cities.map((slug) => areasBySlug[slug]).filter(Boolean);
                      return (
                        <div key={county.name}>
                          <div className="flex items-center gap-2 mb-3">
                            {county.hasPage ? (
                              <Link
                                href={`/areas/${county.slug}/`}
                                className="text-xs font-bold text-orange-600 uppercase tracking-widest hover:underline flex items-center gap-1"
                              >
                                {county.name}
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                              </Link>
                            ) : (
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{county.name}</p>
                            )}
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {county.hasPage && (
                              <Link
                                href={`/areas/${county.slug}/`}
                                className="group flex items-start gap-3 border border-orange-100 hover:border-orange-300 bg-orange-50 hover:bg-orange-100 rounded-xl p-4 transition-all"
                              >
                                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-white">
                                  <HomeSmIcon />
                                </div>
                                <div className="min-w-0">
                                  <p className="font-bold text-orange-800 text-sm leading-tight">All of {county.name}</p>
                                  <p className="text-xs text-orange-600 mt-0.5">County overview →</p>
                                </div>
                              </Link>
                            )}
                            {countyCities.map((city) => (
                              <Link
                                key={city.slug}
                                href={`/areas/${city.slug}/`}
                                className="group flex items-start gap-3 border border-gray-100 hover:border-orange-200 bg-white hover:bg-orange-50 rounded-xl p-4 transition-all"
                              >
                                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CC2229" strokeWidth="2.5" aria-hidden="true">
                                    <path d="M12 22s-8-7-8-12a8 8 0 1 1 16 0c0 5-8 12-8 12z"/><circle cx="12" cy="10" r="2"/>
                                  </svg>
                                </div>
                                <div className="min-w-0">
                                  <p className="font-semibold text-gray-900 text-sm group-hover:text-orange-600 transition-colors leading-tight">{city.name}</p>
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

      {/* ── Services available everywhere ────────────────────────── */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container-base">
          <div className="text-center mb-8">
            <span className="section-label">AVAILABLE STATEWIDE</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
              Services Available in Every California City
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every service we offer is available across our full California dispatch area.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {NAV_SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex items-center gap-3 border border-gray-100 rounded-xl p-4 bg-white hover:border-orange-200 hover:bg-orange-50 transition-all group"
              >
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shrink-0 text-white">
                  <CheckSmall />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors">{s.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lead form ─────────────────────────────────────────────── */}
      <section className="section-pad bg-white" id="estimate">
        <div className="container-base">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <span className="section-label">REQUEST SERVICE</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4">
                Get a Free Estimate in Your City
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Tell us your city and the service you need. We&apos;ll match you with an available trained chimney technician and respond within 2 business hours.
              </p>
              <div className="bg-[#F8FAFC] rounded-xl border border-gray-100 p-5">
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
                      <span className="text-orange-500 shrink-0 mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <LeadForm heading="Request Service in Your City" subheading="We respond within 2 hours." />
          </div>
        </div>
      </section>

      <CTABanner heading="Serving all of California since 2009" subtext="Licensed &amp; Insured. Same-week scheduling." />
    </>
  );
}

function PinIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M12 22s-8-7-8-12a8 8 0 1 1 16 0c0 5-8 12-8 12z"/><circle cx="12" cy="10" r="2"/></svg>;
}
function HomeSmIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
}
function CheckSmall() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>;
}
