import React from "react";
import missingPoster from "../assets/missing-poster.svg";

function Poster({ poster, title }) {
  return (
    <section className="fav-section">
      <img src={poster !== "N/A" ? poster : missingPoster} alt={`This is ${title}`} className="movie__poster" />
      <p className="movie__toggle-fav">Lägg till /ta bort</p>
    </section>
  );
}

export default Poster;
