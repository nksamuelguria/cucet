# Performance notes

## Measure against the production build, not `next dev`

`next dev` serves unminified CSS as separate files and always ships Next's
polyfill chunk, so a Lighthouse run against it reports render-blocking
stylesheets and "legacy JavaScript" that do not exist in the real build.

```bash
npm run build          # writes out/
npx serve out          # or any static server
```

Then point Lighthouse at `http://localhost:3000/engineering.html`.

## The host must compress HTML, CSS and JS

This is the single biggest factor in the score. The page's HTML is ~305 KB
raw, 55 KB gzipped, 30 KB brotli — and Lighthouse's simulated throttling will
not start fetching the LCP image until the whole document has arrived.

Measured, same build, mobile preset:

| Compression | Score | FCP | LCP |
|---|---|---|---|
| none | 72 | 2.7 s | 7.6 s |
| gzip | 88-89 | 1.5 s | 3.9 s |
| brotli | 91-100 | 0.9-1.4 s | 1.5-3.5 s |

Vercel, Netlify and Cloudflare do this by default. On Apache, enable
`mod_brotli`/`mod_deflate` for `text/html`, `text/css`, `application/javascript`
and `image/svg+xml`. On nginx, `brotli_static on;` plus `gzip on;`.

Also serve `/_next/static/*` with `Cache-Control: public, max-age=31536000,
immutable` — those filenames are content-hashed.
