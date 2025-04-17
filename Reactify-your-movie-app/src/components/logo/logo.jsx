import { Link } from "react-router-dom";
import movieIcon from "../../assets/movie-icon.png";

function Logo() {
    return (
        <Link className="header__nav" to="/">
            <img src={movieIcon} alt="Movie-app icon" className="movie-icon" />
            <h1 className="header__nav-title">MovieScout</h1>
        </Link>
    );
}

export default Logo;
