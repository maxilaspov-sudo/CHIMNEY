import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | Chimney Peak California",
  description:
    "Terms of Service for Chimney Peak California. Website use, estimate disclaimers, service availability, and limitation of liability.",
  alternates: { canonical: "/terms-of-service/" },
  robots: { index: false, follow: false },
};

const LAST_UPDATED = "June 4, 2025";

export default function TermsOfServicePage() {
  return (
    <>
      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container-base py-2">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Terms of Service" },
            ]}
          />
        </div>
      </div>

      <section className="section-navy py-12">
        <div className="container-base">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Terms of Service</h1>
          <p className="text-gray-400 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-base max-w-3xl">
          <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the website at <strong>www.chimneycleaningca.com</strong>{" "}
                (the &quot;Site&quot;), you agree to be bound by these Terms of Service. If you do not agree,
                do not use this Site. These terms apply to all visitors, estimate requesters, and
                customers of Chimney Peak California.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">2. Use of This Website</h2>
              <p className="mb-3">You agree to use this Site only for lawful purposes. You may not:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Submit false or misleading information in any form or estimate request.</li>
                <li>Use the Site to harass, defraud, or harm others.</li>
                <li>Attempt to gain unauthorized access to any part of the Site or its backend systems.</li>
                <li>Scrape, copy, or republish content from this Site without written permission.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">3. Estimate Requests</h2>
              <p className="mb-3">
                Submitting a free estimate request through our website does not create a binding
                contract or guarantee of service. Estimates requested online are preliminary and
                subject to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>
                  <strong>On-site assessment.</strong> Final pricing is determined after a technician
                  inspects your chimney system. Conditions discovered on-site may affect the quoted
                  price.
                </li>
                <li>
                  <strong>Parts and material availability.</strong> Some repairs require parts that
                  must be ordered. Lead times vary by manufacturer.
                </li>
                <li>
                  <strong>Scheduling availability.</strong> Submitting a request does not guarantee a
                  specific appointment date or time. We will confirm availability when we contact you.
                </li>
              </ul>
              <p className="mt-3">
                No pricing displayed on this website constitutes a binding quote. All pricing is
                confirmed in writing by a Chimney Peak California representative before any work begins.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">4. Service Availability</h2>
              <p>
                Chimney Peak California operates throughout California, but service availability in
                specific cities or regions may vary based on technician dispatch, seasonal demand, and
                access. We reserve the right to decline service requests at our discretion. Contacting
                us does not guarantee that service is available at your location.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">5. Accuracy of Information</h2>
              <p>
                We make reasonable efforts to ensure that information on this Site is accurate and
                up to date, including service descriptions, pricing indications, and industry
                standards referenced. However, we do not warrant that all content is error-free.
                Chimney and fireplace safety standards, local codes, and air quality regulations can
                change. Always confirm current requirements with the relevant authority or a qualified
                technician.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">6. Intellectual Property</h2>
              <p>
                All content on this Site — including text, images, design, and code — is owned by or
                licensed to Chimney Peak California. You may not reproduce, distribute, or create
                derivative works from this content without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">7. Limitation of Liability</h2>
              <p className="mb-3">
                To the fullest extent permitted by law, Chimney Peak California shall not be liable
                for any indirect, incidental, consequential, or punitive damages arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Your use of or inability to use this Site.</li>
                <li>Reliance on information published on this Site without professional verification.</li>
                <li>Delays, errors, or interruptions in site access.</li>
                <li>Any estimate request that does not result in a scheduled appointment.</li>
              </ul>
              <p className="mt-3">
                Our total liability for any claim arising out of your use of this Site shall not
                exceed one hundred dollars ($100).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">8. Third-Party Links</h2>
              <p>
                This Site may link to third-party websites for reference purposes (regulatory bodies,
                industry standards, authoritative sources). We do not control those sites and are not
                responsible for their content or practices.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">9. Privacy</h2>
              <p>
                Your use of this Site is also governed by our{" "}
                <Link href="/privacy-policy/" className="text-orange-600 hover:underline">
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms by reference.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">10. Governing Law</h2>
              <p>
                These Terms shall be governed by the laws of the State of California, without regard
                to conflict-of-law principles. Any disputes shall be resolved in the courts of Los
                Angeles County, California.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">11. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. Continued use of the Site after changes
                are posted constitutes acceptance of the updated Terms. The &quot;Last updated&quot; date at the
                top of this page indicates when the Terms were last revised.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">12. Contact</h2>
              <p>
                Questions about these Terms? Contact us at:
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
            <Link href="/privacy-policy/" className="text-orange-500 hover:underline">Privacy Policy</Link>
            <Link href="/contact/" className="text-orange-500 hover:underline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
