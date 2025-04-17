import React from "react";
import { getValueOrDefault } from "../../utils/utils";

function FullMovieSection({ movie }) {
  return (
    <section className="movie__info-section">
      <MovieParagraph>{movie.Title}</MovieParagraph>
      <MovieBasicInfo movie={movie} />
      <MovieParagraph>{getValueOrDefault(movie.Plot)}</MovieParagraph>
      <MovieCredits movie={movie} />
    </section>
  );
}

export default FullMovieSection;
