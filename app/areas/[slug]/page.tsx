import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { areas, getArea } from "@/lib/areas";
import { counties, getCounty, isCountySlug } from "@/lib/counties";
import { SITE, NAV_SERVICES, NAV_AREAS } from "@/lib/constants";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import TrustBadges from "@/components/TrustBadges";
import ReviewSection from "@/components/ReviewSection";
import CountyPage from "@/components/CountyPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // City pages (excluding california — handled by /areas/california/page.tsx)
  const cityParams = areas
    .filter((a) => a.slug !== "california")
    .map((a) => ({ slug: a.slug }));

  // County pages
  const countyParams = counties.map((c) => ({ slug: c.slug }));

  return [...cityParams, ...countyParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // County metadata
  if (isCountySlug(slug)) {
    const county = getCounty(slug);
    if (!county) return {};
    return {
      title: county.metaTitle,
      description: county.metaDescription,
      alternates: { canonical: `/areas/${slug}/` },
      openGraph: {
        title: county.metaTitle,
        description: county.metaDescription,
        url: `/areas/${slug}/`,
        images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
      },
    };
  }

  // City metadata
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `/areas/${slug}/` },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `/areas/${slug}/`,
    },
  };
}

// ─── County page images ───────────────────────────────────────────────────────
const AREA_IMAGES: Record<string, { url: string; alt: string }> = {
  "los-angeles": {
    url: "https://images.pexels.com/photos/2961974/pexels-photo-2961974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Modern residential building with palm trees in Los Angeles",
  },
};

const DEFAULT_AREA_IMAGE = {
  url: "https://images.pexels.com/photos/10854898/pexels-photo-10854898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  alt: "Elegant suburban bungalow with well-manicured lawn — California residential home",
};

