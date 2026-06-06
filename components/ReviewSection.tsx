"use client";
import { useState } from "react";

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

export default function ReviewSection() {
  const [active, setActive] = useState(0);
  const card = FEEDBACK[active];
  const prev = () => setActive((i) => (i - 1 + FEEDBACK.length) % FEEDBACK.length);
  const next = () => setActive((i) => (i + 1) % FEEDBACK.length);

  return (
    <section className="section-pad bg-[#F8FAFC]" id="feedback">
      <div className="container-base">

        {/* Mobile heading — stacks above card */}
        <div className="md:hidden text-center mb-8">
          <span className="section-label">CUSTOMER FEEDBACK</span>
          <h2 className="text-3xl font-bold text-[#111827] mb-3">What Homeowners Say</h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Homeowner feedback-style notes from customers who needed chimney cleaning, chimney repair, fireplace repair, or dryer vent service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left: dark quote card */}
          <div className="bg-[#1E3A5F] rounded-2xl p-8 md:p-10 text-white flex flex-col">

            {/* Red quote mark */}
            <span
              className="block text-6xl leading-none font-extrabold text-[#CC2229] mb-5 select-none"
              aria-hidden="true"
              style={{ fontFamily: "Georgia, serif" }}
            >
              &ldquo;
            </span>

            {/* Quote text */}
            <p className="text-lg leading-relaxed mb-8 flex-1">{card.quote}</p>

            {/* Author */}
            <div className="border-t border-white/20 pt-5 mb-6">
              <p className="font-bold text-white text-base">{card.name}</p>
              <p className="text-sm text-[#CC2229] font-medium mt-1">{card.service}</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                aria-label="Previous feedback"
                className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors shrink-0"
              >
                <ArrowLeft />
              </button>

              <div className="flex items-center gap-2">
                {FEEDBACK.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Feedback ${i + 1}`}
                    className={`rounded-full transition-all ${
                      i === active
                        ? "w-3 h-3 bg-white"
                        : "w-2 h-2 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next feedback"
                className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors shrink-0"
              >
                <ArrowRight />
              </button>
            </div>
          </div>

          {/* Right: heading + intro — desktop only */}
          <div className="hidden md:block">
            <span className="section-label">CUSTOMER FEEDBACK</span>
            <h2 className="text-4xl font-bold text-[#111827] mb-4">
              What Homeowners Say
            </h2>
            <p className="text-gray-500 leading-relaxed text-lg">
              Homeowner feedback-style notes from customers who needed chimney cleaning, chimney repair, fireplace repair, or dryer vent service.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

function ArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}
