# Paint Touch Media

A modern basketball media site built with Next.js, React, TypeScript, and plain CSS.

## Pages

- Home
- Articles with category filters and search
- Article detail pages
- Rankings
- About
- Contact / submit tips

## Content

Sample articles live in `data/articles.ts`.
Sample ranking boards live in `data/rankings.ts`.

Add new stories by adding an object to `articles`; detail pages are generated from each article `slug`.

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

The main homepage styling lives in `app/globals.css` as normal CSS, so it does not depend on Tailwind or PostCSS to render on Vercel.
