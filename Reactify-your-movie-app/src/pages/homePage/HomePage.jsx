import Header from "../../components/header/Header";
// import MovieCard from "../../components/movieCard/MovieCard";
import MovieCardList from "../../components/MovieCardList";
import Carousel from "../../components/carousel/Carousel";

function HomePage({ homePageMovies, watchlist, toggleWatchlist }) {
  return (
    <>
      <Header />
      <section className="home-page">
        <Carousel homePageMovies={homePageMovies} />
        <MovieCardList watchlist={watchlist} toggleWatchlist={toggleWatchlist} movies={homePageMovies} />
      </section>
    </>
  );
}

export default HomePage;
