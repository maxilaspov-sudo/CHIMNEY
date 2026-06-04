import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { SITE, NAV_SERVICES, NAV_AREAS } from "@/lib/constants";
import TrustBadges from "@/components/TrustBadges";
import HomepageCategoryCards from "@/components/HomepageCategoryCards";

// Defer JS for below-fold interactive components — keeps TBT low
const LeadForm = dynamic(() => import("@/components/LeadForm"));
const ReviewSection = dynamic(() => import("@/components/ReviewSection"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));
const HomepageServiceGrid = dynamic(() => import("@/components/HomepageServiceGrid"));
const HomepageCategoryBrowser = dynamic(() => import("@/components/HomepageCategoryBrowser"));

export const metadata: Metadata = {
  title: "Chimney Peak California | CSIA-Certified Chimney Company",
  description:
    "CSIA-certified chimney company. 4.9-star rated, 847 reviews. 12,400+ jobs across California since 2009. Written reports on every visit. Same-week scheduling. Request a free estimate online.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Chimney Peak California | CSIA-Certified Chimney Company",
    description: "CSIA-certified chimney company. 4.9 stars, 847 reviews, 12,400+ jobs across California since 2009. Same-week scheduling.",
    url: "/",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
};

const HOME_FAQS = [
  {
    q: "How much does chimney cleaning cost in California?",
    a: "Pricing depends on your chimney's condition, the number of flues, deposit level, and whether a written inspection report is included. We provide a flat-price quote in writing before starting any work — call or fill out the form for a free estimate.",
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
    a: "Yes. Every field technician carries a current CSIA (Chimney Safety Institute of America) certification. We hold all required California contractor licenses for chimney and fireplace work.",
  },
  {
    q: "What is included in a chimney inspection?",
    a: "Our Level 1 inspection covers all accessible parts of the chimney — firebox, damper, smoke shelf, flue, and exterior cap. Level 2 adds a full video camera scan of the flue and a written report accepted by insurers and real estate attorneys.",
  },
];


