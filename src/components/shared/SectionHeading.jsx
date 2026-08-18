export default function SectionHeading({ index, eyebrow, title, description }) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="flex items-baseline gap-3 mb-3">
        {index && (
          <span
            className="font-mono text-xs tracking-wider"
            style={{ color: "var(--color-text-muted)" }}
          >
            {index}
          </span>
        )}
        <span
          className="font-mono text-xs uppercase tracking-[0.18em]"
          style={{ color: "var(--color-primary)" }}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className="text-3xl md:text-4xl font-semibold"
        style={{ color: "var(--color-text-primary)" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="mt-3 max-w-2xl text-base leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
