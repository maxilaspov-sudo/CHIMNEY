import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/chimney-sweep-service.jpg";

export const metadata: Metadata = {
  title: "Chimney Sweep Oakland | Chimney & Fireplace Service",
  description:
    "Professional chimney sweep service in Oakland for soot, creosote, fireplace cleaning, chimney flue buildup, and draft problems. Hillside and flatland homes served.",
  alternates: { canonical: "/areas/oakland/chimney-sweep/" },
  openGraph: {
    title: "Chimney Sweep Oakland | Chimney & Fireplace Service",
    description:
      "Professional chimney sweep service in Oakland for soot, creosote, fireplace cleaning, flue buildup, and draft problems.",
    url: `${SITE.baseUrl}/areas/oakland/chimney-sweep/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Sweep Oakland | Chimney & Fireplace Service",
    description: "Chimney sweep in Oakland — BAAQMD prep, spark arrestor check, older homes. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What does a chimney sweep service include in Oakland?",
    a: "A chimney sweep in Oakland includes full-length flue cleaning with rotary brush equipment, smoke chamber and damper shelf cleaning, vacuum extraction at the firebox, and a NFPA 211 Level 1 inspection of accessible components. For Oakland Hills properties, we specifically check spark arrestor condition and cap integrity during every sweep visit — these are fire safety components that the Oakland Fire Department recommends inspecting annually.",
  },
  {
    q: "How often should I hire a chimney sweep in Oakland?",
    a: "Once per year is appropriate for most Oakland households. For BAAQMD-permitted wood-burning fireplaces, scheduling before the Spare the Air season ensures the chimney is ready on permitted burn days. For Oakland Hills properties, annual sweeping is the minimum — and it should be combined with a spark arrestor inspection given the area&apos;s wildfire risk.",
  },
  {
    q: "Is chimney sweeping messy?",
    a: "Not when done correctly. We protect the work area before starting and use high-powered vacuum extraction to capture all material as it is dislodged from the flue. The firebox and surrounding area are cleaned before we leave. Most Oakland homeowners cannot tell the work was done from the appearance of the room.",
  },
  {
    q: "Can chimney sweep service remove creosote in Oakland homes?",
    a: "Yes. Rotary brush cleaning removes first and second-stage creosote from the liner surface. Third-stage glazed creosote requires chemical treatment before mechanical removal — we identify deposit type during every visit and advise on the appropriate approach. Older Oakland chimneys with clay tile liners may have deposit accumulation in liner cracks that requires careful attention.",
  },
  {
    q: "Should I schedule an inspection with chimney sweeping in Oakland?",
    a: "Yes — a Level 1 inspection is included with every sweep visit. For Oakland homes that have not had a camera inspection in more than two or three years, particularly pre-1950 homes with original clay tile liners, we recommend adding a Level 2 camera inspection to assess liner condition thoroughly.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Sweep Oakland",
  serviceType: "Chimney Sweep",
  description: "Professional chimney sweep service in Oakland for soot, creosote, fireplace cleaning, and draft problems.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: { "@type": "PostalAddress", addressLocality: "Oakland", addressRegion: "CA", addressCountry: "US" },
  },
  areaServed: { "@type": "City", name: "Oakland" },
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

export default function ChimneySweepOaklandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/areas/" },
            { label: "Oakland", href: "/areas/oakland/" },
            { label: "Chimney Sweep" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Technician sweeping a fireplace chimney in an Oakland home" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Oakland
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Sweep in Oakland, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Annual chimney sweep with NFPA 211 inspection for Oakland&apos;s hillside homes and East Bay neighborhoods. Spark arrestor check included for Oakland Hills properties.
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
                  For Oakland homeowners with wood-burning fireplaces, the sweep visit is both annual maintenance and a fire safety checkpoint. The BAAQMD Spare the Air program restricts burning on poor air quality days — having the chimney clean and inspected before the season means every permitted day is available without uncertainty about whether the system is safe to use.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  For Oakland Hills properties specifically, the sweep visit has an additional dimension. The 1991 Oakland Hills firestorm identified uncapped chimneys as contributing to spark propagation. A{" "}
                  <Link href="/areas/oakland/chimney-cleaning/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">chimney cleaning</Link>{" "}
                  visit includes a spark arrestor and cap check — the Oakland Fire Department recommends this for all hillside properties annually.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">What a Chimney Sweep Service Includes</h2>
                <ul className="space-y-3">
                  {[
                    { title: "Full-length flue brush cleaning", desc: "Rotary brushes matched to your flue dimensions clean from cap to firebox, removing creosote and soot from the liner surface." },
                    { title: "Smoke chamber and damper shelf", desc: "These areas accumulate deposits that affect draft performance. We clean both as part of every sweep visit." },
                    { title: "Vacuum extraction", desc: "All dislodged material is captured at the firebox opening. The surrounding area is left clean." },
                    { title: "Spark arrestor and cap inspection", desc: "For Oakland Hills properties, this is a fire safety check. For all properties, it confirms the cap is functioning and protecting the flue." },
                    { title: "NFPA 211 Level 1 inspection", desc: "Visual inspection of accessible components — cap, crown, visible liner sections, damper, firebox, and smoke chamber — with a written report of findings." },
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

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">When Oakland Homeowners Should Schedule Sweeping</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  September and October are the best scheduling windows for Oakland. This is before the BAAQMD Spare the Air season begins and before the first cold nights that prompt most homeowners to light a fire. Scheduling early avoids the October rush and ensures any repairs identified during the inspection can be completed before the fireplace is in regular use.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For recently purchased Oakland homes — particularly older bungalows and craftsman properties in Rockridge and Temescal — the first service visit should include a Level 2 camera inspection rather than just a standard sweep. Prior maintenance history in these homes is often unknown, and the liner condition may not be apparent without camera access.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Schedule before the Spare the Air season</p>
                <p className="text-gray-300 text-sm mb-4">September visits include a spark arrestor check for Oakland Hills homes and BAAQMD burning season prep for all Oakland properties.</p>
                <Link href="/contact/" className="btn-primary inline-block">Request Free Estimate</Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Chimney Sweep (All California)", href: "/services/chimney-sweep/" },
                    { name: "Chimney Cleaning in Oakland", href: "/areas/oakland/chimney-cleaning/" },
                    { name: "Chimney Inspection", href: "/services/chimney-inspection/" },
                    { name: "Creosote Removal", href: "/services/creosote-removal/" },
                    { name: "Chimney Blockage Removal", href: "/services/chimney-blockage-removal/" },
                    { name: "Oakland service area", href: "/areas/oakland/" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors">
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm heading="Get a Free Estimate" subheading="Chimney sweep in Oakland. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Oakland</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/oakland/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/oakland/chimney-repair/" },
                    { name: "Fireplace Repair", href: "/areas/oakland/fireplace-repair/" },
                    { name: "Dryer Vent Cleaning", href: "/areas/oakland/dryer-vent-cleaning/" },
                    { name: "All Oakland Services", href: "/areas/oakland/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Sweep Oakland — FAQ" addSchema={false} />
      <CTABanner heading="Schedule a chimney sweep in Oakland" />
    </>
  );
}
