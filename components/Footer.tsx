import Link from "next/link";
import { SITE, NAV_SERVICES, NAV_AREAS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300">

      {/* ── Main columns ──────────────────────────────────────────── */}
      <div className="container-base py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand — spans 2 columns on lg */}
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2.5 mb-5" aria-label="Chimney Peak California — home">
            <ChimneyFooterIcon />
            <span className="font-extrabold text-white text-lg leading-tight">
              CHIMNEY PEAK<br />
              <span className="text-orange-500 text-[11px] font-bold tracking-widest uppercase">California</span>
            </span>
          </Link>
          <p className="text-sm text-gray-400 mb-5 leading-relaxed max-w-xs">
            Professional chimney cleaning, inspection, and repair services throughout California.
            CSIA certified. Licensed &amp; insured. Keeping your home safe, warm, and efficient.
          </p>
          <div className="flex flex-col gap-2 text-sm mb-5">
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <MailIcon /> {SITE.email}
            </a>
            <span className="flex items-center gap-2 text-gray-500">
              <LocationIcon /> Serving all of California
            </span>
          </div>
          {/* Rating */}
          <div className="flex items-center gap-2">
            <Stars />
            <span className="text-sm text-gray-300">{SITE.googleRating} Google Rating</span>
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <Divider /> Our Services
          </h3>
          <ul className="flex flex-col gap-2.5">
            {NAV_SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-sm text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <CheckSmall /> {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <Divider /> Service Areas
          </h3>
          <ul className="flex flex-col gap-2.5">
            <li>
              <Link href="/areas/california/" className="text-sm text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-1.5">
                <LocationSmall /> California (Statewide)
              </Link>
            </li>
            {NAV_AREAS.slice(0, 7).map((a) => (
              <li key={a.href}>
                <Link href={a.href} className="text-sm text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <LocationSmall /> {a.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/areas/" className="text-sm text-orange-500 hover:text-orange-400 font-semibold transition-colors">
                View All Areas →
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links + Contact */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <Divider /> Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5 mb-6">
            {[
              { name: "About Us", href: "/about/" },
              { name: "Customer Reviews", href: "/reviews/" },
              { name: "Blog & Tips", href: "/blog/" },
              { name: "FAQ", href: "/faq/" },
              { name: "Contact Us", href: "/contact/" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ArrowSmall /> {l.name}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
            <Divider /> Hours
          </h3>
          <div className="text-xs text-gray-500 space-y-1">
            <p>Mon – Fri: 7:00 AM – 7:00 PM</p>
            <p>Saturday: 8:00 AM – 5:00 PM</p>
            <p>Sunday: Emergency calls only</p>
          </div>
        </div>
      </div>

      {/* ── Trust badges ──────────────────────────────────────────── */}
      <div className="border-t border-gray-800">
        <div className="container-base py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs text-gray-500">
            {[
              { icon: <ShieldSm />, text: "Licensed & Insured" },
              { icon: <CertSm />, text: "CSIA Certified" },
              { icon: <StarSm />, text: `${SITE.googleRating}★ Google Rating` },
              { icon: <CheckSm />, text: "Free Estimates Available" },
              { icon: <ClockSm />, text: "Serving All of California" },
            ].map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {b.icon} {b.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────────── */}
      <div className="border-t border-gray-800">
        <div className="container-base py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} Chimney Peak California. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy/" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service/" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-gray-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}

function Stars() {
  return (
    <div role="img" aria-label="4.9 out of 5 stars" className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} aria-hidden="true" className="text-yellow-400 text-base">★</span>
      ))}
    </div>
  );
}

/* ── Small inline icons ──────────────────────────────────────────── */
function Divider() {
  return <span className="inline-block w-4 h-0.5 bg-orange-500 rounded-full" aria-hidden="true" />;
}
function CheckSmall() {
  return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#CC2229" strokeWidth="3" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>;
}
function LocationSmall() {
  return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" aria-hidden="true"><path d="M12 22s-8-7-8-12a8 8 0 1 1 16 0c0 5-8 12-8 12z"/><circle cx="12" cy="10" r="2"/></svg>;
}
function ArrowSmall() {
  return <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
}
function MailIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>;
}
function LocationIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 22s-8-7-8-12a8 8 0 1 1 16 0c0 5-8 12-8 12z"/><circle cx="12" cy="10" r="2"/></svg>;
}

function ShieldSm() { return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#CC2229" strokeWidth="2.5" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>; }
function CertSm() { return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#CC2229" strokeWidth="2.5" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M8.56 14.42L7 23l5-3 5 3-1.56-8.58"/></svg>; }
function StarSm() { return <svg width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>; }
function CheckSm() { return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#CC2229" strokeWidth="3" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>; }
function ClockSm() { return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#CC2229" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>; }

function ChimneyFooterIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="28" width="32" height="10" rx="2" fill="#CC2229" />
      <rect x="13" y="10" width="6" height="18" fill="#CC2229" />
      <rect x="21" y="14" width="6" height="14" fill="#B01E24" />
      <rect x="10" y="7" width="20" height="5" rx="1.5" fill="#CC2229" />
    </svg>
  );
}
