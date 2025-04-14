import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Hämta filmer från API en gång
    fetch("https://santosnr6.github.io/Data/favoritemovies.json")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data); // Sätt filmsdata i state
      })
      .catch((error) => {
        console.error("Det gick inte att hämta filmer:", error);
      });
  }, []);

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            {/* Skickar hela filmobjektet via state */}
            <Link to={`/movie-details/${movie.imdbID}`} state={{ movie }}>
              {movie.Title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
