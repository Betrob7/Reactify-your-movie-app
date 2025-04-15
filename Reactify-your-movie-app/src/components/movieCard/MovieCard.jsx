import "./movieCard.css";
import { Link } from "react-router-dom";
import { GiPopcorn } from "react-icons/gi";
import confetti from "canvas-confetti";

function MovieCard({ homePageMovies, watchlist, toggleWatchlist }) {
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

  return (
    <section className="movie-card">
      {homePageMovies.map((movie) => {
        const inWatchlist = (watchlist || []).some((m) => m.imdbID === movie.imdbID);

        return (
          <article key={movie.imdbID} className="movie-card__article">
            <button
              className={`movie-card__icon-btn ${inWatchlist ? "pop" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                if (!inWatchlist) {
                  triggerConfettiFromButton(e);
                }
                toggleWatchlist(movie);
              }}
            >
              {inWatchlist && <GiPopcorn className="popcorn-filled" />}
              {!inWatchlist && <GiPopcorn />}
            </button>

            <Link to={`/movie-details/${movie.imdbID}`} state={{ movie }}>
              <img className="movie-card__image" src={movie.Poster} alt={`Poster för filmen ${movie.Title}`} />
              <h3 className="movie-card__title">{movie.Title}</h3>
            </Link>
          </article>
        );
      })}
    </section>
  );
}

export default MovieCard;
