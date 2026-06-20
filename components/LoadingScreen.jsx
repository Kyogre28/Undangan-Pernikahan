import Monogram from "@/components/Monogram";

export default function LoadingScreen() {
  return (
    <div className="loader" role="status" aria-label="Memuat undangan">
      <div className="loader__inner">
        <span className="loader__mono">
          <Monogram size={96} />
        </span>
        <span className="loader__line" />
        <span className="loader__text">Undangan Pernikahan</span>
      </div>
    </div>
  );
}
