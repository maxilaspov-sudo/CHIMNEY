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
  title: "Chimney Crown Repair in California | Stop Water Damage | Chimney Peak California",
  description:
    "Chimney crown repair across California. Cracked or failed crowns rebuilt to stop water infiltration. Licensed masonry professionals. Free estimate.",
  alternates: { canonical: "/services/chimney-crown-repair/" },
  openGraph: {
    title: "Chimney Crown Repair in California | Chimney Peak California",
    description:
      "Chimney crown repair across California. Cracked crowns rebuilt to stop water infiltration. Licensed masonry. Free estimate.",
    url: "/services/chimney-crown-repair/",
    images: [
      {
        url: "https://images.pexels.com/photos/13279005/pexels-photo-13279005.jpeg?auto=compress&cs=tinysrgb&h=350",
        alt: "Close-up of brick chimney masonry repair — chimney crown repair service in California",
      },
    ],
  },
};

const HERO_IMAGE = "/images/chimney-crown-repair.jpg";

const SIGNS = [
  {
    title: "Visible cracks in the crown",
    desc: "Hairline to wide cracks across the crown surface, visible from binoculars at ground level or confirmed during a rooftop inspection.",
  },
  {
    title: "White staining on exterior brick (efflorescence)",
    desc: "Mineral deposits left on the brick face when water moves through the masonry and evaporates. The stain is evidence — the problem is what's making the water move.",
  },
  {
    title: "Water in the firebox after rain",
    desc: "Water entering through a cracked crown runs down the flue and pools in the firebox. Never use the fireplace when there is water in the firebox.",
  },
  {
    title: "Spalled brick below the chimney top",
    desc: "Brick faces popping or flaking directly below the crown line indicate water is entering there and saturating the masonry from above.",
  },
  {
    title: "Crown flush with chimney top",
    desc: "A crown with no overhang and no downward slope was built incorrectly and will allow water in at the joint between the crown and the outer brick. This is a design defect, not age — it was wrong from day one.",
  },
  {
    title: "Previously patched with surface caulk",
    desc: "A surface sealant applied over a cracked crown buys time, not a fix. If an earlier repair used caulk alone without addressing the underlying crack depth, it will fail.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Rooftop inspection and photography",
    desc: "We inspect the crown from the roof, document all damage, and assess whether repair or full replacement is appropriate.",
  },
  {
    title: "Written assessment",
    desc: "You receive a written scope of work with photos before we start. No verbal-only findings.",
  },
  {
    title: "Remove deteriorated material",
    desc: "For replacement jobs, the existing crown is cut back to sound material. Loose or crumbling sections are removed before new material is placed.",
  },
  {
    title: "Rebuild to spec",
    desc: "A properly sized crown is cast with a minimum 2-inch overhang on all sides and a downward slope from the flue liner to the outer edge. Hairline cracks in sound crowns are filled with elastomeric crown coat.",
  },
  {
    title: "Curing and waterproofing",
    desc: "New concrete is allowed to cure before rain exposure. A vapor-permeable masonry sealer is applied to the crown and surrounding brick to reduce water absorption.",
  },
];

