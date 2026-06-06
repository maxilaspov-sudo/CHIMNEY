import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/chimney-rebuild.jpg";

export const metadata: Metadata = {
  title: "Chimney Rebuild in California | Chimney Reconstruction Service",
  description:
    "Chimney rebuild and reconstruction service in California for damaged, leaning, deteriorated, or unsafe masonry chimneys.",
  alternates: { canonical: "/services/chimney-rebuild/" },
  openGraph: {
    title: "Chimney Rebuild in California | Chimney Reconstruction Service",
    description:
      "Chimney rebuild and reconstruction service in California for damaged, leaning, deteriorated, or unsafe masonry chimneys. Free estimate.",
    url: `${SITE.baseUrl}/services/chimney-rebuild/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Rebuild in California | Chimney Reconstruction Service",
    description: "Chimney rebuild for damaged, leaning, or deteriorated masonry chimneys in California. Free estimate.",
  },
};

const FAQS = [
  {
    q: "How do I know if my chimney needs to be rebuilt?",
    a: "Signs include leaning masonry, loose bricks, major cracks, repeated leaks, severe mortar failure, or visible structural deterioration.",
  },
  {
    q: "Can only the top of the chimney be rebuilt?",
    a: "Yes, many rebuilds are partial and focus on the damaged section above the roofline. The scope depends on the condition of the chimney.",
  },
  {
    q: "Is chimney rebuilding different from chimney repair?",
    a: "Yes. Repair usually addresses specific damaged parts, while rebuilding replaces a larger damaged section of the chimney structure.",
  },
  {
    q: "Should I inspect the chimney before rebuilding?",
    a: "Yes. An inspection helps determine whether repair, partial rebuild, or full reconstruction is the right option.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Rebuild",
  serviceType: "Chimney Rebuild",
  description:
    "Chimney rebuild and reconstruction service in California for damaged, leaning, deteriorated, or unsafe masonry chimneys.",
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
    { "@type": "ListItem", position: 3, name: "Chimney Rebuild", item: `${SITE.baseUrl}/services/chimney-rebuild/` },
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

export default function ChimneyRebuildPage() {
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
              { label: "Chimney Rebuild" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Masonry chimney rebuild and reconstruction work on a California home"
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
              Chimney Rebuild in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Sometimes a chimney repair is not enough. If the masonry is badly deteriorated, the chimney is leaning, or damage extends through multiple sections, a chimney rebuild may be the safer long-term option.
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
                  Sometimes a chimney repair is not enough. If the masonry is badly deteriorated, the chimney is leaning, bricks are loose, or damage extends through multiple sections, a chimney rebuild may be the safer long-term option. Chimney Peak California helps homeowners understand when chimney reconstruction is needed and what the process may involve.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A rebuild is usually considered when the structure itself has lost strength or when repeated patch repairs no longer solve the underlying problem. The goal is to restore stability, function, and safety while keeping the finished chimney appropriate for the home.
                </p>
              </div>

              {/* H2: When Rebuilding May Be Needed */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">When a Chimney May Need Rebuilding</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A chimney may need rebuilding if it has severe brick damage, failing mortar, large cracks, leaning sections, water-damaged masonry, storm damage, earthquake-related movement, or repeated{" "}
                  <Link href="/services/chimney-leak-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney leak repair
                  </Link>{" "}
                  needs. In some cases, only the upper section above the roofline needs rebuilding. In others, a larger portion of the chimney may need reconstruction.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Not every damaged chimney needs a full rebuild. Some problems can be handled with tuckpointing,{" "}
                  <Link href="/services/chimney-crown-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney crown repair
                  </Link>
                  , flashing repair, or masonry repair. That is why inspection and diagnosis matter before deciding on the scope.
                </p>
              </div>

              {/* H2: Partial vs Full */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Partial vs. Full Chimney Rebuild</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A partial chimney rebuild may focus on the exposed section above the roof, where weather damage is most common. A full rebuild is more involved and may be needed when damage extends deeper into the structure.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The right approach depends on the chimney condition, roofline, masonry stability, fireplace use, and safety concerns. A{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  should explain what needs rebuilding and why before any work begins.
                </p>
              </div>

              {/* H2: Long-Term Fix */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">A Long-Term Fix for Serious Damage</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A chimney rebuild is a larger project, but it can be the right choice when repairs would only delay the same problem. Rebuilding damaged sections can help prevent ongoing leaks, loose masonry, poor performance, and safety concerns.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For cases where only targeted work is needed, see our{" "}
                  <Link href="/services/chimney-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney repair
                  </Link>{" "}
                  page for repair-only options.
                </p>
              </div>

              {/* CTA box */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Not sure if your chimney needs repair or rebuilding?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and describe the damage you are seeing.
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
              <LeadForm heading="Request a Free Estimate" subheading="Describe the damage you are seeing." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Repair", href: "/services/chimney-repair/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Chimney Leak Repair", href: "/services/chimney-leak-repair/" },
                    { name: "Chimney Crown Repair", href: "/services/chimney-crown-repair/" },
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
