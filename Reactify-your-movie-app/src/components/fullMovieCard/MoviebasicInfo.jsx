import React from "react";
import { getValueOrDefault } from "../../utils/utils";
import MovieParagraph from "./MovieParagraph";

function MoviebasicInfo({ movie }) {
  return (
    <section className="movie__extra-info">
      <MovieParagraph>{getValueOrDefault(movie.Runtime)}</MovieParagraph>
      <MovieParagraph>{getValueOrDefault(movie.Genre)}</MovieParagraph>
      <MovieParagraph>imdb Rating: {getValueOrDefault(movie.imdbRating)}</MovieParagraph>
    </section>
  );
}

export default MoviebasicInfo;
