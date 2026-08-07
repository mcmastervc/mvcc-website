/* eslint-disable @next/next/no-html-link-for-pages */
import { mcmasterShield } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-top">
        <div className="footer-identity">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mcmasterShield} alt="McMaster University shield" loading="lazy" />
          <div>
            <a className="footer-brand" href="/">MVCC</a>
            <p>Learn. Build. Invest.</p>
          </div>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <div>
            <p className="footer-label">Explore</p>
            <a href="/#about">About</a>
            <a href="/team">Team</a>
            <a href="/#services">Services</a>
          </div>
          <div>
            <p className="footer-label">Connect</p>
            <a href="/#partners">Partnerships</a>
            <a href="https://linktr.ee/macventurecapital">Community</a>
            <a href="mailto:mvcc@mcmaster.ca">Email MVCC</a>
          </div>
        </nav>
      </div>
      <div className="site-shell footer-bottom">
        <p>© {new Date().getFullYear()} McMaster Venture Capital Club</p>
        <p>Recognized student organization at McMaster University · Hamilton, Ontario</p>
      </div>
    </footer>
  );
}
