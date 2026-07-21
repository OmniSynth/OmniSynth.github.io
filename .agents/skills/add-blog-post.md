# Add a Blog Post

## Obsidian

Treat `src/data/post/` as the Obsidian vault root (**Open folder as vault**). Create notes as `.md` files there. Keep YAML frontmatter at the top of each note; Astro ignores Obsidian-only folders like `.obsidian` and `.trash`.

Avoid Obsidian wikilinks (`[[Note]]`) in published posts — use normal Markdown links instead so static HTML builds cleanly.

## Steps

1. Create a new `.md` or `.mdx` file in `src/data/post/`
2. Add required frontmatter:

```yaml
---
publishDate: 2026-01-15T00:00:00Z
title: 'Your Post Title'
excerpt: 'Brief description of the post'
image: '~/assets/images/your-image.png'
category: 'tutorials'
tags:
  - astro
  - tailwind
author: 'Author Name'
---
```

3. Write content in Markdown (or MDX for component embedding)
4. Run `npm run build` to verify the post renders correctly

## Frontmatter Fields

| Field            | Required | Description                                                    |
| ---------------- | -------- | -------------------------------------------------------------- |
| `title`          | Yes      | Post title                                                     |
| `publishDate`    | No       | ISO 8601 date                                                  |
| `updateDate`     | No       | ISO 8601 date                                                  |
| `draft`          | No       | Set `true` to hide from listing                                |
| `excerpt`        | No       | Summary for listing pages                                      |
| `image`          | No       | Path to hero image (use `~/` prefix for local)                 |
| `category`       | No       | Single category string                                         |
| `tags`           | No       | Array of tag strings                                           |
| `author`         | No       | Author name                                                    |
| `locale`         | No       | `zh` (default) or `en`                                         |
| `translationKey` | No       | Shared key linking zh/en translations of the same article      |
| `metadata`       | No       | Override SEO metadata                                          |

## URL Pattern

- Chinese posts: `/{slug}` (and listed on `/blog`)
- English posts: use filename `name.en.md` with `locale: en` → `/en/{slug}` (listed on `/en/blog`)

## Notes

- Reading time is calculated automatically via remark plugin
- Images referenced with `~/` are optimized at build time
- Use `.mdx` extension to embed Astro components in posts
- Pair translations with the same `translationKey` so the language switcher opens the matching article
