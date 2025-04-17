import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import MovieCardList from "../../components/movieCard/MovieCardList";
import Header from "../../components/header/Header";
import Message from "../../components/Message";
import Footer from "../../components/footer/Footer";
import HeadingOne from "../../components/HeadingOne";

import "./searchResultsPage.css";

function SearchResultsPage({ watchlist, toggleWatchlist, url, apiKey }) {
  const [filmer, setFilmer] = useState([]);
  const [fel, setFel] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("q");

  const title = `Search resluts for:`;
  const imgClass = `movie-card__image`;
  const headingClass = "search__title";

  useEffect(() => {
    console.log("Query från URL:", query);
    if (!query) return;

    axios
      .get(url, {
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
        <HeadingOne title={title} className={headingClass} />
        <p className="search__paragraph">{query}</p>
        {fel && <Message message={fel} />}
        {!fel && <MovieCardList watchlist={watchlist} toggleWatchlist={toggleWatchlist} movies={filmer} className={imgClass} />}
      </section>
      <Footer />
    </>
  );
}

export default SearchResultsPage;
