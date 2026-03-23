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
- Plain JS (`.jsx`), no TypeScript

## Architecture

This is a minimal single-page app. Entry point is `src/main.jsx` → renders `<App>` into `#root`.

**Styling approach:** Two CSS files coexist:
- `src/index.css` — global base styles, CSS custom properties (colors, typography, dark mode via `prefers-color-scheme`), and layout for `#root`. Has `@import "tailwindcss"` at the top.
- `src/App.css` — component-specific styles for `App.jsx`.

Tailwind utility classes can be used alongside the existing CSS custom property system (`--accent`, `--text`, `--bg`, etc.).

## ESLint

- Applies to `**/*.{js,jsx}` only
- `no-unused-vars` ignores names matching `/^[A-Z_]/`
