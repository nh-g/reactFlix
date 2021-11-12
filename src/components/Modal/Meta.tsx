//NPM Packages
import { FC } from "react";

//Local Files
import iTitle from "types/iTitle";
import Lister from "./Lister";

interface IProps {
  element: iTitle;
}

const Meta: FC<IProps> = ({ element }) => {
  const mockMatch = Math.floor(Math.random() * (100 - 80) + 80);
  return (
    <section className="meta">
      <div className="details">
        <p className="match">{mockMatch}% Match</p>
        <p className="year">{element.year}</p>
        <p className="public">
          {element.advised_public ? element.advised_public : "13+"}
        </p>
        <p className="duration">{element.duration}</p>
      </div>

      <p className="description">{element.description}</p>
      <Lister data={element.cast}>cast</Lister>
      <Lister data={element.genres}>genres</Lister>
      <Lister data={element.tags}>tags</Lister>
    </section>
  );
};
export default Meta;
