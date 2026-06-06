const FEEDBACK = [
  {
    quote:
      "The chimney inspection was clear and easy to understand. The technician explained the fireplace draft issue, checked the chimney system, and showed what repair options made sense.",
    label: "Homeowner in California",
    service: "Chimney Inspection & Fireplace Draft Help",
  },
  {
    quote:
      "We needed help with smoke backing into the room and soot buildup around the fireplace. The service helped us understand whether chimney cleaning, chimney sweep service, or fireplace repair was the right next step.",
    label: "Fireplace Service Customer",
    service: "Chimney Cleaning & Fireplace Repair",
  },
  {
    quote:
      "Our chimney leak was confusing at first. The team explained how chimney flashing, chimney crown damage, masonry cracks, and a missing chimney cap can all cause water problems.",
    label: "Chimney Repair Customer",
    service: "Chimney Leak Repair",
  },
];

export default function ReviewSection() {
  return (
    <section className="section-pad bg-[#F8FAFC]" id="feedback">
      <div className="container-base">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-label">CUSTOMER FEEDBACK</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-3">
            What Homeowners Say
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Helpful feedback-style notes from homeowners who needed chimney cleaning, chimney repair, fireplace repair, or dryer vent service.
          </p>
        </div>

        {/* Feedback cards — 3 on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEEDBACK.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4"
            >
              {/* Red accent quote mark */}
              <span
                className="block text-5xl font-extrabold leading-none select-none text-[#CC2229]"
                aria-hidden="true"
                style={{ fontFamily: "Georgia, serif" }}
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                {card.quote}
              </p>

              {/* Footer */}
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-[#1E3A5F] text-sm">{card.label}</p>
                <p className="text-xs text-[#CC2229] font-medium mt-0.5">{card.service}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
