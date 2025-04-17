import React from "react";
import MovieLabeledParagraph from "./MovieLabeledParagraph";

function MovieCredits({ movie }) {
  return (
    <dl className="movie__extra-info">
      <MovieLabeledParagraph label="Director" value={movie.Director} />
      <MovieLabeledParagraph label="Actors" value={movie.Actors} />
    </dl>
  );
}
export default MovieCredits;
