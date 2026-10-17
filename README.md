# Azam Khalid — Portfolio

Personal portfolio site, built with **React + TypeScript + Vite**. It was ported
from a single `index.html` + `style/style.css` page while keeping the original
look and behaviour (three-state theme switcher, floating header, smooth-scroll
navigation, stats widgets, Formspree contact form, back-to-top button).

## Getting started

```bash
npm install
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # type-check + production build into dist/
npm run preview    # serve the built output locally
npm run typecheck  # type-check only
```

Requires Node 18+ to build locally; CI uses Node 20.

## Project structure

```
public/
  assets/                 # images, resume PDF — served verbatim at /assets/*
src/
  components/
    common/               # Anchor, NavLink (in-page smooth-scroll link)
    layout/               # HeaderContent, StickyHeader, FloatingHeader, Footer
    sections/             # About, Experience, Cca, Projects, Contact
    theme/                # ThemeSwitcher
    ui/                   # cards, links, stats widgets, back-to-top
  data/                   # all page content (site, nav, socials, projects, ...)
  hooks/                  # useScrolledPast
  styles/                 # CSS split by concern, imported via styles/index.css
  theme/                  # ThemeProvider, context and useTheme hook
  utils/                  # cn(), scroll helpers
  App.tsx                 # page composition
  main.tsx                # React entry point
```

### Where things live

- **Content edits** (new project, certification, job, link): `src/data/`.
  Components read from there, so most changes never touch JSX.
- **Theme logic**: `src/theme/`. The pre-paint script that avoids a theme flash
  stays inline in `index.html`.
- **Styling**: `src/styles/`, split into tokens, base, header, about,
  experience, projects and contact. `index.css` controls the cascade order.
- **Colour**: `tokens.css` aliases the [Catppuccin](https://catppuccin.com)
  palette (`@catppuccin/palette`, imported in `index.css`). Dark mode uses
  **Macchiato**, light mode uses **Latte**, and blue is the accent. Change a
  flavour's colours by editing the `--ctp-*` aliases only.

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes `dist/` to GitHub
Pages on every push to `main`.

One-time setup: in the repository's **Settings → Pages**, set **Source** to
**GitHub Actions** (instead of "Deploy from a branch"). The site is served at
<https://shadowblazer93.github.io/>.
