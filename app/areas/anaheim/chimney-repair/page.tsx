import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/Chimney-leak-repair.jpg";

export const metadata: Metadata = {
  title: "Chimney Repair Anaheim | Brick, Leak & Masonry Repair",
  description:
    "Chimney repair in Anaheim for cracked crowns, flashing leaks, mortar repointing, factory-built system components, and masonry repair. Orange County service.",
  alternates: { canonical: "/areas/anaheim/chimney-repair/" },
  openGraph: {
    title: "Chimney Repair Anaheim | Brick, Leak & Masonry Repair",
    description:
      "Chimney repair in Anaheim for cracked crowns, flashing leaks, mortar repointing, and factory-built fireplace components.",
    url: `${SITE.baseUrl}/areas/anaheim/chimney-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Repair Anaheim | Brick, Leak & Masonry Repair",
    description: "Chimney repair in Anaheim — factory-built systems, masonry, flashing, crown repair. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What are the most common chimney repairs in Anaheim?",
    a: "In Anaheim, the most frequent chimney repairs fall into two categories. For masonry chimneys in older Colony Historic District and Brookhurst neighborhoods: crown repair or replacement, mortar joint repointing, and flashing service. For factory-built systems common throughout 1980s and 1990s Orange County construction: refractory panel replacement, metal liner integrity issues, and cap or chase cover replacement as these systems age past 30 years.",
  },
  {
    q: "Can a cracked chimney crown cause leaks in an Anaheim home?",
    a: "Yes. The crown is the first barrier preventing water from entering the chimney system. Southern California&apos;s temperature swings — from over 100°F in summer to near freezing on winter nights in Anaheim — cause existing crown cracks to expand. Any crown crack that allows water infiltration will worsen over time without repair. Sealing or replacing the crown is one of the highest-value chimney repairs in terms of preventing further water damage.",
  },
  {
    q: "My factory-built fireplace is 30 years old — should I repair or replace it?",
    a: "That depends on refractory panel condition and liner integrity. Factory-built systems are typically rated for a design life of 30 years, but many perform well beyond this with proper maintenance. If the refractory panels are cracked through (not just hairline surface cracks), or if the metal liner shows significant deterioration, replacement becomes the more cost-effective option. A Level 2 inspection gives you the information needed to make that decision correctly.",
  },
  {
    q: "What causes chimney flashing leaks in Anaheim?",
    a: "Thermal cycling is the primary cause. Anaheim&apos;s temperature range — below freezing in cold snaps and exceeding 100°F in summer — causes the flashing sealant and the chimney masonry itself to expand and contract repeatedly. Over years, this degrades the sealant along the step flashing joints and at the counter flashing. Once compromised, each rain event pushes water through the gap. Flashing repair is usually more cost-effective than waiting for interior water damage to develop.",
  },
  {
    q: "Do you repair both masonry and factory-built chimneys in Anaheim?",
    a: "Yes. Anaheim has substantial numbers of both types. Colony Historic District and West Anaheim have older masonry chimneys; most 1980s and 1990s Anaheim Hills and newer Orange County construction used factory-built zero-clearance systems. The repair approach differs significantly between the two — masonry work for brick and mortar, manufacturer-specific component sourcing for factory-built systems.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Repair Anaheim",
  serviceType: "Chimney Repair",
  description: "Chimney repair in Anaheim for cracked crowns, flashing leaks, mortar repointing, and factory-built fireplace components.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: { "@type": "PostalAddress", addressLocality: "Anaheim", addressRegion: "CA", addressCountry: "US" },
  },
  areaServed: { "@type": "City", name: "Anaheim" },
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

export default function ChimneyRepairAnaheimPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/areas/" },
            { label: "Anaheim", href: "/areas/anaheim/" },
            { label: "Chimney Repair" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Technician repairing chimney masonry and flashing on an Anaheim home" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Anaheim
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Repair in Anaheim, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Chimney repair for Anaheim homes — masonry crowns, flashing, mortar repointing, and factory-built system components. Orange County&apos;s thermal cycling creates specific repair needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact/" className="btn-primary">Request Free Estimate</Link>
              <a href="#estimate-form" className="btn-secondary">Get Online Quote</a>
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
                  Anaheim&apos;s temperature range — below freezing on cold winter nights and exceeding 100°F in summer — is one of the larger thermal ranges in Southern California. This cycling stresses chimney crowns, mortar joints, and flashing sealant in ways that milder coastal climates do not. For masonry chimneys in older Anaheim neighborhoods, the cumulative effect is mortar erosion and crown cracking. For factory-built systems from the Anaheim housing boom of the 1970s to 1990s, it contributes to earlier-than-expected component wear.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  A{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">chimney inspection</Link>{" "}
                  before repair ensures all contributing problems are identified. In older Anaheim homes, crown damage, open mortar joints, and flashing failure often occur together — repairing one without addressing the others leaves the same water entry points open.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Common Chimney Repairs in Anaheim</h2>
                <ul className="space-y-3">
                  {[
                    { title: "Crown repair or replacement", desc: "Anaheim&apos;s temperature range expands existing crown cracks each season. A damaged crown allows water to reach the chimney interior and flue liner. Crown sealing works on hairline cracks; full replacement is appropriate for crowns with structural damage." },
                    { title: "Flashing repair at the roofline", desc: "Thermal cycling degrades flashing sealant at the chimney-roof junction. Flashing failure is one of the most common sources of water stains on walls or ceilings adjacent to Anaheim chimneys." },
                    { title: "Mortar joint repointing", desc: "Older Anaheim neighborhoods — Colony Historic District, West Anaheim, Brookhurst — have masonry chimneys where original mortar has eroded. Repointing with modern mortar matched to the existing brick restores the chimney&apos;s weather resistance." },
                    { title: "Factory-built system components", desc: "Anaheim&apos;s 1980s and 1990s factory-built fireplaces are now approaching or exceeding their 30-year design life. Refractory panel replacement, cap and chase cover repair, and liner assessment are the common service needs for these aging systems." },
                    { title: "Chimney cap replacement", desc: "A missing or damaged cap exposes the flue to rain, debris, and birds year-round. Anaheim&apos;s dry summer season also means a missing cap allows dust infiltration into the firebox." },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 bg-[#F8FAFC] border border-gray-100 rounded-xl p-4">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" className="shrink-0 mt-1" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                        <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Anaheim chimney repair service</p>
                <p className="text-gray-300 text-sm mb-4">Describe what you see — a leak stain, cracked crown, damaged cap — when requesting an estimate. We serve Anaheim, Anaheim Hills, Colony Historic District, Brookhurst, West Anaheim, and surrounding Orange County neighborhoods.</p>
                <Link href="/contact/" className="btn-primary inline-block">Request Free Estimate</Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Chimney Repair (All California)", href: "/services/chimney-repair/" },
                    { name: "Chimney Leak Repair", href: "/services/chimney-leak-repair/" },
                    { name: "Chimney Crown Repair", href: "/services/chimney-crown-repair/" },
                    { name: "Chimney Flashing Repair", href: "/services/chimney-flashing-repair/" },
                    { name: "Chimney Cap Replacement", href: "/services/chimney-cap-replacement/" },
                    { name: "Anaheim service area", href: "/areas/anaheim/" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors">
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm heading="Get a Free Estimate" subheading="Chimney repair in Anaheim. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Anaheim</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/anaheim/chimney-cleaning/" },
                    { name: "Chimney Sweep", href: "/areas/anaheim/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/anaheim/fireplace-repair/" },
                    { name: "Dryer Vent Cleaning", href: "/areas/anaheim/dryer-vent-cleaning/" },
                    { name: "All Anaheim Services", href: "/areas/anaheim/" },
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
                <a href={`mailto:${SITE.email}`} className="text-orange-400 text-sm font-bold hover:text-orange-300 transition-colors break-all">{SITE.email}</a>
                <p className="text-xs text-gray-400 mt-2">We reply within one business day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} heading="Chimney Repair Anaheim — FAQ" addSchema={false} />
      <CTABanner heading="Schedule chimney repair in Anaheim" />
    </>
  );
}
