//NPM Packages
import { useState, FC } from "react";
import { useHistory } from "react-router-dom";

//Local Files
import loupe from "assets/images/loupe.png";

const SearchBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();
  return (
    <div className={isOpen ? "searchbar-open" : "searchbar"}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <img src={loupe} alt="" />
      </button>
      {isOpen && (
        <input
          type="text"
          placeholder="Titles"
          onChange={(e) => {
            history.push(`/search/${e.target.value}`);
          }}
        />
      )}
    </div>
  );
};

export default SearchBar;
