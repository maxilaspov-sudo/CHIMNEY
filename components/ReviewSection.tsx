"use client";
import { useState } from "react";
import { SITE } from "@/lib/constants";

const REVIEWS = [
  {
    name: "Michael T.",
    city: "Los Angeles, CA",
    rating: 5,
    date: "November 2024",
    text: "They showed up on time, laid drop cloths everywhere, and the chimney was done in 90 minutes. The technician walked me through the inspection photos and explained what he found. Zero mess. Booked them again for next year already.",
  },
  {
    name: "Sandra R.",
    city: "Pasadena, CA",
    rating: 5,
    date: "October 2024",
    text: "Used them for a Level 2 inspection before closing on our 1940s Craftsman. They produced a full written report with photos that our lender accepted same day. Found a cracked flue tile that the previous home inspector completely missed.",
  },
  {
    name: "James K.",
    city: "San Diego, CA",
    rating: 5,
    date: "December 2024",
    text: "Best price I found after calling four companies, and the quality was better too. The technician was a true professional — CSIA certified, explained everything, no upsell pressure. The fireplace drafts perfectly now.",
  },
  {
    name: "Patricia L.",
    city: "Sacramento, CA",
    rating: 5,
    date: "January 2025",
    text: "Scheduled online Monday, they were here Wednesday morning. Cleaned the chimney and replaced our deteriorated chimney cap in the same visit. The chimney was caked with stage 2 creosote — we had no idea.",
  },
  {
    name: "David M.",
    city: "Oakland, CA",
    rating: 5,
    date: "February 2025",
    text: "Had smoke backing into the house every time we lit a fire. They diagnosed a damaged damper plate and replaced it the same day. Problem solved completely. Now I know who to call going forward.",
  },
  {
    name: "Jennifer W.",
    city: "Irvine, CA",
    rating: 4,
    date: "March 2025",
    text: "Great service overall. They cleaned the dryer vent and chimney in one visit. The vent had significant lint build-up — clothes are drying in one cycle again. Would give 5 stars but scheduling took a couple of extra days in busy season.",
  },
];

export default function ReviewSection() {
  const [current, setCurrent] = useState(0);
  const perPage = 4;
  const total = REVIEWS.length;
  const pages = Math.ceil(total / perPage);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.googleRating,
      reviewCount: SITE.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    review: REVIEWS.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating },
      reviewBody: r.text,
      datePublished: r.date,
    })),
  };

  const visible = REVIEWS.slice(current * perPage, current * perPage + perPage);

  return (
    <section className="section-pad bg-[#F8FAFC]" id="reviews">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container-base">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-label">WHAT OUR CLIENTS SAY</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-3">
            Trusted by Homeowners<br className="hidden sm:block" /> Across California
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            We take pride in our work and our customers love the results.
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {visible.map((r, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3">
              {/* Google logo + stars */}
              <div className="flex items-center justify-between">
                <GoogleLogo />
                <Stars count={r.rating} />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-3">
                <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
                <p className="text-xs text-gray-400">{r.city} &middot; {r.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        {pages > 1 && (
          <div className="flex justify-center gap-2 mb-8">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to review page ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-orange-500" : "bg-gray-300"}`}
              />
            ))}
          </div>
        )}

        {/* Aggregate rating strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-white rounded-xl border border-gray-100 shadow-sm p-5 max-w-md mx-auto">
          <GoogleLogo large />
          <div className="flex flex-col items-center sm:items-start gap-1">
            <Stars count={5} large />
            <p className="font-bold text-gray-900 text-lg leading-none">{SITE.googleRating} out of 5</p>
            <p className="text-xs text-gray-500">Verified Google Reviews</p>
          </div>
        </div>

      </div>
    </section>
  );
}

function Stars({ count, large = false }: { count: number; large?: boolean }) {
  return (
    <div role="img" aria-label={`${count} out of 5 stars`} className={`flex gap-0.5 ${large ? "text-xl" : "text-sm"}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden="true" className={i < count ? "text-yellow-400" : "text-gray-200"}>★</span>
      ))}
    </div>
  );
}

function GoogleLogo({ large = false }: { large?: boolean }) {
  const size = large ? 36 : 22;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-label="Google" role="img">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}
