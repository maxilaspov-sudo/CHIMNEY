import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Customer Reviews | 4.9 Stars | Chimney Peak California",
  description:
    "Read verified customer reviews for Chimney Peak California. 4.9-star average from 847 Google reviews across California.",
  alternates: { canonical: "/reviews/" },
};

const ALL_REVIEWS = [
  { name: "Michael T.", city: "Los Angeles", rating: 5, date: "November 2024", service: "Chimney Cleaning", text: "They showed up on time, laid drop cloths everywhere, and the chimney was done in 90 minutes. The technician walked me through the inspection photos and explained what he found. Absolutely zero mess. Booked them again for next year already." },
  { name: "Sandra R.", city: "Pasadena", rating: 5, date: "October 2024", service: "Chimney Inspection", text: "Used them for a Level 2 inspection before closing on our 1940s Craftsman. They produced a full written report with photos that our lender accepted same day. Found a cracked flue tile that the previous home inspector completely missed. Worth every dollar." },
  { name: "James K.", city: "San Diego", rating: 5, date: "December 2024", service: "Chimney Sweep", text: "Best price I found after calling four companies, and the quality was better too. The technician was a true professional — CSIA certified, explained everything, no upsell pressure. The fireplace drafts perfectly now." },
  { name: "Patricia L.", city: "Sacramento", rating: 5, date: "January 2025", service: "Chimney Cap Installation", text: "Scheduled online Monday, they were here Wednesday morning. Cleaned the chimney and replaced our deteriorated chimney cap in the same visit. The chimney was caked with stage 2 creosote — we had no idea." },
  { name: "David M.", city: "Oakland", rating: 5, date: "February 2025", service: "Chimney Repair", text: "Had an issue with smoke backing into the house. They diagnosed a damaged damper plate and replaced it the same day. Problem solved completely." },
  { name: "Jennifer W.", city: "Irvine", rating: 4, date: "March 2025", service: "Dryer Vent Cleaning", text: "Great service overall. Cleaned the dryer vent and chimney in one visit. Clothes are drying in one cycle again." },
  { name: "Robert A.", city: "San Jose", rating: 5, date: "October 2024", service: "Chimney Liner Repair", text: "The camera scan revealed two cracked flue tiles we didn't know about. They relining the chimney with HeatShield and we're back to using the fireplace safely. The written report was extremely thorough." },
  { name: "Maria G.", city: "Fresno", rating: 5, date: "November 2024", service: "Fireplace Cleaning", text: "Our gas fireplace hadn't been cleaned in years. They cleaned every surface and the glass doors look brand new. The technician also found a small issue with the igniter and fixed it on the spot." },
  { name: "Thomas H.", city: "Riverside", rating: 5, date: "September 2024", service: "Chimney Cleaning", text: "Third year using them. Consistent quality every time. The technician remembered the specific type of brick in our 1950s house and knew to use a gentler cleaning method. That kind of attention to detail is rare." },
  { name: "Linda F.", city: "Santa Barbara", rating: 5, date: "December 2024", service: "Chimney Inspection", text: "Needed a Level 2 inspection for a real estate transaction. They had the report done and emailed to my agent within the same day. The other company I called wanted two weeks and twice the price." },
  { name: "Carlos M.", city: "Long Beach", rating: 5, date: "January 2025", service: "Chimney Cap Installation", text: "Replaced a badly corroded cap on our coastal property. They recommended the marine-grade stainless option and explained why. It cost a little more but will last twice as long given the ocean air." },
  { name: "Karen B.", city: "Glendale", rating: 4, date: "February 2025", service: "Chimney Cleaning", text: "Good service. On time, professional, no mess. The only reason for 4 stars instead of 5 is that scheduling took a week due to busy season. The work itself was excellent." },
];

export default function ReviewsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.googleRating,
      reviewCount: SITE.reviewCount,
      bestRating: "5",
    },
    review: ALL_REVIEWS.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating },
      reviewBody: r.text,
      datePublished: r.date,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Reviews" }]} />
        </div>
      </div>

      <section className="section-navy py-14">
        <div className="container-base">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Customer Reviews</h1>
          <p className="text-gray-300 text-xl max-w-xl">
            Verified Google reviews from homeowners across California
          </p>
          <div className="flex items-center gap-3 mt-5">
            <div className="flex gap-1">
              {"★★★★★".split("").map((s, i) => (
                <span key={i} className="text-yellow-400 text-2xl">{s}</span>
              ))}
            </div>
            <span className="text-white font-bold text-xl">{SITE.googleRating}</span>
            <span className="text-gray-300 text-sm">({SITE.reviewCount} reviews)</span>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-base">
          {/* Rating summary */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = star === 5 ? 731 : star === 4 ? 89 : star === 3 ? 18 : star === 2 ? 6 : 3;
              const pct = Math.round((count / 847) * 100);
              return (
                <div key={star} className="card text-center">
                  <div className="text-2xl font-bold text-gray-900">{star}★</div>
                  <div className="text-3xl font-extrabold text-orange-500">{pct}%</div>
                  <div className="text-xs text-gray-400">{count} reviews</div>
                </div>
              );
            })}
          </div>

          {/* Review grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_REVIEWS.map((r, i) => (
              <div key={i} className="card flex flex-col gap-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-gray-900">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.city} · {r.date}</p>
                    <p className="text-xs text-orange-500 mt-0.5">{r.service}</p>
                  </div>
                  <div className="flex gap-0.5 shrink-0">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <span key={j} className={j < r.rating ? "text-yellow-400" : "text-gray-200"}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Join 847+ satisfied California homeowners" />
    </>
  );
}

