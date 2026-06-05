import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";
import { services } from "@/lib/services";
import { serviceCategories } from "@/lib/serviceCatalog";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "All Chimney & Fireplace Services in California — What We Offer | Chimney Peak California",
  description:
    "Compare chimney cleaning, inspection, repair, fireplace service, dryer vent cleaning, and related services across California. See what each service covers and request a free estimate.",
  alternates: { canonical: "/services/" },
};

function ArrowRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// Service icon mapping by slug
const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "chimney-cleaning": <BrushIcon />,
  "chimney-sweep": <BrushIcon />,
  "chimney-inspection": <SearchIcon />,
  "chimney-repair": <WrenchIcon />,
  "fireplace-cleaning": <FlameIcon />,
  "chimney-cap-installation": <CapIcon />,
  "chimney-liner-repair": <PipeIcon />,
  "dryer-vent-cleaning": <VentIcon />,
  "fireplace-installation": <HomeIcon />,
};

export default function ServicesIndexPage() {
  const populatedCategories = serviceCategories.filter((cat) => cat.services.length > 0);
  const totalServices = populatedCategories.reduce((n, cat) => n + cat.services.length, 0);

  return (
    <>
      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#111827] py-16 md:py-20">
        <Image
          src="https://images.pexels.com/photos/4394224/pexels-photo-4394224.jpeg?auto=compress&cs=tinysrgb&w=1400&h=500"
          alt="Professional chimney technician working on a rooftop — California chimney services"
          fill
          priority
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="relative z-10 container-base">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-wide">
              CSIA Certified · Licensed &amp; Insured
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Our Chimney Services
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed mb-6 max-w-2xl">
              Complete chimney care to keep your home safe, warm, and efficient.
              {" "}{totalServices} services by CSIA-certified technicians.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact/" className="btn-primary">Request Free Estimate</Link>
              <a href="#catalog" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Browse All Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Offer heading ─────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-base">
          <div className="text-center mb-10">
            <span className="section-label">WHAT WE OFFER</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-3">
              Expert Solutions for Every Chimney Need
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From routine maintenance to complete rebuilds, our certified technicians
              deliver reliable, high-quality service you can trust.
            </p>
          </div>

          {/* Core service cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="group flex gap-5 border border-gray-100 rounded-2xl p-5 hover:shadow-lg hover:border-orange-100 transition-all bg-white"
              >
                {/* Image */}
                <div className="relative w-28 h-28 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={s.heroImageMedium}
                    alt={s.heroAlt}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="112px"
                  />
                  {/* Icon overlay */}
                  <div className="absolute bottom-1.5 right-1.5 w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center text-white shadow-md">
                    {SERVICE_ICONS[s.slug] ?? <WrenchIcon />}
                  </div>
                </div>
                {/* Text */}
                <div className="flex flex-col gap-1.5 min-w-0 flex-1">
                  <h3 className="font-bold text-[#111827] text-lg group-hover:text-orange-500 transition-colors leading-tight">
                    {s.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{s.shortDesc}</p>
                  <div className="flex items-center gap-2 mt-auto pt-1">
                    <span className="text-xs text-gray-400">{s.duration}</span>
                    <span className="text-xs text-orange-500 font-semibold">· Free estimate</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-orange-500 text-xs font-semibold">
                    Learn more <ArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Not sure CTA */}
          <div className="mt-12 bg-[#F8FAFC] rounded-2xl p-8 text-center border border-gray-100">
            <h2 className="text-2xl font-bold text-[#111827] mb-3">Not Sure What You Need?</h2>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Describe what you&apos;re seeing — we&apos;ll tell you what&apos;s actually needed, not just upsell you.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link href="/contact/" className="btn-primary">Request Free Estimate</Link>
              <a href={`mailto:${SITE.email}`} className="btn-outline">Email Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Complete service catalog ───────────────────────────────── */}
      <section className="section-pad bg-[#F8FAFC]" id="catalog">
        <div className="container-base">
          <div className="mb-8">
            <span className="section-label">COMPLETE CATALOG</span>
            <h2 className="text-2xl font-bold text-[#111827] mb-2">All {totalServices} Services</h2>
            <p className="text-gray-500 text-sm max-w-2xl">
              Every chimney and fireplace service we offer, organized by category.
            </p>
          </div>

          {/* Category anchor nav */}
          <nav aria-label="Service categories" className="mb-10">
            <div className="flex flex-wrap gap-2">
              {populatedCategories.map((cat) => (
                <a
                  key={cat.slug}
                  href={`#${cat.slug}`}
                  className="text-xs bg-white border border-gray-200 hover:border-orange-400 hover:text-orange-600 text-gray-600 font-medium px-3 py-1.5 rounded-full transition-colors"
                >
                  {cat.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Category sections */}
          <div className="flex flex-col gap-14" id="top-catalog">
            {populatedCategories.map((cat) => (
              <div key={cat.slug} id={cat.slug} className="scroll-mt-24">
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="text-xl font-bold text-[#111827]">{cat.name}</h3>
                  <span className="text-xs text-gray-400 font-medium">{cat.services.length} services</span>
                </div>
                <p className="text-sm text-gray-500 mb-5">{cat.description}</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.services.map((item) => (
                    <Link
                      key={item.slug}
                      href={item.parentHref}
                      className="group bg-white border border-gray-100 rounded-xl hover:border-orange-200 hover:shadow-md transition-all duration-200 flex flex-col p-4 gap-2"
                    >
                      <p className="font-semibold text-[#111827] text-sm group-hover:text-orange-500 transition-colors leading-snug">
                        {item.name}
                        {item.isMajor && (
                          <span className="ml-2 text-[10px] font-medium bg-orange-50 text-orange-700 px-1.5 py-0.5 rounded-full align-middle">
                            Full page
                          </span>
                        )}
                      </p>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 flex-1">
                        {item.shortDesc}
                      </p>
                      <span className="text-orange-500 text-xs font-semibold flex items-center gap-1 mt-auto pt-1">
                        Learn more <ArrowRight />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 text-center border-t border-gray-100 mt-10">
            <a href="#top-catalog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-orange-500 transition-colors font-medium">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>
              Back to top
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

/* ── Service card icons ─────────────────────────────────────────── */
function BrushIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 0 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94C5.79 16.2 4 16.53 2.48 15.8L6 12.28a3.29 3.29 0 0 0-4.49 4.49L5 20.27a3.29 3.29 0 0 0 4.49-4.49"/></svg>; }
function SearchIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>; }
function WrenchIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>; }
function FlameIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>; }
function CapIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>; }
function PipeIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>; }
function VentIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>; }
function HomeIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>; }
