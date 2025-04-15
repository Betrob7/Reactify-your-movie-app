import "./movieCard.css";
import { Link } from "react-router-dom";

function MovieCard({ homePageMovies }) {
  return (
    <section className="movie-card">
      {homePageMovies.map((movie) => (
        <Link to={`/movie-details/${movie.imdbID}`} state={{ movie }} key={movie.imdbID}>
          <article className="movie-card__article">
            <img className="movie-card__image" src={movie.Poster} alt={`Poster för filmen ${movie.Title}`} />
            <h3 className="movie-card__title">{movie.Title}</h3>
          </article>
        </Link>
      ))}
    </section>
  );
}

export default MovieCard;
