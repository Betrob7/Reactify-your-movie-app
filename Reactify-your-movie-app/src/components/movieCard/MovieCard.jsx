import { Link } from "react-router-dom";
import PopcornButton from "../popcornButton/PopcornButton";
import Poster from "../Poster";
import HeadingThree from "../HeadingThree";

function MovieCard({ movie, watchlist, toggleWatchlist, className }) {
  return (
    <Link to={`/movie/${movie.imdbID}`} state={{ movie }}>
      <article className="movie-card__article">
        <PopcornButton watchlist={watchlist} toggleWatchlist={toggleWatchlist} movie={movie} />
        <Poster poster={movie.Poster} title={movie.Title} className={className} />
        <HeadingThree text={movie.Title} className="movie-card__title" />
      </article>
    </Link>
  );
}

export default MovieCard;
