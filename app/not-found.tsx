import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="not-found">
        <div className="site-shell">
          <p className="eyebrow">404 · Off the cap table</p>
          <h1>This page isn&apos;t in the portfolio.</h1>
          <p>The link may have moved, but the MVCC homepage is right where you left it.</p>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a className="button button-primary" href="/">Return home</a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
