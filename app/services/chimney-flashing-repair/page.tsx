import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, NAV_AREAS } from "@/lib/constants";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Chimney Flashing Repair in California | Stop Roof Leaks | Chimney Peak California",
  description:
    "Chimney flashing repair across California. Leaking step and counter flashing resealed or replaced to stop water damage. Free estimate.",
  alternates: { canonical: "/services/chimney-flashing-repair/" },
  openGraph: {
    title: "Chimney Flashing Repair in California | Chimney Peak California",
    description:
      "Chimney flashing repair across California — leaking step and counter flashing resealed or replaced. Free estimate.",
    url: "/services/chimney-flashing-repair/",
    images: [
      {
        url: "https://images.pexels.com/photos/12426087/pexels-photo-12426087.jpeg?auto=compress&cs=tinysrgb&h=350",
        alt: "Rooftop showing chimney and surrounding shingles — chimney flashing repair service in California",
      },
    ],
  },
};

const HERO_IMAGE = "/images/chimney-flashing-repair.jpg";

const FLASHING_TYPES = [
  {
    name: "Step Flashing",
    desc: "Individual L-shaped metal pieces installed in a staircase pattern along each side of the chimney, woven between the roof shingles. Each piece overlaps the one below it to direct water down and away.",
  },
  {
    name: "Counter Flashing",
    desc: "Metal pieces embedded into the chimney mortar joints that overlap the top edge of the step flashing. This creates the watertight seal at the chimney face. When the mortar joint deteriorates, the counter flashing lifts and allows water behind it.",
  },
  {
    name: "Saddle Flashing (Cricket)",
    desc: "A peaked ridge structure behind a wide chimney that diverts water around the chimney rather than letting it pool against the back. Required by most building codes for chimneys wider than 30 inches. Often missing on older California homes.",
  },
];

const SIGNS = [
  {
    title: "Water stains on ceiling or wall near the chimney",
    desc: "The most common presenting symptom. Water enters at the roofline but travels inside the wall cavity before becoming visible — the stain is rarely directly over the entry point.",
  },
  {
    title: "Rust or visible gaps in the flashing metal",
    desc: "Oxidized flashing metal has reached the end of its service life. Gaps between the flashing and the chimney masonry are a direct entry point.",
  },
  {
    title: "Cracked, dried, or missing sealant at flashing joints",
    desc: "The flexible sealant that bridges the metal to the masonry shrinks and cracks over years of thermal cycling. California's temperature swings accelerate this.",
  },
  {
    title: "Loose or lifted counter flashing",
    desc: "Counter flashing embedded in mortar joints lifts when the surrounding mortar deteriorates. A lifted edge creates a gap behind the metal on every rainfall.",
  },
  {
    title: "Water in the firebox that isn't from the crown or cap",
    desc: "After confirming the cap and crown are intact, back-of-chimney flashing failure is the next thing to check — particularly the saddle flashing behind the chimney.",
  },
  {
    title: "Musty smell near the chimney interior wall",
    desc: "Sustained moisture in the wall cavity from a slow flashing leak promotes mold growth before visible water staining appears.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Rooftop inspection",
    desc: "We inspect all flashing surfaces from the roof — step flashing condition, counter flashing seating, sealant joints, and back-of-chimney drainage.",
  },
  {
    title: "Water test if needed",
    desc: "When the entry point isn't obvious from visual inspection, a controlled water test isolates the failing zone. This prevents unnecessary replacement of intact material.",
  },
  {
    title: "Remove deteriorated sealant",
    desc: "All cracked or failed sealant is removed completely before new material is applied — sealant over sealant doesn't hold.",
  },
  {
    title: "Re-seat or replace flashing metal",
    desc: "Lifted counter flashing is re-embedded into fresh mortar. Corroded or damaged metal is replaced. Step flashing that has lifted from the shingles is reseated and secured.",
  },
  {
    title: "Apply elastomeric sealant",
    desc: "Flexible elastomeric flashing compound is applied to all metal-to-masonry joints. It bonds well, moves with thermal expansion, and remains waterproof for years.",
  },
  {
    title: "Document and test",
    desc: "Repairs are photographed and documented. If weather permits, a follow-up water test confirms the repair before we leave.",
  },
];

