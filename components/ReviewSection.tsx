const REVIEWS = [
  {
    name: "Michael T.",
    city: "Los Angeles",
    rating: 5,
    date: "November 2024",
    text: "They showed up on time, laid drop cloths everywhere, and the chimney was done in 90 minutes. The technician walked me through the inspection photos and explained what he found. Absolutely zero mess. Booked them again for next year already.",
  },
  {
    name: "Sandra R.",
    city: "Pasadena",
    rating: 5,
    date: "October 2024",
    text: "Used them for a Level 2 inspection before closing on our 1940s Craftsman. They produced a full written report with photos that our lender accepted same day. Found a cracked flue tile that the previous home inspector completely missed. Worth every dollar.",
  },
  {
    name: "James K.",
    city: "San Diego",
    rating: 5,
    date: "December 2024",
    text: "Best price I found after calling four companies, and the quality was better too. The technician was a true professional — CSIA certified, explained everything, no upsell pressure. The fireplace drafts perfectly now. Highly recommend.",
  },
  {
    name: "Patricia L.",
    city: "Sacramento",
    rating: 5,
    date: "January 2025",
    text: "Scheduled online Monday, they were here Wednesday morning. Cleaned the chimney and replaced our deteriorated chimney cap in the same visit. The chimney was caked with stage 2 creosote — we had no idea. The technician was patient answering all my questions.",
  },
  {
    name: "David M.",
    city: "Oakland",
    rating: 5,
    date: "February 2025",
    text: "Had an issue with smoke backing into the house every time we lit a fire. They diagnosed a damaged damper plate and replaced it the same day. Problem solved completely. The technician explained that our previous sweep had missed this — now I know who to call going forward.",
  },
  {
    name: "Jennifer W.",
    city: "Irvine",
    rating: 4,
    date: "March 2025",
    text: "Great service overall. They cleaned the dryer vent and chimney in one visit. The vent had a significant lint build-up — clothes are drying in one cycle again. Would give 5 stars but scheduling took a couple of days due to their busy season.",
  },
];

export default function ReviewSection() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Chimney Peak California",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "847",
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

  return (
    <section className="section-pad bg-white" id="reviews">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container-base">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#F97316" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            4.9 Average Rating · 847 Verified Reviews
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F]">What California Homeowners Say</h2>
          <p className="text-gray-500 mt-3 text-lg">Real reviews from homeowners across California</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div key={i} className="card flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{r.name}</p>
                  <p className="text-xs text-gray-500">{r.city} · {r.date}</p>
                </div>
                <Stars count={r.rating} />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-1">Verified Google Business reviews</p>
          <div className="flex items-center justify-center gap-1 mb-4">
            <Stars count={5} large />
            <span className="font-bold text-gray-900 text-lg ml-2">4.9</span>
            <span className="text-gray-500 text-sm">(847 reviews)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stars({ count, large = false }: { count: number; large?: boolean }) {
  return (
    <div
      role="img"
      aria-label={`${count} out of 5 stars`}
      className={`flex gap-0.5 ${large ? "text-2xl" : "text-base"}`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden="true" className={i < count ? "text-yellow-400" : "text-gray-200"}>★</span>
      ))}
    </div>
  );
}
