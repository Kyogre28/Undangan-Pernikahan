export default function Sprig({ size = 28, className = "" }) {
  return (
    <svg
      className={`sprig ${className}`}
      width={size * 3}
      height={size}
      viewBox="0 0 84 28"
      fill="none"
      aria-hidden="true"
    >
      <path d="M2 14 H34" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
      <path d="M82 14 H50" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
      {/* daun kiri */}
      <path d="M34 14c-4-5-10-6-15-3 3 5 9 7 15 3Z" fill="currentColor" opacity="0.85" />
      <path d="M28 14c-3-4-7-5-11-3 2 4 6 5 11 3Z" fill="currentColor" opacity="0.55" />
      {/* daun kanan */}
      <path d="M50 14c4-5 10-6 15-3-3 5-9 7-15 3Z" fill="currentColor" opacity="0.85" />
      <path d="M56 14c3-4 7-5 11-3-2 4-6 5-11 3Z" fill="currentColor" opacity="0.55" />
      {/* simpul tengah */}
      <circle cx="42" cy="14" r="2.6" fill="currentColor" />
    </svg>
  );
}
