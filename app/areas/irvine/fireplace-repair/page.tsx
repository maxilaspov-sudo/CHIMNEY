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
  title: "Fireplace Repair Irvine | Gas & Factory-Built Fireplace Service",
  description:
    "Fireplace repair in Irvine for gas ignition problems, direct-vent fireplaces, refractory panel damage, factory-built components, and smoke issues. Orange County planned community service.",
  alternates: { canonical: "/areas/irvine/fireplace-repair/" },
  openGraph: {
    title: "Fireplace Repair Irvine | Gas & Factory-Built Fireplace Service",
    description:
      "Fireplace repair in Irvine for gas ignition problems, direct-vent fireplaces, refractory panels, and factory-built system components.",
    url: `${SITE.baseUrl}/areas/irvine/fireplace-repair/`,
    siteName: SITE.name,
    images: [{ url: `${SITE.baseUrl}/og/home.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fireplace Repair Irvine | Gas & Factory-Built Fireplace Service",
    description: "Fireplace repair in Irvine — gas fireplaces, direct-vent systems, ignition service, refractory panels. Free estimate.",
  },
};

const FAQS = [
  {
    q: "What are the most common fireplace repairs in Irvine?",
    a: "In Irvine, gas fireplace ignition failures and direct-vent fireplace service are the most frequent calls. Gas fireplaces that sit unused through Southern California&apos;s dry summer accumulate spider webs in the burner assembly and pilot orifice — a common cause of ignition failure in fall when homeowners first try to light the fireplace. Refractory panel replacement in aging factory-built units, and direct-vent termination cap repair, are the other common service items.",
  },
  {
    q: "Why does my Irvine gas fireplace not ignite at the start of the season?",
    a: "The most common cause is a thermocouple or thermopile that has reached the end of its service life. The second most common cause in Irvine is a pilot orifice or burner port that has been blocked by spider webs or debris during the months the fireplace was not in use. Southern California&apos;s dry summer provides ideal conditions for spiders to nest in inactive gas components — this is a very common finding on first-of-season service calls.",
  },
  {
    q: "Do you repair direct-vent gas fireplaces in Irvine?",
    a: "Yes. Direct-vent gas fireplaces — which exhaust through an exterior wall rather than a traditional chimney — are very common in Irvine&apos;s newer planned communities. Common repairs include: termination cap damage or obstruction, failed glass seals, thermocouple and igniter replacement, blower motor service, and valve body issues on older units. Direct-vent systems have sealed combustion but still need periodic professional service.",
  },
  {
    q: "Is my factory-built Irvine fireplace worth repairing if it&apos;s 25-30 years old?",
    a: "In most cases, yes — if the unit&apos;s structure is sound and the refractory panels are the main issue, repair is significantly less expensive than full replacement. A Level 2 inspection gives you an accurate picture of the liner and system condition. If both the liner and panels need extensive work, or if the unit has safety concerns that cannot be addressed through component repair, then replacement may be the more practical path. We assess without recommending unnecessarily.",
  },
  {
    q: "Can you provide documentation for HOA records after fireplace repair in Irvine?",
    a: "Yes. We can provide written documentation of the work performed, materials used, and any applicable photos for HOA records. Irvine HOAs sometimes require documentation for service work when the scope involves any exterior components of the fireplace system. We provide this as part of normal job completion.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fireplace Repair Irvine",
  serviceType: "Fireplace Repair",
  description: "Fireplace repair in Irvine for gas ignition problems, direct-vent fireplaces, refractory panels, and factory-built system components.",
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

export default function FireplaceRepairIrvinePage() {
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
            { label: "Fireplace Repair" },
          ]} />
        </div>
      </div>

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image src={HERO_IMAGE} alt="Technician diagnosing and repairing a gas fireplace in an Irvine planned community home" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/92 via-[#0F2238]/78 to-[#0F2238]/25" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Free estimate · Irvine
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Fireplace Repair in Irvine, CA
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Gas fireplace repair, direct-vent system service, and factory-built fireplace repair for Irvine&apos;s planned communities. Ignition failures, refractory panels, and seasonal pre-use inspection.
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
                  Fireplace repair in Irvine is primarily gas fireplace repair. The city&apos;s master-planned construction means factory-built systems and direct-vent gas fireplaces are the dominant types — traditional masonry fireplaces are rare. Gas fireplaces in Irvine face a specific challenge: months of dormancy through Southern California&apos;s dry summer, during which spiders and insects access the burner assembly and pilot orifice. When cooler evenings arrive and homeowners try to light the fireplace for the first time, the system does not work.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  A pre-season{" "}
                  <Link href="/services/fireplace-inspection/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">fireplace inspection</Link>{" "}
                  in October or early November is the right approach for Irvine homeowners who have not had the fireplace serviced recently. It is significantly less disruptive to have the system cleaned and inspected before the season than to discover an ignition failure on the evening you want to use it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Common Fireplace Problems in Irvine</h2>
                <ul className="space-y-3">
                  {[
                    { title: "Gas fireplace won&apos;t ignite — pilot failure", desc: "The most common call in Irvine is a gas fireplace that ignited reliably last season but will not light at the start of the new season. Thermocouple or thermopile failure and clogged pilot orifices are the most common causes." },
                    { title: "Direct-vent fireplace issues", desc: "Direct-vent systems exhaust through an exterior wall. The termination cap can become obstructed by vegetation, bird activity, or debris. Failed glass seals, blower issues, and ignition failures are also common direct-vent service items." },
                    { title: "Cracked refractory panels", desc: "Factory-built fireplace refractory panels in Irvine&apos;s earliest planned communities are now 30+ years old. Through-cracked panels need replacement — surface hairline cracks are normal and can wait." },
                    { title: "Damper not sealing", desc: "A damper that does not close fully wastes conditioned air in summer — a significant cost in Irvine&apos;s hot climate where air conditioning runs heavily from May through October. We assess damper seal on every service visit." },
                    { title: "Smoke entering the room", desc: "In Irvine&apos;s newer, more tightly sealed homes, negative indoor pressure can cause smoke backdraft. We identify whether the cause is atmospheric (building pressurization) or structural (blocked flue, damaged components) before recommending a repair." },
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
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Gas Fireplace Repair in Irvine</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <Link href="/services/gas-fireplace-repair/" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">Gas fireplace repair</Link>{" "}
                  in Irvine typically resolves in one visit — the majority of ignition failures trace to a single component that can be diagnosed and replaced the same day. We diagnose before quoting parts.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Gas fireplaces that have not been used for a season or more should be inspected before lighting, regardless of whether they appear to be working. Spider webbing in burner assemblies is common in Irvine — particularly in homes with gas fireplaces that see little use — and creates an obstruction that can affect the ignition pattern and burner performance even if the system technically lights.
                </p>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white">
                <p className="font-semibold text-lg mb-2">Irvine fireplace repair service</p>
                <p className="text-gray-300 text-sm mb-4">We serve Irvine, Turtle Ridge, Shady Canyon, Woodbury, Northwood, University Park, Westpark, and surrounding Orange County communities. HOA documentation available.</p>
                <Link href="/contact/" className="btn-primary inline-block">Request Free Estimate</Link>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Fireplace Repair (All California)", href: "/services/fireplace-repair/" },
                    { name: "Gas Fireplace Repair", href: "/services/gas-fireplace-repair/" },
                    { name: "Fireplace Inspection", href: "/services/fireplace-inspection/" },
                    { name: "Chimney Sweep in Irvine", href: "/areas/irvine/chimney-sweep/" },
                    { name: "Chimney Repair in Irvine", href: "/areas/irvine/chimney-repair/" },
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
              <LeadForm heading="Get a Free Estimate" subheading="Fireplace repair in Irvine. We respond within 2 business hours." dark={false} />
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-3 text-sm uppercase tracking-wide">More in Irvine</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Chimney Cleaning", href: "/areas/irvine/chimney-cleaning/" },
                    { name: "Chimney Repair", href: "/areas/irvine/chimney-repair/" },
                    { name: "Chimney Sweep", href: "/areas/irvine/chimney-sweep/" },
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

      <FAQSection faqs={FAQS} heading="Fireplace Repair Irvine — FAQ" addSchema={false} />
      <CTABanner heading="Schedule fireplace repair in Irvine" />
    </>
  );
}
