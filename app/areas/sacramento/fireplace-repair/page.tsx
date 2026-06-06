import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/Gas-fireplace-repair.jpg";

export const metadata: Metadata = {
  title: "Fireplace Repair Sacramento | Gas & Wood-Burning Fireplace Service",
  description:
    "Fireplace repair in Sacramento for gas and wood-burning fireplaces — cracked fireboxes, smoke problems, draft issues, gas ignition failure, and damper repair.",
  alternates: { canonical: "/areas/sacramento/fireplace-repair/" },
  openGraph: {
    title: "Fireplace Repair Sacramento | Gas & Wood-Burning Fireplace Service",
    description:
      "Fireplace repair in Sacramento for gas and wood-burning fireplaces — cracked fireboxes, smoke problems, draft issues, gas ignition failure, and damper repair.",
    url: `${SITE.baseUrl}/areas/sacramento/fireplace-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fireplace Repair Sacramento | Gas & Wood-Burning Fireplace Service",
    description:
      "Fireplace repair in Sacramento — gas and wood-burning, smoke issues, cracked firebox, valley inversion draft problems. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What are common fireplace problems in Sacramento homes?",
    a: "The most common fireplace problems in Sacramento are cracked firebox refractory mortar from thermal cycling, smoke backing into the room during valley inversions, deteriorated dampers that do not seal in summer, gas fireplace ignition issues, and firebox brick deterioration in older masonry fireplaces. Sacramento&apos;s extreme summer heat and heavy winter burning season together create more wear than typical California fireplaces experience.",
  },
  {
    q: "Why does smoke enter the room when using a Sacramento fireplace?",
    a: "In Sacramento, smoke backdraft is often related to atmospheric conditions rather than a fireplace defect. During winter temperature inversions, the chimney draft weakens or reverses because the air outside is colder and denser than expected. However, structural causes — a blocked flue, stuck damper, cracked smoke chamber — can produce the same symptom. We assess both atmospheric factors and the physical fireplace during a diagnosis visit.",
  },
  {
    q: "Can thermal cycling from Sacramento summers damage the firebox?",
    a: "Yes. Firebox refractory materials are designed to handle the heat from fires, but they are still subject to the cumulative stress of Sacramento&apos;s extreme temperature range. Refractory mortar joints that expand and contract across a 130°F seasonal range eventually develop cracks. These cracks are often visible as dark hairline lines in the firebox mortar — they should be repaired before they allow heat to reach the firebox framing behind the refractory liner.",
  },
  {
    q: "Do you repair gas fireplaces in Sacramento?",
    a: "Yes. Gas fireplace repairs in Sacramento include thermocouple and thermopile replacement, pilot assembly service, gas valve diagnosis, igniter replacement, and burner cleaning. Sacramento&apos;s dry and dusty summers can also clog pilot assemblies and gas orifices, which can contribute to ignition issues or intermittent flame problems.",
  },
  {
    q: "How long does fireplace repair take?",
    a: "Simple repairs — damper replacement, thermocouple replacement, pilot cleaning, firebox mortar patching — are completed in a single visit. More involved repairs such as full firebox refacing, smoke chamber parging, or gas valve replacement may require additional time or parts ordering. We always provide a clear scope and timeline before beginning any work.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fireplace Repair Sacramento",
  serviceType: "Fireplace Repair",
  description:
    "Fireplace repair in Sacramento for gas and wood-burning fireplaces — cracked fireboxes, smoke problems, draft issues, gas ignition failure, and damper repair.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sacramento",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "City", name: "Sacramento" },
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

export default function FireplaceRepairSacramentoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/areas/" },
              { label: "Sacramento", href: "/areas/sacramento/" },
              { label: "Fireplace Repair" },
            ]}
          />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Technician repairing a gas fireplace insert and firebox components in a Sacramento home"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Sacramento
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Fireplace Repair in Sacramento, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Gas and wood-burning fireplace repair for Sacramento homeowners — smoke problems, cracked fireboxes, damper issues, gas ignition failures, and draft problems diagnosed accurately.
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
                  Sacramento fireplaces take more wear than those in most California cities. The combination of heavy winter burning — 1.8 cords of wood per household on average — and extreme summer heat that cycles metal and masonry components well beyond coastal temperature ranges means repair needs arise sooner and more frequently. The good news is that most issues identified early are straightforward repairs rather than major structural work.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  For Sacramento homeowners who are uncertain whether the fireplace is safe to use, the right starting point is a{" "}
                  <Link href="/services/fireplace-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                    fireplace inspection
                  </Link>{" "}
                  rather than waiting for a visible symptom. Cracks in refractory mortar that allow heat near framing are not always visible from inside the firebox without knowing what to look for.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  Common Fireplace Repairs in Sacramento
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Firebox mortar and refractory repair",
                      desc: "Cracked refractory mortar in the firebox is the most common repair in Sacramento&apos;s wood-burning homes. Heat-cycling stress over many seasons causes hairline cracks that should be repaired with refractory mortar before they widen and allow heat to penetrate the firebox backing.",
                    },
                    {
                      title: "Smoke backdraft and draft problems",
                      desc: "Smoke entering the room is diagnosed differently in Sacramento — valley inversion days create atmospheric conditions that reverse chimney draft on otherwise-functional fireplaces. We distinguish atmospheric causes from structural ones (blocked flue, smoke chamber issue, stuck damper) and address the actual cause.",
                    },
                    {
                      title: "Damper repair or replacement",
                      desc: "Dampers in Sacramento fireplaces see extra stress from summer heat. Cast iron damper plates warp, actuating mechanisms corrode, and seals fail. A damper that does not fully close allows hot summer air, insects, and chimney odors into the home.",
                    },
                    {
                      title: "Gas fireplace ignition and flame issues",
                      desc: "Pilot assemblies and thermocouple systems are the most common gas fireplace repair. Sacramento&apos;s dry, dusty summers can clog small gas orifices and pilot tubes that worked fine the prior winter.",
                    },
                    {
                      title: "Smoke chamber repair",
                      desc: "Deteriorated smoke chamber surfaces cause turbulent draft and contribute to smoke backing into the room. Smoke chamber parging smooths the surface and improves draft efficiency.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 bg-[#F8FAFC] border border-gray-100 rounded-xl p-4">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" className="shrink-0 mt-1" aria-hidden="true">
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
                  Older Masonry Fireplaces in Sacramento
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Land Park, Curtis Park, Midtown, and East Sacramento have a high concentration of original mid-century masonry fireplaces — built with clay tile liners and brick fireboxes that were standard construction for the period. These fireplaces are generally well-built and repairable, but they require periodic attention that factory-built units do not.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For homes that have been owner-occupied for decades, the typical condition is: functional firebox with some refractory mortar wear, a damper that is operable but no longer seals well, and a smoke chamber that has not been professionally cleaned recently. These are routine repair items. For homes recently purchased, a Level 2 inspection is the correct starting point when prior maintenance history is unknown.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Fireplace not working right?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Describe the specific problem — smoke, ignition, smell, or damage you can see — and we&apos;ll come prepared with the right tools.
                </p>
                <Link href="/contact/" className="btn-primary inline-block">
                  Request Free Estimate
                </Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Fireplace Repair (All California)", href: "/services/fireplace-repair/" },
                    { name: "Gas Fireplace Repair", href: "/services/gas-fireplace-repair/" },
                    { name: "Wood Fireplace Repair", href: "/services/wood-fireplace-repair/" },
                    { name: "Chimney Repair in Sacramento", href: "/areas/sacramento/chimney-repair/" },
                    { name: "Chimney Cleaning in Sacramento", href: "/areas/sacramento/chimney-cleaning/" },
                    { name: "Sacramento service area", href: "/areas/sacramento/" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors">
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm heading="Get a Free Estimate" subheading="Fireplace repair in Sacramento. We respond within 2 business hours." dark={false} />

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Sacramento</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/sacramento/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/sacramento/chimney-repair/" },
                    { name: "Chimney Sweep", href: "/areas/sacramento/chimney-sweep/" },
                    { name: "Dryer Vent Cleaning", href: "/areas/sacramento/dryer-vent-cleaning/" },
                    { name: "All Sacramento Services", href: "/areas/sacramento/" },
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

      <FAQSection faqs={FAQS} heading="Fireplace Repair Sacramento — FAQ" addSchema={false} />
      <CTABanner heading="Schedule fireplace repair in Sacramento" />
    </>
  );
}
