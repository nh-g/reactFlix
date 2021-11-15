//Local Files
import fields from "pages/admin/assets/fields-episode.json";
import InputField from "components/shared/InputField";
import Player from "components/shared/Player";

export default function EditEpisode({
  data,
  setForm,
  state,
  episodeId,
  seasonId,
}) {
  function onChange(key, value) {
    const upEpisode = { ...data, [key]: value };
    const newState = { ...state };
    newState.seasons[seasonId].episodes[episodeId] = upEpisode;
    setForm(newState);
  }

  const EpisodeFields = fields.map((item) => (
    <InputField
      key={item.key}
      options={item}
      state={data[item.key]}
      onChange={onChange}
    />
  ));

  return (
    <div className="episode">
      <h2>
        Season {seasonId + 1} - Episode {episodeId + 1} :
      </h2>
      {data.video_url && <Player video={data.video_url} />}
      <ul>{EpisodeFields}</ul>
    </div>
  );
}
