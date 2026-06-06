"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { SITE, NAV_SERVICES, NAV_AREAS } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

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

  const navLink =
    "px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors whitespace-nowrap relative group";

  return (
    <header className="sticky top-0 z-50">

      {/* ── Trust bar ─────────────────────────────────────────────── */}
      <div className="bg-[#111827] text-gray-300 text-xs py-2">
        <div className="container-base flex items-center justify-between gap-4">
          <span className="hidden sm:flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <LocationPinIcon />
              Serving all of California
            </span>
            <span className="text-gray-600">|</span>
            <span className="flex items-center gap-1">
              <StarRow />
              <span className="ml-1">{SITE.googleRating} Google Rating</span>
            </span>
            <span className="text-gray-600">|</span>
            <span>Licensed &amp; Insured</span>
          </span>
          {/* Mobile: condensed single line */}
          <span className="flex sm:hidden items-center gap-1 text-gray-400">
            <StarRow />
            <span className="ml-1">{SITE.googleRating} · Licensed &amp; Insured</span>
          </span>
          <Link
            href="/contact/"
            className="font-semibold text-orange-400 hover:text-orange-300 transition-colors ml-auto whitespace-nowrap"
          >
            Free Estimate →
          </Link>
        </div>
      </div>

      {/* ── Main nav ──────────────────────────────────────────────── */}
      <nav className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container-base flex items-center justify-between h-16 gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Chimney Peak California — home">
            <ChimneyIcon />
            <span className="font-extrabold text-[#111827] text-base leading-tight">
              CHIMNEY PEAK<br />
              <span className="text-orange-500 text-[10px] font-bold tracking-widest uppercase">California</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">

            <Link href="/" className={navLink}>Home</Link>

            {/* Services dropdown */}
            <div className="relative">
              <button
                className={`${navLink} flex items-center gap-1`}
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
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
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

            {/* Service Areas dropdown */}
            <div className="relative">
              <button
                className={`${navLink} flex items-center gap-1`}
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
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      onClick={() => setAreasOpen(false)}
                    >
                      {a.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <Link
                      href="/areas/california/"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
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

            <Link href="/about/" className={navLink}>About Us</Link>
            <Link href="/reviews/" className={navLink}>Reviews</Link>
            <Link href="/blog/" className={navLink}>Blog</Link>
            <Link href="/contact/" className={navLink}>Contact</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/contact/"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              Book an Inspection
            </Link>
          </div>

          {/* Mobile: estimate + hamburger */}
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
        </div>
      </nav>

      {/* ── Mobile menu ───────────────────────────────────────────── */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 max-h-[80vh] overflow-y-auto shadow-lg">
          <div className="container-base py-4 flex flex-col gap-0.5">

            <Link href="/" className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>Home</Link>

            {/* Services accordion */}
            <div>
              <button
                className="flex justify-between items-center w-full px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
              >
                Services <ChevronIcon open={servicesOpen} />
              </button>
              {servicesOpen && (
                <div className="pl-4 mt-1 mb-1 flex flex-col border-l-2 border-orange-100">
                  {NAV_SERVICES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {s.name}
                    </Link>
                  ))}
                  <Link href="/services/" className="block px-3 py-2 rounded-lg text-sm font-semibold text-orange-600" onClick={() => setMenuOpen(false)}>
                    All Services →
                  </Link>
                </div>
              )}
            </div>

            {/* Areas accordion */}
            <div>
              <button
                className="flex justify-between items-center w-full px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setAreasOpen(!areasOpen)}
                aria-expanded={areasOpen}
              >
                Service Areas <ChevronIcon open={areasOpen} />
              </button>
              {areasOpen && (
                <div className="pl-4 mt-1 mb-1 flex flex-col border-l-2 border-orange-100">
                  {NAV_AREAS.slice(0, 8).map((a) => (
                    <Link
                      key={a.href}
                      href={a.href}
                      className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {a.name}
                    </Link>
                  ))}
                  <Link href="/areas/california/" className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors" onClick={() => setMenuOpen(false)}>California (Statewide)</Link>
                  <Link href="/areas/" className="block px-3 py-2 rounded-lg text-sm font-semibold text-orange-600" onClick={() => setMenuOpen(false)}>All Service Areas →</Link>
                </div>
              )}
            </div>

            {[
              { name: "About Us", href: "/about/" },
              { name: "Reviews", href: "/reviews/" },
              { name: "Blog", href: "/blog/" },
              { name: "FAQ", href: "/faq/" },
              { name: "Contact", href: "/contact/" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 mt-3 border-t border-gray-100 flex flex-col gap-2.5">
              <Link
                href="/contact/"
                className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-4 py-3 rounded-xl transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Book an Inspection
              </Link>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-sm px-4 py-3 rounded-xl transition-colors"
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

function StarRow() {
  return (
    <span className="flex gap-px" aria-hidden="true">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#F59E0B">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

function LocationPinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 22s-8-7-8-12a8 8 0 1 1 16 0c0 5-8 12-8 12z" /><circle cx="12" cy="10" r="2" />
    </svg>
  );
}

function ChimneyIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="28" width="32" height="10" rx="2" fill="#CC2229" />
      <rect x="13" y="10" width="6" height="18" fill="#CC2229" />
      <rect x="21" y="14" width="6" height="14" fill="#B01E24" />
      <rect x="10" y="7" width="20" height="5" rx="1.5" fill="#CC2229" />
      <path d="M16 7 Q17 3 18 7" stroke="#E05A5A" strokeWidth="1.5" fill="none" />
      <path d="M20 7 Q21 2 22 7" stroke="#E05A5A" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function ChevronIcon({ open = false }: { open?: boolean }) {
  return (
    <svg
      width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.15s" }}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="2,4 12,13 22,4" />
    </svg>
  );
}
