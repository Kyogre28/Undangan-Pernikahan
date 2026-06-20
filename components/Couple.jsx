import Image from "next/image";
import config from "@/data/config";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Sprig from "@/components/Sprig";

function Person({ person, side }) {
  return (
    <Reveal className="person" delay={side === "bride" ? 140 : 0}>
      <div className="person__photo">
        <Image
          src={person.photo}
          alt={person.fullName}
          fill
          sizes="(max-width: 700px) 70vw, 320px"
          className="person__img"
        />
      </div>
      <h3 className="person__name">{person.fullName}</h3>
      <p className="person__parents">
        {person.order}
        <br />
        {person.father}
        <br />
        {person.mother}
      </p>
      {person.instagram && (
        <a
          className="person__ig"
          href={`https://instagram.com/${person.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          @{person.instagram}
        </a>
      )}
    </Reveal>
  );
}

export default function Couple() {
  const { groom, bride } = config.couple;
  return (
    <section className="section couple" id="mempelai">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Mempelai" />
          <h2 className="section__title">Assalamualaikum Wr. Wb.</h2>
          <p className="section__lead">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
            menyelenggarakan acara pernikahan putra-putri kami:
          </p>
        </Reveal>

        <div className="couple__grid">
          <Person person={groom} side="groom" />
          <span className="couple__amp" aria-hidden="true">&amp;</span>
          <Person person={bride} side="bride" />
        </div>

        <Reveal delay={260} className="couple__footer">
          <Sprig size={20} />
        </Reveal>
      </div>
    </section>
  );
}
