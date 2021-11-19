// Project files
import useFetch from "hooks/useFetch";
import Thumbs from "components/shared/Thumbs";
import { useTitles } from "state/TitlesProvider";
import { BoxError, Spinner } from "components/shared/FetchItems";
import { getGenre, getMyListItem } from "scripts/getItem";
import footerLinks from "data/home-footer-links.json";
import { Footer } from "components";

export default function MyList() {
  // Global state
  const { dispatch } = useTitles();
  const titles = useFetch("demo_title", dispatch);
  const myList = getMyListItem(titles.data);

  //Local states
  const randomIndex = Math.floor(Math.random() * titles.data.length);
  const series = getGenre(myList, "series");
  const films = getGenre(myList, "film");
  const documentaries = getGenre(myList, "documentary");

  return (
    <>
      {titles.loading === true && <Spinner />}
      {titles.error !== null && <BoxError />}

      {(!titles.loading && titles.error) === null && (
        <div id="my-list">
          <h1>My List</h1>
          {myList.length === 0 && (
            <h3>You have no movie in your list. Start add your favorite movie and save your own list.</h3>
          )}

          <br />
          <main className="page-home">
            <Thumbs data={series}>Series</Thumbs>
            <Thumbs data={films}>Films</Thumbs>
            <Thumbs data={documentaries}>Documentaries</Thumbs>
          </main>

          <div className="Home__row" id="bigFooter">
            <Footer
              className="Home__footer"
              menuLinks={footerLinks}
              showHotlineNumber
              showLanguagePicker
            >
              <div className="Home__footerSiteName">
                Netflix Clone © 2021 • giangngohong@gmail.com
              </div>
            </Footer>
          </div>
        </div>
      )}
    </>
  );
}
