import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import { SITE, NAV_SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Free Estimate | Chimney Peak California",
  description:
    "Contact Chimney Peak California for a free estimate. Fill out our form or email info@chimneycleaningca.com. Same-week appointments available across California.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
        </div>
      </div>

      <section className="section-navy py-14">
        <div className="container-base">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Contact Us</h1>
          <p className="text-gray-300 text-xl max-w-xl">
            Same-week appointments available. We respond to all online inquiries within 2 business hours.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-base">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <LeadForm
              heading="Request a Free Estimate"
              subheading="Fill out the form and we'll call you within 2 hours."
            />

            {/* Contact info */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-5">Get in Touch</h2>
                <div className="space-y-5">
                  <ContactItem
                    icon={<MailIcon />}
                    label="Email"
                    value={SITE.email}
                    href={`mailto:${SITE.email}`}
                  />
                  <ContactItem
                    icon={<LocationIcon />}
                    label="Service Area"
                    value="All of California"
                  />
                </div>
              </div>

              <div className="bg-[#F8FAFC] rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3">Business Hours</h3>
                <div className="space-y-1.5 text-sm">
                  {[
                    { day: "Monday – Friday", hours: "7:00 AM – 7:00 PM" },
                    { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
                    { day: "Sunday", hours: "Emergency calls only" },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-gray-600">{row.day}</span>
                      <span className="font-medium text-gray-900">{row.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
                <h3 className="font-semibold text-orange-800 mb-2">What to Expect</h3>
                <ul className="text-sm text-orange-700 space-y-1.5">
                  {[
                    "We call you within 2 hours during business hours",
                    "Flat pricing quoted before any work begins",
                    "CSIA-certified technician dispatched",
                    "Written inspection report included",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Services We Offer</h3>
                <div className="flex flex-wrap gap-2">
                  {NAV_SERVICES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="text-xs bg-white border border-gray-200 hover:border-orange-300 hover:text-orange-600 px-3 py-1.5 rounded-full transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center shrink-0 text-orange-500">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
        {href ? (
          <a href={href} className="font-semibold text-gray-900 hover:text-orange-500 transition-colors">
            {value}
          </a>
        ) : (
          <p className="font-semibold text-gray-900">{value}</p>
        )}
      </div>
    </div>
  );
}
function MailIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>; }
function LocationIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s-8-7-8-12a8 8 0 1 1 16 0c0 5-8 12-8 12z"/><circle cx="12" cy="10" r="2"/></svg>; }

