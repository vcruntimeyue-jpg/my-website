<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/vcrunyue.png">
  <img alt="VCRUNYUE" src="https://github.com/vcrunyue.png" width="80" height="80" style="border-radius: 50%;">
</picture>

# vcrunyue.com

Personal portfolio — creative work, tech experiments, gaming, music, and curated favorites.

Built with **Next.js 16** App Router, **Tailwind CSS 4**, and **Framer Motion**. Deployed on **Vercel**.

## Getting started

```bash
git clone git@github.com:vcrunyue/my-website.git
cd my-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
├── components/     # Navbar, HeroSection, BlogSection, GameGallery, etc.
├── content/        # Site metadata, blog posts, game data, navigation
│   └── sections/   # blog.js, game.js
├── game/           # /game page (full game archive)
├── lib/            # Analytics helpers
├── globals.css     # Base styles, animations, design tokens
├── layout.js       # Root layout with next/font
└── page.js         # Home page (section composition)

scripts/
├── check-content.mjs   # Content quality validation
├── check-assets.mjs    # Static asset reference checks
└── check-structure.mjs # Project structure enforcement
```

## Content editing

Everything lives in `app/content/`:

- **Blog posts** → `app/content/sections/blog.js`
- **Game entries** → `app/content/sections/game.js`
- **Navigation / social links** → `app/content/navigation.js`
- **Site metadata** → `app/content/site.js`
- **Display rules** (colors, ordering) → `app/content/presentation.js`

## Before pushing

```bash
npm run verify   # content + assets + structure → build
```
