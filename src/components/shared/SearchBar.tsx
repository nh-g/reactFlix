// NPM packages
import { useState, FC } from "react";
import { useHistory } from "react-router-dom";

// Project files
import searchIcon from "assets/images/search.png";

const SearchBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();
  return (
    <div className={isOpen ? "searchbar-open" : "searchbar"}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <img src={searchIcon} alt="" />
      </button>
      {isOpen && (
        <input
          required
          type="text"
          placeholder="Titles"
          onChange={(event) => {
            history.push(`/search/${event.target.value.replace(/\s/g, "")}`);
          }}
        />
      )}
    </div>
  );
};

export default SearchBar;
