import { SITE } from "@/lib/constants";

const badges = [
  { icon: "🛡️", label: "CSIA Certified", sub: "Every technician" },
  { icon: "⭐", label: `${SITE.googleRating} Stars`, sub: `${SITE.reviewCount}+ reviews` },
  { icon: "📋", label: "Licensed & Insured", sub: "Fully Covered" },
  { icon: "🔧", label: `${SITE.yearsInBusiness}+ Years`, sub: "In business" },
  { icon: "✅", label: `${SITE.jobsCompleted} Jobs`, sub: "Completed statewide" },
];

export default function TrustBadges({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`py-8 ${dark ? "bg-[#172E4D]" : "bg-gray-50 border-y border-gray-100"}`}>
      <div className="container-base">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {badges.map((b, i) => (
            <div key={i} className="flex items-center gap-3 text-center">
              <span className="text-2xl" role="img" aria-hidden="true">{b.icon}</span>
              <div className="text-left">
                <p className={`font-bold text-sm ${dark ? "text-white" : "text-gray-900"}`}>{b.label}</p>
                <p className={`text-xs ${dark ? "text-gray-400" : "text-gray-500"}`}>{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
