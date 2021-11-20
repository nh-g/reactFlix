// NPM packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

// Project files
import fields from "../assets/fields-create.json";
import InputField from "components/shared/InputField";
import CreateSeries from "./CreateSeries";
import { createDoc } from "scripts/firebase/fireStore";

export default function CreateForm() {
  //Local states
  const [form, setForm] = useState({
    title: "",
    description: "",
    genre: "series",
    image_url: "",
    logo_url: "",
    trailer: "",
    year: "",
    cast: "",
    tags: "",
    duration: "",
    total_views: 0,
    progress: 0,
    inMyList: false,
    seasons: [{ episodes: [{}] }], //[{ episodes: [{}] }]
  });
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setErrorMessage("");
    let title = { ...form };
    if (form.genre !== "series") {
      title.seasons = null;
    }
    await createDoc("demo_title", title);
    alert(`${form.title}created`);
    history.push("/browse");
  }

  //Components
  const Fields = fields.map((item) => (
    <InputField
      options={item}
      state={form[item.key]}
      onChange={onChange}
      key={item.key}
    />
  ));

  return (
    <form onSubmit={onSubmit} className="form-admin">
      <label className="selector">
        <h2>Select genre : </h2>
        <select
          onChange={(e) => {
            setForm({ ...form, genre: e.target.value });
          }}
        >
          <option value="series">Series</option>
          <option value="film">Film</option>
          <option value="documentary">Documentary</option>
        </select>
      </label>

      <div className="general">
        <h2>General informations : </h2>
        <div className="main-input-form">{Fields}</div>
      </div>

      {form.genre === "series" && (
        <CreateSeries state={form} setForm={setForm} />
      )}

      <p>{errorMessage}</p>
      <button className="btn btn-submit btn-red">Submit</button>
    </form>
  );
}
