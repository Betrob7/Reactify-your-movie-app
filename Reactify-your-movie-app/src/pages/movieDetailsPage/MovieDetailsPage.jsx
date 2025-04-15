import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./movieDetailsPage.css";
import Header from "../../components/header/Header";
import { getValueOrDefault } from "../../utils/utils.js";

// för att länka till spec film  <Link to={`/movie-details/${movie.imdbID}`} state={{ movie }}></Link>

function MovieDetailsPage() {
  const { id } = useParams(); // Hämta omdbID från URL
  const location = useLocation();
  const stateMovie = location.state?.movie; // Hämtar filmen via state som skickades från HomePage
  const [movie, setMovie] = useState(stateMovie || null);
  const [loading, setLoading] = useState(!stateMovie);

  const missingPoster = "/assets/missing-poster.svg";
  const apiUrl = "https://www.omdbapi.com/";
  const apiKey = "1a195302";

  useEffect(() => {
    if (stateMovie && !movie.Plot) {
      // Om vi inte har en full plot från stateMovie, hämta från OMDb
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
              ...prevMovie, // Behåll tidigare data från stateMovie
              ...response.data, // Uppdatera med data från OMDb
            }));
          } else {
            setError("Kunde inte hitta filmdata.");
          }
        })
        .catch((error) => {
          console.log("Något gick fel vid hämtning.", error);
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
          <p className="movie__paragraph">Loading...</p>;
        </div>
      </>
    );
  }

  if (!movie) {
    return (
      <>
        <Header />
        <div className="wrapper">
          <p className="movie__paragraph movie__not-found">No movie to fetch...</p>
        </div>
      </>
    );
  }

  return (
    // döp allt till "{movie.Released}, {movie.Year}, {movie.Genre} etc."
    <>
      <Header />
      <div className="wrapper">
        <section className="movie__section">
          <section className="fav-section">
            <img src={movie.Poster === "N/A" ? missingPoster : movie.Poster} alt={`Poster for ${movie.Title}`} className="movie__poster" />
            <p className="movie__toggle-fav" aria-label="add or remove from watchlist">
              Add / remove
            </p>
          </section>
          <section className="movie__info-section" aria-labelledby="movie-info-heading">
            <h1 className="movie__title" id="movie-info-heading">
              {movie.Title}
            </h1>
            <section className="movie__extra-info">
              <p className="movie__paragraph">{getValueOrDefault(movie.Runtime)}</p>
              <p className="movie__paragraph">{getValueOrDefault(movie.Genre)}</p>
              <p className="movie__paragraph">imdb Rating: {getValueOrDefault(movie.imdbRating)}</p>
            </section>
            <p className="movie__paragraph">{getValueOrDefault(movie.Plot)} </p>
            <section className="movie__extra-info">
              <p className="movie__paragraph">
                <strong>Director:</strong> {getValueOrDefault(movie.Director)}
              </p>
              <p className="movie__paragraph">
                <strong>Actors:</strong> {getValueOrDefault(movie.Actors)}
              </p>
            </section>
          </section>
        </section>
      </div>
    </>
  );
}

export default MovieDetailsPage;
