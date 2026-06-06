import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/wood-stove-cleaning.jpg";

export const metadata: Metadata = {
  title: "Wood Stove Cleaning in California | Chimney Peak California",
  description:
    "Wood stove cleaning in California for stove pipes, flues, creosote buildup, and regular wood-burning appliance maintenance.",
  alternates: { canonical: "/services/wood-stove-cleaning/" },
  openGraph: {
    title: "Wood Stove Cleaning in California | Chimney Peak California",
    description:
      "Wood stove cleaning in California for stove pipes, flues, creosote buildup, and regular wood-burning appliance maintenance.",
    url: `${SITE.baseUrl}/services/wood-stove-cleaning/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wood Stove Cleaning in California | Chimney Peak California",
    description:
      "Wood stove cleaning in California for stove pipes, flues, and creosote buildup.",
  },
};

const FAQS = [
  {
    q: "Is wood stove cleaning different from chimney cleaning?",
    a: "Yes. Wood stove cleaning may include the appliance, pipe connection, and stove-specific parts in addition to the chimney or flue.",
  },
  {
    q: "How often should a wood stove be cleaned?",
    a: "It depends on how often you use it, the wood you burn, and how much creosote builds up. Regular users should schedule routine cleaning.",
  },
  {
    q: "What causes creosote in a wood stove?",
    a: "Creosote comes from wood smoke and can build up faster when wood is damp, airflow is poor, or the stove is burned at low temperatures often.",
  },
  {
    q: "Can poor draft mean the stove needs cleaning?",
    a: "Yes, but poor draft can also come from blockage, venting problems, or chimney design. Cleaning and inspection can help identify the issue.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Wood Stove Cleaning",
  serviceType: "Wood Stove Cleaning",
  description:
    "Wood stove cleaning in California for stove pipes, flues, creosote buildup, and regular wood-burning appliance maintenance.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: { "@type": "PostalAddress", addressRegion: "CA", addressCountry: "US" },
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
      name: "Wood Stove Cleaning",
      item: `${SITE.baseUrl}/services/wood-stove-cleaning/`,
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

export default function WoodStoveCleaningPage() {
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
              { label: "Wood Stove Cleaning" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Technician cleaning a residential wood stove and venting system"
          fill
          priority
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="relative z-10 container-base py-16 md:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-wide">
              Licensed &amp; Insured · Professional Service
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Wood Stove Cleaning in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Wood stoves can produce strong heat, but they also create soot and creosote that need regular attention. A dirty stove pipe or connected flue can affect draft, reduce efficiency, and increase fire risk.
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
                  Wood stoves can produce strong heat, but they also create soot and creosote that need regular attention. A dirty stove pipe or connected flue can affect draft, reduce efficiency, and increase fire risk. Chimney Peak California helps homeowners maintain wood stove systems with practical cleaning and inspection support.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Wood stove cleaning is not always the same as standard{" "}
                  <Link href="/services/chimney-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney cleaning
                  </Link>
                  . The appliance, pipe connection, baffle area, and venting path may require a different approach depending on the stove type and installation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Wood Stove Cleaning Includes</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Wood stove cleaning may include removing soot and creosote from accessible stove pipe sections, checking the flue path, reviewing the stove interior, and looking for buildup around key areas. The goal is to help the system draft properly and reduce combustible deposits.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Some wood stoves have baffles, catalytic components, or specific manufacturer requirements. The cleaning approach should match the stove design and the way the system is vented. If the liner needs attention, a{" "}
                  <Link href="/services/chimney-liner-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney liner repair
                  </Link>{" "}
                  check may be recommended alongside cleaning.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">When to Schedule Wood Stove Cleaning</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Schedule wood stove cleaning if you use the stove regularly during cooler months, notice poor draft, smell strong odors, see heavy soot, or have not cleaned the system in a long time. Wood that is not fully seasoned can also increase creosote buildup and make cleaning more important.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If the stove has performance issues, cleaning may need to be paired with a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  to check the full venting system.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Wood Stove Safety and Maintenance</h2>
                <p className="text-gray-600 leading-relaxed">
                  A clean wood stove system can burn more efficiently and reduce buildup that may become hazardous. Regular cleaning also gives you a chance to catch early signs of wear, corrosion, blocked airflow, or venting problems. For routine system sweeping, see our{" "}
                  <Link href="/services/chimney-sweep/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney sweep
                  </Link>{" "}
                  service.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Use a wood stove at home?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and tell us how often you use it.
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
              <LeadForm heading="Request a Free Estimate" subheading="Tell us how often you use your wood stove." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/services/chimney-cleaning/" },
                    { name: "Chimney Sweep", href: "/services/chimney-sweep/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Chimney Liner Repair", href: "/services/chimney-liner-repair/" },
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
