// NPM packages
import { useState } from "react";

// Project files
import EpisodesList from "./EpisodesList";
import EditEpisode from "./EditEpisode";

export default function EditSerie({ state, setForm }) {
  const emptyEpisode = {
    description: "",
    video_url: "",
    duration: "",
    thumbnail_url: "",
    progress: 0,
  };
  const emptySeason = {
    episodes: [emptyEpisode],
  };
  console.log(state);
  const [seasonId, setSeasonId] = useState(0);
  const [episodeId, setEpisodeId] = useState(0);
  const isEpisodes = state.seasons[seasonId].episodes.length > 0;

  //console.log(state);

  //Methods

  function addEpisode() {
    const newState = { ...state };
    newState.seasons[seasonId].episodes.push(emptyEpisode);
    setForm(newState);
  }

  function removeEpisode(idx) {
    if (window.confirm("Are you sure ?")) {
      const newState = { ...state };
      newState.seasons[seasonId].episodes.splice(idx, 1);
      setForm(newState);
    }
  }
  //console.log(state.seasons);
  function addSeason() {
    const newState = { ...state };
    console.log(newState.seasons);
    newState.seasons.push(emptySeason);
    console.log(newState.seasons);
    setForm(newState);
  }

  //Component
  const Options = state.seasons.map((item, index) => (
    <option key={index} value={index}>
      Season {index + 1}
    </option>
  ));

  return (
    <>
      <div className="seasons">
        <h2>Seasons : </h2>
        <label className="selector">
          Select a season :
          <select
            onChange={(e) => {
              setSeasonId(Number.parseInt(e.target.value));
            }}
          >
            {Options}
          </select>
        </label>
        <button className="btn btn-add-field" onClick={addSeason} type="button">
          Add season
        </button>
        {seasonId !== "" && (
          <>
            <EpisodesList
              data={state.seasons[seasonId].episodes}
              setEpisodeId={setEpisodeId}
              removeEpisode={removeEpisode}
            />
            <button
              className="btn btn-add-field"
              onClick={addEpisode}
              type="button"
            >
              <h4> Add episode </h4>
            </button>
          </>
        )}
      </div>
      {seasonId !== "" && isEpisodes && (
        <EditEpisode
          data={state.seasons[seasonId].episodes[episodeId]}
          episodeId={episodeId}
          seasonId={seasonId}
          state={state}
          setForm={setForm}
        />
      )}
    </>
  );
}
