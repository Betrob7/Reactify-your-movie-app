import Header from "../../components/header/Header";
import MovieCard from "../../components/movieCard/MovieCard";
import "./watchListPage.css";

function WatchListPage({ watchlist = [], toggleWatchlist }) {
  if (!Array.isArray(watchlist) || watchlist.length === 0) {
    return (
      <>
        <Header />
        <section className="watchlist">
          <h2 className="watchlist__title">Min Watchlist</h2>
          <p className="watchlist__info">Din watchlist är tom.</p>
        </section>
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="watchlist">
        <h2 className="watchlist__title">Min Watchlist</h2>
        <MovieCard homePageMovies={watchlist} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />
      </section>
    </>
  );
}

export default WatchListPage;
