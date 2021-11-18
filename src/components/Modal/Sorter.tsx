// NPM packages
import { useState } from "react";

// Project files
import iSeason from "types/iSeason";
import arrowDown from "assets/icon/droparrow.svg";

interface iProps {
  data: iSeason[];
  hook: any[];
}

export default function Sorter({ data, hook }: iProps) {
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
        Season {season} <img src={arrowDown} alt="" />
      </button>
      {isOpen && <ul className="caret">{ListItems}</ul>}
    </section>
  );
};
