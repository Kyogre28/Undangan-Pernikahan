"use client";

import { useEffect, useState } from "react";
import config from "@/data/config";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

function diff(target) {
  const total = Math.max(0, target - Date.now());
  return {
    days: Math.floor(total / 86400000),
    hours: Math.floor((total / 3600000) % 24),
    minutes: Math.floor((total / 60000) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

export default function Countdown() {
  const target = new Date(config.date.iso).getTime();
  const [t, setT] = useState(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "Hari", value: t.days },
    { label: "Jam", value: t.hours },
    { label: "Menit", value: t.minutes },
    { label: "Detik", value: t.seconds },
  ];

  const cal = (() => {
    const start = new Date(config.date.iso);
    const end = new Date(start.getTime() + 3 * 3600000);
    const fmt = (d) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: config.meta.title,
      dates: `${fmt(start)}/${fmt(end)}`,
      details: config.meta.description,
      location: config.events[0]?.venue || "",
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  })();

  return (
    <section className="section countdown" id="countdown">
      <div className="countdown__bg" aria-hidden="true" />
      <div className="container container--narrow">
        <Reveal>
          <SectionHeading eyebrow="Menghitung Hari" light />
          <h2 className="section__title section__title--light">{config.date.displayDate}</h2>
        </Reveal>

        <Reveal delay={120} className="countdown__grid">
          {units.map((u) => (
            <div className="countdown__unit" key={u.label}>
              {/* key berubah tiap angka berganti -> re-mount -> animasi pop otomatis terpicu */}
              <span className="countdown__num" key={u.value}>
                {String(u.value).padStart(2, "0")}
              </span>
              <span className="countdown__lbl">{u.label}</span>
            </div>
          ))}
        </Reveal>

        <Reveal delay={200}>
          <a className="btn btn--outline-light" href={cal} target="_blank" rel="noopener noreferrer">
            Simpan Tanggal
          </a>
        </Reveal>
      </div>
    </section>
  );
}
