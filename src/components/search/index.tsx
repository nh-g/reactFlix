//NPM Packages
import { useParams } from "react-router-dom";
import { FC } from "react";

//Local Files
import { searchTitle } from "scripts/methods";
import { useTitles } from "state/TitlesProvider";
import useFetch from "hooks/useFetch";
import { BoxError, Spinner } from "components/shared/FetchItems";
import ThumbsCategory from "../genre/ThumbsCategory";

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
            <ThumbsCategory data={results}>Results</ThumbsCategory>
          )}
        </main>
      )}
    </>
  );
};
export default Search;
