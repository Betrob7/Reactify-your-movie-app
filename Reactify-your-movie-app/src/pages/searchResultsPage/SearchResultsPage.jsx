// import React from "react";

// function SearchResultsPage() {
//   return <div>SearchResults</div>;
// }

// export default SearchResultsPage;

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function SearchResultsPage() {
  const [filmer, setFilmer] = useState([]);
  const [fel, setFel] = useState(null);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const apiKey = '1a195302';

  useEffect(() => {
    console.log("Query från URL:", query);
    if (!query) return;

    axios.get('https://www.omdbapi.com/', {
      params: {
        apikey: apiKey,
        s: query,
      },
    })
    .then(res => {
      if (res.data.Response === 'True') {
        setFilmer(res.data.Search);
        setFel(null);
      } else {
        setFilmer([]);
        setFel(res.data.Error);
      }
    })
    .catch(err => {
      console.log(err);
      setFel('Något gick fel.');
    });
  }, [query]);

  return (
    <main>
      <h2>Sökresultat för: {query}</h2>

      {fel && <p>{fel}</p>}

      <div>
        {filmer.map(film => (
          <div key={film.imdbID}>
            <img src={film.Poster} alt={film.Title} width="100" />
            <h3>{film.Title}</h3>
            <p>{film.Year}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default SearchResultsPage;

