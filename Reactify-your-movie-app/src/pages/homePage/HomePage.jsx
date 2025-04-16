import Header from "../../components/header/Header";
// import MovieCard from "../../components/movieCard/MovieCard";
import MovieCardList from "../../components/MovieCardList";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import "./homePage.css";

function HomePage({ homePageMovies, watchlist, toggleWatchlist }) {
  return (
    <>
      <Header />
      <section className="home-page">
        <Carousel homePageMovies={homePageMovies} />
        <h1 className="home-page__title">Top Movies</h1>
        <MovieCardList watchlist={watchlist} toggleWatchlist={toggleWatchlist} movies={homePageMovies} />
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
