import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";
import TrustBadges from "@/components/TrustBadges";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Chimney Peak California",
  description:
    "Learn about Chimney Peak California — CSIA-certified chimney specialists serving California since 2009. Meet our licensed team and our commitment to safety.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="section-navy py-16 md:py-20">
        <div className="container-base">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            About Chimney Peak California
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            CSIA-certified chimney specialists serving California homeowners since 2009. Over 12,400 jobs completed. Licensed, insured, and honest about what you actually need.
          </p>
        </div>
      </section>

      <TrustBadges />

      {/* Story */}
      <section className="section-pad bg-white">
        <div className="container-base">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">
                Built on Honesty, Not Upsells
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Chimney Peak California was founded in 2009 by a team of CSIA-certified technicians who were tired of watching homeowners get pressured into unnecessary repairs by low-bid companies. The typical playbook: advertise an impossibly low cleaning price, then tell the homeowner their chimney needs thousands of dollars in repairs — usually with fabricated photos.
                </p>
                <p>
                  We do the opposite. Every inspection comes with a written report and real photos. If your chimney is fine, we tell you. We&apos;ve turned away more work over the years than we care to count because the homeowner didn&apos;t need what they were sold.
                </p>
                <p>
                  Today we operate a full California dispatch, with CSIA-certified technicians based in Los Angeles, San Diego, the Bay Area, and the Central Valley. Every technician is a W-2 employee — not a subcontractor — and every job is backed by our satisfaction guarantee.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/8815841/pexels-photo-8815841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Professional chimney service technician with California homeowner — Chimney Peak California team"
                width={600}
                height={420}
                className="rounded-2xl shadow-lg object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-pad section-gray">
        <div className="container-base">
          <h2 className="text-3xl font-bold text-[#1E3A5F] text-center mb-10">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "2009", label: "Year Founded" },
              { number: "12,400+", label: "Jobs Completed" },
              { number: "4.9★", label: "Google Rating" },
              { number: "847+", label: "Verified Reviews" },
            ].map((stat, i) => (
              <div key={i} className="card text-center">
                <p className="text-4xl font-extrabold text-orange-500 mb-1">{stat.number}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-pad bg-white">
        <div className="container-base max-w-4xl">
          <h2 className="text-3xl font-bold text-[#1E3A5F] mb-8 text-center">Credentials & Certifications</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "CSIA Certified",
                desc: "All field technicians hold current Chimney Safety Institute of America (CSIA) certification. This is not a company-level certificate — each individual technician is credentialed.",
              },
              {
                title: "Licensed Contractor",
                desc: "We hold the required California state contractor licenses for home improvement and masonry work. License details available on request.",
              },
              {
                title: "Fully Insured",
                desc: "We carry $2M general liability and workers' compensation insurance. Certificates available on request for real estate transactions.",
              },
              {
                title: "NFPA 211 Compliant",
                desc: "All inspections follow the National Fire Protection Association Standard 211, the recognized standard for chimneys, fireplaces, and venting systems.",
              },
            ].map((c, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{c.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Ready to work with a chimney company you can trust?"
        subtext="Fill out the form or email us for a free, no-pressure estimate."
      />

      {/* Internal links */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="container-base text-center">
          <p className="text-sm text-gray-500 mb-3">Explore our services</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { label: "Chimney Cleaning", href: "/services/chimney-cleaning/" },
              { label: "Chimney Inspection", href: "/services/chimney-inspection/" },
              { label: "Chimney Repair", href: "/services/chimney-repair/" },
              { label: "Reviews", href: "/reviews/" },
              { label: "Contact", href: "/contact/" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm bg-gray-50 hover:bg-orange-50 hover:text-orange-600 border border-gray-200 px-3 py-1.5 rounded-full transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

