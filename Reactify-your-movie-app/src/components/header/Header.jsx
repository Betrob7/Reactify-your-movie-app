import "./header.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Header() {
  const [query, setQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const apiUrl = "https://www.omdbapi.com/";
  const apiKey = "1a195302";

  useEffect(() => {
    if (!searchInput) return;

    axios
      .get(apiUrl, {
        params: {
          apikey: apiKey,
          s: searchInput,
        },
      })
      .then((response) => {
        if (response.data.Response === "True") {
          console.log("Sökresultat:", response.data.Search);
        } else {
          console.log("Inget resultat:", response.data.Error);
        }
      })
      .catch((error) => console.error("API-fel:", error));
  }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput(query);
  };

  return (
    <header className="header">
      <h1 className="">MovieApp</h1>
      <form onSubmit={handleSubmit} className="header__form">
        <input
          type="text"
          placeholder="Search movie..."
          aria-label="Searchfield for movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="header__form-input"
        />
        <button type="submit" className="header__form-btn" aria-label="Search for movie">
          Search
        </button>
      </form>
      <nav>
        <Link className="header__nav" to="/watchlist">
          Watch List
        </Link>
      </nav>
    </header>
  );
}

export default Header;
