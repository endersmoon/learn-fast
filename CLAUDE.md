# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

No test runner is configured.

## Stack

- **React 19** + **Vite 8** (using `@vitejs/plugin-react` with Oxc)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (no `tailwind.config.js` needed)
- **shadcn/ui** (style: `base-vega`, base color: `neutral`, JS not TSX)
- **react-router-dom** for client-side routing
- Plain JS (`.jsx`), no TypeScript

## Architecture

Entry point is `src/main.jsx` → wraps `<App>` in `<BrowserRouter>` → renders into `#root`.

**Routing:** Routes are defined in `App.jsx` using `<Routes>` / `<Route>`. Screen components live in `src/screens/`:
- `Home.jsx` → `/`
- `Onboarding.jsx` → `/onboarding`
- `Search.jsx` → `/search`
- `VideoPlayer.jsx` → `/video/:id`
- `Paywall.jsx` → `/paywall`
- `Collection.jsx` → `/collection`
- `NotFound.jsx` → `*`

**Import alias:** `@` maps to `src/` (configured in `jsconfig.json` and `vite.config.js`).

**shadcn/ui components** are added via `npx shadcn@latest add <component>` and land in `src/components/ui/`. Utilities live in `src/lib/utils.js`.

**Styling approach:** Two CSS files coexist:
- `src/index.css` — global base styles, CSS custom properties (colors, typography, dark mode via `prefers-color-scheme`), and layout for `#root`. Has `@import "tailwindcss"` at the top.
- `src/App.css` — component-specific styles for `App.jsx`.

Tailwind utility classes can be used alongside the existing CSS custom property system (`--accent`, `--text`, `--bg`, etc.).

## Prototype Context

This is a **prototype**, not a production app. `Home.jsx` (`/`) is intentionally a flow-selector screen listing all routes — do not replace it with real app content.

## ESLint

- Applies to `**/*.{js,jsx}` only
- `no-unused-vars` ignores names matching `/^[A-Z_]/`
