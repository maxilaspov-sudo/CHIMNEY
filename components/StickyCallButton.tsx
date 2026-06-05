import Link from "next/link";

export default function StickyCallButton() {
  return (
    <Link
      href="/contact/"
      className="fixed bottom-5 right-5 z-50 md:hidden bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-5 rounded-full shadow-2xl flex items-center gap-2 transition-all duration-200 active:scale-95"
      aria-label="Request a free estimate"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      Free Estimate
    </Link>
  );
}
