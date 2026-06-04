import Link from "next/link";

export const dynamic = "force-static";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center container-base py-20">
        <div className="text-8xl font-extrabold text-gray-100 mb-4">404</div>
        <h1 className="text-3xl font-bold text-[#1E3A5F] mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          We couldn&apos;t find that page. Try one of the links below or contact us directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">Go Home</Link>
          <Link href="/contact/" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
