import { Link } from "react-router-dom";
import PopcornButton from "../popcornButton/PopcornButton";
import Poster from "../Poster";

function MovieCard({ movie, watchlist, toggleWatchlist, className }) {
  return (
    <Link to={`/movie-details/${movie.imdbID}`} state={{ movie }}>
      <article className="movie-card__article">
        <PopcornButton watchlist={watchlist} toggleWatchlist={toggleWatchlist} movie={movie} />
        <Poster poster={movie.Poster} title={movie.Title} className={className} />
        <h3 className="movie-card__title">{movie.Title}</h3>
      </article>
    </Link>
  );
}

export default MovieCard;
