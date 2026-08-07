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

function assertExternalLinksOpenInNewTabs(html) {
  const links = html.match(/<a\b[^>]*href="https?:\/\/[^>]*>/gi) ?? [];
  assert.ok(links.length > 0, "expected at least one external link");
  for (const link of links) {
    assert.match(link, /target="_blank"/i);
    assert.match(link, /rel="noopener noreferrer"/i);
  }
}

test("renders the SEO-ready homepage", async () => {
  const response = await request("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, developmentPreviewMeta);
  assert.match(html, /<h1[^>]*>McMaster Venture Capital Club<\/h1>/i);
  assert.match(html, /rel="canonical" href="https:\/\/mcmastervcc\.com\/"/i);
  assert.match(html, /property="og:image" content="https:\/\/mcmastervcc\.com\/opengraph-image\.png"/i);
  assert.match(html, /application\/ld\+json/i);
  assert.match(html, /mailto:mvcc@mcmaster\.ca/i);
  assert.match(html, /\/animation\/conviction-line\.html/i);
  assert.match(html, /Diya is a third-year Political Science student at McMaster University/i);
  assert.match(html, /Read Diya Shah&#x27;s biography/i);
  assert.match(html, /href="https:\/\/www\.linkedin\.com\/in\/diyashahc\/"/i);
  assert.doesNotMatch(html, /Hover or focus to see each logo/i);
  assertExternalLinksOpenInNewTabs(html);
  assert.doesNotMatch(html, /—/);
});

test("renders the executive-team page", async () => {
  const response = await request("/team");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Executive Team \| MVCC<\/title>/i);
  assert.match(html, /rel="canonical" href="https:\/\/mcmastervcc\.com\/team"/i);
  assert.match(html, /Nathan Fanti/i);
  assert.match(html, /Aneek Mukherjee/i);
  assert.match(html, /href="https:\/\/www\.linkedin\.com\/in\/nathan-fanti\/"/i);
  assert.doesNotMatch(html, /Meet the founders\./i);
  assert.doesNotMatch(html, /Diya Shah/i);
  assertExternalLinksOpenInNewTabs(html);
  assert.doesNotMatch(html, /—/);
});

test("serves crawler directives and a sitemap", async () => {
  const robotsResponse = await request("/robots.txt", "text/plain");
  assert.equal(robotsResponse.status, 200);
  const robots = await robotsResponse.text();
  assert.match(robots, /User-Agent:\s*\*/i);
  assert.match(robots, /Sitemap:\s*https:\/\/mcmastervcc\.com\/sitemap\.xml/i);

  const sitemapResponse = await request("/sitemap.xml", "application/xml");
  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();
  assert.match(sitemap, /https:\/\/mcmastervcc\.com<\/loc>/i);
  assert.match(sitemap, /https:\/\/mcmastervcc\.com\/team<\/loc>/i);
});
