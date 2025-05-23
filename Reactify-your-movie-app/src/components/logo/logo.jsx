import { Link } from "react-router-dom";
import movieIcon from "../../assets/movie-icon.png";
import HeadingOne from "../HeadingOne";

function Logo() {
  return (
    <Link className="header__nav" to="/">
      <img src={movieIcon} alt="Movie-app icon" className="movie-icon" />
      <HeadingOne title="MovieScout" className="header__nav-title" />
    </Link>
  );
}

export default Logo;
