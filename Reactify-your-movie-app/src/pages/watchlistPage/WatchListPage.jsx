import Header from "../../components/header/Header";
// import MovieCard from "../../components/movieCard/MovieCard";
import MovieCardList from "../../components/MovieCardList";
import Message from "../../components/Message";
import HeadingTitle from "../../components/HeadingTitle";
import Footer from "../../components/footer/Footer";
import "./watchListPage.css";

function WatchListPage({ watchlist = [], toggleWatchlist }) {
  const isEmpty = !Array.isArray(watchlist) || watchlist.length === 0;
  const title = `Min Watchlist`;
  const messagetext = `Din watchlist är tom`;

  return (
    <>
      <Header />
      <section className="watchlist">
        <HeadingTitle title={title} />
        {isEmpty ? (
          <Message message={messagetext} />
        ) : (
          <MovieCardList watchlist={watchlist} toggleWatchlist={toggleWatchlist} movies={watchlist} />
          // <MovieCard homePageMovies={watchlist} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />
        )}
      </section>
      <Footer />
    </>
  );
}

export default WatchListPage;
