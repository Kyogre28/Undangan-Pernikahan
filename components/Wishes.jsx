"use client";

import { useEffect, useState } from "react";
import config from "@/data/config";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Sprig from "@/components/Sprig";

export default function Wishes() {
  const [list, setList] = useState(config.wishes.seed || []);
  const [form, setForm] = useState({ name: "", message: "" });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    fetch("/api/wishes")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && Array.isArray(data.wishes) && data.wishes.length) {
          setList([...(config.wishes.seed || []), ...data.wishes]);
        }
      })
      .catch(() => {});
  }, []);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    setStatus("sending");
    setList((prev) => [...prev, { name: form.name, message: form.message }]);
    try {
      await fetch("/api/wishes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "wish", ...form }),
      });
      setStatus("ok");
      setForm({ name: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section wishes" id="ucapan">
      <div className="container container--narrow">
        <Reveal>
          <SectionHeading eyebrow="Doa Restu" />
          <h2 className="section__title">Ucapan &amp; Doa</h2>
          <p className="section__lead">Kirimkan ucapan dan doa terbaik Anda untuk kami.</p>
          <Sprig size={18} />
        </Reveal>

        <Reveal delay={120}>
          <form className="form" onSubmit={submit}>
            <label className="field">
              <span className="field__label">Nama</span>
              <input className="field__input" value={form.name} onChange={update("name")} placeholder="Nama Anda" required />
            </label>
            <label className="field">
              <span className="field__label">Ucapan &amp; doa</span>
              <textarea
                className="field__input field__input--area"
                value={form.message}
                onChange={update("message")}
                rows={3}
                placeholder="Tulis ucapan Anda..."
                required
              />
            </label>
            <button className="btn btn--gold btn--block" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Mengirim..." : "Kirim Ucapan"}
            </button>
          </form>
        </Reveal>

        <div className="wishes__list">
          {list.map((w, i) => (
            <Reveal className="wish" delay={Math.min(i * 60, 240)} key={i}>
              <p className="wish__name">{w.name}</p>
              <p className="wish__msg">{w.message}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
