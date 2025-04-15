import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { handleBlurErrorMessage, setErrorMessageTimeout } from "../../utils/utils";
import "./header.css";

function Header() {
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      setErrorMessage("Please enter a movie name");
    } else {
      setErrorMessage("");
      navigate(`/search?q=${text}`);
    }
  };

  const handleBlur = () => {
    handleBlurErrorMessage(errorMessage, setErrorMessage);
  };

  useEffect(() => {
    setErrorMessageTimeout(errorMessage, setErrorMessage);
  }, [errorMessage]);

  return (
    <header className="header">
      <Link className="header__nav" to="/">
        <h1>MovieApp</h1>
      </Link>
      <form className="header__form" onSubmit={handleSearch}>
        <input
          className="header__form-input"
          type="text"
          placeholder={errorMessage || "Search movie..."}
          aria-label="Search for movie"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleBlur}
        />
        <button className="header__form-btn" type="submit">
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

// import './header.css'
// import { Link } from 'react-router-dom';
// import { useState, useEffect } from "react";
// import axios from "axios";

// function Header() {

//   const [query, setQuery] = useState('');
//   const [searchInput, setSearchInput] = useState('');

//   const apiUrl = 'https://www.omdbapi.com/';
//   const apiKey = '1a195302';

//   useEffect(() => {
//     if (!searchInput) return;

//     axios
//       .get(apiUrl, {
//         params: {
//           apikey: apiKey,
//           s: searchInput,
//         },
//       })
//       .then((response) => {
//         if (response.data.Response === 'True') {
//           console.log('Sökresultat:', response.data.Search);
//         } else {
//           console.log('Inget resultat:', response.data.Error);
//         }
//       })
//       .catch((error) => console.error('API-fel:', error));
//   }, [searchInput]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSearchInput(query);
//   };

//     return (
//         <header className="header">
//           <h1 className="">MovieApp</h1>
//           <form onSubmit={handleSubmit} className="header__form">
//             <input
//               type="text"
//               placeholder="Sök film..."
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               className="header__form-input"
//             />
//             <button type="submit" className="header__form-btn">
//               Sök
//             </button>
//           </form>
//           <nav>
//             <Link className='header__nav' to="/watchlist">Watch List</Link>
//           </nav>
//         </header>
//       );
// }

// export default Header