// ─── Main page component ──────────────────────────────────────────────────────
export default async function AreaOrCountyPage({ params }: Props) {
  const { slug } = await params;

  // Route to county page
  if (isCountySlug(slug)) {
    const county = getCounty(slug);
    if (!county) notFound();
    return <CountyPage county={county} />;
  }

  // Route to city page
  const area = getArea(slug);
  if (!area) notFound();

  const img = AREA_IMAGES[slug] ?? DEFAULT_AREA_IMAGE;
  const altImg = `${img.alt} — chimney services in ${area.name}, California`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `${SITE.name} — ${area.name}`,
    url: `${SITE.baseUrl}/areas/${slug}/`,
    address: {
      "@type": "PostalAddress",
      addressLocality: area.name,
      addressRegion: "CA",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: area.name,
      containedInPlace: { "@type": "State", name: "California" },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.googleRating,
      reviewCount: SITE.reviewCount,
    },
  };

  // Build nearby areas list: prefer nearbySlugs, fall back to NAV_AREAS
  const nearbyFromSlugs = (area.nearbySlugs ?? [])
    .map((s) => areas.find((a) => a.slug === s))
    .filter((a): a is NonNullable<typeof a> => !!a)
    .map((a) => ({ name: a.name, href: `/areas/${a.slug}/` }));

  const nearbyLinks =
    nearbyFromSlugs.length >= 3
      ? nearbyFromSlugs.slice(0, 8)
      : NAV_AREAS.filter((a) => !a.href.includes(slug)).slice(0, 8);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/areas/" },
              // If city has a county page, insert the county crumb
              ...(area.countySlug
                ? [{ label: area.county, href: `/areas/${area.countySlug}/` }]
                : [{ label: "California", href: "/areas/california/" }]),
              { label: area.name },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[400px] md:min-h-[480px] flex items-center overflow-hidden">
        <Image
          src={img.url}
          alt={altImg}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/90 via-[#0F2238]/70 to-[#0F2238]/20" />
        <div className="relative container-base py-14">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                {area.county} · {area.region}
              </span>
              {area.countySlug && (
                <Link
                  href={`/areas/${area.countySlug}/`}
                  className="inline-block bg-white/10 border border-white/20 text-gray-200 text-xs px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors"
                >
                  {area.county} →
                </Link>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Services in {area.name}, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              CSIA-certified chimney cleaning, repair, and inspection for {area.name} homeowners. Same-week appointments.
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
            {/* Left: content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-4">
                Chimney Service in {area.name}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">{area.description}</p>

              {/* Local chimney context */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-orange-800 mb-3">
                  What {area.name} Homeowners Need to Know
                </h3>
                <p className="text-orange-700 text-sm leading-relaxed">{area.chimneyContext}</p>
              </div>

              {/* Services offered */}
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-5">
                Services Available in {area.name}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {NAV_SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center gap-3 border border-gray-100 rounded-xl p-4 hover:border-orange-200 hover:bg-orange-50 transition-all group"
                  >
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors">
                      {s.name}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Unique fact */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white mb-8">
                <h3 className="font-bold text-orange-400 mb-2">Did You Know?</h3>
                <p className="text-gray-200 text-sm leading-relaxed">{area.uniqueFact}</p>
              </div>

              {/* Neighborhoods */}
              {area.neighborhoods.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[#1E3A5F] mb-3">
                    Neighborhoods We Serve in {area.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {area.neighborhoods.map((n) => (
                      <span key={n} className="text-sm bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full text-gray-600">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* County link */}
              {area.countySlug && (
                <div className="bg-[#F8FAFC] rounded-xl border border-gray-100 p-4 flex items-center justify-between mb-8">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{area.name} is in {area.county}</p>
                    <p className="text-xs text-gray-500 mt-0.5">See all chimney service areas in {area.county}</p>
                  </div>
                  <Link
                    href={`/areas/${area.countySlug}/`}
                    className="shrink-0 text-orange-500 font-semibold text-sm flex items-center gap-1 hover:text-orange-600 transition-colors"
                  >
                    View county
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              )}

              {/* City-specific FAQs inline (schema injected by FAQSection at bottom) */}
              {area.faqs && area.faqs.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">
                    Common Questions — {area.name} Chimney Service
                  </h3>
                  <div className="flex flex-col gap-3">
                    {area.faqs.map((faq, i) => (
                      <details key={i} className="group bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
                        <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 cursor-pointer hover:text-orange-500 transition-colors list-none">
                          <span className="pr-4 text-sm">{faq.q}</span>
                          <span className="shrink-0 text-orange-400 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                        </summary>
                        <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                          {faq.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: form + sidebar */}
            <div className="flex flex-col gap-6">
              <LeadForm
                heading={`Get a Free Estimate in ${area.name}`}
                subheading="We respond within 2 business hours."
              />

              {/* Quick stats */}
              <div className="card">
                <h3 className="font-semibold text-gray-900 mb-3">Why Choose Us</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    "CSIA-certified technicians",
                    "Same-week scheduling",
                    "Flat pricing, no upsells",
                    "Written report included",
                    `${SITE.yearsInBusiness}+ years in California`,
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500 shrink-0">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nearby areas */}
              <div className="bg-[#F8FAFC] rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3">Nearby Areas</h3>
                <ul className="flex flex-col gap-1">
                  {nearbyLinks.map((a) => (
                    <li key={a.href}>
                      <Link href={a.href} className="text-sm text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-1">
                        <span className="text-orange-400">›</span> {a.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Email CTA */}
              <div className="bg-[#1E3A5F] rounded-xl p-5 text-center">
                <p className="text-gray-300 text-sm mb-2">Email us anytime</p>
                <a href={`mailto:${SITE.email}`} className="text-orange-400 font-bold text-base hover:text-orange-300 block break-all">
                  {SITE.email}
                </a>
                <p className="text-gray-400 text-xs mt-1">Mon–Fri 7am–7pm · Sat 8am–5pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inject FAQ schema when city has FAQs */}
      {area.faqs && area.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: area.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      )}

      {/* Reviews */}
      <ReviewSection />

      <CTABanner heading={`Schedule your chimney service in ${area.name} today`} />
    </>
  );
}

