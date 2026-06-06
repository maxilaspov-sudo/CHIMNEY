import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/smoke-chamber-repair.jpg";

export const metadata: Metadata = {
  title: "Smoke Chamber Repair in California | Chimney Peak California",
  description:
    "Smoke chamber repair in California for damaged, rough, cracked, or deteriorated smoke chambers. Improve draft, safety, and fireplace performance.",
  alternates: { canonical: "/services/smoke-chamber-repair/" },
  openGraph: {
    title: "Smoke Chamber Repair in California | Chimney Peak California",
    description:
      "Smoke chamber repair in California for damaged, rough, cracked, or deteriorated smoke chambers. Improve draft, safety, and fireplace performance.",
    url: `${SITE.baseUrl}/services/smoke-chamber-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smoke Chamber Repair in California | Chimney Peak California",
    description:
      "Smoke chamber repair in California. Improve draft, safety, and fireplace performance.",
  },
};

const FAQS = [
  {
    q: "What is a smoke chamber?",
    a: "The smoke chamber is the area above the firebox that directs smoke into the flue. It helps the fireplace draft properly.",
  },
  {
    q: "How do I know if my smoke chamber is damaged?",
    a: "Signs may include smoke backup, heavy soot, cracks above the firebox, or an inspection report noting smoke chamber damage.",
  },
  {
    q: "Can a smoke chamber be repaired without rebuilding the chimney?",
    a: "In many cases, yes. The repair depends on the condition of the chamber and surrounding masonry.",
  },
  {
    q: "Is smoke chamber repair the same as chimney repair?",
    a: "It is a specific type of chimney/fireplace repair focused on the area between the firebox and flue.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Smoke Chamber Repair",
  serviceType: "Smoke Chamber Repair",
  description:
    "Smoke chamber repair in California for damaged, rough, cracked, or deteriorated smoke chambers. Improve draft, safety, and fireplace performance.",
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
      name: "Smoke Chamber Repair",
      item: `${SITE.baseUrl}/services/smoke-chamber-repair/`,
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

export default function SmokeChamberRepairPage() {
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
              { label: "Smoke Chamber Repair" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Technician repairing a smoke chamber inside a residential fireplace"
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
              Smoke Chamber Repair in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              The smoke chamber sits above the fireplace and helps guide smoke from the firebox into the flue. When this area is cracked, rough, or deteriorated, it can affect draft and make the fireplace harder to use safely.
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
                  The smoke chamber sits above the fireplace and helps guide smoke from the firebox into the flue. When this area is cracked, rough, deteriorated, or poorly shaped, it can affect draft, increase soot buildup, and make the fireplace harder to use safely. Chimney Peak California helps homeowners identify smoke chamber problems and understand the right repair options.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Smoke chamber issues are often found during a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>
                  , especially in older fireplaces or fireplaces that have heavy soot, smoke rollout, or poor airflow. A proper repair helps create a smoother transition from the fireplace into the chimney system.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Smoke Chamber Repair Includes</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Smoke chamber repair may include smoothing rough surfaces, sealing gaps, repairing damaged mortar, or resurfacing the chamber with approved materials depending on the condition. The goal is to reduce sharp edges and openings where heat, smoke, and gases can collect or escape.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Not every smoke chamber needs the same repair. Some need minor sealing, while others require more involved resurfacing. The right approach depends on the size, shape, damage, and overall condition of the chimney system.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Signs Your Smoke Chamber May Need Repair</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Common signs include smoke entering the room, strong fireplace odors, heavy soot above the firebox, poor draft, visible cracks, or inspection notes mentioning smoke chamber damage. These problems can also be connected to other chimney issues, so the smoke chamber should be evaluated as part of the full{" "}
                  <Link href="/services/fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace repair
                  </Link>{" "}
                  and chimney system assessment.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Why This Repair Matters</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A damaged smoke chamber can affect how smoke moves through the chimney. Repairing it can help improve draft, reduce buildup points, and support safer fireplace operation. It is especially important when an inspection report already identifies this area as damaged.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If the chimney has additional structural concerns, a{" "}
                  <Link href="/services/chimney-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney repair
                  </Link>{" "}
                  assessment or{" "}
                  <Link href="/services/chimney-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney cleaning
                  </Link>{" "}
                  may also be recommended alongside smoke chamber work.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Need help with a damaged smoke chamber?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and tell us what your inspection found.
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
              <LeadForm heading="Request a Free Estimate" subheading="Tell us what your inspection found." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Chimney Repair", href: "/services/chimney-repair/" },
                    { name: "Fireplace Repair", href: "/services/fireplace-repair/" },
                    { name: "Chimney Cleaning", href: "/services/chimney-cleaning/" },
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
