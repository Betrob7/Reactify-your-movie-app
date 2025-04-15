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

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './header.css'

function Header() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      navigate(`/search?q=${text}`);
    }
  };

  return (
    <header className='header'>
      <h1>MovieApp</h1>
      <form className='header__form' onSubmit={handleSearch}>
        <input
          className='header__form-input'
          type="text"
          placeholder="Sök film..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className='header__form-btn' type="submit">Sök</button>
      </form>
      <nav>
        <Link className='header__nav' to="/watchlist">Watch List</Link>
      </nav>
    </header>
  );
}

export default Header;

