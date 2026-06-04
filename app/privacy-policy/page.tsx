import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Chimney Peak California",
  description:
    "Privacy Policy for Chimney Peak California. Learn how we collect, use, and protect the information you submit when requesting chimney services.",
  alternates: { canonical: "/privacy-policy/" },
  robots: { index: false, follow: false },
};

const LAST_UPDATED = "June 4, 2025";

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Privacy Policy" },
            ]}
          />
        </div>
      </div>

      <section className="section-navy py-12">
        <div className="container-base">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-base max-w-3xl">
          <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">1. Who We Are</h2>
              <p>
                Chimney Peak California operates the website at{" "}
                <strong>www.chimneycleaningca.com</strong> and provides professional chimney
                cleaning, inspection, repair, and related services throughout California. When this
                policy says &quot;we,&quot; &quot;us,&quot; or &quot;our,&quot; it refers to Chimney Peak California. For questions
                about this policy, contact us at{" "}
                <a href={`mailto:${SITE.email}`} className="text-orange-600 hover:underline">
                  {SITE.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">2. Information We Collect</h2>
              <p className="mb-3">
                We collect only the information you choose to provide to us. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>
                  <strong>Contact and service request details</strong> — your name, phone number,
                  email address, city or address, service type, and any message or description of your
                  chimney issue submitted through our estimate request form.
                </li>
                <li>
                  <strong>Technical data</strong> — standard web server logs including your IP
                  address, browser type, and the pages you visit. This data is used solely for site
                  security and performance monitoring and is not linked to your identity.
                </li>
                <li>
                  <strong>Cookies</strong> — our website may use session cookies for basic site
                  functionality. We do not use tracking cookies for advertising. If we add analytics
                  tools in the future, this policy will be updated to reflect that.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">3. How We Use Your Information</h2>
              <p className="mb-3">Information you submit through our forms is used to:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Respond to your estimate or service request and schedule an appointment.</li>
                <li>Contact you by phone or email to confirm scheduling details.</li>
                <li>Send a follow-up if your request goes unanswered.</li>
                <li>Improve our services based on customer needs.</li>
              </ul>
              <p className="mt-3">
                We do not use your information for automated marketing, email newsletters, or
                third-party advertising without your explicit consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">4. How We Share Your Information</h2>
              <p className="mb-3">
                We do not sell, rent, or trade your personal information to any third party. We may
                share your information only in the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>
                  <strong>Service providers</strong> — we may share your contact details with the
                  specific technician assigned to your job so they can coordinate your appointment.
                </li>
                <li>
                  <strong>Legal requirements</strong> — we may disclose information if required by law
                  or in response to a valid legal process.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">5. Data Retention</h2>
              <p>
                We retain your contact and service request information for as long as necessary to
                fulfill the service and for reasonable record-keeping purposes (typically up to two
                years). You may request deletion of your data at any time by contacting us at{" "}
                <a href={`mailto:${SITE.email}`} className="text-orange-600 hover:underline">
                  {SITE.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">6. Your Rights (California Residents)</h2>
              <p className="mb-3">
                Under the California Consumer Privacy Act (CCPA), California residents have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Know what personal information we collect and how it is used.</li>
                <li>Request deletion of personal information we hold about you.</li>
                <li>Opt out of the sale of personal information. <strong>We do not sell personal information.</strong></li>
                <li>Non-discrimination — we will not treat you differently for exercising these rights.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email us at{" "}
                <a href={`mailto:${SITE.email}`} className="text-orange-600 hover:underline">
                  {SITE.email}
                </a>
                . We will respond within 45 days.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">7. Security</h2>
              <p>
                We take reasonable measures to protect the information you submit. Our website is
                served over HTTPS. Form submissions are transmitted securely. However, no method of
                transmission over the internet is completely secure, and we cannot guarantee absolute
                security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">8. Third-Party Links</h2>
              <p>
                Our website may contain links to external sites. We are not responsible for the
                privacy practices of those sites and recommend reviewing their privacy policies before
                submitting any information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the
                top of this page reflects when changes were last made. We encourage you to review this
                page periodically.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">10. Contact Us</h2>
              <p>
                For any questions or requests regarding this Privacy Policy, contact us at:
              </p>
              <div className="mt-3 bg-[#F8FAFC] rounded-xl p-5 border border-gray-100 text-sm">
                <p className="font-semibold text-gray-900">{SITE.name}</p>
                <p className="text-gray-600">{SITE.address}</p>
                <a href={`mailto:${SITE.email}`} className="text-orange-600 hover:underline">
                  {SITE.email}
                </a>
              </div>
            </div>

          </div>

          <div className="mt-12 pt-6 border-t border-gray-100 flex gap-4 text-sm">
            <Link href="/" className="text-orange-500 hover:underline">← Home</Link>
            <Link href="/terms-of-service/" className="text-orange-500 hover:underline">Terms of Service</Link>
            <Link href="/contact/" className="text-orange-500 hover:underline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
