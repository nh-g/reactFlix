// NPM packages
import { useParams } from "react-router-dom";

// Project Files
import useFetch from "hooks/useFetch";
import { useTitles } from "state/TitlesProvider";
import { BoxError, Spinner } from "components/shared/FetchItems";
import ThumbnailsGenre from "./ThumbnailsGenre";
import Player from "components/shared/Player";
import { getCategory } from "scripts/methods";
import Hero from "../../components/shared/Hero";

interface iProps {
  genreName: string;
}
export default function Genre(){
  // Global state
  const { dispatch } = useTitles();
  const titles = useFetch("title_test", dispatch);

  // Local states
  const { genreName } = useParams<iProps>();
  const categoryTitles = getCategory(titles.data, genreName);

  const randomIndex = Math.floor(Math.random() * categoryTitles.length);
  const randomTitle = categoryTitles[randomIndex];

  function getHeading(genre: string): string {
    switch (genre) {
      case "film":
        return "Films";
      case "serie":
        return "Series";
      case "documentary":
        return "Documentaries";
      default:
        return "";
    }
  }

  return (
    <>
      {titles.loading === true && <Spinner />}
      {titles.error !== null && <BoxError />}
      {(!titles.loading && titles.error) === null && (
        <>
          <div className="hero-bg">
            <div className="category-heading">{getHeading(genreName)}</div>
            <Player video={randomTitle.trailer} autoplay="0" controls="0" />
            <div className="gradient" />
          </div>
          <main className="page-home">
            <Hero data={randomTitle} />

            {categoryTitles.length === 0 && <h1>No titles found ... </h1>}
            {categoryTitles.length > 0 && (
              <ThumbnailsGenre data={categoryTitles}>
                {getHeading(genreName)}
              </ThumbnailsGenre>
            )}
          </main>
        </>
      )}
    </>
  );
};
