import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Customer Feedback | Chimney Peak California",
  description:
    "Feedback-style notes from homeowners who needed chimney cleaning, chimney repair, fireplace repair, or dryer vent service across California.",
  alternates: { canonical: "/reviews/" },
};

const FEEDBACK = [
  {
    name: "Mary Anne",
    service: "Chimney Inspection & Fireplace Draft Help",
    quote:
      "The chimney inspection was clear and easy to understand. The technician explained the fireplace draft issue, checked the chimney system, and showed what repair options made sense.",
  },
  {
    name: "Robert Miller",
    service: "Chimney Cleaning & Fireplace Repair",
    quote:
      "We needed help with smoke backing into the room and soot buildup around the fireplace. The service helped us understand whether chimney cleaning, chimney sweep service, or fireplace repair was the right next step.",
  },
  {
    name: "Linda Parker",
    service: "Chimney Leak Repair",
    quote:
      "Our chimney leak was confusing at first. The team explained how chimney flashing, chimney crown damage, masonry cracks, and a missing chimney cap can all cause water problems.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Customer Feedback" }]} />
        </div>
      </div>

      <section className="section-navy py-14">
        <div className="container-base">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Customer Feedback</h1>
          <p className="text-gray-300 text-xl max-w-xl">
            Feedback-style notes from homeowners who needed chimney cleaning, chimney repair, fireplace repair, or dryer vent service across California.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-base">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEEDBACK.map((card, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] rounded-xl border border-gray-100 p-6 flex flex-col gap-4"
              >
                <span
                  className="block text-5xl font-extrabold leading-none select-none text-[#CC2229]"
                  aria-hidden="true"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  &ldquo;
                </span>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{card.quote}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-[#1E3A5F] text-sm">{card.name}</p>
                  <p className="text-xs text-[#CC2229] font-medium mt-0.5">{card.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
