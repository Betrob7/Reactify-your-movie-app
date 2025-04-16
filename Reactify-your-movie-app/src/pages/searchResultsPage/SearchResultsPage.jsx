import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
// import MovieCard from "../../components/movieCard/MovieCard";
import MovieCardList from "../../components/MovieCardList";
import Header from "../../components/header/Header";
import Message from "../../components/Message";
import Footer from "../../components/footer/Footer";
import "./searchResultsPage.css";
import HeadingTitle from "../../components/HeadingTitle";

function SearchResultsPage({ watchlist, toggleWatchlist }) {
  const [filmer, setFilmer] = useState([]);
  const [fel, setFel] = useState(null);

  const title = `Sökresultat för:`;
  const className = `movie-card__image`;

  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search).get("q");
  const apiKey = "1a195302";

  useEffect(() => {
    console.log("Query från URL:", query);
    if (!query) return;

    axios
      .get("https://www.omdbapi.com/", {
        params: {
          apikey: apiKey,
          s: query,
        },
      })
      .then((res) => {
        if (res.data.Response === "True") {
          const searchResults = res.data.Search;
          if (searchResults.length === 1) {
            const movie = searchResults[0];
            navigate(`/movie-details/${movie.imdbID}`, { state: { movie } });
          } else {
            setFilmer(res.data.Search);
            setFel(null);
          }
        } else {
          setFilmer([]);
          setFel(res.data.Error);
        }
      })
      .catch((err) => {
        console.error("Något gick fel:", err);
        setFel("Något gick fel.");
      });
  }, [query]);

  return (
    <>
      <Header />
      <section className="search-page">
        <HeadingTitle title={title} />
        <p className="search__paragraph">{query}</p>
        {fel && <Message message={fel} />}
        {!fel && <MovieCardList watchlist={watchlist} toggleWatchlist={toggleWatchlist} movies={filmer} className={className} />}
        {/* // <MovieCard watchlist={watchlist} toggleWatchlist={toggleWatchlist} homePageMovies={filmer} /> */}
      </section>
      <Footer />
      {/* <div>
        {filmer.map((film) => ( */}
      {/* //{" "}
      <div key={film.imdbID}>
        // <img src={film.Poster} alt={film.Title} width="100" />
        // <h3>{film.Title}</h3>
        // <p>{film.Year}</p>
        //{" "}
      </div> */}
      {/* ))}
      </div> */}
    </>
  );
}

export default SearchResultsPage;
