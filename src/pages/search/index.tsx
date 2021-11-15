//NPM Packages
import { useParams } from "react-router-dom";
import { FC } from "react";

//Local Files
import { searchTitle } from "scripts/methods";
import { useTitles } from "state/TitlesProvider";
import useFetch from "hooks/useFetch";
import { BoxError, Spinner } from "components/shared/FetchItems";
import ThumbnailsGenre from "../genre/ThumbnailsGenre";

const Search: FC = () => {
  // Global state
  //@ts-ignore
  const { dispatchTitles } = useTitles();
  const titles = useFetch("title_test", dispatchTitles);

  //Local states
  //@ts-ignore
  const { query } = useParams();
  const results = searchTitle(titles.data, query);

  return (
    <>
      {titles.loading === true && <Spinner />}
      {titles.error !== null && <BoxError />}

      {(!titles.loading && titles.error) === null && (
        <main className="page-home page-search">
          {results.length === 0 && <h1>No titles found ... </h1>}
          {results.length > 0 && (
            <ThumbnailsGenre data={results}>Results</ThumbnailsGenre>
          )}
        </main>
      )}
    </>
  );
};
export default Search;
