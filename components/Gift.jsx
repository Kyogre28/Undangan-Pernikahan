"use client";

import { useState } from "react";
import Image from "next/image";
import config from "@/data/config";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Sprig from "@/components/Sprig";

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };
  return (
    <button className="bank__copy" onClick={copy} type="button">
      {copied ? "Tersalin ✓" : "Salin"}
    </button>
  );
}

export default function Gift() {
  const [open, setOpen] = useState(false);
  const { gift } = config;

  return (
    <section className="section gift" id="hadiah">
      <div className="container container--narrow">
        <Reveal>
          <SectionHeading eyebrow="Tanda Kasih" />
          <h2 className="section__title">Amplop Digital</h2>
          <p className="section__lead">{gift.note}</p>
          <Sprig size={18} />
        </Reveal>

        <Reveal delay={120}>
          {!open ? (
            <button className="btn btn--sage btn--block" onClick={() => setOpen(true)}>
              Kirim Hadiah
            </button>
          ) : (
            <div className="gift__panel">
              {gift.banks?.map((b, i) => (
                <div className="bank" key={i}>
                  <span className="event-card__corner event-card__corner--tl" aria-hidden="true" />
                  <span className="event-card__corner event-card__corner--br" aria-hidden="true" />
                  <p className="bank__name">{b.bank}</p>
                  <p className="bank__number">{b.number}</p>
                  <p className="bank__holder">a.n. {b.holder}</p>
                  <CopyButton value={b.number} />
                </div>
              ))}

              {gift.qris && (
                <div className="qris">
                  <p className="bank__name">QRIS</p>
                  <div className="qris__img">
                    <Image src={gift.qris} alt="QRIS" fill sizes="240px" style={{ objectFit: "contain" }} />
                  </div>
                </div>
              )}

              {gift.address?.recipient && (
                <div className="bank">
                  <p className="bank__name">Kirim Kado</p>
                  <p className="bank__holder">{gift.address.recipient}</p>
                  <p className="bank__number bank__number--sm">{gift.address.detail}</p>
                </div>
              )}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
