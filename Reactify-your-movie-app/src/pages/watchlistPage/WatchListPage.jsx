import Header from "../../components/header/Header";
import MovieCardList from "../../components/movieCard/MovieCardList";
import Message from "../../components/Message";
import HeadingOne from "../../components/HeadingOne";
import Footer from "../../components/footer/Footer";
import "./watchListPage.css";

function WatchListPage({ watchlist = [], toggleWatchlist }) {
  const isEmpty = !Array.isArray(watchlist) || watchlist.length === 0;

  return (
    <>
      <Header />
      <main className="watchlist">
        <HeadingOne title="Min Watchlist" className="watchlist__title" />
        {isEmpty ? (
          <Message message="Din watchlist är tom" />
        ) : (
          <MovieCardList watchlist={watchlist} toggleWatchlist={toggleWatchlist} movies={watchlist} className="movie-card__image" />
        )}
      </main>
      <Footer />
    </>
  );
}

export default WatchListPage;
