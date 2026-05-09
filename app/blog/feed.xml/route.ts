import { generateRSSFeed } from "@/lib/blog";

export const dynamic = "force-static";

export async function GET() {
  const feed = generateRSSFeed();
  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
