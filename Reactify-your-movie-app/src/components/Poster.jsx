import React from "react";
import missingPoster from "../assets/missing-poster.svg";

function Poster({ poster, title, className }) {
  return <img src={poster !== "N/A" ? poster : missingPoster} alt={`This is ${title}`} className={className} />;
}

export default Poster;

// movie__poster "movie-card__image"
