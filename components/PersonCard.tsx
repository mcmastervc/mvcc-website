type PersonCardProps = {
  name: string;
  role: string;
  image: string;
  position?: string;
  index: number;
};

export function PersonCard({ name, role, image, position, index }: PersonCardProps) {
  return (
    <article className="person-card">
      <div className="person-photo">
        {/* These public source images will be replaced by local originals when supplied. */}
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
      </div>
      <div className="person-meta">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </article>
  );
}
