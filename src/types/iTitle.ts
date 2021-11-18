import iSeason from "./iSeason";

export default interface iTitle {
  trailer: string;
  logo_url: string;
  image_url: string;
  title: string;
  description: string[];
  advised_public: string;
  duration: string;
  year: string;
  cast: string[];
  genres: string[];
  tags: string[];
  genre: string;
  seasons: iSeason[];
}
