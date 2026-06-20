import config from "@/data/config";

function initial(name) {
  const n = (name || "").trim();
  return n ? n[0].toUpperCase() : "•";
}

export default function Monogram({ size = 88 }) {
  const g = initial(config.couple.groom.nickName || config.couple.groom.fullName);
  const b = initial(config.couple.bride.nickName || config.couple.bride.fullName);

  return (
    <svg
      className="monogram"
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
    >
      {/* ranting botani */}
      <path
        d="M60 6c-9 10-9 20 0 30 9-10 9-20 0-30Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.8"
      />
      <circle cx="60" cy="60" r="52" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
      <circle cx="60" cy="60" r="46" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
      <text
        x="42"
        y="72"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="40"
        fill="currentColor"
      >
        {g}
      </text>
      <text x="60" y="74" textAnchor="middle" fontFamily="var(--font-display)" fontSize="26" fill="currentColor" opacity="0.7">
        &amp;
      </text>
      <text
        x="80"
        y="72"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="40"
        fill="currentColor"
      >
        {b}
      </text>
    </svg>
  );
}
