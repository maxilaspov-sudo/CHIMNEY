"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { SITE, NAV_SERVICES, NAV_AREAS } from "@/lib/constants";
// phone is intentionally omitted from the top bar until a real tracking number is configured in lib/constants.ts

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  // Close-delay refs prevent dropdown from snapping shut when cursor moves between
  // the trigger button and the dropdown panel (there is a small gap between them).
  const servicesTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const areasTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openServices() {
    if (servicesTimer.current) clearTimeout(servicesTimer.current);
    setServicesOpen(true);
  }
  function closeServices() {
    servicesTimer.current = setTimeout(() => setServicesOpen(false), 180);
  }
  function openAreas() {
    if (areasTimer.current) clearTimeout(areasTimer.current);
    setAreasOpen(true);
  }
  function closeAreas() {
    areasTimer.current = setTimeout(() => setAreasOpen(false), 180);
  }

  const navLinkClass =
    "px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-orange-500 hover:bg-orange-50 transition-colors whitespace-nowrap";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">

      {/* Top bar — trust signal + estimate CTA */}
      <div className="bg-[#1E3A5F] text-white text-xs py-2">
        <div className="container-base flex items-center justify-between gap-4">
          <span className="text-gray-300 hidden sm:flex items-center gap-3">
            <span>&#9733; 4.9 Rating · 847 Reviews</span>
            <span className="opacity-40">|</span>
            <span>Licensed &amp; CSIA Certified</span>
            <span className="opacity-40">|</span>
            <span>Serving All of California</span>
          </span>
          <Link
            href="/contact/"
            className="flex items-center gap-1.5 font-bold text-orange-300 hover:text-orange-200 transition-colors ml-auto text-sm"
          >
            Free Estimate Available →
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-base flex items-center justify-between h-16 gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Chimney Peak California — home">
          <FlameIcon />
          <span className="font-bold text-[#1E3A5F] text-base leading-tight">
            Chimney Peak<br />
            <span className="text-orange-500 text-xs font-semibold tracking-wide uppercase">California</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">

          {/* Services dropdown */}
          <div className="relative">
            <button
              className={`${navLinkClass} flex items-center gap-1`}
              onMouseEnter={openServices}
              onMouseLeave={closeServices}
              onClick={() => { if (servicesTimer.current) clearTimeout(servicesTimer.current); setServicesOpen((v) => !v); }}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services <ChevronIcon open={servicesOpen} />
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full left-0 mt-1 bg-white shadow-xl border border-gray-100 rounded-xl w-64 py-2 z-50"
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
              >
                {NAV_SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    {s.name}
                  </Link>
                ))}
                <div className="border-t border-gray-100 mt-1 pt-1">
                  <Link
                    href="/services/"
                    className="block px-4 py-2.5 text-sm font-semibold text-orange-600 hover:bg-orange-50 transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    All Services →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Areas dropdown */}
          <div className="relative">
            <button
              className={`${navLinkClass} flex items-center gap-1`}
              onMouseEnter={openAreas}
              onMouseLeave={closeAreas}
              onClick={() => { if (areasTimer.current) clearTimeout(areasTimer.current); setAreasOpen((v) => !v); }}
              aria-expanded={areasOpen}
              aria-haspopup="true"
            >
              Service Areas <ChevronIcon open={areasOpen} />
            </button>
            {areasOpen && (
              <div
                className="absolute top-full left-0 mt-1 bg-white shadow-xl border border-gray-100 rounded-xl w-56 py-2 z-50"
                onMouseEnter={openAreas}
                onMouseLeave={closeAreas}
              >
                {NAV_AREAS.slice(0, 10).map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    onClick={() => setAreasOpen(false)}
                  >
                    {a.name}
                  </Link>
                ))}
                <div className="border-t border-gray-100 mt-1 pt-1">
                  <Link
                    href="/areas/california/"
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    onClick={() => setAreasOpen(false)}
                  >
                    California (Statewide)
                  </Link>
                  <Link
                    href="/areas/"
                    className="block px-4 py-2.5 text-sm font-semibold text-orange-600 hover:bg-orange-50 transition-colors"
                    onClick={() => setAreasOpen(false)}
                  >
                    All Service Areas →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/about/" className={navLinkClass}>About</Link>
          <Link href="/reviews/" className={navLinkClass}>Reviews</Link>
          <Link href="/blog/" className={navLinkClass}>Blog</Link>
          <Link href="/faq/" className={navLinkClass}>FAQ</Link>
          <Link href="/contact/" className={navLinkClass}>Contact</Link>
        </div>

        {/* Desktop CTA — single prominent button, no duplicate phone */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link
            href="/contact/"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm hover:shadow-md"
          >
            Free Estimate
          </Link>
        </div>

        {/* Mobile: estimate link + hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="/contact/"
            className="text-orange-500 font-bold text-sm hover:text-orange-600 transition-colors whitespace-nowrap"
          >
            Free Estimate
          </Link>
          <button
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <XIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white max-h-[80vh] overflow-y-auto">
          <div className="container-base py-4 flex flex-col gap-0.5">

            {/* Services accordion */}
            <div>
              <button
                className="flex justify-between items-center w-full px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-gray-50 hover:text-orange-500 transition-colors"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronIcon open={servicesOpen} />
              </button>
              {servicesOpen && (
                <div className="pl-4 mt-1 mb-1 flex flex-col border-l-2 border-orange-100">
                  {NAV_SERVICES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {s.name}
                    </Link>
                  ))}
                  <Link
                    href="/services/"
                    className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-orange-600 hover:bg-orange-50 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    All Services →
                  </Link>
                </div>
              )}
            </div>

            {/* Areas accordion */}
            <div>
              <button
                className="flex justify-between items-center w-full px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-gray-50 hover:text-orange-500 transition-colors"
                onClick={() => setAreasOpen(!areasOpen)}
                aria-expanded={areasOpen}
              >
                Service Areas
                <ChevronIcon open={areasOpen} />
              </button>
              {areasOpen && (
                <div className="pl-4 mt-1 mb-1 flex flex-col border-l-2 border-orange-100">
                  {NAV_AREAS.slice(0, 8).map((a) => (
                    <Link
                      key={a.href}
                      href={a.href}
                      className="block px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {a.name}
                    </Link>
                  ))}
                  <Link
                    href="/areas/california/"
                    className="block px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    California (Statewide)
                  </Link>
                  <Link
                    href="/areas/"
                    className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-orange-600 hover:bg-orange-50 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    All Service Areas →
                  </Link>
                </div>
              )}
            </div>

            {[
              { name: "About", href: "/about/" },
              { name: "Reviews", href: "/reviews/" },
              { name: "Blog", href: "/blog/" },
              { name: "FAQ", href: "/faq/" },
              { name: "Contact", href: "/contact/" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-gray-50 hover:text-orange-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile CTAs */}
            <div className="pt-4 mt-3 border-t border-gray-100 flex flex-col gap-2.5">
              <Link
                href="/contact/"
                className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-4 py-3 rounded-xl transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Request Free Estimate
              </Link>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center justify-center gap-2 bg-[#1E3A5F] hover:bg-[#0F2238] text-white font-semibold text-sm px-4 py-3 rounded-xl transition-colors"
              >
                <MailIcon /> {SITE.email}
              </a>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="2,4 12,13 22,4" />
    </svg>
  );
}
function ChevronIcon({ open = false }: { open?: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.15s" }}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
function FlameIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="#F97316">
      <path d="M12 2c0 0-5 4-5 9a5 5 0 0010 0c0-2-1-4-2-5 0 2-1 3-3 3s-2-3 0-7z" />
    </svg>
  );
}
function HamburgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
