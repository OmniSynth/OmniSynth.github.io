## Site

- Production URL: https://omni.irez.cn
- GitHub Pages repo: https://github.com/OmniSynth/OmniSynth.github.io
- Site config: `src/config.yaml` (`site`, `base`, brand metadata)
- Custom domain file: `public/CNAME`
- Locales: `zh` (default routes) and `en` (`/en/...`). Strings live in `src/i18n/ui.ts`.
- Browser language: Chinese (`zh*`) opens Chinese by default; other languages open English. Manual switch is saved in `localStorage` (`omni-synth:locale`).

## Content workflow (Obsidian → Astro → GitHub Pages)

1. Open `src/data/post/` as an Obsidian vault (Open folder as vault).
2. Write `.md` posts with Astro frontmatter (`title`, `publishDate`, etc.). See `.agents/skills/add-blog-post.md`.
3. Push to `main` on `OmniSynth/OmniSynth.github.io`.
4. GitHub Actions builds static HTML and deploys Pages (`.github/workflows/deploy.yml`).

Local preview:

```
npm run dev
```

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
