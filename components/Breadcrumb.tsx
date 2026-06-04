import Link from "next/link";
import { SITE } from "@/lib/constants";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${SITE.baseUrl}${c.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 py-3">
        <ol className="flex flex-wrap items-center gap-1">
          {crumbs.map((crumb, i) => (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && <span className="text-gray-300">/</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-orange-500 transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gray-700 font-medium">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
