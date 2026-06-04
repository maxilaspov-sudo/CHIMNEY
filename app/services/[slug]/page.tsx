import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { services, getService } from "@/lib/services";
import { SITE, NAV_SERVICES, NAV_AREAS } from "@/lib/constants";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import TrustBadges from "@/components/TrustBadges";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${slug}/` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${slug}/`,
      images: [{ url: service.heroImageMedium, alt: service.heroAlt }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDesc,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      url: SITE.baseUrl,
    },
    areaServed: { "@type": "State", name: "California" },
    offers: {
      "@type": "Offer",
      price: service.price,
      priceCurrency: "USD",
    },
  };

  const otherServices = NAV_SERVICES.filter((s) => !s.href.includes(slug));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services/" },
              { label: service.name },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.heroAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2238]/90 via-[#0F2238]/75 to-[#0F2238]/20" />
        <div className="relative container-base py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              {service.price} · {service.duration}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              {service.name} in California
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">{service.tagline}</p>
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
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-4">
                About Our {service.name} Service
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">{service.longDesc}</p>

              {/* Benefits */}
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">What&apos;s Included</h3>
              <ul className="grid sm:grid-cols-2 gap-3 mb-10">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-lg p-3">
                    <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                    <span className="text-sm text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Process */}
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-5">Our Process</h3>
              <div className="flex flex-col gap-4 mb-10">
                {service.processSteps.map((step, i) => (
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

              {/* Service areas for this service */}
              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-[#1E3A5F] mb-1">
                  {service.name} Available In
                </h3>
                <p className="text-xs text-gray-400 mb-4">
                  Across{" "}
                  <Link href="/areas/california/" className="text-orange-500 hover:underline">
                    all of California
                  </Link>{" "}
                  · <Link href="/areas/" className="text-orange-500 hover:underline">View all areas</Link>
                </p>
                <div className="flex flex-wrap gap-2">
                  {NAV_AREAS.filter((a) => a.href !== "/areas/california/").slice(0, 12).map((area) => (
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
                heading={`Get a ${service.name} Quote`}
                subheading="We respond within 2 business hours."
                dark={false}
              />

              {/* Specialized sub-services (only shown when defined on the service) */}
              {service.relatedServiceLinks && service.relatedServiceLinks.length > 0 && (
                <div className="bg-[#F8FAFC] rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-3">Specialized Services</h3>
                  <ul className="flex flex-col gap-1">
                    {service.relatedServiceLinks.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="text-sm text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-1">
                          <span className="text-orange-400">›</span> {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Other services */}
              <div className="bg-[#F8FAFC] rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3">Other Services</h3>
                <ul className="flex flex-col gap-1">
                  {otherServices.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="text-sm text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-1">
                        <span className="text-orange-400">›</span> {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
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
        faqs={service.faqs}
        heading={`${service.name} FAQ`}
        addSchema={true}
      />

      <CTABanner heading={`Ready to schedule your ${service.name}?`} />
    </>
  );
}

