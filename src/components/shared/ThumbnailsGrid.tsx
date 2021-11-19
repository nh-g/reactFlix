// Project files
import iTitle from "types/iTitle";
import ThumbnailCard from "pages/browse/ThumbnailCard";

interface iProps {
  data: iTitle[];
  children: string;
}

export default function ThumbnailsGrid({ data, children }: iProps) {
  const Thumbnails = data.map((item, index) => (
    <ThumbnailCard key={index} item={item} />
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
