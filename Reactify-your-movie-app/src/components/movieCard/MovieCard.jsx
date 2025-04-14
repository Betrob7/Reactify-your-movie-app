import "./movieCard.css"

function MovieCard({homePageMovies}) {
  return (
    <section className="movie-card">
        {homePageMovies.map((movie) => (
            <article key={movie.imdbID} className="movie-card__article">
                <img className="movie-card__image" src={movie.Poster} alt={`Poster för filmen ${movie.Title}`} />
                <h3 className="movie-card__title">{movie.Title}</h3>
            </article>
        ))}
    </section>
  )
}

export default MovieCard
