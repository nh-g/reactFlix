// Project files
import useFetch from "hooks/useFetch";
import Thumbs from "components/shared/Thumbs";
import Thumbs10 from "pages/browse/Thumbs10";
import { useTitles } from "state/TitlesProvider";
import { BoxError, Spinner } from "components/shared/FetchItems";
import { getGenre, getTop10 } from "scripts/getItem";
import Player from "components/shared/Player";
import Hero from "components/shared/Hero";
import iTitle from "types/iTitle";
import footerLinks from "data/home-footer-links.json";
import { Footer } from "components";

export default function Browse() {
  // Global state
  const { dispatch } = useTitles();
  const titles = useFetch("demo_title", dispatch);

  //Local states
  const autoplay = "1"; //To have video background NOT running in production, change to 0
  const randomIndex = Math.floor(Math.random() * titles.data.length);
  const randomTitle: iTitle = titles.data[randomIndex];
  const series = getGenre(titles.data, "series");
  const films = getGenre(titles.data, "film");
  const documentaries = getGenre(titles.data, "documentary");
  const top10 = getTop10(titles.data);

  return (
    <>
      {titles.loading === true && <Spinner />}
      {titles.error !== null && <BoxError />}

      {(!titles.loading && titles.error) === null && (
        <>
          <div className="hero-bg">
            {/* <img src={randomTitle.image_url} alt="" />  */}

            <Player
              video={randomTitle.trailer}
              autoplay={autoplay}
              controls="0"
            />
            <div className="gradient" />
          </div>
          <main className="page-home">
            <Hero data={randomTitle} />
            <Thumbs data={series}>Series</Thumbs>
            <Thumbs data={films}>Films</Thumbs>
            <Thumbs data={documentaries}>Documentaries</Thumbs>
            <Thumbs10 data={top10} />
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
        </>
      )}
    </>
  );
}
