import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./movieDetailsPage.css";

function MovieDetailsPage() {
  const { id } = useParams(); // Hämta omdbID från URL
  const location = useLocation();
  const movie = location.state?.movie; // Hämtar filmen via state som skickades från HomePage

  const missingPoster = "/assets/missing-poster.svg";

  if (!movie) {
    return <p className="movie__paragraph movie__not-found">Ingen film att hämta</p>;
  }
  return (
    // döp allt till "{movie.Released}, {movie.Year}, {movie.Genre} etc."
    <section className="movie__section">
      <section className="fav-section">
        <img src={movie.Poster} alt={`This is ${movie.Title}`} className="movie__poster" />
        <p className="movie__toggle-fav">Lägg till /ta bort</p>
      </section>
      <section className="movie__info-section">
        <h1 className="movie__title">{movie.Title}</h1>
        <section className="movie__extra-info">
          <p className="movie__paragraph">year</p>
          <p className="movie__paragraph">Genre</p>
          <p className="movie__paragraph">Released</p>
        </section>
        <p className="movie__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula dolor ut magna faucibus dictum. Cras sed nisl dui. Etiam
          egestas velit et libero gravida cursus. In at pretium justo, vitae facilisis erat. Ut nibh risus, sodales a commodo ac, eleifend
          in erat. Donec fringilla, turpis aliquet posuere suscipit, ligula diam malesuada nunc, sit amet facilisis velit justo et leo.
          Donec sed elit nec ipsum ultricies eleifend vel vitae massa. Donec id nisl vehicula, efficitur lacus vel, interdum eros. Phasellus
          eleifend, nulla non ornare volutpat, tortor tellus elementum metus, vitae consectetur nisi odio eu quam. Maecenas non velit
          bibendum augue vehicula interdum. Aenean eu tincidunt tellus. Sed convallis interdum ullamcorper.
        </p>
      </section>
    </section>
  );
}

export default MovieDetailsPage;
