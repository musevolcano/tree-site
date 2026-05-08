import { MetadataRoute } from "next";
import { blogPosts, services } from "@/data/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.bigcreektreeservice.com";

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...serviceRoutes,
    ...blogRoutes,
  ];
}
