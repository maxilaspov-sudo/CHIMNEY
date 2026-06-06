import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/fireplace-inspection.jpg";

export const metadata: Metadata = {
  title: "Fireplace Inspection in California | Fireplace Safety Check",
  description:
    "Fireplace inspection in California for smoke issues, firebox damage, gas fireplace concerns, poor draft, and safe fireplace use.",
  alternates: { canonical: "/services/fireplace-inspection/" },
  openGraph: {
    title: "Fireplace Inspection in California | Fireplace Safety Check",
    description:
      "Fireplace inspection in California for smoke issues, firebox damage, gas fireplace concerns, poor draft, and safe fireplace use.",
    url: `${SITE.baseUrl}/services/fireplace-inspection/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fireplace Inspection in California | Fireplace Safety Check",
    description: "Fireplace inspection in California — firebox, damper, gas components, and draft. Free estimate.",
  },
};

const FAQS = [
  {
    q: "Why should I inspect my fireplace?",
    a: "A fireplace inspection helps identify damage, smoke issues, blocked airflow, gas concerns, cracked firebox areas, or unsafe conditions before regular use.",
  },
  {
    q: "Is fireplace inspection different from chimney inspection?",
    a: "Yes. Fireplace inspection focuses on the fireplace area, while chimney inspection looks deeper into the chimney system and flue.",
  },
  {
    q: "Should I inspect a fireplace before buying a home?",
    a: "Yes. A fireplace may have hidden issues that are not obvious during a basic home walkthrough.",
  },
  {
    q: "Can inspection tell me why smoke enters the room?",
    a: "It can help identify likely causes such as draft problems, smoke chamber issues, blockage, damper problems, or chimney design concerns.",
  },
  {
    q: "Do gas fireplaces need inspection too?",
    a: "Yes. Gas fireplaces can develop issues with ignition, burner performance, venting, glass, log placement, or general operation.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fireplace Inspection",
  serviceType: "Fireplace Inspection",
  description:
    "Fireplace inspection in California for smoke issues, firebox damage, gas fireplace concerns, poor draft, and safe fireplace use.",
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
    { "@type": "ListItem", position: 3, name: "Fireplace Inspection", item: `${SITE.baseUrl}/services/fireplace-inspection/` },
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

export default function FireplaceInspectionPage() {
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
              { label: "Fireplace Inspection" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Technician inspecting a residential fireplace in California"
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
              Fireplace Inspection in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              A fireplace can look fine from the room but still have hidden issues inside the firebox, smoke chamber, damper, gas components, or chimney connection.
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
                  A fireplace can look fine from the room but still have hidden issues inside the firebox, smoke chamber, damper, gas components, or chimney connection. Chimney Peak California provides fireplace inspection services for homeowners who want to understand the condition of their fireplace before using it, repairing it, remodeling it, or buying a home.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A fireplace inspection is especially helpful if the fireplace has not been used in a long time, smells unusual, smokes into the room, has visible cracks, or does not operate the way it should. The goal is not to scare homeowners into unnecessary repairs. The goal is to identify what is actually going on and explain the next best step clearly.
                </p>
              </div>

              {/* H2: What a Fireplace Inspection Checks */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What a Fireplace Inspection Checks</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A fireplace inspection may include reviewing the firebox, damper area, smoke chamber, visible masonry, fireplace doors, gas logs, burner area, and signs of soot, moisture, cracking, poor airflow, rust, or heat damage. If the issue appears connected to the chimney system, a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  may also be recommended.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For wood-burning fireplaces, the inspection may focus on firebox condition, smoke movement, damper operation, soot buildup, and visible masonry damage. For gas fireplaces, the inspection may include burner condition, log placement, pilot or ignition concerns, venting issues, glass condition, and general performance problems.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The inspection helps separate small maintenance issues from problems that may need{" "}
                  <Link href="/services/fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace repair
                  </Link>{" "}
                  before the fireplace is used again.
                </p>
              </div>

              {/* H2: When to Schedule */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">When to Schedule a Fireplace Inspection</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Schedule a fireplace inspection if you recently moved into the home, have not used the fireplace in years, see cracks, smell smoke, notice poor draft, hear unusual sounds, or plan to repair, restore, reface, or convert the fireplace. An inspection is also smart before installing fireplace doors, a{" "}
                  <Link href="/services/gas-fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    gas fireplace
                  </Link>
                  , a fireplace insert, or a new surround.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Many homeowners wait until smoke enters the room or a visible crack appears. It is better to inspect the fireplace before heavy seasonal use so problems can be handled early.
                </p>
              </div>

              {/* H2: Before Repairs or Remodeling */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Fireplace Inspection Before Repairs or Remodeling</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you are planning{" "}
                  <Link href="/services/fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace repair
                  </Link>
                  , restoration, refacing, or installation work, inspection should come first. A fireplace can look good on the outside while the firebox, smoke chamber, damper, or chimney connection still needs attention. Starting with inspection helps avoid covering up problems that should be fixed first.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For example, refacing a fireplace before checking the firebox may create a beautiful finish over a system that still has draft or masonry issues. A clean inspection process makes the project safer and more practical.
                </p>
              </div>

              {/* H2: Related Services */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Related Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  If damage is found, the next step may be{" "}
                  <Link href="/services/fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace repair
                  </Link>
                  ,{" "}
                  <Link href="/services/fireplace-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace cleaning
                  </Link>
                  ,{" "}
                  <Link href="/services/smoke-chamber-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    smoke chamber repair
                  </Link>
                  ,{" "}
                  <Link href="/services/gas-fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    gas fireplace repair
                  </Link>
                  ,{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>
                  , or chimney repair. The recommendation should depend on the actual condition of the fireplace and chimney system.
                </p>
              </div>

              {/* CTA box */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Need your fireplace checked before use?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and tell us what concerns you have.
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
              <LeadForm heading="Request a Free Estimate" subheading="Tell us what concerns you have." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Fireplace Repair", href: "/services/fireplace-repair/" },
                    { name: "Fireplace Cleaning", href: "/services/fireplace-cleaning/" },
                    { name: "Smoke Chamber Repair", href: "/services/smoke-chamber-repair/" },
                    { name: "Gas Fireplace Repair", href: "/services/gas-fireplace-repair/" },
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
