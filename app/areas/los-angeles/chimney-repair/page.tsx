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
  title: "Chimney Repair Los Angeles | Brick, Leak & Masonry Repair",
  description:
    "Chimney repair in Los Angeles for cracked brick, leaks, damaged mortar, chimney crown problems, flashing issues, and fireplace draft concerns.",
  alternates: { canonical: "/areas/los-angeles/chimney-repair/" },
  openGraph: {
    title: "Chimney Repair Los Angeles | Brick, Leak & Masonry Repair",
    description:
      "Chimney repair in Los Angeles for cracked brick, leaks, damaged mortar, chimney crown problems, flashing issues, and fireplace draft concerns.",
    url: `${SITE.baseUrl}/areas/los-angeles/chimney-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Repair Los Angeles | Brick, Leak & Masonry Repair",
    description:
      "Chimney repair in Los Angeles — cracked brick, flashing, crown, and masonry. Licensed technicians. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What are the most common chimney repairs in Los Angeles?",
    a: "The most common repairs we see in Los Angeles are mortar joint repointing, chimney crown repair, flashing replacement, and spalled brick repair. Earthquake activity over the decades has also left many LA chimneys with cracked flue liners that were patched cosmetically but never properly repaired.",
  },
  {
    q: "Can cracked chimney bricks cause leaks?",
    a: "Yes. Spalled or cracked brick allows water to penetrate the masonry. Over time, that moisture works its way through the chimney wall and can appear as ceiling stains, damp areas near the firebox, or water marks on interior walls adjacent to the chimney chase.",
  },
  {
    q: "What causes water damage around a chimney?",
    a: "The most common sources are damaged or improperly installed flashing, a cracked chimney crown, a missing or undersized chimney cap, and porous masonry that absorbs rainwater. Often more than one of these is present at the same time.",
  },
  {
    q: "Should I repair or rebuild my chimney?",
    a: "Most chimneys can be repaired rather than rebuilt. A full rebuild is necessary when the masonry is structurally unsound, the chimney has shifted significantly from vertical, or damage is too widespread to address with targeted repairs. An inspection will tell you which situation you are in.",
  },
  {
    q: "How do I know if my chimney flashing is leaking?",
    a: "Signs include water stains on the ceiling near the chimney, damp areas on walls adjacent to the fireplace, and visible rust or mineral staining where the chimney meets the roofline. Flashing leaks are often mistaken for roof leaks — a closer look at the joint between the chimney and roof is needed to confirm.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Repair Los Angeles",
  serviceType: "Chimney Repair",
  description:
    "Chimney repair in Los Angeles for cracked brick, leaks, damaged mortar, chimney crown problems, flashing issues, and fireplace draft concerns.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "City", name: "Los Angeles" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.baseUrl}/` },
    { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE.baseUrl}/areas/` },
    { "@type": "ListItem", position: 3, name: "Los Angeles", item: `${SITE.baseUrl}/areas/los-angeles/` },
    { "@type": "ListItem", position: 4, name: "Chimney Repair", item: `${SITE.baseUrl}/areas/los-angeles/chimney-repair/` },
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

export default function ChimneyRepairLosAngelesPage() {
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
              { label: "Service Areas", href: "/areas/" },
              { label: "Los Angeles", href: "/areas/los-angeles/" },
              { label: "Chimney Repair" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Technician sealing chimney flashing and repairing a chimney leak on a Los Angeles home"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Los Angeles
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Repair in Los Angeles, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Brick repair, masonry repointing, flashing replacement, crown repair, and chimney leak repair for Los Angeles homes — addressed at the source, not just the symptom.
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
                  Chimney repair in Los Angeles covers a wide range — from routine mortar repointing on a 1950s brick chimney to flashing replacement after rain damage. Getting the right repair starts with identifying the actual source of the problem. Visible damage is often a symptom of something deeper: a missing chimney cap leads to water intrusion, which cracks the crown, which damages the liner underneath. Treating the visible crack without addressing the entry point means the repair fails within a few seasons.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We recommend starting with a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney inspection
                  </Link>{" "}
                  before any repair work. An inspection tells us what is actually failing, so the repair scope and cost reflect the real problem rather than an educated guess.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Common Chimney Repair Issues in Los Angeles
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Los Angeles chimneys face a specific combination of stresses. Earthquake activity has been the biggest structural factor — the 1994 Northridge earthquake cracked thousands of flue liners across the region, many of which were patched cosmetically and never received a proper liner inspection or repair. Homes in high-frequency seismic areas should have their flue liners inspected by camera even if no external damage is visible.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Mediterranean climate cycles also take a toll. Wet winters followed by long dry summers cause masonry to absorb water and then dry out repeatedly. Over decades, this cycle erodes mortar joints and causes brick faces to spall. Chimneys that were last pointed in the 1970s or 1980s typically need repointing now.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Coastal properties in Pacific Palisades, Malibu, Venice, and the South Bay experience faster corrosion of metal chimney components — flashing, caps, and damper plates deteriorate more quickly in marine air and may need replacement sooner than inland homes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Signs Your Chimney Needs Repair
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      title: "White staining on brick (efflorescence)",
                      desc: "A mineral deposit left behind when water moves through masonry and evaporates. It indicates water is penetrating the brick or mortar joints.",
                    },
                    {
                      title: "Crumbling or missing mortar joints",
                      desc: "Mortar that can be scraped out with a finger or that has gaps wider than 1/4 inch needs repointing before water accelerates the damage further.",
                    },
                    {
                      title: "Spalled brick faces",
                      desc: "When the face of a brick breaks off or flakes away, the exposed core absorbs water faster than finished brick. Spalling progresses quickly once it starts.",
                    },
                    {
                      title: "Water in the firebox or ceiling stains",
                      desc: "Water appearing inside the firebox after rain, or ceiling stains near the chimney, indicate a leak entering somewhere in the chimney system.",
                    },
                    {
                      title: "Rust on the damper or firebox components",
                      desc: "Rust inside the firebox is a sign that water has been entering the system. The damper plate, firebox hardware, and smoke shelf should all be checked.",
                    },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 bg-[#F8FAFC] border border-gray-100 rounded-xl p-4"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="2.5"
                        className="shrink-0 mt-1"
                        aria-hidden="true"
                      >
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
                  Chimney Leaks, Masonry, Crowns, and Flashing
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Each part of the chimney system that can leak or deteriorate requires a different repair approach. A{" "}
                  <Link href="/services/chimney-leak-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney leak
                  </Link>{" "}
                  from damaged flashing at the roofline is a sheet metal and sealant repair. A cracked{" "}
                  <Link href="/services/chimney-crown-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    chimney crown
                  </Link>{" "}
                  is a concrete repair that also requires rebuilding the overhang profile to shed water properly. Porous masonry needs a vapor-permeable waterproofing sealer after repointing — not just paint or a standard sealant that traps moisture inside the brick.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For{" "}
                  <Link href="/services/chimney-masonry-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    masonry repair
                  </Link>
                  , we use Type S mortar matched to the existing joint profile and color. When brick replacement is needed, we source from regional suppliers and bring samples before work begins. The goal is a repair that is functionally sound and visually consistent with the existing chimney.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Why Inspection Should Come Before Repair
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A repair quote based on what is visible from the ground or from the rooftop can miss what is happening inside the flue. Video camera inspection maps every crack, joint separation, and liner defect before we set a repair scope. In practice, this saves homeowners from paying for a repair in the wrong location.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If you have had a chimney fire — including a small one that you may not have noticed — the liner should be inspected before any other repair is done. A chimney fire can damage the liner while leaving the exterior masonry intact. Repointing the brickwork on a chimney with an undetected cracked liner addresses the wrong problem.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Seeing damage or water near your chimney?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Request a free estimate and describe what you are seeing — we will recommend the right starting point.
                </p>
                <Link href="/contact/" className="btn-primary inline-block">
                  Request Free Estimate
                </Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Chimney Repair (All California)", href: "/services/chimney-repair/" },
                    { name: "Chimney Leak Repair", href: "/services/chimney-leak-repair/" },
                    { name: "Chimney Masonry Repair", href: "/services/chimney-masonry-repair/" },
                    { name: "Chimney Crown Repair", href: "/services/chimney-crown-repair/" },
                    { name: "Chimney Flashing Repair", href: "/services/chimney-flashing-repair/" },
                    { name: "Chimney Cap Replacement", href: "/services/chimney-cap-replacement/" },
                    { name: "Los Angeles service area", href: "/areas/los-angeles/" },
                  ].map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors"
                    >
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm
                heading="Get a Free Estimate"
                subheading="Chimney repair in Los Angeles. We respond within 2 business hours."
                dark={false}
              />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">
                  More in Los Angeles
                </h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/los-angeles/chimney-cleaning/" },
                    { name: "Chimney Sweep", href: "/areas/los-angeles/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/los-angeles/fireplace-repair/" },
                    { name: "Dryer Vent Cleaning", href: "/areas/los-angeles/dryer-vent-cleaning/" },
                    { name: "All LA Services", href: "/areas/los-angeles/" },
                  ].map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="text-sm text-gray-700 hover:text-orange-600 transition-colors flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-orange-400 shrink-0" />
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-5 text-white text-center">
                <p className="text-sm font-semibold mb-1">Prefer to write?</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-orange-400 text-sm font-bold hover:text-orange-300 transition-colors break-all"
                >
                  {SITE.email}
                </a>
                <p className="text-xs text-gray-400 mt-2">We reply within one business day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} heading="Chimney Repair Los Angeles — FAQ" addSchema={false} />
      <CTABanner heading="Schedule chimney repair in Los Angeles" />
    </>
  );
}
