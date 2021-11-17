// Project files
import iTitle from "types/iTitle";
import Lister from "./Lister";

interface iProps {
  element: iTitle;
}

export default function Meta ({ element }: iProps) {
  // const mockMatchRate = Math.floor(Math.random() * (100 - 70) + 70);
  return (
    <section className="meta">
      <div className="details">
        {/* <p className="match">{mockMatchRate}% Match </p>
        <span> | </span> */}

        <p className="year">{element.year} </p>
        <span> | </span>

        <p className="public">
          {element.advised_public ? element.advised_public : "13+"}
        </p>
        <span> | </span>
        <p className="duration">{element.duration} </p>
      </div>

      <p className="description">{element.description}</p>
      <Lister data={element.cast}>cast</Lister>
      <Lister data={element.genres}>genres</Lister>
      <Lister data={element.tags}>tags</Lister>
    </section>
  );
};
