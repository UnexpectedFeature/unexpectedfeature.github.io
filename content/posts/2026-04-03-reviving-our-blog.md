---
title: "Reviving Our Blog: From Hexo to a Modern Static Site Generator"
date: 2026-04-03
description: "How we evaluated and chose a new static site generator to bring our blog back to life"
tags: ["blog", "static-site-generator", "hugo", "migration"]
draft: false
---

Every blog has a story, and ours had been on pause for too long.

When we first launched **UnexpectedFeature**, the goal was simple: share and keep what we learned in a single place. We built it with Hexo, deployed to GitHub Pages, and published a handful of posts between 2021 and 2023. Then, life happened. Dependencies broke. Maintenance fell by the wayside. The blog sat silent.

We decided it was time to bring it back.

## Why a Static Site Generator

Before diving into the technical details: why a static site generator at all?

- **Speed**: Pre-rendered HTML loads instantly. No database queries.
- **Security**: No database to hack. The site is just files.
- **Simplicity**: Markdown is everywhere. Version control works naturally.
- **Cost**: GitHub Pages hosts static sites for free.
- **Control**: No platform lock-in. Your content lives in your repo.

## Why We Switched

Our original setup used Hexo. So why switch?

**We found it limiting.**

- Theme ecosystem stagnation: Many themes haven't been updated in years.
- Plugin maintenance: Community plugins often lag behind Node.js updates.
- DX friction: Working with TypeScript and modern bundlers required fighting the tool.
- MDX support: We wanted richer content with embedded components.

## Astro vs Hugo

We narrowed our search to two contenders:

| Criteria | Astro | Hugo |
|----------|-------|------|
| Language | JavaScript/TypeScript | Go |
| Performance | Fast | Fastest (sub-second) |
| MDX Support | Excellent, native | Possible, more manual |
| Component Model | Framework-agnostic | Go templates |
| Learning Curve | Low | Medium |

We chose Hugo. Why?

- **Backend-friendly**: Go templates feel familiar to backend logic.
- **Single binary**: No npm dependencies to manage.
- **Fastest build**: Sub-second static site generation.
- **Rigid but powerful**: Everything built-in.

## The Setup

The Hugo setup:

```
├── content/
│   └── posts/
├── static/
│   └── images/
├── themes/
│   └── hugo-coder/
├── hugo.toml
└── .github/
    └── workflows/
```

Basic configuration in `hugo.toml`:

```toml
baseURL = 'https://unexpectedfeature.github.io'
languageCode = 'en'
title = 'UnexpectedFeature'
theme = 'hugo-coder'
```

Simple. Clean.

## GitHub Actions Deployment

We automated deployment with a workflow:

```yaml
name: Deploy
on:
  push:
    branches: [source]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: true
      - uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
      - run: hugo -d public
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
          publish_branch: master
```

Push to source, site updates automatically.

## Future Plans

This revival is just the beginning:

1. Migrate existing posts from the old Hexo site
2. Publish new content: AI workflows, self-hosting guides, networking deep-dives
3. Invite contributors

The foundation is solid. Now we write.
