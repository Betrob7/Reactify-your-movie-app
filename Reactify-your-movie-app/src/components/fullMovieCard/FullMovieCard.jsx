import React from "react";
import FullMovieInfoSection from "./FullMovieInfoSection.jsx";
import FavSection from "../FavSection.jsx";
import "../../pages/movieDetailsPage/movieDetailsPage.css";

function FullMovieCard({ movie, watchlist, toggleWatchlist }) {
  const className = `movie__poster`;
  return (
    <section className="movie__section">
      <FavSection movie={movie} watchlist={watchlist} toggleWatchlist={toggleWatchlist} className={className} />
      <FullMovieInfoSection movie={movie} />
    </section>
  );
}

export default FullMovieCard;
