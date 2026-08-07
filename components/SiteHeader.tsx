/* eslint-disable @next/next/no-html-link-for-pages */

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Team", href: "/team" },
  { label: "Services", href: "/#services" },
  { label: "Partners", href: "/#partners" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <a className="brand" href="/" aria-label="MVCC homepage">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/mvcc-logo.png" alt="" width="500" height="500" />
          <span>
            <strong>MVCC</strong>
            <small>McMaster Venture Capital Club</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.label}>{item.label}</a>
          ))}
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a href={item.href} key={item.label}>{item.label}</a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
