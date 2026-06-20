import config from "@/data/config";
import Reveal from "@/components/Reveal";
import Monogram from "@/components/Monogram";
import Sprig from "@/components/Sprig";

export default function Opening() {
  const { cover, couple, date } = config;

  return (
    <section className="section opening" id="opening">
      <div className="container container--narrow">
        <Reveal>
          <p className="bismillah">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
        </Reveal>

        {cover.verse && (
          <Reveal delay={120}>
            <p className="opening__verse">&ldquo;{cover.verse}&rdquo;</p>
            <p className="opening__verse-src">— {cover.verseSource}</p>
          </Reveal>
        )}

        <Reveal delay={200} className="opening__mono">
          <Monogram size={80} />
        </Reveal>

        <Reveal delay={240}>
          <Sprig size={20} />
        </Reveal>

        <Reveal delay={260}>
          <p className="eyebrow eyebrow--center">Kami yang berbahagia</p>
          <h2 className="opening__names">
            {couple.groom.nickName} <span>&amp;</span> {couple.bride.nickName}
          </h2>
          <p className="opening__date">{date.displayDate}</p>
        </Reveal>
      </div>
    </section>
  );
}
