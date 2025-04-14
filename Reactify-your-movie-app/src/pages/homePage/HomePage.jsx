import { useState, useEffect } from "react"
import axios from "axios"
import Header from "../../components/header/Header";

function HomePage() {
    const [homePageMovies, setHomePageMovies] = useState([]);
    const url = "https://santosnr6.github.io/Data/favoritemovies.json";

    useEffect(() => {
        axios.get(url)
        .then(response => {
            console.log(response.data);
            const shuffled = response.data.sort(() => 0.5 - Math.random());
            setHomePageMovies(shuffled);
            })
        .catch(error => console.log(error));
        
    }, [])
      

    
    


  return (
    <section className="home-page">
      <Header />
    </section>
  )
}

export default HomePage
