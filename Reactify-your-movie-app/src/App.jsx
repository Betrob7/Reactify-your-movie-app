import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import WatchListPage from "./pages/watchlistPage/WatchListPage";
import SearchResultsPage from "./pages/searchResultsPage/SearchResultsPage";
import MovieDetailsPage from "./pages/movieDetailsPage/MovieDetailsPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import { useState, useEffect } from "react";

import { loadWatchlist, saveWatchlist } from "./utils/localStorage";
import { fetchMovies } from "./utils/fetchMovies";

function App() {
  const [homePageMovies, setHomePageMovies] = useState([]);
  const [watchlist, setWatchlist] = useState(loadWatchlist); // useEffect gjorde att watchlist försvann vid uppdatering av sidan så fick göra såhär istället

  const url = "https://santosnr6.github.io/Data/favoritemovies.json";

  useEffect(() => {
    fetchMovies(url, setHomePageMovies);
  }, []);

  useEffect(() => {
    saveWatchlist(watchlist);
  }, [watchlist]);

  function toggleWatchlist(movie) {
    const exists = watchlist.find((m) => m.imdbID === movie.imdbID);
    if (exists) {
      setWatchlist(watchlist.filter((m) => m.imdbID !== movie.imdbID));
    } else {
      setWatchlist([...watchlist, movie]);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage watchlist={watchlist} toggleWatchlist={toggleWatchlist} homePageMovies={homePageMovies} />} />
        {/* hämta id beroende på filmens omdb-id? useParams?*/}
        <Route path="/movie-details/:id" element={<MovieDetailsPage watchlist={watchlist} toggleWatchlist={toggleWatchlist} />} />
        <Route path="/search" element={<SearchResultsPage watchlist={watchlist} toggleWatchlist={toggleWatchlist} />} />
        <Route path="/watchlist" element={<WatchListPage watchlist={watchlist} toggleWatchlist={toggleWatchlist} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/homePage/HomePage";
// import WatchListPage from "./pages/watchlistPage/WatchListPage";
// import SearchResultsPage from "./pages/searchResultsPage/SearchResultsPage";
// import MovieDetailsPage from "./pages/movieDetailsPage/MovieDetailsPage";
// import ErrorPage from "./pages/errorPage/ErrorPage";
// import { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//   const [homePageMovies, setHomePageMovies] = useState([]);
//   const [watchlist, setWatchlist] = useState(() => {
//     const saved = localStorage.getItem("watchlist");
//     return saved ? JSON.parse(saved) : [];
//   }); // useEffect gjorde att watchlist försvann vid uppdatering av sidan så fick göra såhär istället

//   const url = "https://santosnr6.github.io/Data/favoritemovies.json";

//   useEffect(() => {
//     localStorage.setItem("watchlist", JSON.stringify(watchlist));
//   }, [watchlist]);

//   function toggleWatchlist(movie) {
//     const exists = watchlist.find((m) => m.imdbID === movie.imdbID);
//     if (exists) {
//       setWatchlist(watchlist.filter((m) => m.imdbID !== movie.imdbID));
//     } else {
//       setWatchlist([...watchlist, movie]);
//     }
//   }

//   useEffect(() => {
//     axios
//       .get(url)
//       .then((response) => {
//         console.log(response.data);
//         const shuffled = response.data.sort(() => 0.5 - Math.random());
//         setHomePageMovies(shuffled);
//       })
//       .catch((error) => console.log(error));
//   }, []);
