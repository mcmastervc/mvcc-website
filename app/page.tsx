import { ContactForm } from "@/components/ContactForm";
import { PersonCard } from "@/components/PersonCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { audiences, founders, partners, services } from "@/lib/site-data";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "McMaster Venture Capital Club",
  alternateName: "MVCC",
  description:
    "A recognized McMaster University student organization connecting students, founders, and investors through hands-on venture capital experience.",
  url: "https://mcmastervcc.com",
  logo: "https://mcmastervcc.com/images/mvcc-logo.png",
  email: "mvcc@mcmaster.ca",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hamilton",
    addressRegion: "Ontario",
    addressCountry: "CA",
  },
  parentOrganization: {
    "@type": "CollegeOrUniversity",
    name: "McMaster University",
    url: "https://www.mcmaster.ca",
  },
  sameAs: ["https://linktr.ee/macventurecapital"],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="hero" id="hero" aria-labelledby="hero-title">
          <iframe
            className="hero-art"
            src="/animation/conviction-line.html"
            title="Animated MVCC logo"
            aria-hidden="true"
            tabIndex={-1}
          />
          <div className="site-shell hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">McMaster University · Hamilton, Ontario</p>
              <h1 id="hero-title">McMaster Venture Capital Club</h1>
              <p className="hero-summary">
                Building the next generation of McMaster&apos;s venture capital
                investors, founders, and innovators.
              </p>
              <p className="hero-mantra">Learn. Build. Invest.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Work with MVCC</a>
                <a className="text-link" href="#about">
                  Discover the club <span aria-hidden="true">↘</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="site-shell">
            <div className="section-intro section-intro-split">
              <div>
                <p className="eyebrow">About MVCC</p>
                <h2 id="about-title">Learn venture capital by doing.</h2>
              </div>
              <p className="section-lede">
                McMaster Venture Capital Club helps students learn how venture
                capital works and build the skills and connections to take part
                in it. Members learn through startup research, conversations
                with founders, and events with people working in the industry.
              </p>
            </div>

            <div className="audience-grid">
              {audiences.map((audience) => (
                <article className="audience-card" key={audience.title}>
                  <div className="card-topline" aria-hidden="true" />
                  <p className="card-label">{audience.label}</p>
                  <h3>{audience.title}</h3>
                  <p>{audience.description}</p>
                  <ul>
                    {audience.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                  <a
                    href={audience.href}
                    {...(audience.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {audience.cta} <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section bridge-section" aria-label="MVCC mission">
          <div className="site-shell bridge-layout">
            <p className="bridge-kicker">Venture starts with conviction.</p>
            <p>
              We bring students, founders, and investors together to learn from
              each other and build stronger connections across McMaster.
            </p>
          </div>
        </section>

        <section className="section founders-section" aria-labelledby="founders-title">
          <div className="site-shell">
            <div className="section-heading-row">
              <div>
                <p className="eyebrow">Meet the founders</p>
                <h2 id="founders-title">Started by students who saw the gap.</h2>
              </div>
              <div className="heading-side">
                <p>
                  MVCC was created to make venture capital easier to understand
                  and more accessible to McMaster students.
                </p>
                <a className="text-link" href="/team">
                  Meet the full executive team <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="people-grid people-grid-founders">
              {founders.map((person, index) => (
                <PersonCard key={person.name} {...person} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="section services-section" id="services" aria-labelledby="services-title">
          <div className="site-shell services-layout">
            <div className="services-heading">
              <p className="eyebrow">For founders</p>
              <h2 id="services-title">Practical support for early-stage teams.</h2>
              <p className="section-lede">
                Our student teams work on focused projects built around the
                questions founders need to answer next.
              </p>
              <a className="button button-outline" href="#contact">Explore a project</a>
            </div>
            <div className="service-list">
              {services.map((service) => (
                <article className="service-item" key={service.number}>
                  <p className="service-number">{service.number}</p>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul>
                      {service.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section partners-section" id="partners" aria-labelledby="partners-title">
          <div className="site-shell">
            <div className="section-intro section-intro-split partners-intro">
              <div>
                <p className="eyebrow">Our partnerships</p>
                <h2 id="partners-title">Connected to venture capital across Canada.</h2>
              </div>
              <div>
                <p className="section-lede">
                  Our partners connect MVCC members with venture capital firms
                  and investors across Canada. Through these relationships,
                  students gain mentorship, industry insight, and direct
                  exposure to the people working in venture.
                </p>
              </div>
            </div>
            <div className="partner-grid" role="list" aria-label="MVCC partner organizations">
              {partners.map((partner) => (
                <div className={`partner-card partner-${partner.slug}`} role="listitem" tabIndex={0} key={partner.slug}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="partner-logo partner-logo-black"
                    src={`/images/partners/black/${partner.slug}-black.png`}
                    alt={partner.name}
                    loading="lazy"
                    decoding="async"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="partner-logo partner-logo-gold"
                    src={`/images/partners/gold/${partner.slug}-gold.png`}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="site-shell contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">Start a conversation</p>
              <h2 id="contact-title">Bring us the next question.</h2>
              <p>
                Whether you are building, investing, recruiting, or exploring
                venture for the first time, tell us what you have in mind.
              </p>
              <div className="contact-direct">
                <span>Prefer to write directly?</span>
                <a href="mailto:mvcc@mcmaster.ca">mvcc@mcmaster.ca</a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
