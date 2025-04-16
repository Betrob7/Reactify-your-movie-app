import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./movieDetailsPage.css";
import Header from "../../components/header/Header";
import FullMovieCard from "../../components/fullMovieCard/FullMovieCard";

function MovieDetailsPage({watchlist, toggleWatchlist}) {
  const { id } = useParams();
  const location = useLocation();
  const stateMovie = location.state?.movie;
  const [movie, setMovie] = useState(stateMovie || null);
  const [loading, setLoading] = useState(!stateMovie);
  const [error, setError] = useState(null);

  const apiUrl = "https://www.omdbapi.com/";
  const apiKey = "1a195302";

  useEffect(() => {
    if (stateMovie && !movie.Plot) {
      axios
        .get(apiUrl, {
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
        <div className="wrapper">
          <p className="movie__paragraph">Laddar...</p>
        </div>
      </>
    );
  }

  if (!movie || error) {
    return (
      <>
        <Header />
        <div className="wrapper">
          <p className="movie__paragraph movie__not-found">{error || "Ingen film att hämta"}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="wrapper">
        <FullMovieCard watchlist={watchlist} toggleWatchlist={toggleWatchlist} movie={movie} />
      </div>
    </>
  );
}

export default MovieDetailsPage;
