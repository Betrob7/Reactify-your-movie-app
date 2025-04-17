import axios from "axios";

export const fetchMovies = async (url, setMovies) => {
  try {
    const response = await axios.get(url);
    const shuffled = response.data.sort(() => 0.5 - Math.random());
    setMovies(shuffled);
  } catch (error) {
    console.error("Fel vid hämtning av filmer:", error);
  }
};
