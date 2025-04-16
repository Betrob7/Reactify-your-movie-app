import Header from "../../components/header/Header";
import MovieCard from "../../components/movieCard/MovieCard";
import Carousel from "../../components/carousel/Carousel";
import "./homePage.css"

function HomePage({homePageMovies, watchlist, toggleWatchlist}) {
  
 return (
    <>
    <Header />
    <section className="home-page">
      <Carousel homePageMovies={homePageMovies} />
      <h1 className="home-page__title">Top Movies</h1>
      <MovieCard watchlist={watchlist} toggleWatchlist={toggleWatchlist} homePageMovies={homePageMovies} />
    </section>
    </>
  );
}

export default HomePage;
