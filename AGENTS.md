# AGENTS.md

## Cursor Cloud specific instructions

This is **Bright Way** (`brightway-v2`), a front-end-only Next.js 16 marketing website for a uniform services company. No backend, no database, no environment variables required.

### Running the app

- `npm run dev` starts the dev server on `http://localhost:3000`
- `npm run build` builds for production
- `npm run lint` runs ESLint

See `README.md` and `package.json` scripts for standard commands.

### Known issues

- The `src/app/favicon.ico` file shipped in the repo is a broken text file (contains a `file:///` URI instead of valid ICO data). Turbopack fails to decode it, blocking both `npm run build` and `npm run dev`. Replace it with a valid ICO file to unblock the dev server and build. The update script handles this automatically.
- `npm run lint` exits with code 1 due to pre-existing lint errors (`react-hooks/set-state-in-effect` in `AnimatedCounter.tsx` and `Navbar.tsx`, and an unused-variable warning in `page.tsx`). These are not regressions.
