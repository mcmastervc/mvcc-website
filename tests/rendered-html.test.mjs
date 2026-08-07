import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

async function request(path, accept = "text/html") {
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept } }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the SEO-ready homepage", async () => {
  const response = await request("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, developmentPreviewMeta);
  assert.match(html, /<h1[^>]*>McMaster Venture Capital Club<\/h1>/i);
  assert.match(html, /rel="canonical" href="https:\/\/mcmastervc\.com\/"/i);
  assert.match(html, /property="og:image" content="https:\/\/mcmastervc\.com\/opengraph-image\.png"/i);
  assert.match(html, /application\/ld\+json/i);
  assert.match(html, /mailto:mvcc@mcmaster\.ca/i);
  assert.match(html, /\/animation\/conviction-line\.html/i);
});

test("renders the executive-team page", async () => {
  const response = await request("/team");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Executive Team \| MVCC<\/title>/i);
  assert.match(html, /rel="canonical" href="https:\/\/mcmastervc\.com\/team"/i);
  assert.match(html, /Nathan Fanti/i);
  assert.match(html, /Aneek Mukherjee/i);
});

test("serves crawler directives and a sitemap", async () => {
  const robotsResponse = await request("/robots.txt", "text/plain");
  assert.equal(robotsResponse.status, 200);
  const robots = await robotsResponse.text();
  assert.match(robots, /User-Agent:\s*\*/i);
  assert.match(robots, /Sitemap:\s*https:\/\/mcmastervc\.com\/sitemap\.xml/i);

  const sitemapResponse = await request("/sitemap.xml", "application/xml");
  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();
  assert.match(sitemap, /https:\/\/mcmastervc\.com<\/loc>/i);
  assert.match(sitemap, /https:\/\/mcmastervc\.com\/team<\/loc>/i);
});
