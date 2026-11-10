# StudyNest: Project Showcase Homepage

A responsive homepage for **StudyNest**, a concept study-planner app for students. Built with **React 19** and **Vite**.

🔗 **Live site:** studynest-alpha.vercel.app

📦 **Repository:** https://github.com/kaneeza-batool/studynest

> StudyNest is a concept project made for a web development assignment. The stats and testimonials are sample content.

---

## Features

- **Semantic HTML**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<blockquote>`, `<details>` and `<footer>`, plus a skip link
- **Eight sections**: Hero, Features, How it works, Screens, Testimonials, Pricing, FAQ and Contact
- **Responsive**: works from phone to desktop, with a hamburger menu on small screens
- **Dark / light theme** that follows the system setting and remembers your choice
- **Interactive pieces**:
  - Typewriter text and animated counters in the hero
  - Scroll-reveal animations and a scroll-progress bar
  - Tabbed app-screen viewer with arrow-key navigation
  - Monthly / yearly pricing switch
  - FAQ accordion
  - Contact form with validation that opens the visitor's email app
- **Accessibility**: alt text on every image, ARIA roles and labels, visible keyboard focus, and support for `prefers-reduced-motion`
- **SEO**: page title, meta description, Open Graph tags and an SVG favicon

## Tech stack

| Tool | Purpose |
| --- | --- |
| React 19 | UI components and hooks |
| Vite | Dev server and production build |
| Plain CSS | Custom properties, Grid, Flexbox and animations, with no CSS framework |

## Project structure

```
├── index.html            # HTML shell, meta tags, theme bootstrap
├── public/
│   ├── favicon.svg
│   └── images/           # logo, app screens and avatars (SVG)
├── src/
│   ├── main.jsx          # React entry
│   ├── App.jsx           # Page layout
│   ├── data.js           # All site text and content
│   ├── styles.css        # Global styles and theme tokens
│   ├── hooks/            # useTheme, useReveal, useActiveSection
│   └── components/       # Header, Hero, Features, HowItWorks, Screens,
│                         # Testimonials, Pricing, Faq, Contact, Footer
└── vite.config.js        # Vite build settings
```

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to /dist
npm run preview   # preview the production build
```

## Deployment

The repo is connected to Vercel through GitHub, so **every push to `main` automatically triggers a production deploy**.
