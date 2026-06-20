import config from "@/data/config";
import Reveal from "@/components/Reveal";
import Monogram from "@/components/Monogram";
import Sprig from "@/components/Sprig";

export default function Footer() {
  const { footer, couple, whatsapp } = config;
  const waUrl = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(
    `Halo ${whatsapp.contactName}, saya ingin konfirmasi kehadiran untuk pernikahan ${couple.groom.nickName} & ${couple.bride.nickName}.`
  )}`;

  return (
    <footer className="footer">
      <div className="container container--narrow">
        <Reveal>
          <Sprig size={20} className="sprig--light" />
          <p className="footer__closing">{footer.closing}</p>

          <a className="btn btn--outline-light footer__wa" href={waUrl} target="_blank" rel="noopener noreferrer">
            <span aria-hidden="true">💬</span> Konfirmasi via WhatsApp
          </a>

          <p className="footer__thanks">{footer.thanks}</p>
          <p className="footer__signoff">{footer.signOff}</p>

          <span className="footer__mono">
            <Monogram size={84} />
          </span>
          <h2 className="footer__names">
            {couple.groom.nickName} &amp; {couple.bride.nickName}
          </h2>
          <Sprig size={16} className="sprig--light" />
        </Reveal>

        <p className="footer__credit">
          Made with love · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
