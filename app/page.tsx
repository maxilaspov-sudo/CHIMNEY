import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { SITE, NAV_SERVICES, NAV_AREAS } from "@/lib/constants";
import { getAllPosts } from "@/lib/blogPosts";

const LeadForm = dynamic(() => import("@/components/LeadForm"));
const ReviewSection = dynamic(() => import("@/components/ReviewSection"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));

export const metadata: Metadata = {
  title: "Chimney Peak California | CSIA-Certified Chimney Services",
  description:
    "CSIA-certified chimney cleaning, repair, and inspection across all of California. 4.9-star rated, 847 reviews, 12,400+ jobs since 2009. Same-week scheduling. Free estimates.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Chimney Peak California | CSIA-Certified Chimney Company",
    description: "CSIA-certified chimney cleaning, repair, and inspection in California. 4.9 stars, 847 reviews, same-week scheduling.",
    url: "/",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
};

// ── Verified Pexels image IDs ──────────────────────────────────────
// 4394224  = house roof with chimney + attic windows against blue sky
// 13543563 = tall brick chimneys on a rooftop, clear sky
// 28396807 = close-up red chimney on a roof against blue sky
// 5242049  = masonry/brickwork detail
// 17095699 = classic urban rooftops with prominent red brick chimneys
// 37726072 = industrial ventilation/ductwork pipes on a building wall

const SERVICE_CARDS = [
  {
    name: "Chimney Cleaning",
    desc: "Remove soot, creosote & debris to prevent fires and improve the efficiency of your fireplace.",
    href: "/services/chimney-cleaning/",
    img: "/images/service-chimney-cleaning.jpg",
    alt: "Technician cleaning a residential chimney with chimney sweep equipment",
    icon: <BrushIcon />,
    cta: "Keep Your Home Safe",
  },
  {
    name: "Chimney Inspection",
    desc: "Thorough inspections to identify issues early and ensure your chimney is safe to use.",
    href: "/services/chimney-inspection/",
    img: "/images/service-chimney-inspection.jpg",
    alt: "Technician inspecting an indoor fireplace and chimney system in a California home",
    icon: <SearchIcon />,
    cta: "Learn More",
  },
  {
    name: "Chimney Repair",
    desc: "Expert repairs for cracks, leaks, and damaged bricks or mortar to restore safety and function.",
    href: "/services/chimney-repair/",
    img: "/images/service-chimney-repair.jpg",
    alt: "Technician repairing brick masonry on a residential chimney",
    icon: <WrenchIcon />,
    cta: "Learn More",
  },
  {
    name: "Chimney Caps",
    desc: "High quality chimney caps to keep out animals, rain, and debris while improving draft.",
    href: "/services/chimney-cap-installation/",
    img: "/images/service-chimney-caps.jpg",
    alt: "Brick chimney with black metal chimney cap installed on a tile roof",
    icon: <CapIcon />,
    cta: "Learn More",
  },
];

const ADDITIONAL_SERVICES = [
  { name: "Fireplace Cleaning", href: "/services/fireplace-cleaning/" },
  { name: "Dryer Vent Cleaning", href: "/services/dryer-vent-cleaning/" },
  { name: "Chimney Liner Repair", href: "/services/chimney-liner-repair/" },
  { name: "Gas Fireplace Repair", href: "/services/gas-fireplace-repair/" },
  { name: "Chimney Sweep", href: "/services/chimney-sweep/" },
  { name: "Masonry Repair", href: "/services/chimney-repair/" },
];

const WHY_BULLETS = [
  "Experienced & CSIA Certified Technicians",
  "Upfront Pricing — No Hidden Fees",
  "Top Rated by Your Neighbors",
  "Proudly Serving All of California",
];

