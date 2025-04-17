import React from "react";
import MovieLabeledParagraph from "./MovieLabeledParagraph";

function MovieCredits({ movie }) {
  return (
    <section className="movie__extra-info">
      <MovieLabeledParagraph label="Director" value={movie.Director} />
      <MovieLabeledParagraph label="Actors" value={movie.Actors} />
    </section>
  );
}
export default MovieCredits;
