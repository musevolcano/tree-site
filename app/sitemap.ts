import { MetadataRoute } from "next";
import { services } from "@/data/site-data";
import { cities } from "@/data/cities";
import { getAllPosts } from "@/lib/blog";

const BLOG_CATEGORIES = ["tree-care", "emergency-storm", "property-business"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.bigcreektreeservice.com";

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const categoryRoutes = BLOG_CATEGORIES.map((cat) => ({
    url: `${base}/blog/category/${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  const cityRoutes = cities.map((c) => ({
    url: `${base}/service-areas/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/service-areas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...cityRoutes,
    ...serviceRoutes,
    ...categoryRoutes,
    ...blogRoutes,
  ];
}
