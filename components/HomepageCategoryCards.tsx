import Image from "next/image";
import Link from "next/link";
import { serviceCategories } from "@/lib/serviceCatalog";

// ─── Category images — use `src` for local files, `id` for Pexels CDN ────────
const CATEGORY_IMAGES: Record<string, { id?: number; src?: string; alt: string }> = {
  "chimney-cleaning-maintenance":       { id: 20181619, alt: "Chimney sweep technician working on a residential rooftop" },
  "chimney-repair-restoration":         { id: 13279005, alt: "Masonry repair work on a brick chimney" },
  "fireplace-cleaning-repair":          { src: "/category-fireplace-cleaning-repair.jpg", alt: "Professional technician cleaning a stone fireplace interior in a California home" },
  "fireplace-installation-design":      { id: 24245776, alt: "Elegant white fireplace mantel in a finished living room" },
  "chimney-parts-components":           { id: 11210095, alt: "Metal chimney caps on a residential rooftop" },
  "specialty-fireplace-stove-services": { id: 14681670, alt: "Gas fireplace with blue and orange flames burning" },
  "residential-commercial-industrial":  { id: 13075346, alt: "Aerial view of California residential rooftops" },
  "fireplace-brands-products":          { id: 7045763,  alt: "Luxury fireplace in an elegantly designed living room" },
};

// ─── Category icons ───────────────────────────────────────────────────────────
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "chimney-cleaning-maintenance": (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M6 21V9m12 12V9M9 21V5h6v16M3 9l9-6 9 6" />
    </svg>
  ),
  "chimney-repair-restoration": (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  "fireplace-cleaning-repair": (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 17c0 2.5-2 4-5 4s-5-1.5-5-4c0-3 2-5.5 5-8.5 1 2 2.5 3.5 4 4.5a4 4 0 0 1 1 4z" />
    </svg>
  ),
  "fireplace-installation-design": (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  "chimney-parts-components": (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  ),
  "specialty-fireplace-stove-services": (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  "residential-commercial-industrial": (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  "fireplace-brands-products": (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
};

function pexelsUrl(id: number) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&h=400`;
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"
      className="shrink-0 group-hover:translate-x-0.5 transition-transform duration-150">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// Server component — no client JS, no hydration cost
export default function HomepageCategoryCards() {
  return (
    <section id="categories" className="overflow-hidden">

      {/* ── Main content — background image behind cards ───────────────────── */}
      <div className="relative pt-14 pb-10 lg:pt-20 lg:pb-12 overflow-hidden">
        <Image
          src="/chimney-bg.jpg"
          alt=""
          fill
          aria-hidden="true"
          loading="lazy"
          className="object-cover object-left-bottom pointer-events-none select-none"
          sizes="100vw"
        />
        <div className="container-base relative z-10">

          {/* Section heading */}
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2238] mb-4 leading-tight">
              Choose Your Chimney or Fireplace Service
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4" aria-hidden="true">
              <div className="h-px w-10 bg-orange-400 rounded-full" />
              <svg viewBox="0 0 24 24" width="18" height="18" className="text-orange-500 shrink-0">
                <path fill="currentColor" d="M17 17c0 2.5-2 4-5 4s-5-1.5-5-4c0-3 2-5.5 5-8.5 1 2 2.5 3.5 4 4.5a4 4 0 0 1 1 4z" />
              </svg>
              <div className="h-px w-10 bg-orange-400 rounded-full" />
            </div>
            <p className="text-stone-600 text-lg max-w-xl mx-auto leading-relaxed">
              Start with the category that matches your project,<br className="hidden sm:inline" /> then choose the exact service you need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {serviceCategories.map((cat) => {
              const img = CATEGORY_IMAGES[cat.slug];
              const icon = CATEGORY_ICONS[cat.slug];

              return (
                <Link
                  key={cat.slug}
                  href={`#cat-${cat.slug}`}
                  aria-label={`Browse ${cat.name} services`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-stone-200 hover:border-orange-300 shadow-[0_2px_12px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-[border-color,box-shadow] duration-200"
                >
                  {img && (
                    <div className="relative h-48 sm:h-44 lg:h-48 overflow-hidden shrink-0">
                      <Image
                        src={img.src ?? pexelsUrl(img.id!)}
                        alt={img.alt}
                        fill
                        loading="lazy"
                        className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute top-3 left-3 w-9 h-9 bg-[#0F2238] rounded-xl flex items-center justify-center shadow-lg">
                        {icon}
                      </div>
                    </div>
                  )}

                  <div className="p-5 flex flex-col gap-2 flex-1">
                    <h3 className="font-bold text-[#0F2238] text-[15px] leading-snug group-hover:text-orange-700 transition-colors duration-150">
                      {cat.name}
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed line-clamp-3 flex-1">
                      {cat.description}
                    </p>
                    <span className="flex items-center gap-1.5 text-orange-600 text-sm font-semibold mt-2">
                      View Services <ArrowRight />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Trust bar ─────────────────────────────────────────────────────── */}
      <div style={{ background: "#F2EDE3" }} className="border-t border-stone-200">
        <div className="container-base py-7">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4" aria-hidden="true" />
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="shrink-0">
              <p className="font-bold text-[#0F2238] text-base mb-0.5 flex items-center gap-2">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Trusted. Local. Professional.
              </p>
              <p className="text-stone-500 text-sm max-w-sm leading-relaxed">
                From chimney cleaning and inspections to fireplace installation and masonry repair, our team covers the services California homeowners request most.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 md:ml-auto">
              {[
                { label: "Licensed\n& Insured",           icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                { label: "Licensed &\nInsured",           icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" },
                { label: "Local California\nExperts",     icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
                { label: "Satisfaction\nGuaranteed",      icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
              ].map(({ label, icon }) => (
                <div key={label} className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#F97316" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={icon} />
                  </svg>
                  <span className="text-stone-600 text-xs font-medium whitespace-pre-line leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA bar ───────────────────────────────────────────────────────── */}
      <div className="bg-[#0F2238]">
        <div className="container-base py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-white text-base leading-snug">
              Need help choosing the right service?
            </p>
            <p className="text-gray-400 text-sm mt-0.5">
              Our experts are here to help you find the best solution for your home.
            </p>
          </div>
          <Link href="/services/" className="btn-primary whitespace-nowrap shrink-0">
            View Full Service Catalog
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>

    </section>
  );
}