const HOME_FAQS = [
  {
    q: "How much does chimney cleaning cost in California?",
    a: "Pricing depends on your chimney's condition, the number of flues, deposit level, and whether a written inspection report is included. We provide a flat-price quote in writing before starting any work.",
  },
  {
    q: "How often should I have my chimney cleaned?",
    a: "The NFPA 211 standard recommends annual inspection and cleaning for any chimney in regular use. If you burn more than two cords of wood per season, twice a year is safer.",
  },
  {
    q: "Do you serve my city in California?",
    a: "We serve all major California cities including Los Angeles, San Diego, San Francisco, Sacramento, Fresno, Oakland, Pasadena, and 40+ additional markets statewide.",
  },
  {
    q: "Are your technicians CSIA certified?",
    a: "Yes. Every field technician carries a current CSIA (Chimney Safety Institute of America) certification. We hold all required California contractor licenses.",
  },
  {
    q: "What is included in a chimney inspection?",
    a: "Our Level 1 inspection covers all accessible parts of the chimney — firebox, damper, smoke shelf, flue, and exterior cap. Level 2 adds a full video camera scan and a written report.",
  },
];

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* ══ HERO ═══════════════════════════════════════════════════ */}
      {/* Outdoor rooftop chimney scene — dark overlay for contrast  */}
      <section className="relative min-h-[600px] md:min-h-[680px] flex items-center overflow-hidden">
        <Image
          src="/images/homepage-hero-chimney-cleaning-california.jpg"
          alt="Professional chimney technician working on a rooftop chimney in California"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-[70%_top] md:object-top"
          sizes="100vw"
        />
        {/* Strong dark overlay — left-to-right fade for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/88 to-[#0a0a0a]/55" />

        <div className="relative z-10 container-base py-14 w-full">
          {/* ── Headline + CTAs ─────────────────────────────────── */}
          <div className="max-w-2xl">
            {/* Rating pill */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <span className="text-yellow-400">★★★★★</span>
              <span>{SITE.googleRating} Google Rating · CSIA Certified · Free Estimates</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] mb-5">
              Professional Chimney<br />
              Services You Can Trust
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-7 leading-relaxed max-w-xl">
              Keeping your home safe, warm, and efficient with expert chimney cleaning,
              inspection, and repair across all of California.
            </p>

            {/* Trust bullets */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2 mb-8">
              {[
                "Certified & Insured Technicians",
                "Same-Week Scheduling",
                "Written Reports Included",
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-sm text-gray-200">
                  <CheckBadge /> {item}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-lg transition-colors shadow-lg text-base"
              >
                Book an Inspection
              </Link>
              <a
                href="#estimate"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-base"
              >
                Request Free Estimate
              </a>
            </div>
          </div>
        </div>

        {/* ── Google rating card — bottom-right corner, desktop only ── */}
        <div className="hidden lg:block absolute bottom-8 right-8 z-10">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-[260px]">
            {/* Google logo */}
            <div className="flex items-center gap-2 mb-4">
              <GoogleLogoSmall />
              <span className="font-semibold text-gray-900 text-sm">Google Reviews</span>
            </div>
            {/* Rating */}
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-5xl font-extrabold text-gray-900 leading-none">{SITE.googleRating}</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Verified Google Reviews
            </p>
            <div className="border-t border-gray-100 pt-4 space-y-1.5">
              <p className="text-xs text-gray-600 flex items-center gap-1.5">
                <GreenCheck /> CSIA Certified Technicians
              </p>
              <p className="text-xs text-gray-600 flex items-center gap-1.5">
                <GreenCheck /> Licensed &amp; Insured
              </p>
              <p className="text-xs text-gray-600 flex items-center gap-1.5">
                <GreenCheck /> California Service Area
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TRUST BADGES BAR ════════════════════════════════════════ */}
      <div className="bg-[#111827] border-b border-gray-800">
        <div className="container-base py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-700/50">
            {[
              { icon: <HomeSmall />, title: "Certified Chimney", sub: "Technicians" },
              { icon: <CalSmall />, title: "Same-Week", sub: "Scheduling" },
              { icon: <ShieldSmall />, title: "Licensed & Insured", sub: "CA Contractor" },
              { icon: <BadgeSmall />, title: "Free Estimate", sub: "Available" },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3 first:pl-0">
                <div className="text-orange-500 shrink-0">{b.icon}</div>
                <div>
                  <p className="font-bold text-white text-sm leading-tight">{b.title}</p>
                  <p className="text-xs text-gray-400">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ OUR SERVICES ════════════════════════════════════════════ */}
      <section className="section-pad bg-white" id="services">
        <div className="container-base">
          <div className="text-center mb-10">
            <span className="section-label">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-3">
              Complete Chimney Care
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              From routine cleanings to complete rebuilds, we offer everything your chimney needs
              to keep your home safe and efficient.
            </p>
          </div>

          {/* 4 main service cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CARDS.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="group bg-white rounded-2xl overflow-visible border border-gray-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 rounded-t-2xl overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    loading={i < 2 ? "eager" : "lazy"}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Centered red circle icon at image/body junction */}
                <div className="flex justify-center -mt-5 relative z-10">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-md ring-4 ring-white">
                    {s.icon}
                  </div>
                </div>

                {/* Body */}
                <div className="px-5 pb-5 pt-3 text-center rounded-b-2xl">
                  <h3 className="font-bold text-[#111827] text-base mb-2 group-hover:text-orange-500 transition-colors leading-snug">
                    {s.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-orange-500 text-xs font-bold uppercase tracking-wide">
                    {s.cta} <ArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Additional service chips */}
          <div className="flex flex-wrap justify-center gap-2.5 mt-8">
            {ADDITIONAL_SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-sm text-gray-600 bg-white border border-gray-200 hover:border-orange-400 hover:text-orange-600 px-4 py-2 rounded-full transition-colors"
              >
                {s.name}
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/services/" className="btn-outline">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US + LEAD FORM ══════════════════════════════ */}
      <section className="section-pad bg-[#F8FAFC]" id="estimate">
        <div className="container-base">
          <div className="grid lg:grid-cols-3 gap-8 items-start">

            {/* Column 1 — Company image */}
            <div className="relative">
              <Image
                src="/images/about-chimney-technician-team.jpg"
                alt="Professional chimney technician standing beside a service truck in a California neighborhood"
                width={600}
                height={520}
                className="rounded-2xl shadow-xl object-cover w-full h-80 lg:h-auto"
                loading="lazy"
              />
              {/* Floating Google rating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100 hidden sm:block">
                <div className="flex items-center gap-1.5">
                  <span className="text-yellow-400 text-lg">★</span>
                  <div>
                    <p className="font-bold text-gray-900 text-base leading-none">{SITE.googleRating}/5</p>
                    <p className="text-[10px] text-gray-500">Google Rating</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 — Text + bullets */}
            <div>
              <span className="section-label">WHY CHOOSE US</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
                Local Experts. Quality Work.<br className="hidden sm:block" /> Customer Focused.
              </h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                We are a local chimney company with years of experience serving California homeowners.
                Our team is committed to providing honest assessments, top quality workmanship,
                and exceptional customer service.
              </p>
              <ul className="space-y-3 mb-6">
                {WHY_BULLETS.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about/" className="btn-primary">
                About Us
              </Link>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-200">
                {[
                  { n: "CSIA", l: "Certified\nTechnicians" },
                  { n: "Free", l: "Estimate\nAvailable" },
                  { n: SITE.googleRating + "★", l: "Google\nRating" },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <p className="text-xl font-extrabold text-orange-500">{s.n}</p>
                    <p className="text-xs text-gray-500 mt-0.5 whitespace-pre-line leading-tight">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 — Lead form */}
            <div>
              <LeadForm
                heading="Request a Free Quote"
                subheading="We respond within 2 hours. Same-week appointments available."
              />
            </div>

          </div>
        </div>
      </section>

      {/* ══ REVIEWS ════════════════════════════════════════════════ */}
      <ReviewSection />

      {/* ══ LATEST ARTICLES ════════════════════════════════════════ */}
      <section className="section-pad bg-white">
        <div className="container-base">
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <span className="section-label">LATEST ARTICLES</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
                Chimney Tips &amp; Home Safety
              </h2>
            </div>
            <Link
              href="/blog/"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-orange-500 font-bold hover:underline whitespace-nowrap"
            >
              VIEW ALL ARTICLES <ArrowRight />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-orange-100 transition-all duration-300 bg-white"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={post.heroImageMedium}
                    alt={post.heroAlt}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2 block">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-[#111827] text-base mb-2 leading-snug group-hover:text-orange-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-orange-500 text-sm font-bold">
                    READ MORE <ArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 sm:hidden text-center">
            <Link href="/blog/" className="btn-outline">View All Articles</Link>
          </div>
        </div>
      </section>

      {/* ══ SERVICE AREAS ══════════════════════════════════════════ */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container-base">
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* Left — heading + area list */}
            <div>
              <span className="section-label">OUR SERVICE AREAS</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
                Proudly Serving All<br className="hidden sm:block" /> of California
              </h2>
              <p className="text-gray-500 mb-7 leading-relaxed">
                We dispatch CSIA-certified technicians to every major California city.
                If your city isn&apos;t listed, reach out — we likely cover your area.
              </p>

              {/* Area list in 2 columns with red pins */}
              <div className="grid grid-cols-2 gap-2 mb-7">
                {NAV_AREAS.slice(0, 14).map((area) => (
                  <Link
                    key={area.href}
                    href={area.href}
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-white hover:bg-orange-50 border border-gray-100 hover:border-orange-200 rounded-lg px-3 py-1.5 transition-all group shadow-sm"
                  >
                    <span className="shrink-0 text-orange-500">
                      <PinIcon />
                    </span>
                    <span className="font-medium">{area.name}</span>
                  </Link>
                ))}
              </div>

              <Link href="/areas/" className="btn-primary">
                View All Service Areas
              </Link>
            </div>

            {/* Right — map embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 aspect-[4/3]">
              <iframe
                title="Chimney Peak California service areas — California map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303693.7252048994!2d-120.26076!3d36.7783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "340px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ══ FAQ ════════════════════════════════════════════════════ */}
      <FAQSection faqs={HOME_FAQS} heading="Common Questions About Chimney Service" />

      {/* ══ CTA BANNER ═════════════════════════════════════════════ */}
      <CTABanner />

      {/* ══ SEO INTERNAL LINKS ═════════════════════════════════════ */}
      <section className="py-10 bg-[#F8FAFC] border-t border-gray-100">
        <div className="container-base">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-widest">Our Services</h3>
              <ul className="grid grid-cols-2 gap-2">
                {NAV_SERVICES.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                      → {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-widest">Service Areas</h3>
              <ul className="grid grid-cols-2 gap-2">
                {NAV_AREAS.slice(0, 12).map((a) => (
                  <li key={a.href}>
                    <Link href={a.href} className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                      → {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Inline SVG icons ────────────────────────────────────────────── */
function ArrowRight() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
}
function CheckBadge() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#CC2229" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>;
}
function GreenCheck() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>;
}
function PinIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="#CC2229" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>;
}
function BrushIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 0 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94C5.79 16.2 4 16.53 2.48 15.8L6 12.28a3.29 3.29 0 0 0-4.49 4.49L5 20.27a3.29 3.29 0 0 0 4.49-4.49"/></svg>; }
function SearchIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>; }
function WrenchIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>; }
function CapIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>; }

/* Trust bar icons */
function HomeSmall() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>; }
function CalSmall() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>; }
function ShieldSmall() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>; }
function BadgeSmall() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>; }

function GoogleLogoSmall() {
  return (
    <svg width="24" height="24" viewBox="0 0 48 48" aria-label="Google" role="img">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}
