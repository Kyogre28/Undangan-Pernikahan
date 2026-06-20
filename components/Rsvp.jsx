"use client";

import { useState } from "react";
import config from "@/data/config";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Sprig from "@/components/Sprig";

export default function Rsvp() {
  const [form, setForm] = useState({
    name: "",
    attendance: config.rsvp.attendanceOptions[0],
    guests: 1,
  });
  const [status, setStatus] = useState("idle");

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "rsvp", ...form }),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  };

  const waText = encodeURIComponent(
    `Halo, saya ${form.name || "(nama)"} konfirmasi kehadiran: ${form.attendance} (${form.guests} orang) untuk pernikahan ${config.couple.groom.nickName} & ${config.couple.bride.nickName}.`
  );
  const waUrl = `https://wa.me/${config.whatsapp.number}?text=${waText}`;

  return (
    <section className="section rsvp" id="rsvp">
      <div className="container container--narrow">
        <Reveal>
          <SectionHeading eyebrow="Konfirmasi Kehadiran" />
          <h2 className="section__title">RSVP</h2>
          <p className="section__lead">
            Mohon konfirmasi kehadiran Anda untuk membantu kami mempersiapkan acara.
          </p>
          <Sprig size={18} />
        </Reveal>

        {status === "ok" ? (
          <Reveal className="rsvp__done">
            <p className="rsvp__done-icon">✓</p>
            <p>Terima kasih, konfirmasi Anda sudah kami terima.</p>
          </Reveal>
        ) : (
          <Reveal delay={120}>
            <form className="form" onSubmit={submit}>
              <label className="field">
                <span className="field__label">Nama</span>
                <input
                  className="field__input"
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Nama Anda"
                  required
                />
              </label>

              <label className="field">
                <span className="field__label">Kehadiran</span>
                <select className="field__input" value={form.attendance} onChange={update("attendance")}>
                  {config.rsvp.attendanceOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </label>

              <label className="field">
                <span className="field__label">Jumlah tamu</span>
                <input
                  className="field__input"
                  type="number"
                  min="1"
                  max="10"
                  value={form.guests}
                  onChange={update("guests")}
                />
              </label>

              <button className="btn btn--gold btn--block" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Mengirim..." : "Kirim Konfirmasi"}
              </button>

              {status === "error" && (
                <p className="form__error">
                  Gagal mengirim. Anda bisa konfirmasi lewat{" "}
                  <a href={waUrl} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                  .
                </p>
              )}

              <a className="rsvp__wa" href={waUrl} target="_blank" rel="noopener noreferrer">
                atau konfirmasi via WhatsApp
              </a>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
}
