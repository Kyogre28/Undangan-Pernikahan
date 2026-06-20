"use client";

export default function MusicPlayer({ playing, onToggle }) {
  return (
    <button
      className={`music ${playing ? "music--on" : ""}`}
      onClick={onToggle}
      aria-label={playing ? "Matikan musik" : "Nyalakan musik"}
      title={playing ? "Matikan musik" : "Nyalakan musik"}
    >
      <span className="music__disc" aria-hidden="true">
        ♪
      </span>
    </button>
  );
}
