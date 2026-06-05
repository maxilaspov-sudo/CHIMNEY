import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";
import { counties } from "@/lib/counties";
import { getAllPosts } from "@/lib/blogPosts";
import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

const base = SITE.baseUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/about/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/faq/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/reviews/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/blog/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/services/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/areas/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/areas/california/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
  ];

  const servicePages: MetadataRoute.Sitemap = [
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: `${base}/services/fireplace-installation/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${base}/services/gas-fireplace-repair/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${base}/services/chimney-crown-repair/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${base}/services/chimney-flashing-repair/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
  ];

  // City pages (california handled by static entry above)
  const cityPages: MetadataRoute.Sitemap = areas
    .filter((a) => a.slug !== "california")
    .map((a) => ({
      url: `${base}/areas/${a.slug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  // County pages
  const countyPages: MetadataRoute.Sitemap = counties.map((c) => ({
    url: `${base}/areas/${c.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}/`,
    lastModified: new Date(p.updatedDate),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticPages, ...servicePages, ...blogPosts, ...cityPages, ...countyPages];
}
