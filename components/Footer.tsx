import Link from "next/link";
import { SITE, NAV_SERVICES, NAV_AREAS } from "@/lib/constants";
// phone is omitted until a real tracking number is set in lib/constants.ts

export default function Footer() {
  return (
    <footer className="bg-[#0F2238] text-gray-300">
      {/* Main footer */}
      <div className="container-base py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#F97316">
              <path d="M12 2c0 0-5 4-5 9a5 5 0 0010 0c0-2-1-4-2-5 0 2-1 3-3 3s-2-3 0-7z" />
            </svg>
            <span className="font-bold text-white text-lg leading-tight">
              Chimney Peak<br />
              <span className="text-orange-500 text-sm font-semibold">California</span>
            </span>
          </Link>
          <p className="text-sm text-gray-400 mb-5 leading-relaxed">
            California&apos;s trusted chimney cleaning, repair, and inspection specialists. CSIA certified. Licensed.
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <MailIcon /> {SITE.email}
            </a>
            <span className="flex items-center gap-2">
              <LocationIcon /> {SITE.address}
            </span>
          </div>
          <div className="mt-4 flex items-center gap-1">
            <div role="img" aria-label={`${SITE.googleRating} out of 5 stars`} className="flex gap-0.5">
              {"★★★★★".split("").map((s, i) => (
                <span key={i} aria-hidden="true" className="text-yellow-400 text-lg">{s}</span>
              ))}
            </div>
            <span className="text-sm ml-1 text-gray-300">{SITE.googleRating} ({SITE.reviewCount} reviews)</span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold text-base mb-4 border-b border-gray-700 pb-2">Our Services</h3>
          <ul className="flex flex-col gap-2">
            {NAV_SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-sm hover:text-orange-400 transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h3 className="text-white font-semibold text-base mb-4 border-b border-gray-700 pb-2">Service Areas</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/areas/california/" className="text-sm hover:text-orange-400 transition-colors font-medium">
                California (Statewide)
              </Link>
            </li>
            {NAV_AREAS.slice(0, 9).map((a) => (
              <li key={a.href}>
                <Link href={a.href} className="text-sm hover:text-orange-400 transition-colors">
                  {a.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/areas/" className="text-sm text-orange-400 hover:text-orange-300 font-semibold transition-colors">
                All Service Areas →
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold text-base mb-4 border-b border-gray-700 pb-2">Company</h3>
          <ul className="flex flex-col gap-2 mb-6">
            <li><Link href="/about/" className="text-sm hover:text-orange-400 transition-colors">About Us</Link></li>
            <li><Link href="/reviews/" className="text-sm hover:text-orange-400 transition-colors">Customer Reviews</Link></li>
            <li><Link href="/blog/" className="text-sm hover:text-orange-400 transition-colors">Blog & Tips</Link></li>
            <li><Link href="/faq/" className="text-sm hover:text-orange-400 transition-colors">FAQ</Link></li>
            <li><Link href="/contact/" className="text-sm hover:text-orange-400 transition-colors">Contact Us</Link></li>
          </ul>
          <div className="bg-[#1E3A5F] rounded-xl p-4">
            <p className="text-sm text-gray-300 mb-3">Ready to schedule?</p>
            <Link href="/contact/" className="btn-primary text-sm px-4 py-2 w-full justify-center">
              Request Free Estimate
            </Link>
          </div>
        </div>
      </div>

      {/* Trust badges row */}
      <div className="border-t border-gray-800">
        <div className="container-base py-6 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <CheckIcon /> CSIA Certified
          </span>
          <span className="flex items-center gap-1">
            <CheckIcon /> Licensed &amp; Insured
          </span>
          <span className="flex items-center gap-1">
            <CheckIcon /> Fully Insured
          </span>
          <span className="flex items-center gap-1">
            <CheckIcon /> {SITE.yearsInBusiness}+ Years Experience
          </span>
          <span className="flex items-center gap-1">
            <CheckIcon /> {SITE.jobsCompleted} Jobs Completed
          </span>
        </div>
      </div>

      {/* Bottom bar */}
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

function MailIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>;
}
function LocationIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s-8-7-8-12a8 8 0 1 1 16 0c0 5-8 12-8 12z"/><circle cx="12" cy="10" r="2"/></svg>;
}
function CheckIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="3" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>;
}
