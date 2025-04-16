import MovieCard from "./MovieCard";
import "./movieCard.css";

function MovieCardList({ movies, watchlist, toggleWatchlist, className }) {
  return (
    <section className="movie-card">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} watchlist={watchlist} toggleWatchlist={toggleWatchlist} className={className} />
      ))}
    </section>
  );
}

export default MovieCardList;
