import Logo from "../logo/logo";
import SearchBar from "../searchBar/searchBar";
import Navigation from "../navigation/navigation";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <Logo />
      <SearchBar />
      <Navigation />
    </header>
  );
}

export default Header;
