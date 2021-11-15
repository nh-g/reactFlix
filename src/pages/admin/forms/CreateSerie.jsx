import remove from "assets/icon/remove.png";
export default function CreateSerie({ state, setForm }) {
  //methods

  function addSeason() {
    const newSeason = [...state.seasons];
    newSeason.push({ episodes: [{}] });
    setForm({ ...state, seasons: newSeason });
  }

  function clearField(idx) {
    const newSeason = [...state.seasons];
    newSeason.splice(idx, 1);
    setForm({ ...state, seasons: newSeason });
  }

  //Component
  const Seasons = state.seasons.map((item, index) => (
    <div className="links-item" key={index}>
      <p>Season {index + 1}</p>
      {state.seasons.length > 1 && (
        <button
          className="btn btn-clear-field"
          onClick={() => clearField(index)}
          type="button"
        >
          <img src={remove} alt="-" />
        </button>
      )}
    </div>
  ));

  return (
    <div className="seasons">
      <h2>Seasons : </h2>
      {Seasons}
      {state.seasons.length < 20 && (
        <button className="btn btn-add-field" onClick={addSeason} type="button">
          <h4> Add a season </h4>
        </button>
      )}
    </div>
  );
}
