#!/bin/bash
set -e
cd ~/tree-site

# Clear any lingering lock files
rm -f .git/HEAD.lock .git/index.lock 2>/dev/null || true

echo "→ Committing 7 new blog posts..."
git commit --only content/blog/demolition-cleanup-tree-service-ne-ohio.mdx -m "feat: add demolition service blog post"
git commit --only content/blog/land-clearing-ne-ohio-what-to-expect.mdx -m "feat: add land clearing blog post"
git commit --only content/blog/tree-debris-haul-away-ne-ohio.mdx -m "feat: add haul away blog post"
git commit --only content/blog/best-trees-to-plant-ne-ohio.mdx -m "feat: add tree planting blog post"
git commit --only content/blog/arborist-consultation-tree-removal-ohio.mdx -m "feat: add arborist consultation blog post"
git commit --only content/blog/land-clearing-new-construction-ohio.mdx -m "feat: add land clearing new construction blog post"
git commit --only content/blog/document-storm-damage-insurance-ohio.mdx -m "feat: add storm damage insurance documentation blog post"

echo "→ Committing blog lib + service page updates..."
git commit --only lib/blog.ts -m "feat: add getPostsByTag helper to blog lib"
git commit --only "app/services/[slug]/page.tsx" -m "feat: add From the Blog section to all service pages"

echo "→ Committing tag updates on existing posts..."
git commit --only \
  content/blog/stump-grinding-vs-stump-removal-ohio.mdx \
  content/blog/tree-removal-cost-cleveland-ohio.mdx \
  content/blog/emerald-ash-borer-treatment-ne-ohio.mdx \
  content/blog/emerald-ash-borer-ohio.md \
  content/blog/signs-tree-is-dying-ne-ohio.mdx \
  content/blog/storm-damage-tree-on-property-ohio.mdx \
  content/blog/storm-season-prep-ne-ohio.md \
  content/blog/diy-tree-removal-cost.md \
  content/blog/remove-vs-save-tree-ohio.md \
  content/blog/how-to-choose-tree-service-cleveland.mdx \
  -m "fix: add service-slug tags to all existing posts for related-posts linking"

echo "→ Pushing to main..."
git push origin main

echo ""
echo "✅ Done. 18 commits pushed. Vercel is deploying now."
rm -f ~/tree-site/commit-all.sh
