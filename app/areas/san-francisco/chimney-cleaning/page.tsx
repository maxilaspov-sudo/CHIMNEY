import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/Chimney-cleaning.jpg";

export const metadata: Metadata = {
  title: "Chimney Cleaning San Francisco | Fireplace & Flue Cleaning",
  description:
    "Professional chimney cleaning in San Francisco for soot, creosote buildup, fireplace odors, poor draft, and annual chimney maintenance.",
  alternates: { canonical: "/areas/san-francisco/chimney-cleaning/" },
  openGraph: {
    title: "Chimney Cleaning San Francisco | Fireplace & Flue Cleaning",
    description:
      "Professional chimney cleaning in San Francisco for soot, creosote buildup, fireplace odors, poor draft, and annual chimney maintenance.",
    url: `${SITE.baseUrl}/areas/san-francisco/chimney-cleaning/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Cleaning San Francisco | Fireplace & Flue Cleaning",
    description:
      "Chimney cleaning in San Francisco for creosote, soot, fireplace odors, and annual flue maintenance. Free estimate.",
  },
};

const FAQS = [
  {
    q: "How often should I schedule chimney cleaning in San Francisco?",
    a: "Annual cleaning is the standard recommendation for any fireplace in regular use. San Francisco homes tend to use fireplaces less than colder climates, but the city's coastal fog and ambient moisture mean that even an unused flue can develop condensation-related deposits and odors. Gas fireplace owners on light-use schedules can often extend to every two years, but the flue should still be checked annually for debris and moisture damage.",
  },
  {
    q: "What are signs my chimney needs cleaning?",
    a: "A persistent fireplace odor — particularly during foggy or humid weather — is the most common sign in San Francisco homes. The coastal air keeps moisture elevated year-round, and soot or creosote absorbs that moisture and releases a musty smell. Slow draft, smoke entering the room during a fire, and visible black deposits around the damper or firebox opening are other indicators.",
  },
  {
    q: "Is chimney cleaning the same as chimney sweep?",
    a: "Not exactly. Chimney cleaning removes soot and creosote deposits from the flue and firebox. A chimney sweep adds a formal NFPA 211 Level 1 inspection with a signed written condition report. For San Francisco homeowners buying or selling, a Level 2 inspection — which includes a video camera scan of the full flue — is the required standard under NFPA 211 at any change of ownership.",
  },
  {
    q: "Can chimney cleaning help with fireplace odors?",
    a: "Yes. San Francisco fireplaces are particularly prone to odors because the combination of creosote or soot deposits and the city's persistent coastal humidity creates a persistent musty or smoky smell, even when the fireplace has not been used for months. Cleaning removes the source of the odor. If the smell persists after cleaning, the damper may not be sealing or a chimney cap may be missing.",
  },
  {
    q: "Do you also inspect the chimney during cleaning?",
    a: "We document any visible damage observed during the cleaning visit before we leave. A formal NFPA 211 Level 1 inspection with a signed condition report is a separate service. For San Francisco Victorian and Edwardian homes — many of which have chimneys that have not been professionally evaluated in decades — we are often the first set of eyes inside these flues in a long time, and we take that seriously.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Cleaning San Francisco",
  serviceType: "Chimney Cleaning",
  description:
    "Professional chimney cleaning in San Francisco for soot, creosote buildup, fireplace odors, poor draft, and annual chimney maintenance.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "City", name: "San Francisco" },
};


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ChimneyCleaningSanFranciscoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/areas/" },
              { label: "San Francisco", href: "/areas/san-francisco/" },
              { label: "Chimney Cleaning" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Technician performing chimney cleaning inside a San Francisco fireplace"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · San Francisco
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Cleaning in San Francisco, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Professional chimney flue cleaning for San Francisco homeowners — removing creosote, soot, and moisture-related deposits from Victorian, Edwardian, and modern fireplace systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact/" className="btn-primary">
                Request Free Estimate
              </Link>
              <a href="#estimate-form" className="btn-secondary">
                Get Online Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      <section className="section-pad bg-white">
        <div className="container-base">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              <div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  San Francisco has more than 30,000 ornamental Victorian and Edwardian fireplaces, many of which were sealed or converted to gas during the mid-century energy boom and are now being restored and put back into use. When a fireplace returns to service after decades of non-use, the flue needs a thorough cleaning and inspection before anyone lights a fire — debris, nesting material, and moisture-related deposits accumulate whether or not the fireplace has been used.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  For homes with active fireplaces in Pacific Heights, Noe Valley, the Richmond, or the Sunset, annual cleaning keeps soot and creosote from building up to a level that creates a fire risk or a persistent fireplace odor. If the last cleaning was more than two years ago, or if the fireplace has been recently reopened after years of being sealed, a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  should come before the cleaning.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Why Chimney Cleaning Matters in San Francisco Homes
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  San Francisco is unusual among California cities in that its coastal fog and marine air keep humidity elevated year-round — even in summer, when most of the state dries out. This persistent moisture means that soot and creosote deposits in unclean flues absorb ambient humidity and produce a persistent smell that homeowners often mistake for a structural problem. A cleaning resolves it.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Many SF homes also have stainless steel liners that were installed after the 1989 Loma Prieta earthquake, when widespread liner damage prompted a round of upgrades. Those liners are now approaching or past their standard 25-year service window. A cleaning visit is an opportunity to check for corrosion or joint separation in aging stainless liners before a problem develops.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  In denser neighborhoods like the Mission, Hayes Valley, and the Haight, row houses and attached Victorians often have shared chimney stacks serving multiple units. Individual flue cleaning and condition checks are important in these configurations — problems in one flue can affect draft in adjacent units.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Signs Your Chimney May Need Cleaning
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Persistent fireplace odor",
                      desc: "In San Francisco, coastal moisture keeps this smell active year-round. Soot and creosote absorb fog-level humidity and release it as a persistent musty or smoky odor even when the fireplace is unused.",
                    },
                    {
                      title: "Slow draft or smoke at startup",
                      desc: "Fires that are hard to establish or produce more smoke than usual at the beginning of a fire indicate restricted airflow from soot buildup in the flue.",
                    },
                    {
                      title: "Smoke entering the room",
                      desc: "Partial blockage from debris, nesting material, or deposits prevents proper exhaust and pushes smoke back through the damper opening into the living space.",
                    },
                    {
                      title: "Visible black staining",
                      desc: "Heavy soot deposits on the firebox walls, damper plate, or fireplace surround are visible indicators that cleaning is overdue.",
                    },
                    {
                      title: "Recently reopened fireplace",
                      desc: "A fireplace that has been sealed or inactive for years should be cleaned and inspected before use — regardless of how long since it was last used.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 bg-[#F8FAFC] border border-gray-100 rounded-xl p-4">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" className="shrink-0 mt-1" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                        <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  What Our Chimney Cleaning Service Includes
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A standard chimney cleaning covers the full flue system from firebox to cap. We start with a visual check of the firebox, damper, and accessible flue before any work begins. Drop cloths protect the floor and hearth, and the firebox opening is sealed before cleaning starts to keep ash and soot out of the room.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Industry-grade rotary brushes remove creosote and soot from the full flue length. A commercial HEPA vacuum captures all loosened debris — no ash clouds, no mess left in the room. When cleaning is complete, you receive written notes on the fireplace condition and any issues that need follow-up attention.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For Victorian fireplaces being returned to service after a long period of non-use, we recommend allowing extra time during the visit — these flues often require more careful assessment than a standard residential cleaning.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Chimney Cleaning vs. Chimney Sweep
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Chimney cleaning removes deposits from the flue and firebox. A{" "}
                  <Link href="/services/chimney-sweep/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney sweep
                  </Link>{" "}
                  adds a formal NFPA 211 Level 1 inspection with a signed written condition report covering all accessible chimney components. The written report is what makes a sweep the appropriate choice when documentation is required — for a home sale, insurance claim, or property record.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For San Francisco homeowners involved in a property sale, a Level 2 inspection with a video camera scan is required under NFPA 211 at any change of ownership. If that situation applies, book a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  rather than a standard cleaning.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Ready to schedule chimney cleaning in San Francisco?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and we will confirm availability for your neighborhood.
                </p>
                <Link href="/contact/" className="btn-primary inline-block">
                  Request Free Estimate
                </Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Chimney Cleaning (All California)", href: "/services/chimney-cleaning/" },
                    { name: "Chimney Sweep", href: "/services/chimney-sweep/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Creosote Removal", href: "/services/creosote-removal/" },
                    { name: "San Francisco service area", href: "/areas/san-francisco/" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors">
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm heading="Get a Free Estimate" subheading="Chimney cleaning in San Francisco. We respond within 2 business hours." dark={false} />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in San Francisco</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Sweep", href: "/areas/san-francisco/chimney-sweep/" },
                    { name: "Chimney Repair", href: "/areas/san-francisco/chimney-repair/" },
                    { name: "Fireplace Repair", href: "/areas/san-francisco/fireplace-repair/" },
                    { name: "Dryer Vent Cleaning", href: "/areas/san-francisco/dryer-vent-cleaning/" },
                    { name: "All San Francisco Services", href: "/areas/san-francisco/" },
                  ].map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="text-sm text-gray-700 hover:text-orange-600 transition-colors flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-orange-400 shrink-0" />
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-5 text-white text-center">
                <p className="text-sm font-semibold mb-1">Prefer to write?</p>
                <a href={`mailto:${SITE.email}`} className="text-orange-400 text-sm font-bold hover:text-orange-300 transition-colors break-all">
                  {SITE.email}
                </a>
                <p className="text-xs text-gray-400 mt-2">We reply within one business day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} heading="Chimney Cleaning San Francisco — FAQ" addSchema={false} />
      <CTABanner heading="Schedule chimney cleaning in San Francisco" />
    </>
  );
}
