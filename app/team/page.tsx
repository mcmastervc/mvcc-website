import type { Metadata } from "next";
import { PersonCard } from "@/components/PersonCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { executiveTeam } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Executive Team",
  description:
    "Meet the founders and executive team leading McMaster Venture Capital Club at McMaster University in Hamilton, Ontario.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "MVCC Executive Team",
    description:
      "Meet the student leaders building McMaster's venture capital community.",
    url: "https://mcmastervc.com/team",
  },
};

export default function TeamPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content" className="team-page">
        <section className="team-hero" aria-labelledby="team-title">
          <div className="team-hero-line" aria-hidden="true" />
          <div className="site-shell team-hero-layout">
            <div>
              <p className="eyebrow">The people behind MVCC</p>
              <h1 id="team-title">Student-led. <br />Venture-minded.</h1>
            </div>
            <p>
              Our team brings together students from across McMaster who share
              an interest in venture capital, startups, and building a stronger
              community on campus.
            </p>
          </div>
        </section>

        <section className="section team-roster" aria-labelledby="executive-title">
          <div className="site-shell">
            <div className="roster-heading">
              <p className="eyebrow">2026 · Executive team</p>
              <h2 id="executive-title">The team building MVCC.</h2>
            </div>
            <div className="people-grid people-grid-executive">
              {executiveTeam.map((person, index) => (
                <PersonCard key={person.name} {...person} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="team-cta" id="team-cta">
          <div className="site-shell team-cta-inner">
            <div>
              <p className="eyebrow">Get involved with MVCC</p>
              <h2>Build the next chapter with us.</h2>
            </div>
            <div className="team-cta-actions">
              <a
                className="button button-primary"
                href="https://linktr.ee/macventurecapital"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the community
              </a>
              {/* A full navigation intentionally avoids framework-specific RSC routing. */}
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a className="text-link" href="/#contact">Contact MVCC →</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
