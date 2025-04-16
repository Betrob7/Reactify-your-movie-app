import React from "react";
import missingPoster from "../assets/missing-poster.svg";

function Poster({ poster, title }) {
  return <img src={poster !== "N/A" ? poster : missingPoster} alt={`This is ${title}`} className="movie__poster" />;
}

export default Poster;