const FAQS = [
  {
    q: "What is a chimney crown and how is it different from the chimney cap?",
    a: "The crown is the concrete or mortar surface at the top of the chimney that covers the space between the flue opening and the outside edge of the masonry. The cap is the metal cover that sits directly over the flue opening to keep rain and animals out. They're different components — you can have a functional cap and a failing crown at the same time.",
  },
  {
    q: "Can a cracked crown be patched, or does it need to be replaced?",
    a: "Narrow, stable cracks in a crown with proper overhang and slope can be sealed with elastomeric crown coat and will hold for years. Crowns that are undersized, improperly sloped, structurally deteriorated, or cracking through their full depth need to be removed and rebuilt. A patch applied to a failing substrate fails quickly.",
  },
  {
    q: "How much does chimney crown repair cost in California?",
    a: "Cost depends on chimney height, whether repair or full replacement is needed, and access to the roof. We provide a written flat-price quote after a rooftop inspection — call or submit the form to schedule one. We don't quote crown repair without seeing it.",
  },
  {
    q: "What happens if I ignore a cracked crown?",
    a: "Water enters the liner every time it rains. Saturated clay tile liner sections crack when temperatures drop. Left for several wet seasons, the entry point that started as a crown crack can require a full liner replacement and structural masonry work — a considerably larger project.",
  },
  {
    q: "What does a correctly built chimney crown look like?",
    a: "A properly built crown extends at least 2 inches past the chimney face on all sides and slopes downward from the flue liner to the outer edge. The overhang sheds water away from the chimney face rather than running down the brick. Crowns flush with the chimney top or without a slope are built incorrectly and are a water entry risk.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Crown Repair",
  description:
    "Chimney crown repair and rebuilding across California — cracked or deteriorated crowns repaired or rebuilt to NFPA 211 spec by licensed masonry professionals.",
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
      name: "Chimney Crown Repair",
      item: SITE.baseUrl + "/services/chimney-crown-repair/",
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

export default function ChimneyCrownRepairPage() {
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
              { label: "Chimney Crown Repair" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Masonry repair work on a residential chimney — chimney crown repair service in California"
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
              Chimney Crown Repair in California
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Cracked or failed chimney crowns repaired or rebuilt by licensed California masons — before water damages the liner and masonry below.
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
                  About Chimney Crown Repair
                </h2>
                <div className="text-gray-600 leading-relaxed text-lg space-y-4">
                  <p>
                    The chimney crown is the concrete or mortar surface at the very top of a masonry chimney — the flat or sloped section that covers the gap between the flue liner and the outer edge of the chimney. Its job is to shed rain and snowmelt away from the flue and the surrounding masonry. When it cracks or deteriorates, it does the opposite: it channels water directly into the liner and down through the masonry.
                  </p>
                  <p>
                    A well-built crown extends at least 2 inches past the chimney face on all sides and has a slight downward slope from the flue toward the edges. A crown that sits flush with the chimney top, or one without adequate slope, will allow water to pool and infiltrate the mortar joint where the crown meets the brick — typically the first place to fail. This is a design issue, not just age.
                  </p>
                  <p>
                    California&apos;s rainy winters in Northern California and the Bay Area, combined with freeze-thaw cycles in Sierra foothill communities, accelerate crown deterioration faster than the state&apos;s mild reputation suggests. A crown that looked fine three years ago may have developed cracks that are difficult to see from ground level.
                  </p>
                </div>
              </div>

              {/* Repair vs. Replace */}
              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <h2 className="text-xl font-bold mb-3 text-orange-300">Crown Repair vs. Crown Replacement</h2>
                <div className="text-gray-300 text-sm leading-relaxed space-y-3">
                  <p>
                    <strong className="text-white">Repair is appropriate</strong> when the crown has the correct geometry (proper overhang and slope) and the cracks are narrow and stable — typically hairline to 1/4 inch. An elastomeric crown coat applied to a sound substrate will hold for years.
                  </p>
                  <p>
                    <strong className="text-white">Replacement is required</strong> when the crown is undersized (no meaningful overhang), improperly sloped (flat or pitched toward the chimney), structurally crumbling, or cracking through its full depth. A patch on a bad foundation fails quickly. The only durable fix is removing the existing crown to sound material and rebuilding it correctly.
                  </p>
                </div>
              </div>

              {/* Signs */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#1E3A5F] mb-5">
                  Signs Your Chimney Crown Needs Repair
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
                  Why Crown Repair Requires a Licensed Mason
                </h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Crown geometry — overhang, slope, and liner clearance — must meet NFPA 211 requirements for the repair to work",
                    "Removing a crown without damaging the flue liner or surrounding masonry requires controlled cutting technique",
                    "Concrete mix proportions for a durable crown differ from standard mortar — wrong mix fails in the first winter",
                    "Matching existing mortar color and joint profile when repointing around the new crown requires material selection",
                    "Working at chimney height on a roof requires fall protection — our crews carry all required safety equipment",
                    "Written documentation of the repair scope, materials, and condition is included with every job",
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
                <h2 className="text-xl md:text-2xl font-bold text-[#1E3A5F] mb-5">Our Crown Repair Process</h2>
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
                    <Link href="/blog/chimney-crown-vs-cap/" className="text-sm text-orange-600 hover:underline font-medium">
                      Chimney Crown vs Cap vs Chase Cover — What&apos;s the Difference? →
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/signs-chimney-needs-repair/" className="text-sm text-orange-600 hover:underline font-medium">
                      Signs Your Chimney Needs Repair (Not Just Cleaning) →
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Service areas */}
              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-[#1E3A5F] mb-1">
                  Chimney Crown Repair Available In
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
                heading="Get a Crown Repair Quote"
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
                    { name: "Chimney Cap Installation", href: "/services/chimney-cap-installation/" },
                    { name: "Chimney Liner Repair", href: "/services/chimney-liner-repair/" },
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
                  If the crown looks intact but you&apos;re seeing water in the firebox, the problem is more likely the cap or flashing. Start with a{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:underline">
                    chimney inspection
                  </Link>{" "}
                  to identify the correct entry point before committing to any repair.
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
        heading="Chimney Crown Repair FAQ"
        addSchema={false}
      />

      <CTABanner heading="Ready to schedule your chimney crown repair?" />
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
