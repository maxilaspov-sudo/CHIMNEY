import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { NAV_AREAS, SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/fireplace-door-installation.jpg";

export const metadata: Metadata = {
  title: "Fireplace Door Installation in California | Fireplace Glass Doors",
  description:
    "Fireplace door installation in California for glass fireplace doors, replacement doors, custom-fit doors, and fireplace safety upgrades.",
  alternates: { canonical: "/services/fireplace-door-installation/" },
  openGraph: {
    title: "Fireplace Door Installation in California | Fireplace Glass Doors",
    description:
      "Fireplace door installation in California for glass fireplace doors, replacement doors, custom-fit doors, and fireplace safety upgrades.",
    url: `${SITE.baseUrl}/services/fireplace-door-installation/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fireplace Door Installation in California | Fireplace Glass Doors",
    description: "Fireplace door installation in California — glass doors, replacement doors, and custom fit. Free estimate.",
  },
};

const FAQS = [
  {
    q: "Can fireplace doors be added to an open fireplace?",
    a: "In many cases, yes. The fireplace opening needs to be measured and checked first.",
  },
  {
    q: "Are fireplace doors custom sized?",
    a: "Some are standard sizes, but many fireplaces need custom-fit doors for the best result.",
  },
  {
    q: "Do fireplace doors help with sparks?",
    a: "Fireplace doors can help contain sparks and give the fireplace a safer finished barrier.",
  },
  {
    q: "Should the fireplace be inspected before door installation?",
    a: "It is smart to check the firebox and surrounding area before installing new doors.",
  },
  {
    q: "Can old fireplace doors be replaced without changing the whole fireplace?",
    a: "Yes. In many cases, only the door system can be replaced if the fireplace opening is suitable.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fireplace Door Installation",
  serviceType: "Fireplace Door Installation",
  description:
    "Fireplace door installation in California for glass fireplace doors, replacement doors, custom-fit doors, and fireplace safety upgrades.",
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
    { "@type": "ListItem", position: 3, name: "Fireplace Door Installation", item: `${SITE.baseUrl}/services/fireplace-door-installation/` },
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

export default function FireplaceDoorInstallationPage() {
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
              { label: "Fireplace Door Installation" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] flex items-center bg-[#111827]">
        <Image
          src={HERO_IMAGE}
          alt="Glass fireplace door installation on a residential fireplace"
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
              Fireplace Door Installation in California
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              The right fireplace doors need to fit the opening properly and match the fireplace type. Good door installation is about fit, function, and safe use — not just appearance.
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
                  Fireplace doors can improve the look of the fireplace, help contain sparks, and give the fireplace a cleaner finished appearance. Chimney Peak California provides fireplace door installation for homeowners replacing old doors, upgrading a dated fireplace, or adding doors to an open fireplace.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The right fireplace doors need to fit the opening properly and match the fireplace type. A poor fit can look unfinished, operate poorly, or create problems with airflow and heat clearance. Good fireplace door installation is not just about appearance. It is also about fit, function, and safe use.
                </p>
              </div>

              {/* H2: What Installation Includes */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What Fireplace Door Installation Includes</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Fireplace door installation usually starts with checking the fireplace opening, frame condition, firebox layout, and the type of door that fits the fireplace safely. Some fireplaces support standard glass doors, while others may need custom sizing or a specific mounting style.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Installation should be clean, secure, and appropriate for the fireplace design. The door should open and close properly, sit level, and match the fireplace style. If the fireplace opening is uneven or older, extra care may be needed to make the installation look right.
                </p>
              </div>

              {/* H2: When to Replace */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">When to Replace Fireplace Doors</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You may need new fireplace doors if the existing doors are cracked, loose, rusted, hard to open, missing hardware, or no longer match the room. Door replacement is also common during{" "}
                  <Link href="/services/fireplace-restoration/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace restoration
                  </Link>
                  ,{" "}
                  <Link href="/services/fireplace-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace cleaning
                  </Link>
                  , or remodeling.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Old fireplace doors can make the whole room look outdated. Replacing them can give the fireplace a cleaner look without replacing the entire fireplace system. It can also help improve the fireplace opening and create a more finished appearance.
                </p>
              </div>

              {/* H2: Choosing the Right Doors */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Choosing the Right Fireplace Doors</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The right door depends on the fireplace type, opening size, room style, and how the fireplace is used. Wood-burning fireplaces, gas fireplaces, masonry fireplaces, and inserts may all require different door types or installation methods.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A proper fit matters. Doors that are too small, too large, or not designed for the fireplace can create problems. Before installation, a{" "}
                  <Link href="/services/fireplace-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace inspection
                  </Link>{" "}
                  should confirm that the door choice is appropriate and the opening is in good condition.
                </p>
              </div>

              {/* H2: Related Services */}
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Related Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  Fireplace door installation often pairs with{" "}
                  <Link href="/services/fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace repair
                  </Link>
                  ,{" "}
                  <Link href="/services/fireplace-restoration/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace restoration
                  </Link>
                  ,{" "}
                  <Link href="/services/fireplace-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace inspection
                  </Link>
                  , and{" "}
                  <Link href="/services/fireplace-glass-replacement/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace glass replacement
                  </Link>
                  . If the fireplace is damaged inside, that should be addressed before installing new doors.
                </p>
              </div>

              {/* CTA box */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Want to install or replace fireplace doors?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and tell us about your fireplace opening.
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
              <LeadForm heading="Request a Free Estimate" subheading="Tell us about your fireplace opening." />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Fireplace Repair", href: "/services/fireplace-repair/" },
                    { name: "Fireplace Restoration", href: "/services/fireplace-restoration/" },
                    { name: "Fireplace Glass Replacement", href: "/services/fireplace-glass-replacement/" },
                    { name: "Fireplace Inspection", href: "/services/fireplace-inspection/" },
                    { name: "Fireplace Cleaning", href: "/services/fireplace-cleaning/" },
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
