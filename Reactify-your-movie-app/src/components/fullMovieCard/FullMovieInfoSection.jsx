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
    </section>
  );
}

export default FullMovieInfoSection;
