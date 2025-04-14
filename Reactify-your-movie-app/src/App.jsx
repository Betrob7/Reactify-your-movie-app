import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import WatchListPage from "./pages/watchlistPage/WatchListPage";
import SearchResultsPage from "./pages/searchResultsPage/SearchResultsPage";
import MovieDetailsPage from "./pages/movieDetailsPage/MovieDetailsPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* hämta id beroende på filmens omdb-id? useParams?*/}
        <Route path="/movie-details/:id" element={<MovieDetailsPage />} />
        <Route path="/search-results" element={<SearchResultsPage />} />
        <Route path="/watchlist" element={<WatchListPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
