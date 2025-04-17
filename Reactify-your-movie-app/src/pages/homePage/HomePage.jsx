import Header from "../../components/header/Header";
import MovieCardList from "../../components/movieCard/MovieCardList";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import HeadingOne from "../../components/HeadingOne";
import "./homePage.css";

function HomePage({ homePageMovies, watchlist, toggleWatchlist }) {
  const imageClass = `movie-card__image`;
  const title = `Top Movies`;
  const headingClass = `home-page__title`;

  return (
    <>
      <Header />
      <main className="home-page">
        <Carousel homePageMovies={homePageMovies} />
        <HeadingOne title={title} className={headingClass} />
        <MovieCardList watchlist={watchlist} toggleWatchlist={toggleWatchlist} movies={homePageMovies} className={imageClass} />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
