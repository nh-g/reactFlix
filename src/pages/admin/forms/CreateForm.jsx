// NPM packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

// Project files
import fields from "../assets/fields-create.json";
import InputField from "components/shared/InputField";
import CreateSerie from "./CreateSerie";
import { createDoc } from "scripts/firebase/fireStore";

export default function CreateForm() {
  //Local states
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "film",
    image_url: "",
    logo_url: "",
    trailer: "",
    year: "",
    cast: "",
    tags: "",
    duration: "",
    total_views: 0,
    progress: 0,
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
    if (form.category !== "serie") {
      title.seasons = null;
    }
    await createDoc("demo_title", title);
    alert("Title created");
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
        {form.category}
        <select
          onChange={(e) => {
            setForm({ ...form, category: e.target.value });
          }}
        >
          <option value="film">Film</option>
          <option value="serie">Serie</option>
          <option value="documentary">Documentary</option>
        </select>
      </label>
      <div className="general">
        <h2>General informations : </h2>
        <div className="main-bloc">{Fields}</div>
      </div>

      {form.category === "seri" && (
        <CreateSerie state={form} setForm={setForm} />
      )}

      <p>{errorMessage}</p>
      <button className="btn btn-submit btn-white">Submit</button>
    </form>
  );
}
