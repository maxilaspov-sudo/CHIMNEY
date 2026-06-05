import Link from "next/link";
import Image from "next/image";

interface CTABannerProps {
  heading?: string;
  subtext?: string;
}

export default function CTABanner({
  heading = "Ready to Schedule Your Chimney Service?",
  subtext = "Fast, professional, and trusted by California homeowners. We keep your home safe and warm.",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/cta-chimney-service-california.jpg"
        alt="Chimney service tools on a rooftop at sunset in California"
        fill
        loading="lazy"
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#0a0a0a]/94" />
      <div className="relative z-10 container-base py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{heading}</h2>
            <p className="text-gray-300 max-w-xl">{subtext}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/contact/"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3 rounded-lg transition-colors whitespace-nowrap shadow-lg"
            >
              Request Free Estimate
            </Link>
            <Link
              href="/contact/"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3 rounded-lg transition-colors whitespace-nowrap"
            >
              Book an Inspection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
