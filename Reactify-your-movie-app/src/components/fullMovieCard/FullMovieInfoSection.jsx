import React from "react";
import { getValueOrDefault } from "../../utils/utils";
import MoviebasicInfo from "./MoviebasicInfo";
import MovieCredits from "./MovieCredits";
import MovieParagraph from "./MovieParagraph";
import HeadingOne from "../HeadingOne";

function FullMovieInfoSection({ movie }) {
  return (
    <section className="movie__info-section">
      <HeadingOne title={movie.Title} className="movie__title" />
      <MoviebasicInfo movie={movie} />
      <MovieParagraph>{getValueOrDefault(movie.Plot)}</MovieParagraph>
      <MovieCredits movie={movie} />
    </section>
  );
}

export default FullMovieInfoSection;
