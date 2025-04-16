import "./movieCard.css";
import { Link } from "react-router-dom";
import missingPoster from "../../assets/missing-poster.svg";
import PopcornButton from "../popcornButton/PopcornButton";

function MovieCard({ homePageMovies, watchlist, toggleWatchlist }) {
  return (
    <section className="movie-card">
      {homePageMovies.map((movie) => {
        return (
          <Link to={`/movie-details/${movie.imdbID}`} state={{ movie }} key={movie.imdbID}>
            <article className="movie-card__article">
              <PopcornButton watchlist={watchlist} toggleWatchlist={toggleWatchlist} movie={movie} />
              <img
                className="movie-card__image"
                src={movie.Poster !== "N/A" ? movie.Poster : missingPoster}
                alt={`Poster för filmen ${movie.Title}`}
              />
              <h3 className="movie-card__title">{movie.Title}</h3>
            </article>
          </Link>
        );
      })}
    </section>
  );
}

export default MovieCard;
