//NPM Packages
import { useState, FC } from "react";

//Local Files
import droparrow from "assets/icon/droparrow.svg";
import iSeason from "types/iSeason";

interface IProps {
  data: iSeason[];
  hook: any[];
}

const Sorter: FC<IProps> = ({ data, hook }) => {
  const [season, setSeason] = hook;
  const [isOpen, setIsOpen] = useState(false);

  const ListItems = data.map((item, index) => (
    <li key={index}>
      <button
        onClick={() => {
          setSeason(index + 1);
          setIsOpen(!isOpen);
        }}
      >
        Season {index + 1}
        <em> ({item.episodes.length} Episodes)</em>
      </button>
    </li>
  ));

  return (
    <section className="sorter">
      <h3>Episodes</h3>
      <button
        className={isOpen ? "btn-season open" : "btn-season"}
        onClick={() => setIsOpen(!isOpen)}
      >
        Season {season} <img src={droparrow} alt="" />
      </button>
      {isOpen && <ul className="caret">{ListItems}</ul>}
    </section>
  );
};
export default Sorter;
