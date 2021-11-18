//NPM Packages
import { FC } from "react";

//Local Files
import Thumbs10Item from "./Thumbs10Item";
import iTitle from "types/iTitle";

interface iProps {
  data: iTitle[];
}
const Thumbs10: FC<iProps> = ({ data }) => {
  const Thumbnails = data.map((item, index) => {
    const imgName = index + 1;
    const imgPath = require("assets/icon/numbers/" + imgName + ".svg");
    return <Thumbs10Item key={index} item={item} imgPath={imgPath} />;
  });

  return (
    <section className="home-thumbs home-thumbs-10">
      <h2 className="title"> Top 10 in Sweden Today</h2>
      <ul className="track">{Thumbnails}</ul>
    </section>
  );
};
export default Thumbs10;
