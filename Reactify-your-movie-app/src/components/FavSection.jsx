import React from "react";
import PopcornButton from "./popcornButton/PopcornButton";
import Poster from "./Poster";

function FavSection({ movie, watchlist, toggleWatchlist }) {
  return (
    <section className="fav-section">
      <PopcornButton movie={movie} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />
      <Poster poster={movie.Poster} title={movie.Title} />
    </section>
  );
}

export default FavSection;
