"use client";

import { useState } from "react";
import Image from "next/image";
import config from "@/data/config";
import Monogram from "@/components/Monogram";

export default function Cover({ opened, guest, onOpen }) {
  const { cover, couple } = config;
  const [closing, setClosing] = useState(false);

  const handleClick = () => {
    setClosing(true); // mulai animasi: isi memudar dulu
    setTimeout(() => {
      onOpen(); // lalu panel cover terbuka & musik mulai
    }, 480);
  };

  return (
    <section
      className={`cover ${opened ? "cover--open" : ""} ${closing ? "cover--closing" : ""}`}
      aria-hidden={opened}
    >
      <div className="cover__media">
        <Image
          src={cover.coverImage}
          alt={`${couple.groom.nickName} & ${couple.bride.nickName}`}
          fill
          priority
          sizes="100vw"
          className="cover__img"
        />
        <div className="cover__scrim" />
      </div>

      <div className="cover__body">
        <p className="eyebrow eyebrow--light">{cover.eyebrow}</p>
        <Monogram size={70} />
        <h1 className="cover__names">
          {couple.groom.nickName}
          <span className="cover__amp">&amp;</span>
          {couple.bride.nickName}
        </h1>
        <p className="cover__date">{config.date.displayDate}</p>

        <div className="cover__invite">
          <p className="cover__to-label">Kepada Yth.</p>
          <p className="cover__guest">{guest || "Bapak / Ibu / Saudara/i"}</p>
        </div>

        <button className="btn btn--gold" onClick={handleClick} disabled={closing}>
          <span className="btn__icon" aria-hidden="true">✉</span>
          {closing ? "Membuka..." : "Buka Undangan"}
        </button>
      </div>

      {/* lapisan garis emas, ala flap amplop terbuka */}
      <span className="cover__seam" aria-hidden="true" />
    </section>
  );
}
