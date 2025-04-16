import { Link } from "react-router-dom";
import PopcornButton from "../popcornButton/PopcornButton";
import Poster from "../Poster";
import HeadingThree from "../HeadingThree";

function MovieCard({ movie, watchlist, toggleWatchlist, className }) {
  const headingClass = `movie-card__title`;
  return (
    <Link to={`/movie-details/${movie.imdbID}`} state={{ movie }}>
      <article className="movie-card__article">
        <PopcornButton watchlist={watchlist} toggleWatchlist={toggleWatchlist} movie={movie} />
        <Poster poster={movie.Poster} title={movie.Title} className={className} />
        <HeadingThree text={movie.Title} className={headingClass} />
      </article>
    </Link>
  );
}

export default MovieCard;
