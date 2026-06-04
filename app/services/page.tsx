import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";
import { services } from "@/lib/services";
import { serviceCategories } from "@/lib/serviceCatalog";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Chimney & Fireplace Services in California | Chimney Peak California",
  description:
    "Browse 100 chimney and fireplace services across California — cleaning, inspection, repair, gas fireplace, liner, cap, pellet stove, fireplace brands, and more. CSIA-certified.",
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

export default function ServicesIndexPage() {
  const populatedCategories = serviceCategories.filter((cat) => cat.services.length > 0);
  const totalServices = populatedCategories.reduce((n, cat) => n + cat.services.length, 0);

  return (
    <>
      <div id="top" className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />
        </div>
      </div>

      <section className="section-navy py-14">
        <div className="container-base">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            Chimney &amp; Fireplace Services in California
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            {totalServices} services by CSIA-certified technicians — cleaning, inspection, repair, installation, and more.
          </p>
        </div>
      </section>

      {/* Core service pages */}
      <section className="section-pad bg-white">
        <div className="container-base">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">Core Services</h2>
          <p className="text-gray-500 mb-8 text-sm">
            Our eight primary service pages — each includes full pricing, process detail, and a free estimate form.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="group flex gap-6 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-orange-100 transition-all"
              >
                <div className="relative w-28 h-28 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={s.heroImageMedium}
                    alt={s.heroAlt}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="112px"
                  />
                </div>
                <div className="flex flex-col gap-2 min-w-0">
                  <h3 className="font-bold text-[#1E3A5F] text-lg group-hover:text-orange-500 transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{s.shortDesc}</p>
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="text-xs text-gray-400">{s.duration}</span>
                    <span className="text-xs text-orange-500 font-medium">· Free estimate</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Not Sure What You Need?</h2>
            <p className="text-gray-500 mb-6">
              Describe what you&apos;re seeing — we&apos;ll tell you what&apos;s actually needed, not just upsell you.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link href="/contact/" className="btn-primary">Request Free Estimate</Link>
              <a href={`mailto:${SITE.email}`} className="btn-outline">Email Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Complete service catalog */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container-base">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">Complete Service Catalog</h2>
          <p className="text-gray-500 mb-6 text-sm max-w-2xl">
            {totalServices} chimney and fireplace services, organized by category. Each card links to the relevant service detail page.
          </p>

          {/* Category anchor navigation */}
          <nav aria-label="Service categories" className="mb-10">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-3">Jump to category</p>
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
          <div className="flex flex-col gap-14" id="catalog">
            {populatedCategories.map((cat, catIdx) => (
              <div
                key={cat.slug}
                id={cat.slug}
                className="scroll-mt-24"
              >
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="text-xl font-bold text-[#1E3A5F]">{cat.name}</h3>
                  <span className="text-xs text-gray-400 font-medium">{cat.services.length} services</span>
                </div>
                <p className="text-sm text-gray-500 mb-6">{cat.description}</p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.services.map((item) => (
                    <Link
                      key={item.slug}
                      href={item.parentHref}
                      className="group bg-white border border-gray-100 rounded-xl hover:border-orange-200 hover:shadow-md transition-all duration-200 flex flex-col p-4 gap-2.5"
                    >
                      <p className="font-semibold text-[#1E3A5F] text-sm group-hover:text-orange-500 transition-colors leading-snug">
                        {item.name}
                        {item.isMajor && (
                          <span className="ml-2 text-[11px] font-medium bg-orange-50 text-orange-700 px-1.5 py-0.5 rounded-full align-middle">
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
          {/* Back to top */}
          <div className="pt-4 text-center border-t border-gray-100">
            <a
              href="#top"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-orange-500 transition-colors font-medium"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <polyline points="18 15 12 9 6 15" />
              </svg>
              Back to top
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

