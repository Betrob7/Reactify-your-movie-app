import { GiPopcorn } from "react-icons/gi";
import confetti from "canvas-confetti";
import "./popcornButton.css";

function PopcornButton({ movie, watchlist, toggleWatchlist }) {
  function triggerConfettiFromButton(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 40,
      spread: 50,
      startVelocity: 25,
      origin: { x, y },
      scalar: 0.8,
      zIndex: 9999,
    });
  }

  const inWatchlist = (watchlist || []).some((m) => m.imdbID === movie.imdbID);

  return (
    <button
      className={`popcorn-button__icon-btn ${inWatchlist ? "pop" : ""}`}
      aria-label={inWatchlist ? "remove from watchlist" : "add to watchlist"}
      onClick={(e) => {
        e.preventDefault();
        if (!inWatchlist) {
          triggerConfettiFromButton(e);
        }
        toggleWatchlist(movie);
      }}
    >
      <GiPopcorn />
    </button>
  );
}

export default PopcornButton;
