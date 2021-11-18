// NPM packages
import ThumbsItem from "pages/browse/ThumbsItem";
import { FC } from "react";
import iTitle from "types/iTitle";

//Local Files
interface iProps {
  data: iTitle[];
  children: string;
}
const Thumbs: FC<iProps> = ({ data, children }) => {
  const Thumbnails = data.map((item, index) => (
    <ThumbsItem key={index} item={item} />
  ));

  return (
    <>
      <section className="home-thumbs">
        <h2 className="title"> {children}</h2>
        <ul className="track">{Thumbnails}</ul>
      </section>
    </>
  );
};
export default Thumbs;
