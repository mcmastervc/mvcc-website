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
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.81 9.98h4.34V22H2.81V9.98Zm6.92 0h4.16v1.64h.06c.58-1.1 1.99-2.26 4.1-2.26 4.39 0 5.2 2.89 5.2 6.65V22h-4.33v-5.31c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V22H9.73V9.98Z" />
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
