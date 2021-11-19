// NPM packages
import { useParams } from "react-router-dom";

// Project files
import useFetch from "hooks/useFetch";
import { searchTitle } from "scripts/getItem";
import { useTitles } from "state/TitlesProvider";
import { BoxError, Spinner } from "components/shared/FetchItems";
import ThumbnailsGenre from "../../components/shared/ThumbnailsGrid";
import Footer from "components/shared/Footer";

interface iProps {
  query: any;
}

export default function Search() {
  // Global state
  const { dispatch } = useTitles();
  const titles = useFetch("demo_title", dispatch);

  //Local states
  const { query } = useParams<iProps>();
  const results = searchTitle(titles.data, query);

  return (
    <>
      {titles.loading === true && <Spinner />}
      {titles.error !== null && <BoxError />}

      {(!titles.loading && titles.error) === null && (
        <main className="page-home page-search">
          {results.length === 0 && <h1>No titles found ... </h1>}
          {results.length > 0 && (
            <ThumbnailsGenre data={results}> Results </ThumbnailsGenre>
          )}
        </main>
      )}
      <Footer />
    </>
  );
}
