import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    handleBlurErrorMessage,
    setErrorMessageTimeout,
} from "../../utils/utils";

function SearchBar() {
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

    return (
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
    );
}

export default SearchBar;
