// NPM packages
import { FC } from "react";

//Local Files
import ThumbsItem from "pages/browse/ThumbsItem";
import iTitle from "types/iTitle";

interface iProps {
  data: iTitle[];
  children: string;
}

const ThumbnailsGenre: FC<iProps> = ({ data, children }) => {
  const Thumbnails = data.map((item, index) => (
    <ThumbsItem key={index} item={item} />
  ));

  return (
    <>
      <section className="category-thumbs">
        <h2 className="title"> {children}</h2>
        <ul className="track">{Thumbnails}</ul>
      </section>
    </>
  );
};
export default ThumbnailsGenre;
