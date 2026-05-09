import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const SITE_URL = "https://www.bigcreektreeservice.com";

export type BlogCategory = "tree-care" | "emergency-storm" | "property-business";

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  "tree-care": "Tree Care",
  "emergency-storm": "Emergency & Storm",
  "property-business": "Property & Business",
};

export const CATEGORY_DESCRIPTIONS: Record<BlogCategory, string> = {
  "tree-care":
    "Tree health, trimming, disease diagnosis, and seasonal care tips for NE Ohio homeowners.",
  "emergency-storm":
    "What to do before, during, and after storm damage — and how insurance works in Ohio.",
  "property-business":
    "How trees affect property value, HOA disputes, pre-purchase assessments, and investment decisions.",
};

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO 8601 date string — e.g. "2026-05-09" */
  date: string;
  /** Human-readable formatted date — e.g. "May 9, 2026" */
  publishedAt: string;
  category: BlogCategory;
  author: string;
  /** e.g. "3 min read" */
  readingTime: string;
  coverImage?: string;
  tags: string[];
  draft: boolean;
  content: string;
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

function formatDate(isoDate: string): string {
  try {
    return new Date(isoDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  } catch {
    return isoDate;
  }
}

function parsePost(file: string): BlogPost {
  const slug = file.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title ?? "",
    excerpt: data.excerpt ?? "",
    date: data.date ?? "",
    publishedAt: formatDate(data.date ?? ""),
    category: (data.category ?? "tree-care") as BlogCategory,
    author: data.author ?? "Big Creek Tree Service",
    readingTime: stats.text,
    coverImage: data.coverImage,
    tags: Array.isArray(data.tags) ? data.tags : [],
    draft: data.draft === true,
    content,
  };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** All published posts, newest first. Drafts are excluded. */
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f));

  return files
    .map(parsePost)
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Single post by slug. Returns null if:
 * - File does not exist
 * - Post is a draft (draft posts are not accessible via URL)
 */
export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(BLOG_DIR)) return null;

  // Support both .mdx and .md
  for (const ext of [".mdx", ".md"]) {
    const filePath = path.join(BLOG_DIR, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const post = parsePost(`${slug}${ext}`);
      return post.draft ? null : post;
    }
  }
  return null;
}

/** All published posts in a given category, newest first. */
export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return getAllPosts().filter((p) => p.category === category);
}

/**
 * Related posts: same category, excluding the current slug.
 * Returns up to `limit` posts.
 */
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const post = getPostBySlug(slug);
  if (!post) return [];
  return getAllPosts()
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, limit);
}

/** Generate a valid RSS 2.0 feed string for all published posts. */
export function generateRSSFeed(): string {
  const posts = getAllPosts();
  const buildDate = new Date().toUTCString();

  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
      <category>${CATEGORY_LABELS[post.category] ?? post.category}</category>
      <author>joe@bigcreektreeservice.com (${post.author})</author>
    </item>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Big Creek Tree Service Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Tree care advice, storm prep, and property tips from NE Ohio&apos;s trusted arborists.</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/blog/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;
}

/** Render a markdown/MDX string to HTML. */
export async function renderMarkdown(markdown: string): Promise<string> {
  const result = await remark().use(remarkHtml).process(markdown);
  return result.toString();
}
