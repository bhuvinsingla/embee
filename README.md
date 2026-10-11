# Embee Group

A Next.js site for [Embee Financial Services Ltd](https://www.embeegroup.in/), headquartered in Chandigarh. Advisory copy, contact details and the logo follow the published Embee Group site. The technology section presents delivery work that is not on that site.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Push this repository to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Framework preset: Next.js. Build command: `npm run build`. Output is handled by Vercel.
4. Optional environment variable: `NEXT_PUBLIC_SITE_URL` set to the production URL, for canonical links, the sitemap and Open Graph.

No database is required. Hour Tracker stores entries in the browser. The contact form opens the visitor’s email app addressed to info@embeegroup.in.
