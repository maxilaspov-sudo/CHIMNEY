"use client";

import { useState } from "react";
import Link from "next/link";
import { serviceCategories } from "@/lib/serviceCatalog";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" aria-hidden="true"
      className={`transition-transform duration-200 shrink-0 ${open ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function HomepageCategoryBrowser() {
  // Track which categories are expanded (default: all collapsed for compact initial view)
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  function toggle(slug: string) {
    setExpanded((prev) => ({ ...prev, [slug]: !prev[slug] }));
  }

  return (
    <div className="flex flex-col gap-3">
      {serviceCategories.map((cat) => {
        const isOpen = !!expanded[cat.slug];
        return (
          // id="cat-{slug}" is the anchor target for category card links above
          <div
            key={cat.slug}
            id={`cat-${cat.slug}`}
            className="bg-white border border-gray-100 rounded-xl overflow-hidden scroll-mt-24"
          >
            {/* Category header — toggle button */}
            <button
              onClick={() => toggle(cat.slug)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors gap-3"
            >
              <div className="min-w-0">
                <span className="font-semibold text-[#1E3A5F] text-sm leading-snug block">
                  {cat.name}
                </span>
                <span className="text-xs text-gray-500 mt-0.5 block">
                  {cat.services.length} services
                </span>
              </div>
              <ChevronIcon open={isOpen} />
            </button>

            {/* Services list — always in DOM for crawlability; hidden visually when collapsed */}
            <div
              className={`border-t border-gray-100 transition-all duration-200 ${isOpen ? "block" : "hidden"}`}
              aria-hidden={!isOpen}
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
                {cat.services.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={svc.parentHref}
                    className="group flex items-start gap-2 p-2.5 rounded-lg hover:bg-orange-50 transition-colors"
                  >
                    <span className="text-orange-400 mt-0.5 shrink-0"><ArrowRight /></span>
                    <div className="min-w-0">
                      <span className="text-sm font-medium text-[#1E3A5F] group-hover:text-orange-500 transition-colors leading-snug block">
                        {svc.name}
                        {svc.isMajor && (
                          <span className="ml-1.5 text-[11px] font-semibold bg-orange-50 text-orange-700 px-1 py-0.5 rounded-full align-middle border border-orange-100">
                            Full page
                          </span>
                        )}
                      </span>
                      <span className="text-xs text-gray-500 leading-relaxed line-clamp-1 block mt-0.5">
                        {svc.shortDesc}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Hidden static links for SEO — always rendered, visually hidden */}
            {!isOpen && (
              <div className="sr-only" aria-hidden="true">
                {cat.services.map((svc) => (
                  <a key={svc.slug} href={svc.parentHref}>{svc.name}</a>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
