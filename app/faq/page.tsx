import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Chimney FAQ | Common Questions | Chimney Peak California",
  description:
    "Answers to the most common questions about chimney cleaning, inspection, repair, and fireplace service in California. CSIA-certified answers.",
  alternates: { canonical: "/faq/" },
};

const FAQS = [
  {
    category: "Cleaning & Sweeping",
    items: [
      {
        q: "How often should I have my chimney cleaned?",
        a: "The NFPA 211 standard recommends annual inspection and cleaning for any chimney in regular use. If you burn more than two cords of wood per season, we recommend cleaning twice a year. Gas fireplaces should be inspected annually even if they produce no visible soot.",
      },
      {
        q: "What is creosote and why is it dangerous?",
        a: "Creosote is a flammable byproduct of burning wood. It deposits on the inside of your flue liner in three stages: a light, dusty soot (stage 1), a crunchy, tar-like buildup (stage 2), and a dense glaze (stage 3) that won't brush off and can ignite at temperatures exceeding 1,100°F. Stage 3 creosote requires chemical treatment before brushing.",
      },
      {
        q: "Can I clean my chimney myself?",
        a: "Consumer brush kits can handle light stage 1 deposits in short, straight flues. They cannot remove stage 2 or stage 3 creosote, won't reach full-length flues safely, and don't produce the written inspection report that insurers and home buyers require.",
      },
      {
        q: "How long does chimney cleaning take?",
        a: "A standard single-flue cleaning takes 60–90 minutes. Add 30 minutes for a Level 1 inspection report. Multi-flue systems or chimneys with heavy deposits take longer.",
      },
    ],
  },
  {
    category: "Inspection",
    items: [
      {
        q: "What are the NFPA 211 inspection levels?",
        a: "Level 1 covers all accessible areas and is the minimum for any chimney in regular use. Level 2 is required when you buy or sell a home, change fuel types, or add a new appliance — it includes a video camera scan. Level 3 involves removing portions of the chimney structure to assess hidden damage.",
      },
      {
        q: "Do I need a Level 2 inspection when buying a home?",
        a: "Yes. The NFPA 211 standard requires a Level 2 inspection whenever a property changes ownership. General home inspectors are not trained or equipped to perform this — you need a CSIA-certified chimney professional with camera equipment.",
      },
      {
        q: "Will your inspection report satisfy my mortgage lender?",
        a: "Our written Level 2 reports include the technician's CSIA certification number and are accepted by all major California lenders and insurers. We can also issue a letter on company letterhead for specific lender requirements.",
      },
    ],
  },
  {
    category: "Repair & Maintenance",
    items: [
      {
        q: "How do I know if my chimney needs repair?",
        a: "Common signs include: white staining (efflorescence) on the brick exterior, spalled or missing brick, crumbling mortar joints, a cracked chimney crown, water in the firebox after rain, rust stains on the damper or smoke shelf, and a smoke smell in rooms adjacent to the chimney when not in use.",
      },
      {
        q: "Is chimney repair covered by homeowner's insurance?",
        a: "Sudden storm damage or impact damage is typically covered. Gradual deterioration from deferred maintenance is not. We provide detailed damage documentation and photos for insurance claims.",
      },
      {
        q: "Can you match my existing brick color for repairs?",
        a: "In most cases, yes. We source from regional suppliers and bring samples before starting work. An exact match is not always possible on older brick, but we get as close as current materials allow.",
      },
      {
        q: "How long does chimney cap installation take?",
        a: "A single-flue cap installation takes 30–60 minutes once we're on the roof. We measure the flue opening and either carry the correct size or order it for the next visit.",
      },
    ],
  },
  {
    category: "Dryer Vents",
    items: [
      {
        q: "How often should dryer vents be cleaned?",
        a: "Annual cleaning is the standard recommendation. Families doing more than five loads of laundry per week should clean every six months. Vents longer than 15 feet or with multiple elbows accumulate lint faster.",
      },
      {
        q: "What are the signs of a clogged dryer vent?",
        a: "Clothes taking two or more cycles to dry, the exterior of the dryer being very hot to the touch, a burning or musty smell during operation, and lint accumulating around the dryer connection or exterior vent cap.",
      },
    ],
  },
  {
    category: "Pricing & Scheduling",
    items: [
      {
        q: "How much does chimney cleaning cost in California?",
        a: "Pricing depends on chimney condition, flue length, deposit level, and whether an inspection report is included. We provide a written flat-price quote before starting any work — no surprises after we're in your home.",
      },
      {
        q: "Do you service gas fireplaces?",
        a: "Yes. Gas fireplaces still accumulate dust, debris, and can develop blocked vent openings. We clean burner assemblies, inspect ignition systems, and verify draft.",
      },
      {
        q: "How quickly can I get an appointment?",
        a: "Most California customers get an appointment within 3 business days. During peak season (October–February), lead times may extend to 5–7 days. We maintain priority availability for real estate transactions.",
      },
    ],
  },
];

export default function FAQPage() {
  const allFaqs = FAQS.flatMap((c) => c.items);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
        </div>
      </div>

      <section className="section-navy py-14">
        <div className="container-base">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Answers to the most common questions about chimney service in California — from annual cleaning to liner repair.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-base max-w-4xl">
          <div className="flex flex-col gap-12">
            {FAQS.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-5 border-b border-gray-100 pb-3">
                  {cat.category}
                </h2>
                <div className="flex flex-col gap-5">
                  {cat.items.map((faq, i) => (
                    <div key={i} className="border border-gray-100 rounded-xl p-5 bg-gray-50">
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-orange-50 border border-orange-100 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h2>
            <p className="text-gray-600 mb-4">
              Email us at{" "}
              <a href={`mailto:${SITE.email}`} className="text-orange-600 font-bold hover:underline">
                {SITE.email}
              </a>{" "}
              or fill out our contact form.
            </p>
            <Link href="/contact/" className="btn-primary">
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

