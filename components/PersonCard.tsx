"use client";

import { useState } from "react";

type PersonCardProps = {
  name: string;
  role: string;
  image: string;
  position?: string;
  bio?: string;
  linkedin?: string;
};

export function PersonCard({ name, role, image, position, bio, linkedin }: PersonCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const portrait = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={`Portrait of ${name}`}
        loading="lazy"
        decoding="async"
        style={{ objectPosition: position }}
      />
    </>
  );

  const linkedinBadge = linkedin ? (
    <a
      className="person-linkedin-badge"
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} on LinkedIn (opens in a new tab)`}
      title={`${name} on LinkedIn`}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.2 7.8H1.7V22h3.5V7.8ZM3.5 2A2.1 2.1 0 1 0 3.5 6.2 2.1 2.1 0 0 0 3.5 2ZM22.3 13.9c0-4.3-2.3-6.4-5.4-6.4a4.7 4.7 0 0 0-4.3 2.4V7.8H9.1V22h3.5v-7c0-1.8.3-3.6 2.6-3.6s2.3 2.1 2.3 3.7V22H21l1.3-8.1Z" />
      </svg>
    </a>
  ) : null;

  return (
    <article className={`person-card${bio ? " person-card-flippable" : ""}`}>
      <div className="person-media">
        {bio ? (
          <button
            className={`person-flip${isFlipped ? " is-flipped" : ""}`}
            type="button"
            aria-pressed={isFlipped}
            aria-label={isFlipped ? `Show ${name}'s portrait` : `Read ${name}'s biography`}
            onClick={() => setIsFlipped((current) => !current)}
          >
            <span className="person-flip-inner">
              <span className="person-face person-face-front" aria-hidden={isFlipped}>
                {portrait}
                <span className="person-flip-hint">View bio <span aria-hidden="true">↻</span></span>
              </span>
              <span className="person-face person-face-back" aria-hidden={!isFlipped}>
                <span className="person-bio-label">About {name.split(" ")[0]}</span>
                <span className="person-bio">{bio}</span>
                <span className="person-flip-hint person-flip-hint-back">
                  Return to portrait <span aria-hidden="true">↻</span>
                </span>
              </span>
            </span>
          </button>
        ) : (
          <div className="person-photo">{portrait}</div>
        )}
        {linkedinBadge}
      </div>
      <div className="person-meta">
        <h3>{name}</h3>
        <div className="person-meta-side">
          <div className="person-title">
            <p>{role}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
