// Project files
import iEpisode from "types/iEpisode";

interface iProps {
  data: any[];
  seasonId: number;
  setVideo(arg: string): void;
}

export default function Episodes({ data, seasonId, setVideo }: iProps) {
  const episodes = data[seasonId - 1].episodes;

  const Episodes = episodes.map((item: iEpisode, index: number) => (
    <button
      key={index}
      className="episode"
      onClick={() => setVideo(item.video_url)}
    >
      <h1>{index + 1}</h1>
      <div className="thumb">
        <img src={item.thumbnail_url} alt="" />
        <div className="bar" style={{ width: `${item.progress}%` }} />
      </div>

      <div className="title">
        <h2>Episode {index + 1}</h2>
        <h2>{item.duration}</h2>
      </div>
      <p className="description">{item.description}</p>
    </button>
  ));

  if (episodes.length < 3) {
    return (
      <section className="episodes">
        <h2 className="empty">Content coming soon...</h2>
      </section>
    );
  } else {
    return <section className="episodes">{Episodes}</section>;
  }
};
