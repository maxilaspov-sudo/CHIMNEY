import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/constants";

const HERO_IMAGE = "/images/services/chimney-repair.jpg";

export const metadata: Metadata = {
  title: "Chimney Repair Irvine | Factory-Built & Gas Fireplace Repair",
  description:
    "Chimney repair in Irvine for factory-built system components, refractory panels, chase cover repair, flashing, and direct-vent fireplace service. Orange County planned communities.",
  alternates: { canonical: "/areas/irvine/chimney-repair/" },
  openGraph: {
    title: "Chimney Repair Irvine | Factory-Built & Gas Fireplace Repair",
    description:
      "Chimney repair in Irvine for factory-built system components, refractory panels, chase covers, and flashing issues.",
    url: `${SITE.baseUrl}/areas/irvine/chimney-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Repair Irvine | Factory-Built & Gas Fireplace Repair",
    description: "Chimney repair in Irvine — factory-built systems, chase cover, refractory panels, flashing. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What are the most common chimney repairs in Irvine?",
    a: "In Irvine, chimney repair calls most commonly involve factory-built zero-clearance systems that were installed in the 1990s and early 2000s: cracked or failed refractory panels, deteriorated metal chase covers at the top of the chimney chase, flashing leaks at the roofline, and cap failure. Because Irvine has very few masonry chimneys, the repair work here is primarily component-based rather than masonry restoration work.",
  },
  {
    q: "What is a chase cover and why does it fail on Irvine chimneys?",
    a: "A chase cover is the metal cap that sits atop the framed chimney chase on factory-built systems — it protects the chase interior from rain and debris. Irvine&apos;s temperature cycling, from near-freezing winter nights to 100°F+ summer days, causes galvanized steel chase covers to rust and eventually fail. A rusted or damaged chase cover allows water into the chase, which can damage the metal liner, framing, and eventually cause interior water stains. Replacement with a stainless steel cover is the standard repair.",
  },
  {
    q: "How do I know if my Irvine fireplace chase cover is leaking?",
    a: "Water stains on the wall or ceiling adjacent to the fireplace chase, moisture or rust staining inside the firebox after rain, or a musty smell from the fireplace are the primary indicators. In Irvine&apos;s newer homes, the chase cover is sometimes the only weather barrier between the roof and the chimney liner — its condition should be assessed every few years.",
  },
  {
    q: "Can cracked refractory panels be repaired or do they need replacement?",
    a: "Surface hairline cracks do not require immediate replacement. Panels cracked through their full thickness — or those with missing or spalled material — need replacement. Operating a factory-built fireplace with through-cracked refractory panels allows heat to reach the combustible framing of the zero-clearance unit, which is a safety concern. Irvine homes with factory-built systems installed in the early 1990s are now 30+ years old and often have panels that need replacement.",
  },
  {
    q: "Do HOA rules in Irvine affect chimney repair work?",
    a: "For interior repairs — refractory panel replacement, damper service, gas system work — HOA approval is typically not required. Exterior repairs that change the visible appearance of the chimney top, such as cap or chase cover replacement, may require HOA approval in some Irvine planned communities, particularly those with strict architectural standards. We can provide documentation and material specifications for HOA review if needed.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Repair Irvine",
  serviceType: "Chimney Repair",
  description: "Chimney repair in Irvine for factory-built system components, refractory panels, chase covers, and flashing issues.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    address: { "@type": "PostalAddress", addressLocality: "Irvine", addressRegion: "CA", addressCountry: "US" },
  },
  areaServed: { "@type": "City", name: "Irvine" },
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

export default function ChimneyRepairIrvinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/areas/" },
            { label: "Irvine", href: "/areas/irvine/" },
            { label: "Chimney Repair" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Technician inspecting and repairing a chimney chase cover and flashing on an Irvine home" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Irvine
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Chimney Repair in Irvine, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Chimney repair for Irvine planned communities — factory-built system components, refractory panels, chase cover replacement, flashing repair. HOA documentation available.
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
                  Because Irvine is almost entirely post-1990 construction, the city has very few traditional masonry chimneys. Chimney repair in Irvine means factory-built system component repair — refractory panels, metal chase covers, liner integrity, and cap replacement. These systems were built to last around 30 years, and Irvine&apos;s earliest homes are now reaching that threshold.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  The most consequential and frequently overlooked repair on Irvine factory-built chimneys is the chase cover. A galvanized steel chase cover that has rusted through allows water into the chimney chase — and from there, into the liner, framing, and eventually interior walls. A{" "}
                  <Link href="/services/chimney-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">chimney inspection</Link>{" "}
                  includes a specific check of the chase cover and cap condition, and is the right starting point before any other repair work.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Common Chimney Repairs in Irvine</h2>
                <ul className="space-y-3">
                  {[
                    { title: "Chase cover replacement", desc: "Galvanized steel chase covers on Irvine factory-built chimneys rust and fail over time. Stainless steel replacement is the correct specification — it is the most cost-effective long-term repair given Irvine&apos;s temperature cycling." },
                    { title: "Refractory panel replacement", desc: "Factory-built fireplaces in early 1990s Irvine homes are now 30+ years old. Cracked-through refractory panels need replacement before the system is used — surface cracks are normal and do not." },
                    { title: "Flashing repair at the roofline", desc: "Thermal cycling degrades flashing sealant at the chimney-roof junction. Flashing failure causes water infiltration that can produce ceiling and wall stains adjacent to the chimney chase." },
                    { title: "Chimney cap replacement", desc: "A missing or damaged cap at the top of the flue allows rain, debris, and birds into the liner. For Irvine factory-built systems, the cap also sits inside the chase cover opening and needs to be matched to the system." },
                    { title: "Damper replacement", desc: "Dampers in factory-built systems can corrode or fail mechanically over time. A damper that does not seal allows air exchange year-round — energy loss in summer when air conditioning is running, cold air infiltration in winter." },
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
                <p className="font-semibold text-lg mb-2">Irvine chimney repair service</p>
                <p className="text-gray-300 text-sm mb-4">We serve Irvine, Turtle Ridge, Shady Canyon, Woodbury, Northwood, University Park, Westpark, and surrounding Orange County communities. HOA documentation available on request.</p>
                <Link href="/contact/" className="btn-primary inline-block">Request Free Estimate</Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Chimney Repair (All California)", href: "/services/chimney-repair/" },
                    { name: "Chimney Leak Repair", href: "/services/chimney-leak-repair/" },
                    { name: "Chimney Crown Repair", href: "/services/chimney-crown-repair/" },
                    { name: "Chimney Cap Replacement", href: "/services/chimney-cap-replacement/" },
                    { name: "Chimney Flashing Repair", href: "/services/chimney-flashing-repair/" },
                    { name: "Irvine service area", href: "/areas/irvine/" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3 transition-colors">
                      <span className="text-orange-400">›</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" id="estimate-form">
              <LeadForm heading="Get a Free Estimate" subheading="Chimney repair in Irvine. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Irvine</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/irvine/chimney-cleaning/" },
                    { name: "Chimney Sweep", href: "/areas/irvine/chimney-sweep/" },
                    { name: "Fireplace Repair", href: "/areas/irvine/fireplace-repair/" },
                    { name: "Dryer Vent Cleaning", href: "/areas/irvine/dryer-vent-cleaning/" },
                    { name: "All Irvine Services", href: "/areas/irvine/" },
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

      <FAQSection faqs={FAQS} heading="Chimney Repair Irvine — FAQ" addSchema={false} />
      <CTABanner heading="Schedule chimney repair in Irvine" />
    </>
  );
}
