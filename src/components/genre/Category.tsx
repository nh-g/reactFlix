//NPM Packages
import { useParams } from "react-router-dom";
import { FC } from "react";

//Local Files
import { useTitles } from "state/TitlesProvider";
import useFetch from "hooks/useFetch";
import { BoxError, Spinner } from "components/shared/FetchItems";
import ThumbsCategory from "./ThumbsCategory";
import Player from "components/shared/Player";
import { getCategory } from "scripts/methods";
import Hero from "../shared/Hero";

const Category: FC = () => {
  // Global state
  //@ts-ignore
  const { dispatchTitles } = useTitles();
  const titles = useFetch("title_test", dispatchTitles);

  //Local states
  //@ts-ignore
  const { category } = useParams();
  const categoryTitles = getCategory(titles.data, category);

  const randomIndex = Math.floor(Math.random() * categoryTitles.length);
  const randomTitle = categoryTitles[randomIndex];

  function getHeading(cat: string): string {
    switch (cat) {
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
            <div className="category-heading">{getHeading(category)}</div>
            <Player video={randomTitle.trailer} autoplay="0" controls="0" />
            <div className="gradient" />
          </div>
          <main className="page-home">
            <Hero data={randomTitle} />

            {categoryTitles.length === 0 && <h1>No titles found ... </h1>}
            {categoryTitles.length > 0 && (
              <ThumbsCategory data={categoryTitles}>
                {getHeading(category)}
              </ThumbsCategory>
            )}
          </main>
        </>
      )}
    </>
  );
};
export default Category;
