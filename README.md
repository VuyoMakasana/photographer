# Amara Studio — Photographer Portfolio Website

A premium, editorial-style portfolio website for a documentary and editorial photographer, built as an original design inspired by (not copied from) the structural and visual principles of minimalist architectural/portfolio sites: large photography, a chronological project archive, generous whitespace, and restrained typography.

The photographer used throughout is a fictional placeholder — **Amara Kessler / Amara Studio** — with placeholder Unsplash photography. Everything is built to be swapped out for a real photographer's brand and images in minutes.

---

## 1. What this project is

A two-part application:

- **`client/`** — a React + Vite single-page app: the public-facing website (hero, philosophy statement, featured work, gallery with lightbox, chronological project archive, project detail pages, about, services, journal, and a contact/booking form).
- **`server/`** — a Node.js + Express API that serves project/gallery/services/journal data as JSON and receives contact/booking form submissions (validated and rate-limited). It currently reads from local data files, structured so a real database can be dropped in later without changing the route/controller layer.

## 2. Technology used, and why

| Layer | Choice | Why |
|---|---|---|
| Frontend framework | React 19 + Vite | Component reuse across the archive/gallery/journal (which all repeat card-like patterns), fast dev server, small production bundle. |
| Routing | React Router v7 | Client-side routes for `/work/:slug` and `/journal/:slug` so individual projects/posts have shareable URLs, per the spec. |
| Styling | Plain CSS with custom properties (design tokens) | No component library — keeps the editorial visual language fully custom rather than templated, and keeps the bundle light. |
| Backend | Node.js + Express | Minimal, well-understood, easy to extend with a real database later. |
| Validation | `express-validator` | Server-side validation of the contact form regardless of what the client sends. |
| Security | `helmet`, `cors`, `express-rate-limit` | Sensible security headers, locked-down CORS to the frontend origin, and rate limiting on the contact/booking endpoints. |

No UI framework (Bootstrap, MUI, etc.) was used intentionally — the brief asked explicitly to avoid a generic templated look.

## 3. Project structure

```
amara-studio/
├── client/                      # React + Vite frontend
│   ├── src/
│   │   ├── components/          # Header, Hero, Gallery, Lightbox, ContactForm, etc.
│   │   ├── pages/                # Route-level pages (Home, Work, ProjectDetail, About, ...)
│   │   ├── data/                 # ← EDIT HERE: all site content lives in these files
│   │   ├── hooks/                 # useReveal (scroll animations), useLockBodyScroll
│   │   └── styles/                # tokens.css (design system) + global.css
│   ├── public/
│   ├── index.html
│   └── vite.config.js             # includes a /api dev proxy to the Express server
├── server/                       # Node + Express backend
│   └── src/
│       ├── controllers/
│       ├── routes/
│       ├── services/              # data-access layer — swap for a DB here later
│       ├── middleware/            # validation, rate limiting, error handling
│       ├── data/                  # local JSON-like data (mirrors client/src/data)
│       ├── config/
│       ├── app.js
│       └── server.js
├── package.json                   # convenience scripts for running both halves
└── README.md
```

## 4. Install dependencies

From the project root:

```bash
npm run install:all
```

This installs both `client/` and `server/` dependencies. (Equivalent to running `npm install` inside each folder separately.)

## 5. Environment variables

Copy the example env file and adjust as needed:

```bash
cp server/.env.example server/.env
```

| Variable | Default | Purpose |
|---|---|---|
| `PORT` | `4000` | Port the Express API listens on. |
| `CLIENT_ORIGIN` | `http://localhost:5173` | Allowed CORS origin — set this to your deployed frontend URL in production. |
| `NODE_ENV` | `development` | Standard Node environment flag. |
| `DATABASE_URL` | *(empty)* | Not used yet — placeholder for when you connect PostgreSQL/Supabase. |
| `CLOUDINARY_URL` | *(empty)* | Not used yet — placeholder for when you connect image hosting. |

