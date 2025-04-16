import React from "react";
import missingPoster from "../assets/missing-poster.svg";
import PopcornButton from "./popcornButton/PopcornButton";

function Poster({ watchlist, toggleWatchlist, movie }) {
  return (
    <section className="fav-section">
      <PopcornButton movie={movie} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />
      <img src={movie.Poster !== "N/A" ? movie.Poster : missingPoster} alt={`This is ${movie.Title}`} className="movie__poster" />
    </section>
  );
}

export default Poster;
