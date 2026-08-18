/**
 * Signature element — a set of hand-tuned topographic contour lines,
 * a quiet nod to the GIS/spatial-analysis thread running through the
 * projects below. Rendered in the primary color at low opacity so it
 * reads as texture, not decoration.
 */
export default function ContourPattern({ className = "" }) {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="var(--color-primary)" strokeWidth="1.1">
        <path
          d="M40 460 C 120 420, 160 500, 240 470 S 360 380, 440 430 S 540 500, 580 460"
          opacity="0.14"
        />
        <path
          d="M20 400 C 110 350, 170 440, 250 400 S 380 320, 460 370 S 560 430, 590 390"
          opacity="0.18"
        />
        <path
          d="M10 340 C 100 280, 190 370, 270 330 S 400 260, 470 310 S 560 350, 595 320"
          opacity="0.22"
        />
        <path
          d="M30 280 C 120 220, 200 300, 280 260 S 400 200, 480 250 S 550 270, 585 250"
          opacity="0.26"
        />
        <path
          d="M60 220 C 140 170, 210 240, 290 200 S 400 150, 470 190 S 540 200, 570 185"
          opacity="0.3"
        />
        <path
          d="M100 165 C 170 130, 230 180, 300 150 S 390 110, 450 140"
          opacity="0.34"
        />
      </g>
      <g fill="var(--color-accent)">
        <circle cx="300" cy="160" r="3.5" opacity="0.7" />
      </g>
    </svg>
  );
}