The client has no required environment variables in development (it talks to the API through the Vite dev proxy). Never commit a real `.env` file — only `.env.example` is tracked.

## 6. Run it locally

You need two terminals (or run both with a process manager of your choice).

**Terminal 1 — backend:**
```bash
cd server
npm run dev
```
Runs on `http://localhost:4000`. Health check: `http://localhost:4000/api/health`.

**Terminal 2 — frontend:**
```bash
cd client
npm run dev
```
Runs on `http://localhost:5173`. The contact form's `POST /api/contact` calls are automatically proxied to the backend by `vite.config.js` — no extra configuration needed in dev.

## 7. Build for production

```bash
cd client
npm run build
```

Outputs static files to `client/dist/`. Preview the production build locally with:

```bash
npm run preview
```

The backend doesn't need a build step — it runs directly with Node:

```bash
cd server
npm run start
```

## 8. Deploying

- **Frontend (`client/dist`)**: deploy as a static site to any static host — Netlify, Vercel, Cloudflare Pages, GitHub Pages, or served via Nginx. Because this uses client-side routing (React Router), configure your host to redirect all unknown paths to `index.html` (a "SPA fallback" — on Netlify this is a `_redirects` file with `/* /index.html 200`; on Vercel it's automatic for SPA projects).
- **Backend (`server/`)**: deploy to any Node host — Render, Railway, Fly.io, a small VPS, or a container platform. Set `CLIENT_ORIGIN` to your deployed frontend's real URL so CORS allows it, and set `PORT` if your host requires a specific one.
- Point the frontend's contact form at the deployed API by adding a production proxy/rewrite on your static host, or by changing the `fetch("/api/contact")` call in `client/src/components/ContactForm.jsx` to an absolute URL (e.g. via a `VITE_API_URL` environment variable) if the frontend and backend are on different domains.

## 9. Where to change the photographer's information

Everything is centralized — **you should never need to edit a component file to change content.**

**`client/src/data/photographer.js`**
- Name, tagline, hero image + copy, philosophy/intro text, full About bio (short bio, long bio paragraphs, philosophy quote, experience, location, areas served, awards, publications, clients), and contact details (email, phone, Instagram, location).

## 10. Where to add or change projects

**`client/src/data/projects.js`** — add a new object to the array:

```js
{
  slug: "your-unique-url-slug",       // becomes /work/your-unique-url-slug
  year: "2026",
  category: "Wedding",                 // or Portrait Series, Editorial, Fashion, Personal Work, ...
  title: "Project Title",
  location: "City, Country",
  cover: "https://.../image.jpg",      // used on the archive & featured-work cards
  description: "One or two sentences shown on the project page.",
  notes: "Optional photographer's notes.",
  gallery: ["https://.../1.jpg", "https://.../2.jpg", ...], // full project gallery
}
```
The homepage automatically features the first four projects in this array; the `/work` archive automatically sorts all projects by year (newest first).

(`server/src/data/projects.js` holds the same shape for the API — update both if you want the API responses to match what's shown on the site.)

## 11. Where to add gallery images

**`client/src/data/gallery.js`** — add an object per image:

```js
{
  id: "g10",
  src: "https://.../image.jpg",
  alt: "Descriptive alt text",
  caption: "Shown on hover and in the lightbox",
  category: "Wedding",                 // powers the filter buttons
  orientation: "portrait",             // "portrait" | "landscape" | "square" | "wide"
  meta: "f/2.0 · 85mm · ISO 800",       // optional EXIF-style caption line
}
```
`orientation` controls how the image sits in the editorial grid — mix orientations for a curated, non-uniform layout rather than a plain grid.

## 12. Where to change services

**`client/src/data/services.js`** — each entry has `name`, `description`, `image`, and `startingPrice`. Add, remove, or reorder freely; the Services page and its layout adapt automatically.

## 13. Where to add journal posts

**`client/src/data/journal.js`** — each entry needs a unique `slug` (becomes `/journal/your-slug`), `title`, `date` (ISO format, e.g. `"2026-03-02"`), `category`, `cover` image, `excerpt` (shown on the journal index), and `body` (an array of paragraph strings for the full article).

## 14. How the contact form works

1. The form (`client/src/components/ContactForm.jsx`) validates required fields (name, valid email, message) client-side before submitting.
2. On submit, it sends a `POST` request to `/api/contact` with all fields (name, email, phone, shoot type, preferred date, location, budget, message).
3. The Express backend (`server/src/controllers/contactController.js`) re-validates everything server-side with `express-validator` — never trust client-side validation alone — and is rate-limited to 10 submissions per 15 minutes per IP.
4. On success, the current implementation logs the enquiry and returns a confirmation (see `server/src/services/contactService.js`). **To actually receive enquiries by email**, wire this function up to an email provider (e.g. Postmark, SendGrid, AWS SES) or forward it into a CRM — the validation, rate limiting, and frontend are already fully wired and only this one function needs to change.
5. The `POST /api/booking` endpoint uses the same validation and handler for now; split it into its own service once booking needs differ from a general enquiry (e.g. calendar availability checks, deposits).

## 15. Replacing placeholder images

All imagery currently points to Unsplash URLs for demonstration. To replace:
- Swap the URLs directly in `client/src/data/*.js` for your own hosted image URLs (Cloudinary, S3, or your own CDN all work — just paste the URL).
- For local images instead of hosted URLs, drop files into `client/public/images/` and reference them as `/images/your-file.jpg`.
- Keep an eye on aspect ratios: hero images should be landscape/wide, About portrait should be roughly 4:5, and gallery images can be any orientation since `orientation` in `gallery.js` controls their grid placement.

## 16. Customizing colors and fonts

**`client/src/styles/tokens.css`** is the single design-system file:
- Colors: `--color-paper`, `--color-ink`, `--color-stone`, `--color-accent`, etc.
- Fonts: `--font-display` (serif, used for headings), `--font-body` (sans, used for body text), `--font-mono` (used for eyebrows, captions, and navigation — the "EXIF caption" signature detail throughout the site).
- Type scale: `--step--2` through `--step-5`, all built with `clamp()` for fluid responsive sizing — change these to adjust the whole site's type scale from one place.

If you change fonts, update the Google Fonts `@import` at the top of `client/src/styles/global.css` to match.

## 17. Customizing the navigation

**`client/src/components/Header.jsx`** — edit the `NAV_LINKS` array at the top of the file to add, remove, or reorder navigation items (used for both desktop nav and the mobile full-screen menu).

---

## Accessibility & UX notes

- Semantic HTML throughout (proper heading hierarchy, `<nav>`, `<article>`, `<figure>`).
- Visible keyboard focus states on all interactive elements (see `:focus-visible` rules in `global.css`).
- The gallery lightbox is fully keyboard-accessible: `Escape` closes it, `←`/`→` navigate images, and focus moves to the close button on open.
- Touch swipe navigation in the lightbox on mobile; page scroll is never hijacked — only the lightbox itself captures horizontal swipe gestures.
- `prefers-reduced-motion` is respected globally: scroll-reveal animations, the hero's entrance animation, and the scroll cue are all disabled or reduced automatically.
- A skip-to-content link is present for screen reader and keyboard users.

## Testing performed

- `npm run build` completes with no errors (Vite, 69 modules).
- `npx oxlint src` — 0 warnings, 0 errors.
- Express API manually verified: `/api/health`, `/api/projects`, `/api/projects/:slug` (including a 404 case), `/api/gallery`, `/api/services`, `/api/journal`, and `POST /api/contact` (both a rejected invalid submission and an accepted valid one).
- Responsive behavior implemented with `clamp()`-based type/spacing and CSS Grid/Flexbox breakpoints throughout — no fixed pixel widths that would break on small screens.
- Vertical-only scrolling: no component sets horizontal `overflow-x` on the page; the only horizontal gesture handling is inside the lightbox (`touch-action: pan-y` scoped to that component) and never on the page body.
