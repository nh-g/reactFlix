//NPM Packages
import { FC } from "react";

//Local Files
import ThumbsItem from "components/home/ThumbsItem";
import iTitle from "types/iTitle";

interface IProps {
  data: iTitle[];
  children: string;
}

const ThumbsCategory: FC<IProps> = ({ data, children }) => {
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
export default ThumbsCategory;
