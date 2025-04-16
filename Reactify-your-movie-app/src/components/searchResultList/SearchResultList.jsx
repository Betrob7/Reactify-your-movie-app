// ta bort?
import MovieCard from "../movieCard/MovieCard";

function SearchResultList({ filmer, watchlist, toggleWatchlist }) {
  return <MovieCard homePageMovies={filmer} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />;
}

export default SearchResultList;
