//NPM Packages
import { FC } from "react";

//Local imports
import useFetch from "hooks/useFetch";
import { useTitles } from "state/TitlesProvider";
import { BoxError, Spinner } from "components/shared/FetchItems";
import Hero from "components/shared/Hero";
import iTitle from "types/iTitle";

const Home: FC = () => {
  // Global state
  //@ts-ignore
  const { dispatchTitles } = useTitles();
  const titles = useFetch("title_test", dispatchTitles);

  //Local states
  const randomIndex = Math.floor(Math.random() * titles.data.length);
  const randomTitle: iTitle = titles.data[randomIndex];

  return (
    <>
      {titles.loading === true && <Spinner />}
      {titles.error !== null && <BoxError />}

      {(!titles.loading && titles.error) === null && (
        <>
          <div className="hero-bg">
            <div className="gradient" />
          </div>
          <main className="page-home">
            <Hero data={randomTitle} />
          </main>
        </>
      )}
    </>
  );
};
export default Home;