const WHY_US = [
  {
    title: "CSIA Certified on Every Job",
    desc: "Every technician holds a current Chimney Safety Institute of America certification — not just the company owner.",
  },
  {
    title: "Written Reports, Every Visit",
    desc: "You receive a typed inspection report with photos after every sweep or inspection — no verbal-only findings.",
  },
  {
    title: "No Mess Guaranteed",
    desc: "We use HEPA-filtered vacuums and lay drop cloths on every job. If we leave a mess, we clean it for free.",
  },
  {
    title: "Upfront Flat Pricing",
    desc: "We quote a flat price before starting. No surprise add-ons after we're inside your home.",
  },
  {
    title: "Same-Week Scheduling",
    desc: "We carry a full California dispatch — most customers get an appointment within 3 business days.",
  },
  {
    title: "15+ Years in California",
    desc: "We've completed over 12,400 jobs across California since 2009. We know local building codes, permits, and inspection requirements.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — two-column: text left, form right */}
      <section className="relative min-h-[680px] flex items-center overflow-hidden">
        <Image
          src="/hero-bg.jpg"
          alt="Warm brick fireplace in a California home — professional chimney cleaning and inspection services"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/95 via-[#0F2238]/85 to-[#0F2238]/70" />
        <div className="relative container-base py-14 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left — headline + CTAs */}
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <span>★★★★★</span>
                <span>4.9 Rating · 847 Reviews</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
                California Chimney Cleaning,<br />
                <span className="text-orange-400">Repair &amp; Inspection</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                CSIA-certified chimney cleaning, repair, and inspection across all of California.
                Same-week appointments. Written reports. Flat pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link href="/contact/" className="btn-primary text-lg px-8 py-4">
                  Request Free Estimate
                </Link>
                <a href="#estimate" className="btn-secondary text-lg px-8 py-4">
                  Get Online Quote
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                <span className="flex items-center gap-1"><CheckIcon /> CSIA Certified</span>
                <span className="flex items-center gap-1"><CheckIcon /> Licensed &amp; Insured</span>
                <span className="flex items-center gap-1"><CheckIcon /> Same-Week Available</span>
              </div>
            </div>

            {/* Right — lead form */}
            <div className="lg:max-w-md w-full">
              <LeadForm
                dark
                heading="Get Your Free Estimate"
                subheading="We respond within 2 hours. Same-week appointments available."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <TrustBadges />

      {/* Category cards — visible after first scroll, links to service sections below */}
      <HomepageCategoryCards />

      {/* Why Choose Us */}
      <section className="section-pad section-gray">
        <div className="container-base">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
                Why California Homeowners Choose Us
              </h2>
              <p className="text-gray-500 mb-8 text-lg leading-relaxed">
                We&apos;ve completed over {SITE.jobsCompleted} chimney jobs across California since 2009.
                Here&apos;s what makes us different from the low-bid companies you&apos;ll find on Craigslist.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {WHY_US.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon color="#F97316" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <Link href="/about/" className="btn-primary">Meet Our Team</Link>
                <Link href="/contact/" className="btn-outline">Get Estimate</Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/3631733/pexels-photo-3631733.jpeg?auto=compress&cs=tinysrgb&w=620&h=420"
                alt="Red brick house with chimney in California — Chimney Peak California operates throughout the state"
                width={620}
                height={420}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center gap-2">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <div>
                    <p className="font-bold text-gray-900 text-lg leading-tight">{SITE.googleRating}/5.0</p>
                    <p className="text-xs text-gray-500">Google Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewSection />

      {/* Service Areas — California coastline background */}
      <section className="section-pad relative overflow-hidden">
        {/* Big Sur coastline — iconic, clearly Californian */}
        <Image
          src="https://images.pexels.com/photos/19385370/pexels-photo-19385370.jpeg?auto=compress&cs=tinysrgb&w=1400&h=700"
          alt="Big Sur rugged coastline with ocean waves — California chimney services statewide"
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Two-layer overlay: strong base + gradient to anchor the bottom edge */}
        <div className="absolute inset-0 bg-[#081C36]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081C36]/30 via-transparent to-[#081C36]/55" />

        <div className="relative z-10 container-base">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-3"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}
            >
              Serving All of California
            </h2>
            <p
              className="text-gray-200 text-lg"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              We dispatch certified technicians to every major California city
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {NAV_AREAS.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="bg-[#0F2D50]/72 hover:bg-orange-500 border border-white/30 hover:border-orange-400 text-white text-sm font-medium px-3 py-2.5 rounded-lg text-center transition-all duration-150 backdrop-blur-sm"
              >
                {area.name}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/areas/california/" className="btn-primary">
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="section-pad bg-white" id="estimate">
        <div className="container-base">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
                Get Your Free Estimate
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Fill out the form and we&apos;ll call you within 2 business hours with a flat price quote.
                No pressure, no obligation.
              </p>
              <div className="space-y-4">
                {[
                  "Same-week appointments available",
                  "Flat pricing — no surprise add-ons",
                  "CSIA-certified technician dispatched",
                  "Written report included with every sweep",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <CheckIcon color="#16a34a" size={12} />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-orange-50 border border-orange-100 rounded-xl">
                <p className="text-sm text-gray-700">
                  <strong>Prefer email?</strong> Reach us at{" "}
                  <a href={`mailto:${SITE.email}`} className="text-orange-600 font-bold hover:underline">
                    {SITE.email}
                  </a>{" "}
                  — Monday–Friday 7am–7pm, Saturday 8am–5pm.
                </p>
              </div>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Full services — category browser + flat list */}
      <section className="section-pad bg-white" id="services">
        <div className="container-base">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-2">
              All Chimney &amp; Fireplace Services
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Looking for a specific service? Browse by category or scroll through the full list below.
            </p>
            <Link
              href="/services/"
              className="inline-flex items-center gap-1.5 mt-3 text-sm text-orange-500 font-semibold hover:underline"
            >
              View full service catalog on /services/ →
            </Link>
          </div>

          {/* Category accordion — click category cards above to jump here */}
          <HomepageCategoryBrowser />

          {/* Flat full list with Show More / Show Less */}
          <div className="mt-12 pt-10 border-t border-gray-100">
            <h3 className="text-xl font-bold text-[#1E3A5F] mb-6 text-center">Browse All Services</h3>
            <HomepageServiceGrid />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={HOME_FAQS} heading="Common Questions About Chimney Service" />

      {/* CTA */}
      <CTABanner />

      {/* Internal linking - Services & Areas */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="container-base">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-semibold text-[#1E3A5F] mb-4">All Services</h3>
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
              <h3 className="text-lg font-semibold text-[#1E3A5F] mb-4">Service Areas</h3>
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

function CheckIcon({ color = "#16a34a", size = 14 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

