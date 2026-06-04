import Link from "next/link";

interface CTABannerProps {
  heading?: string;
  subtext?: string;
}

export default function CTABanner({
  heading = "Ready to schedule your chimney service?",
  subtext = "Same-week appointments available across California. CSIA-certified technicians.",
}: CTABannerProps) {
  return (
    <section className="section-navy py-14">
      <div className="container-base flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{heading}</h2>
          <p className="text-gray-300">{subtext}</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <Link href="/contact/" className="btn-primary whitespace-nowrap">
            Request Free Estimate
          </Link>
          <Link href="/contact/" className="btn-secondary whitespace-nowrap">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
