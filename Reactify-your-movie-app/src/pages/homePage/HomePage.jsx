import Header from "../../components/header/Header";
import MovieCardList from "../../components/movieCard/MovieCardList";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import HeadingOne from "../../components/HeadingOne";
import "./homePage.css";

function HomePage({ homePageMovies, watchlist, toggleWatchlist }) {
  return (
    <>
      <Header />
      <main className="home-page">
        <Carousel homePageMovies={homePageMovies} />
        <HeadingOne title="Top Movies" className="home-page__title" />
        <MovieCardList watchlist={watchlist} toggleWatchlist={toggleWatchlist} movies={homePageMovies} className="movie-card__image" />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
