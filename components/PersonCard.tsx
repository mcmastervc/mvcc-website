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
      <svg viewBox="0 0 25 24" aria-hidden="true">
        <path d="M4.25 1.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5ZM2 9h4.5v13H2V9Zm7 0h4.3v1.8c1-1.45 2.6-2.25 4.5-2.25 3.7 0 5.7 2.35 5.7 6.8V22H19v-6.05c0-2.3-.8-3.55-2.55-3.55-1.9 0-2.95 1.3-2.95 3.85V22H9V9Z" />
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
