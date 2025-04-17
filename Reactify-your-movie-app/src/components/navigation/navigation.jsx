import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <Link className="header__nav" to="/watchlist">
                Watch List
            </Link>
        </nav>
    );
}

export default Navigation;
