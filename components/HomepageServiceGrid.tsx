"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { getAllCatalogServices } from "@/lib/serviceCatalog";

const INITIAL_COUNT = 10;

// Conversion-focused default mix — diverse, high-intent services shown first
const FEATURED_SLUGS = [
  "chimney-cleaning",
  "chimney-sweep",
  "chimney-inspection",
  "chimney-repair",
  "fireplace-cleaning",
  "fireplace-installation",
  "dryer-vent-cleaning",
  "chimney-cap-services",
  "chimney-liner-services",
  "chimney-crown-services",
];

function ArrowRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function HomepageServiceGrid() {
  const [expanded, setExpanded] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const allServices = getAllCatalogServices();

  // Put featured services first in specified order, then the remainder
  const featured = FEATURED_SLUGS
    .map((slug) => allServices.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => s != null);
  const rest = allServices.filter((s) => !FEATURED_SLUGS.includes(s.slug));
  const ordered = [...featured, ...rest];

  const visible = expanded ? ordered : ordered.slice(0, INITIAL_COUNT);
  const remaining = ordered.length - INITIAL_COUNT;

  function handleShowLess() {
    setExpanded(false);
    setTimeout(() => {
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  return (
    <div>
      <div ref={topRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((service) => (
          <Link
            key={service.slug}
            href={service.parentHref}
            className="group bg-white rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-200 flex flex-col p-5 gap-3"
          >
            <h3 className="font-bold text-[#1E3A5F] text-base group-hover:text-orange-500 transition-colors leading-snug">
              {service.name}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed flex-1 line-clamp-3">
              {service.shortDesc}
            </p>
            <span className="text-orange-500 text-sm font-semibold flex items-center gap-1.5 mt-auto">
              Learn more <ArrowRight />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        {!expanded ? (
          <button onClick={() => setExpanded(true)} className="btn-outline">
            Show {remaining} More Services
          </button>
        ) : (
          <button onClick={handleShowLess} className="btn-outline">
            Show Fewer Services
          </button>
        )}
        <Link
          href="/services/"
          className="text-sm text-gray-500 hover:text-orange-500 transition-colors font-medium"
        >
          Browse full service catalog →
        </Link>
      </div>
    </div>
  );
}
