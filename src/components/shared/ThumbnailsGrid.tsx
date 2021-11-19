// Project files
import iTitle from "types/iTitle";
import ThumbsItem from "pages/browse/ThumbsItem";

interface iProps {
  data: iTitle[];
  children: string;
}

export default function ThumbnailsGenre({ data, children }: iProps) {
  const Thumbnails = data.map((item, index) => (
    <ThumbsItem key={index} item={item} />
  ));

  return (
    <>
      <section className="thumbs-grid">
        <h2 className="title"> {children}</h2>
        <ul className="track">{Thumbnails}</ul>
      </section>
    </>
  );
}
