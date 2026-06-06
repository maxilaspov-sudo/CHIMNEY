import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/chimney-blockage-removal.jpg";

export const metadata: Metadata = {
  title: "Chimney Blockage Removal in California | Clear Blocked Chimneys",
  description:
    "Chimney blockage removal in California for blocked flues, animal nests, debris, poor draft, smoke backup, and fireplace airflow problems.",
  alternates: { canonical: "/services/chimney-blockage-removal/" },
  openGraph: {
    title: "Chimney Blockage Removal in California | Clear Blocked Chimneys",
    description:
      "Chimney blockage removal in California for blocked flues, animal nests, debris, poor draft, smoke backup, and fireplace airflow problems.",
    url: `${SITE.baseUrl}/services/chimney-blockage-removal/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Blockage Removal in California | Clear Blocked Chimneys",
    description: "Chimney blockage removal in California — nests, debris, draft problems, and smoke backup. Free estimate.",
  },
};

const FAQS = [
  {
    q: "How do I know if my chimney is blocked?",
    a: "Smoke backup, poor draft, odors, debris, or animal sounds can all point to a blocked chimney.",
  },
  {
    q: "Can a blocked chimney be dangerous?",
    a: "Yes. A blockage can prevent smoke and gases from venting properly.",
  },
  {
    q: "What causes chimney blockages?",
    a: "Nests, leaves, debris, creosote, broken flue tiles, and missing chimney caps are common causes.",
  },
  {
    q: "Should I use my fireplace if I think the chimney is blocked?",
    a: "No. Stop using it until the chimney is checked and the blockage is cleared.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Blockage Removal",
  serviceType: "Chimney Blockage Removal",
  description:
    "Chimney blockage removal in California for blocked flues, animal nests, debris, poor draft, smoke backup, and fireplace airflow problems.",
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
    { "@type": "ListItem", position: 3, name: "Chimney Blockage Removal", item: `${SITE.baseUrl}/services/chimney-blockage-removal/` },
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

export default function ChimneyBlockageRemovalPage() {
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
              { label: "Chimney Blockage Removal" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Technician removing debris from a blocked chimney"
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
              Chimney Blockage Removal in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Smoke backup, poor draft, and strange odors are common signs that something is blocking the chimney. A blocked flue should not be ignored.
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

            {/* Left: main content */}
            <div className="lg:col-span-2 space-y-10">

              {/* Intro */}
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A blocked chimney can quickly turn a normal fireplace into a smoke and safety problem. Leaves, nests, debris, soot, creosote, damaged liner pieces, or animal activity can restrict airflow and stop smoke from venting correctly. Chimney Peak California helps homeowners identify and remove chimney blockages so the fireplace or venting system can work properly again.
                </p>
              </div>

              {/* H2: What Can Block a Chimney */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Can Block a Chimney?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Common chimney blockages include bird nests, leaves, fallen debris, heavy creosote, broken flue tile pieces, animal entry, and buildup near the damper or smoke chamber. In some cases, the blockage is visible from the fireplace. In others, it is hidden higher in the flue and only becomes obvious when smoke backs into the home.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A blocked chimney should not be ignored. If smoke or gases cannot vent correctly, the fireplace should not be used until the issue is checked.
                </p>
              </div>

              {/* H2: Signs of a Blocked Chimney */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Signs of a Blocked Chimney</h2>
                <p className="text-gray-600 leading-relaxed">
                  Signs include smoke coming into the room, poor draft, unusual odors, debris in the fireplace, animal sounds, sudden fireplace performance issues, or a damper area that looks obstructed. If the problem appears suddenly, a blockage is one of the first things to check.
                </p>
              </div>

              {/* H2: Cleaning, Inspection, and Removal */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Cleaning, Inspection, and Removal</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Blockage removal may involve{" "}
                  <Link href="/services/chimney-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    cleaning the flue
                  </Link>
                  , removing nests or debris, checking the cap or screen, and inspecting the chimney for damage after the obstruction is cleared. If animals entered the chimney, a{" "}
                  <Link href="/services/chimney-cap-replacement/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney cap replacement
                  </Link>{" "}
                  or animal screen may be recommended.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A full{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  after blockage removal helps confirm the flue is clear and the chimney is safe to use again.
                </p>
              </div>

              {/* CTA box */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Think your chimney is blocked?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and tell us what signs you are noticing.
                </p>
                <Link href="/contact/" className="btn-primary inline-block">
                  Request a Free Estimate
                </Link>
              </div>

              {/* Service areas */}
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

            {/* Right: sidebar */}
            <div className="space-y-6 lg:sticky lg:top-6 lg:self-start">
              <LeadForm heading="Request a Free Estimate" subheading="Tell us what signs you are noticing." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Chimney Cleaning", href: "/services/chimney-cleaning/" },
                    { name: "Chimney Cap Replacement", href: "/services/chimney-cap-replacement/" },
                    { name: "Chimney Sweep", href: "/services/chimney-sweep/" },
                    { name: "Chimney Repair", href: "/services/chimney-repair/" },
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
