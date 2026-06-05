# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev        # Dev server at localhost:4321
npm run build      # Production build to ./dist/
npm run preview    # Preview production build locally
npm run generate-types  # Regenerate Cloudflare Worker types via wrangler
```

## Architecture

Single-page marketing website for **Centro de Salud Esencia Vital** (Costa Rica), built with **Astro 6 + Tailwind CSS v4 + DaisyUI 5**, deployed to **Cloudflare Workers** via `@astrojs/cloudflare` adapter (SSR mode).

The site is a single route (`src/pages/index.astro`) that composes all sections as Astro components:

- `Hero` → `SobreNosotros` → `Servicios` → `DonaLevadura` → `Contacto` → `Footer`
- Floating WhatsApp button is inlined in the page, not a component

**Layout** (`src/layouts/Layout.astro`): sets default SEO meta, Google Fonts (Cormorant Garamond, Lato, Pacifico), and `lang="es-CR"`.

**Styling** (`src/styles/global.css`): Tailwind v4 is loaded via `@import "tailwindcss"` (not the v3 `@tailwind` directives). DaisyUI is loaded as a `@plugin`. Brand tokens are CSS custom properties on `:root`:
- `--color-verde` `#8dc63f`, `--color-coral` `#e8415a`, `--color-turquesa` `#4bbfcb`, `--color-gris` `#4a4a4a`
- `--font-display` (Cormorant Garamond), `--font-body` (Lato)

Custom animation utility classes (`animate-fade-in-up`, `animate-float`) and `.whatsapp-float` are defined globally.

**Icons**: `astro-icon` integration with `@iconify-json/lucide` icon set. Use `<Icon name="lucide:..." />` in components.

**Deployment**: Cloudflare Workers. `wrangler.jsonc` defines `nodejs_compat` flag. Type generation: `npm run generate-types`.
