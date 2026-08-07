# McMaster Venture Capital Club

The official website for the McMaster Venture Capital Club (MVCC), built as a
semantic, HTML-first React site for Cloudflare Workers.

- Production domain: `https://mcmastervc.com`
- Contact: `mvcc@mcmaster.ca`
- Brand colours: `#7A0000` (deep red), `#D4AF37` (gold), off-white, and restrained black

## Technology

The site uses React 19, Vinext, Vite, and the Cloudflare Vite plugin. Most of
the experience is server-rendered HTML and CSS; the contact form is the only
interactive React component. There is no database, CMS, analytics script, or
paid form service to maintain.

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Useful checks:

```bash
npm run lint
npm test
```

`npm test` creates and validates the production Cloudflare artifact.

## Where to edit things

| What | File |
| --- | --- |
| Names, roles, service copy, partner list | `lib/site-data.ts` |
| Homepage structure and copy | `app/page.tsx` |
| Executive-team page | `app/team/page.tsx` |
| Colours, typography, spacing, responsive rules | `app/globals.css` |
| Navigation | `components/SiteHeader.tsx` |
| Footer | `components/SiteFooter.tsx` |
| Contact email behaviour | `components/ContactForm.tsx` |
| Search/social metadata | `app/layout.tsx` |
| Sitemap and crawler rules | `app/sitemap.ts`, `app/robots.ts` |

## Images

- The MVCC mark lives at `public/images/mvcc-logo.png`.
- Partner marks live in matching `black/` and `gold/` folders under
  `public/images/partners/`.
- The approved 690-line V2.8 hero is
  `public/animation/conviction-line.html`. Keep it self-contained and test at
  desktop and mobile widths after any change.
- Team photos currently use the existing public Wix image URLs. Replace these
  with local originals before retiring the Wix site so the images cannot break.
  Put the originals in `public/images/team/`, then update each `image` value in
  `lib/site-data.ts` to a path such as `/images/team/nathan-fanti.jpg`.

For good performance, export headshots at roughly 900×1100 px as WebP or AVIF,
usually under 250 KB each. Keep meaningful names and leave the descriptive alt
text in `PersonCard.tsx` intact.

## Contact form

The form creates a pre-filled email to `mvcc@mcmaster.ca` in the visitor's
email app. This avoids a paid backend and stores no personal information. If a
server form is added later, update the privacy copy and add spam protection.

## GitHub → Cloudflare deployment

Cloudflare Workers Builds can connect directly to a GitHub repository and
deploy every push to the production branch.

1. Push this folder to a GitHub repository, with `main` as the production branch.
2. In Cloudflare, open **Workers & Pages**, create/import a Worker, and connect
   the GitHub repository under **Settings → Builds**.
3. Use `npm ci` as the install command and `npx wrangler deploy` as the deploy
   command. Current Wrangler versions can detect and configure this Vite project
   automatically. Review and merge Cloudflare's generated configuration pull
   request if it creates one.
4. Ensure the Cloudflare Worker name matches the `name` in the generated
   Wrangler configuration.
5. After the first successful deployment, go to **Settings → Domains & Routes →
   Add → Custom Domain** and attach `mcmastervc.com`.
6. Add a proxied `www` DNS record and a redirect rule from
   `www.mcmastervc.com` to `https://mcmastervc.com`.

Official references:

- [Cloudflare Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/)
- [Git integration](https://developers.cloudflare.com/workers/ci-cd/builds/git-integration/)
- [Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)

## SEO launch checklist

After the custom domain is active:

1. Confirm that `https://mcmastervc.com`, `/team`, `/robots.txt`, and
   `/sitemap.xml` return successfully.
2. Add the domain to Google Search Console and Bing Webmaster Tools.
3. Submit `https://mcmastervc.com/sitemap.xml` in both services.
4. Add their verification token to `app/layout.tsx` if DNS verification is not used.
5. Update McMaster club directories and social profiles to link to the new domain.
6. Keep the wording “McMaster Venture Capital Club” visible in the page title,
   H1, description, organization schema, and external profiles.
7. If possible, point the old Wix site to the new domain while search engines
   transition.

## Before changing leadership

Update `founders` and `executiveTeam` in `lib/site-data.ts`, replace photos,
run `npm run lint && npm test`, and review both desktop and mobile layouts.
