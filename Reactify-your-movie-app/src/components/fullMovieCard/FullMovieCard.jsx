import React from "react";
import "../../pages/movieDetailsPage/movieDetailsPage.css";

import FullMovieInfoSection from "./FullMovieInfoSection.jsx";
import FavSection from "../FavSection.jsx";

function FullMovieCard({ movie, watchlist, toggleWatchlist }) {
  return (
    <section className="movie__section">
      <FavSection movie={movie} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />
      <FullMovieInfoSection movie={movie} />
    </section>
  );
}

export default FullMovieCard;
