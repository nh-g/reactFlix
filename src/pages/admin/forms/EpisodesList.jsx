// NPM packages
import { RiDeleteBinLine } from "react-icons/ri";

export default function EpisodesList({ data, setEpisodeId, removeEpisode }) {
  const Episodes = data.map((item, index) => {
    const episodeNumber = index + 1;

    if (data.length === 0) {
      return null;
    }
    return (
      <li key={index}>
        <button
          className="btn-select"
          type="button"
          onClick={() => setEpisodeId(index)}
        >
          Episode {episodeNumber}
        </button>
        <button
          className="btn-delete"
          type="button"
          onClick={() => removeEpisode(index)}
        >
          <RiDeleteBinLine />
        </button>
      </li>
    );
  });
  if (data.length > 0) {
    return <ul> {Episodes}</ul>;
  } else return null;
}
