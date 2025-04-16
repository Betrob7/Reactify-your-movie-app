import MovieCard from "./movieCard/MovieCard";
import "./movieCard/movieCard.css";

function MovieCardList({ movies, watchlist, toggleWatchlist }) {
  return (
    <section className="movie-card">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />
      ))}
    </section>
  );
}

export default MovieCardList;
