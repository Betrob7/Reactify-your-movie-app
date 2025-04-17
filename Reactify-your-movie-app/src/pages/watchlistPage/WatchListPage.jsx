import Header from "../../components/header/Header";
import MovieCardList from "../../components/movieCard/MovieCardList";
import Message from "../../components/Message";
import HeadingOne from "../../components/HeadingOne";
import Footer from "../../components/footer/Footer";
import "./watchListPage.css";

function WatchListPage({ watchlist = [], toggleWatchlist }) {
  const isEmpty = !Array.isArray(watchlist) || watchlist.length === 0;
  const title = `My Watch List`;
  const messagetext = `Your watch list is empty`;
  const className = `movie-card__image`;
  const headingClass = `watchlist__title`;

  return (
    <>
      <Header />
      <section className="watchlist">
        <HeadingOne title={title} className={headingClass} />
        {isEmpty ? (
          <Message message={messagetext} />
        ) : (
          <MovieCardList watchlist={watchlist} toggleWatchlist={toggleWatchlist} movies={watchlist} className={className} />
        )}
      </section>
      <Footer />
    </>
  );
}

export default WatchListPage;
