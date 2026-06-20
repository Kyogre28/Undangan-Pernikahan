function Leaf() {
  return (
    <svg className="heading-flourish__leaf" width="34" height="14" viewBox="0 0 34 14" fill="none" aria-hidden="true">
      <path d="M0 7c8-7 18-8 24-3-6 6-16 7-24 3Z" fill="currentColor" opacity="0.8" />
      <path d="M24 4c4-2 7-1 9 1-2 3-6 3-9 1" stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.6" />
    </svg>
  );
}

export default function SectionHeading({ eyebrow, light = false }) {
  return (
    <div className={`heading-flourish ${light ? "heading-flourish--light" : ""}`}>
      <Leaf />
      <p className={`eyebrow eyebrow--center ${light ? "eyebrow--light" : ""}`} style={{ margin: 0 }}>
        {eyebrow}
      </p>
      <span style={{ transform: "scaleX(-1)", display: "inline-flex" }}>
        <Leaf />
      </span>
    </div>
  );
}
