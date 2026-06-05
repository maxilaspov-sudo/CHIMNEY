import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/fireplace-insert-cleaning.jpg";

export const metadata: Metadata = {
  title: "Fireplace Insert Cleaning in California | Gas & Wood Inserts",
  description:
    "Fireplace insert cleaning in California for gas and wood inserts, glass, vents, firebox areas, logs, burners, and buildup.",
  alternates: { canonical: "/services/fireplace-insert-cleaning/" },
  openGraph: {
    title: "Fireplace Insert Cleaning in California | Gas & Wood Inserts",
    description:
      "Fireplace insert cleaning in California for gas and wood inserts, glass, vents, firebox areas, logs, burners, and buildup.",
    url: `${SITE.baseUrl}/services/fireplace-insert-cleaning/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fireplace Insert Cleaning in California | Gas & Wood Inserts",
    description:
      "Fireplace insert cleaning in California for gas and wood inserts.",
  },
};

const FAQS = [
  {
    q: "Do gas fireplace inserts need cleaning?",
    a: "Yes. Gas inserts can collect dust, film on glass, burner debris, and venting residue over time.",
  },
  {
    q: "Why does my fireplace insert glass turn black?",
    a: "Black glass can come from soot, airflow issues, burner problems, or improper burning conditions depending on the insert type.",
  },
  {
    q: "Is insert cleaning the same as fireplace cleaning?",
    a: "It is related, but inserts often have specific components and access points that make the cleaning process different.",
  },
  {
    q: "Can cleaning fix a gas insert that will not turn on?",
    a: "Sometimes cleaning helps, but ignition or pilot issues may require gas fireplace repair.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fireplace Insert Cleaning",
  serviceType: "Fireplace Insert Cleaning",
  description:
    "Fireplace insert cleaning in California for gas and wood inserts, glass, vents, firebox areas, logs, burners, and buildup.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: { "@type": "PostalAddress", addressRegion: "CA", addressCountry: "US" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.googleRating,
      reviewCount: SITE.reviewCount,
      bestRating: "5",
    },
  },
  areaServed: { "@type": "State", name: "California" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.baseUrl}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.baseUrl}/services/` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Fireplace Insert Cleaning",
      item: `${SITE.baseUrl}/services/fireplace-insert-cleaning/`,
    },
  ],
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

export default function FireplaceInsertCleaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services/" },
              { label: "Fireplace Insert Cleaning" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Technician cleaning a gas fireplace insert in a California home"
          fill
          priority
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="relative z-10 container-base py-16 md:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-wide">
              Licensed &amp; Insured · {SITE.googleRating} Stars · {SITE.reviewCount} Reviews
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Fireplace Insert Cleaning in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Fireplace inserts are popular because they can make an older fireplace easier to use and more efficient. But inserts still need cleaning and maintenance to look and perform well.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact/" className="btn-primary">Request a Free Estimate</Link>
              <a href={`mailto:${SITE.email}`} className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Email Us
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
                <p className="text-gray-600 leading-relaxed mb-4">
                  Fireplace inserts are popular because they can make an older fireplace easier to use and more efficient. But inserts still need cleaning and maintenance. Dust, soot, glass residue, burner debris, ash, and venting buildup can affect performance and make the unit look or function poorly.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Chimney Peak California provides fireplace insert cleaning support for homeowners with gas or wood inserts who want cleaner operation, better appearance, and a system that is easier to use.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Fireplace Insert Cleaning Includes</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Fireplace insert cleaning depends on the type of insert. A gas insert may need glass cleaning, burner area cleaning, log set review, vent check, and removal of dust or debris around key components. A wood insert may need ash removal, soot cleaning, baffle review, and flue or liner cleaning depending on the setup.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The goal is not to take apart the system unnecessarily. It is to clean the parts that affect safe operation, appearance, and airflow while checking for obvious signs of wear or blockage. For full chimney system cleaning alongside an insert service, see our{" "}
                  <Link href="/services/chimney-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney cleaning
                  </Link>{" "}
                  page.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Signs Your Insert Needs Cleaning</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Your fireplace insert may need cleaning if the glass turns black quickly, the flame pattern looks unusual, there is a strong smell, the unit is hard to start, ash builds up heavily, or the insert has not been serviced in a long time.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For gas inserts, dirt around the burner or logs can affect appearance and performance. For wood inserts, soot and creosote buildup can become a bigger concern if the unit is used often. A{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  can help identify whether there are deeper venting concerns.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Cleaning Helps the Insert Work Better</h2>
                <p className="text-gray-600 leading-relaxed">
                  A clean fireplace insert looks better, operates more consistently, and can make it easier to notice small problems before they become larger repairs. Cleaning may also be paired with{" "}
                  <Link href="/services/fireplace-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace cleaning
                  </Link>{" "}
                  or{" "}
                  <Link href="/services/gas-fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    gas fireplace repair
                  </Link>{" "}
                  if performance issues are present.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Need your fireplace insert cleaned?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and tell us whether your insert is gas or wood-burning.
                </p>
                <Link href="/contact/" className="btn-primary inline-block">
                  Request a Free Estimate
                </Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Areas We Serve</h2>
                <div className="flex flex-wrap gap-2">
                  {NAV_AREAS.slice(0, 14).map((area) => (
                    <Link key={area.href} href={area.href} className="text-xs bg-gray-50 border border-gray-200 hover:border-orange-400 hover:text-orange-600 text-gray-600 font-medium px-3 py-1.5 rounded-full transition-colors">
                      {area.name}
                    </Link>
                  ))}
                  <Link href="/areas/" className="text-xs bg-orange-50 border border-orange-200 text-orange-600 font-semibold px-3 py-1.5 rounded-full hover:bg-orange-100 transition-colors">
                    View All Areas →
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:sticky lg:top-6 lg:self-start">
              <LeadForm heading="Request a Free Estimate" subheading="Tell us whether your insert is gas or wood-burning." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Fireplace Cleaning", href: "/services/fireplace-cleaning/" },
                    { name: "Gas Fireplace Repair", href: "/services/gas-fireplace-repair/" },
                    { name: "Chimney Cleaning", href: "/services/chimney-cleaning/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
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

      <FAQSection faqs={FAQS} addSchema={false} />
      <CTABanner />
    </>
  );
}
