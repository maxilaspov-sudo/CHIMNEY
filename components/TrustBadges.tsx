import { SITE } from "@/lib/constants";

const badges = [
  {
    icon: <ShieldIcon />,
    label: "Licensed & Insured",
    sub: "CA Licensed Contractor",
  },
  {
    icon: <CertIcon />,
    label: "CSIA Certified",
    sub: "Every Technician",
  },
  {
    icon: <HomeIcon />,
    label: "California Service Area",
    sub: "All Major Cities",
  },
  {
    icon: <BadgeIcon />,
    label: "Clean Work Area",
    sub: "Guaranteed",
  },
];

export default function TrustBadges({ dark = false }: { dark?: boolean }) {
  const bg = dark ? "bg-[#1A2438]" : "bg-[#111827]";
  return (
    <div className={`${bg} py-6`}>
      <div className="container-base">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((b, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-orange-500/40 flex items-center justify-center shrink-0 text-orange-500">
                {b.icon}
              </div>
              <div>
                <p className="font-bold text-sm text-white leading-tight">{b.label}</p>
                <p className="text-xs text-gray-400">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function CertIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M8.56 14.42L7 23l5-3 5 3-1.56-8.58" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