const FAQS = [
  {
    q: "Why does chimney flashing fail?",
    a: "The main cause is sealant age. The flexible compound that bridges the flashing metal to the chimney masonry shrinks, cracks, and separates after years of thermal cycling. On older chimneys, the mortar joints holding the counter flashing also deteriorate, allowing the metal to lift and create a gap. Most repairs address the sealant — the metal itself is often still serviceable.",
  },
  {
    q: "Can I seal chimney flashing myself?",
    a: "A sealant application over properly seated flashing is something some homeowners handle. The problem is confirming the metal is actually seated correctly — counter flashing that needs to be re-embedded into mortar requires cutting the masonry and re-pointing. Applying sealant over improperly seated metal delays the problem rather than fixing it.",
  },
  {
    q: "How long does chimney flashing repair last?",
    a: "A properly executed repair — re-seated counter flashing, re-pointed mortar, elastomeric sealant — should hold for 10 to 20 years. Coastal California properties experience more thermal cycling than inland homes and benefit from inspection more frequently.",
  },
  {
    q: "What is a chimney cricket and do I need one?",
    a: "A cricket (or saddle) is a small peaked structure behind a wide chimney that prevents water from pooling against the back chimney wall. Most building codes require a cricket for chimneys wider than 30 inches. On older homes it's often missing — concentrated water against the back of the chimney accelerates flashing failure and can saturate the masonry from behind.",
  },
  {
    q: "How do I know if the leak is from the flashing, the crown, or the cap?",
    a: "Water in the center of the firebox after rain usually points to the cap or crown — it's entering the flue opening and running down. Water staining on the ceiling or wall near the chimney, especially appearing after heavy rain but not dripping from the firebox, typically points to the flashing. A rooftop inspection confirms which component is failing.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Flashing Repair",
  description:
    "Chimney flashing repair across California — leaking step and counter flashing resealed, re-seated, or replaced by licensed masons to stop water infiltration.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
  },
  areaServed: { "@type": "State", name: "California" },
  offers: {
    "@type": "Offer",
    price: "Free estimate",
    priceCurrency: "USD",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.baseUrl + "/" },
    { "@type": "ListItem", position: 2, name: "Services", item: SITE.baseUrl + "/services/" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Chimney Flashing Repair",
      item: SITE.baseUrl + "/services/chimney-flashing-repair/",
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

export default function ChimneyFlashingRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services/" },
              { label: "Chimney Flashing Repair" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Residential rooftop showing chimney and surrounding shingles — chimney flashing repair in California"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Licensed masonry
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Flashing Repair in California
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Leaking chimney flashing resealed, re-seated, or replaced before water damage reaches the wall framing. Licensed California masons.
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

      {/* Main content */}
      <section className="section-pad bg-white">
        <div className="container-base">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left: content */}
            <div className="lg:col-span-2 flex flex-col gap-10">

              {/* Overview */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-4">
                  About Chimney Flashing Repair
                </h2>
                <div className="text-gray-600 leading-relaxed text-lg space-y-4">
                  <p>
                    Chimney flashing is the metal seal between the chimney and the surrounding roof. It&apos;s the most common source of water staining near chimneys — not because it&apos;s poorly designed, but because the chimney and the roof move independently through temperature changes, and the flexible sealant that bridges them eventually cracks and separates.
                  </p>
                  <p>
                    The tricky part about flashing failures is that water enters at the roofline but travels inside the wall cavity before appearing as a stain on the ceiling or wall. The stain rarely appears directly above the entry point. A homeowner who sees a water stain two feet from the chimney and patches the ceiling hasn&apos;t fixed anything — the water is still getting in at the roof.
                  </p>
                  <p>
                    California&apos;s rainy seasons — particularly in Northern California, the Bay Area, and mountain communities — concentrate significant water exposure on chimney-to-roof intersections. Flashing that has been functioning adequately for years can develop a slow leak after one heavy storm season.
                  </p>
                </div>
              </div>

              {/* Flashing types */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#1E3A5F] mb-5">
                  The Three Types of Chimney Flashing
                </h2>
                <div className="flex flex-col gap-4">
                  {FLASHING_TYPES.map((type, i) => (
                    <div key={i} className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-5">
                      <h3 className="font-bold text-[#1E3A5F] mb-2 text-base">{type.name}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{type.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signs */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#1E3A5F] mb-5">
                  Signs Your Chimney Flashing Needs Repair
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {SIGNS.map((sign, i) => (
                    <div key={i} className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-5">
                      <h3 className="font-bold text-[#1E3A5F] mb-2 text-sm">{sign.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{sign.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why professional */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#1E3A5F] mb-4">
                  Why Flashing Repair Requires a Qualified Mason
                </h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Counter flashing re-embedding requires cutting and re-pointing masonry mortar joints — not just surface sealant",
                    "Incorrect flashing slope or lapping can redirect water rather than stop it",
                    "Saddle flashing installation behind wide chimneys requires framing and roofing coordination",
                    "Roof access at chimney height requires fall protection equipment that most homeowners don't have",
                    "Identifying the actual entry point requires experience — surface caulk over the wrong location does nothing",
                    "Written documentation of repair scope, materials, and before/after photos included on every job",
                  ].map((b, i) => (
                    <li key={i} className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-lg p-3">
                      <CheckIcon />
                      <span className="text-sm text-gray-700">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#1E3A5F] mb-5">Our Flashing Repair Process</h2>
                <div className="flex flex-col gap-4">
                  {PROCESS_STEPS.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{step.title}</p>
                        <p className="text-sm text-gray-500 mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related reading */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
                <h3 className="font-bold text-[#1E3A5F] mb-3">Related Guides</h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="/blog/chimney-flashing-leaks/" className="text-sm text-orange-600 hover:underline font-medium">
                      Chimney Flashing Leaks: Causes, Signs, and When to Repair →
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/chimney-leaks-water-sources/" className="text-sm text-orange-600 hover:underline font-medium">
                      Where Chimney Leaks Come From — And How to Fix Them →
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Service areas */}
              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-[#1E3A5F] mb-1">
                  Chimney Flashing Repair Available In
                </h3>
                <p className="text-xs text-gray-400 mb-4">
                  Serving{" "}
                  <Link href="/areas/california/" className="text-orange-500 hover:underline">
                    all of California
                  </Link>{" "}
                  ·{" "}
                  <Link href="/areas/" className="text-orange-500 hover:underline">
                    View all service areas
                  </Link>
                </p>
                <div className="flex flex-wrap gap-2">
                  {NAV_AREAS.slice(0, 14).map((area) => (
                    <Link
                      key={area.href}
                      href={area.href}
                      className="text-xs bg-white border border-gray-200 hover:border-orange-300 hover:text-orange-600 px-3 py-1.5 rounded-full transition-colors"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form + sidebar */}
            <div className="flex flex-col gap-6">
              <LeadForm
                heading="Get a Flashing Repair Quote"
                subheading="We respond within 2 business hours."
                dark={false}
              />

              {/* Related services */}
              <div className="bg-[#F8FAFC] rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3">Related Services</h3>
                <ul className="flex flex-col gap-1">
                  {[
                    { name: "Chimney Leak Repair", href: "/services/chimney-leak-repair/" },
                    { name: "Chimney Repair", href: "/services/chimney-repair/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Chimney Crown Repair", href: "/services/chimney-crown-repair/" },
                    { name: "Chimney Cap Installation", href: "/services/chimney-cap-installation/" },
                  ].map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="text-sm text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-1">
                        <span className="text-orange-400">›</span> {s.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/services/" className="text-sm text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-1">
                      <span className="text-orange-400">›</span> All Services
                    </Link>
                  </li>
                </ul>
              </div>

              {/* When to call someone else */}
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
                <h3 className="font-semibold text-[#1E3A5F] mb-2 text-sm">When to call someone else</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  If you&apos;re not sure whether the leak is coming from the flashing, the crown, or the cap, start with a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:underline">
                    chimney inspection
                  </Link>
                  . Diagnosing the correct entry point before any repair prevents replacing components that aren&apos;t failing.
                </p>
              </div>

              {/* Email CTA */}
              <div className="bg-[#1E3A5F] rounded-xl p-5 text-center">
                <p className="text-gray-300 text-sm mb-2">Have a question?</p>
                <a href={`mailto:${SITE.email}`} className="text-orange-400 font-bold text-base hover:text-orange-300 block break-all">
                  {SITE.email}
                </a>
                <p className="text-gray-400 text-xs mt-1">Mon–Fri 7am–7pm · Sat 8am–5pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={FAQS}
        heading="Chimney Flashing Repair FAQ"
        addSchema={false}
      />

      <CTABanner heading="Ready to schedule your chimney flashing repair?" />
    </>
  );
}


function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" className="shrink-0 mt-0.5" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
