// NPM packages
import { useParams } from "react-router-dom";

// Project Files
import useFetch from "hooks/useFetch";
import { useTitles } from "state/TitlesProvider";
import { BoxError, Spinner } from "components/shared/FetchItems";
import ThumbnailsGrid from "../../components/shared/ThumbnailsGrid";
import Player from "components/shared/Player";
import { getGenre } from "scripts/getItem";
import Hero from "../../components/shared/Hero";
import Footer from "components/shared/Footer";

interface iProps {
  genreName: string;
}
export default function FilteredPage() {
  // Global state
  const { dispatch } = useTitles();
  const titles = useFetch("demo_title", dispatch);

  // Local states
  const { genreName } = useParams<iProps>();
  const genreTitles = getGenre(titles.data, genreName);

  const randomIndex = Math.floor(Math.random() * genreTitles.length);
  const randomTitle = genreTitles[randomIndex];

  function getHeading(genre: string): string {
    switch (genre) {
      case "film":
        return "Films";
      case "series":
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
            <div className="genre-heading">{getHeading(genreName)}</div>
            <Player video={randomTitle.trailer} autoplay="0" controls="0" />
            <div className="gradient" />
          </div>
          <main className="page-home">
            <Hero data={randomTitle} />

            {genreTitles.length === 0 && <h1>No titles found ... </h1>}
            {genreTitles.length > 0 && (
              <ThumbnailsGrid data={genreTitles}>
                {getHeading(genreName)}
              </ThumbnailsGrid>
            )}
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
