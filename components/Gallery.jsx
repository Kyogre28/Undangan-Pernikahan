"use client";

import { useState } from "react";
import Image from "next/image";
import config from "@/data/config";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Sprig from "@/components/Sprig";

export default function Gallery() {
  const [active, setActive] = useState(null);
  const photos = config.gallery || [];

  return (
    <section className="section gallery" id="galeri">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Momen" />
          <h2 className="section__title">Galeri</h2>
        </Reveal>

        <div className="gallery__grid">
          {photos.map((src, i) => (
            <Reveal
              as="button"
              className="gallery__item"
              delay={i * 90}
              key={src + i}
            >
              <span className="gallery__btn" onClick={() => setActive(src)}>
                <Image
                  src={src}
                  alt={`Foto ${i + 1}`}
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                  className="gallery__img"
                />
                <span className="gallery__frame" aria-hidden="true" />
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="gallery__footer">
          <Sprig size={20} />
        </Reveal>
      </div>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <button className="lightbox__close" aria-label="Tutup">×</button>
          <div className="lightbox__frame" onClick={(e) => e.stopPropagation()}>
            <Image src={active} alt="Foto besar" fill sizes="90vw" className="lightbox__img" />
          </div>
        </div>
      )}
    </section>
  );
}
