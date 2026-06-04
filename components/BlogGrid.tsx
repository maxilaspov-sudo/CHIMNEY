"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export interface BlogCardData {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: string;
  heroImageMedium: string;
  heroAlt: string;
}

const ALL_CATEGORIES = ["All", "Maintenance", "Safety", "Repair", "Inspection", "Cost", "Installation", "Fireplace", "Dryer Vent"] as const;
type FilterCat = (typeof ALL_CATEGORIES)[number];

interface Props {
  posts: BlogCardData[];
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function BlogGrid({ posts }: Props) {
  const [active, setActive] = useState<FilterCat>("All");

  const available = ALL_CATEGORIES.filter(
    (cat) => cat === "All" || posts.some((p) => p.category === cat)
  );

  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter articles by category">
        {available.map((cat) => {
          const count = cat === "All" ? posts.length : posts.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                active === cat
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-600 border-gray-200 hover:border-orange-300 hover:text-orange-600"
              }`}
            >
              {cat}
              <span className="ml-1.5 text-[11px] opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Article grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-500 py-12 text-sm">No articles in this category yet. Check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 group"
            >
              <div className="relative h-48 overflow-hidden bg-gray-50">
                <Image
                  src={post.heroImageMedium}
                  alt={post.heroAlt}
                  fill
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-orange-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1 gap-3">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <time dateTime={post.publishDate}>
                    {new Date(post.publishDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-base font-bold text-gray-900 leading-snug group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm text-gray-500 leading-relaxed flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}/`}
                  className="text-orange-500 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all mt-auto"
                >
                  Read article <ArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
