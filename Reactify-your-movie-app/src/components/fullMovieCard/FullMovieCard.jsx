import React from "react";
import { getValueOrDefault } from "../../utils/utils.js";
import "../../pages/movieDetailsPage/movieDetailsPage.css";
import missingPoster from "../../assets/missing-poster.svg";
import Poster from "../Poster.jsx";
import FullMovieInfoSection from "./FullMovieInfoSection.jsx";

function FullMovieCard({ movie }) {
  return (
    <section className="movie__section">
      <Poster poster={movie.Poster} title={movie.Title} />
      <FullMovieInfoSection movie={movie} />
      {/* <section className="fav-section">
        <img src={movie.Poster !== "N/A" ? movie.Poster : missingPoster} alt={`This is ${movie.Title}`} className="movie__poster" />
        <p className="movie__toggle-fav">Lägg till /ta bort</p>
      </section> */}

      {/* <section className="movie__info-section">
        <h1 className="movie__title">{movie.Title}</h1>

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
      </section> */}
    </section>
  );
}

export default FullMovieCard;
