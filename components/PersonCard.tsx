"use client";

import { useState } from "react";

type PersonCardProps = {
  name: string;
  role: string;
  image: string;
  position?: string;
  bio?: string;
  linkedin: string;
  index: number;
};

export function PersonCard({ name, role, image, position, bio, linkedin, index }: PersonCardProps) {
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
      <span className="person-index" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
    </>
  );

  return (
    <article className={`person-card${bio ? " person-card-flippable" : ""}`}>
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
      <div className="person-meta">
        <h3>{name}</h3>
        <div className="person-meta-side">
          <p>{role}</p>
          <a
            className="person-linkedin"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn (opens in a new tab)`}
            title={`${name} on LinkedIn`}
          >
            <span aria-hidden="true">in</span>
          </a>
        </div>
      </div>
    </article>
  );
}