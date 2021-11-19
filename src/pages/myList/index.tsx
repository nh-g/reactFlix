import { useMyList } from "state/MyListProvider";
import ThumbsItem from "pages/browse/ThumbsItem";

export default function MyList() {
  // Global state
  const { myList } = useMyList();

  const Thumbnails = myList.map((item: any, index: any) => (
    <ThumbsItem key={index} item={item} />
  ));

  return (
    <main className="page-home">
      <div className="hero-bg">
        <div className="genre-heading"></div>
        <div className="gradient" />
      </div>
      <h1 style={{ marginTop: "50px" }}>MY LIST PAGE</h1>

      {myList.length === 0 && <h1>No titles found ... </h1>}
      <section className="thumbs-grid">
        <ul className="track">{Thumbnails}</ul>
      </section>
    </main>
  );
}
