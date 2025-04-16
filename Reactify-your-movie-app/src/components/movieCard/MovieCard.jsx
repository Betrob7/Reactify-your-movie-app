import { Link } from "react-router-dom";
import { GiPopcorn } from "react-icons/gi";
import confetti from "canvas-confetti";
import missingPoster from "../../assets/missing-poster.svg";
import "./movieCard.css";

function MovieCard({ movie, watchlist, toggleWatchlist }) {
  const inWatchlist = (watchlist || []).some((m) => m.imdbID === movie.imdbID);

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
    <Link to={`/movie-details/${movie.imdbID}`} state={{ movie }}>
      <article className="movie-card__article">
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
          {inWatchlist ? <GiPopcorn className="popcorn-filled" /> : <GiPopcorn />}
        </button>

        <img
          className="movie-card__image"
          src={movie.Poster !== "N/A" ? movie.Poster : missingPoster}
          alt={`Poster för filmen ${movie.Title}`}
        />
        <h3 className="movie-card__title">{movie.Title}</h3>
      </article>
    </Link>
  );
}

export default MovieCard;

// import "./movieCard.css";
// import { Link } from "react-router-dom";
// import { GiPopcorn } from "react-icons/gi";
// import confetti from "canvas-confetti";
// import missingPoster from "../../assets/missing-poster.svg";

// function MovieCard({ homePageMovies, watchlist, toggleWatchlist }) {
//   function triggerConfettiFromButton(e) {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = (rect.left + rect.width / 2) / window.innerWidth;
//     const y = (rect.top + rect.height / 2) / window.innerHeight;

//     confetti({
//       particleCount: 40,
//       spread: 50,
//       startVelocity: 25,
//       origin: { x, y },
//       scalar: 0.8,
//       zIndex: 9999,
//     });
//   }

//   return (
//     <section className="movie-card">
//       {homePageMovies.map((movie) => {
//         const inWatchlist = (watchlist || []).some((m) => m.imdbID === movie.imdbID);

//         return (
//           <Link to={`/movie-details/${movie.imdbID}`} state={{ movie }} key={movie.imdbID}>
//             <article className="movie-card__article">
//               <button
//                 className={`movie-card__icon-btn ${inWatchlist ? "pop" : ""}`}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   if (!inWatchlist) {
//                     triggerConfettiFromButton(e);
//                   }
//                   toggleWatchlist(movie);
//                 }}
//               >
//                 {inWatchlist && <GiPopcorn className="popcorn-filled" />}
//                 {!inWatchlist && <GiPopcorn />}
//               </button>

//               <img
//                 className="movie-card__image"
//                 src={movie.Poster !== "N/A" ? movie.Poster : missingPoster}
//                 alt={`Poster för filmen ${movie.Title}`}
//               />
//               <h3 className="movie-card__title">{movie.Title}</h3>
//             </article>
//           </Link>
//         );
//       })}
//     </section>
//   );
// }

// export default MovieCard;
