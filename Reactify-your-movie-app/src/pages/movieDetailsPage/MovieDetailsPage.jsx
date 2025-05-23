import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../../components/header/Header";
import FullMovieCard from "../../components/fullMovieCard/FullMovieCard";
import Footer from "../../components/footer/Footer";
import Message from "../../components/Message";

import "./movieDetailsPage.css";

function MovieDetailsPage({ watchlist, toggleWatchlist, url, apiKey }) {
  const { id } = useParams();
  const location = useLocation();
  const stateMovie = location.state?.movie;

  const [movie, setMovie] = useState(stateMovie || null);
  const [loading, setLoading] = useState(!stateMovie);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (stateMovie && !movie.Plot) {
      axios
        .get(url, {
          params: {
            apikey: apiKey,
            i: id,
            plot: "full",
          },
        })
        .then((response) => {
          if (response.data.Response === "True") {
            setMovie((prevMovie) => ({
              ...prevMovie,
              ...response.data,
            }));
          } else {
            setError("Kunde inte hitta filmdata.");
          }
        })
        .catch((error) => {
          console.log("Något gick fel vid hämtning.", error);
          setError("Något gick fel vid hämtning.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id, movie, stateMovie]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="movie-page">
          <Message text="loading..." />
        </main>
      </>
    );
  }

  if (!movie || error) {
    return (
      <>
        <Header />
        <main className="movie-page">
          <Message text={error || "No movie to fetch"} />
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="movie-page">
        <FullMovieCard watchlist={watchlist} toggleWatchlist={toggleWatchlist} movie={movie} />
      </main>
      <Footer />
    </>
  );
}

export default MovieDetailsPage;
