import Header from "../../components/header/Header";
import MovieCard from "../../components/movieCard/MovieCard";
import Carousel from "../../components/carousel/Carousel";

function HomePage({homePageMovies, watchlist, toggleWatchlist}) {
  
 return (
    <>
    <Header />
    <section className="home-page">
      <Carousel homePageMovies={homePageMovies} />
      <MovieCard watchlist={watchlist} toggleWatchlist={toggleWatchlist} homePageMovies={homePageMovies} />
    </section>
    </>
  );
}

export default HomePage;
