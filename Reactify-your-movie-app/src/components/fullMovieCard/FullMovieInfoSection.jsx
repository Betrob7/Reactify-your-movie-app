import React from "react";
import { getValueOrDefault } from "../../utils/utils";
import MoviebasicInfo from "./MoviebasicInfo";
import MovieCredits from "./MovieCredits";
import MovieParagraph from "./MovieParagraph";

function FullMovieInfoSection({ movie }) {
  return (
    <section className="movie__info-section">
      <h1 className="movie__title">{movie.Title}</h1>
      <MoviebasicInfo movie={movie} />
      <MovieParagraph>{getValueOrDefault(movie.Plot)}</MovieParagraph>
      <MovieCredits movie={movie} />

      {/* <section className="movie__extra-info">
        <p className="movie__paragraph">{getValueOrDefault(movie.Runtime)}</p>
        <p className="movie__paragraph">{getValueOrDefault(movie.Genre)}</p>
        <p className="movie__paragraph">imdb Rating: {getValueOrDefault(movie.imdbRating)}</p>
      </section>

      <p className="movie__paragraph">{getValueOrDefault(movie.Plot)}</p>

      <section className="movie__extra-info">
        <p className="movie__paragraph">
          <strong>Director:</strong> {getValueOrDefault(movie.Director)}
        </p>
        <p className="movie__paragraph">
          <strong>Actors:</strong> {getValueOrDefault(movie.Actors)}
        </p>
      </section> */}
    </section>
  );
}

export default FullMovieInfoSection;
