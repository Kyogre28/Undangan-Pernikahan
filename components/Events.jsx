import config from "@/data/config";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Sprig from "@/components/Sprig";

export default function Events() {
  return (
    <section className="section events" id="acara">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Waktu & Tempat" />
          <h2 className="section__title">Detail Acara</h2>
        </Reveal>

        <div className="events__grid">
          {config.events.map((ev, i) => (
            <Reveal className="event-card" delay={i * 120} key={ev.name}>
              <span className="event-card__corner event-card__corner--tl" aria-hidden="true" />
              <span className="event-card__corner event-card__corner--br" aria-hidden="true" />
              <h3 className="event-card__name">{ev.name}</h3>
              <Sprig size={18} className="event-card__sprig" />
              <p className="event-card__date">{ev.date}</p>
              <p className="event-card__time">{ev.time}</p>
              <p className="event-card__venue">{ev.venue}</p>
              {ev.address && <p className="event-card__addr">{ev.address}</p>}
              {ev.mapsUrl ? (
                <a
                  className="btn btn--sage"
                  href={ev.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span aria-hidden="true">📍</span> Lihat Lokasi
                </a>
              ) : (
                <span className="event-card__soon">Lokasi menyusul</span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
