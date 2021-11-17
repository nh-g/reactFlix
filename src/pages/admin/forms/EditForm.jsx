//NPM Packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

//Local imports
import fields from "../assets/fields-edit.json";
import InputField from "components/shared/InputField";
import { updateDocument, deleteDocument } from "scripts/fireStore";
import { getCategory } from "scripts/methods";
import EditSerie from "./EditSerie";
import Select from "./Select";
import { useTitles } from "state/TitlesProvider";

export default function EditForm({ data }) {
  //Local states
  const [form, setForm] = useState(data);
  const [item, setItem] = useState({ category: "" });
  const [formVisibility, setFormVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  //const { dispatch } = useTitles();

  const items = getCategory(data, item.category);

  // Methods
  function onSelect(item) {
    setForm(item);
    setFormVisibility(true);
  }
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }
  async function onSubmit(e) {
    if (window.confirm("Do you confirm the changes ?")) {
      e.preventDefault();
      setErrorMessage("");
      await updateDocument("title_test", form.id, form);
      //dispatch({ type: "UPDATE_TITLE", payload: form });

      alert("Title successfully edited");
      history.push("/admin");
    }
  }

  async function onDelete(e, item) {
    console.log(item);
    e.preventDefault();
    const validationText = window.prompt(
      "Please re-enter the title of the item to confirm deletion ( case insensitive ) ",
      ""
    );
    if (
      validationText &&
      validationText.toLowerCase() === item.title.toLowerCase()
    ) {
      setErrorMessage("");
      await deleteDocument("title_test", item.id);
      alert(`Title [${item.title}]   deleted`);
      history.push("/admin");
    } else {
      alert("The title of the item is not matching");
    }
  }

  //Components
  const Items = items.map((item, index) => (
    <li key={index}>
      <>
        <button
          className="btn-select"
          type="button"
          onClick={() => onSelect(item, item.title)}
        >
          {item.title}
        </button>
        <button
          className="btn-delete"
          type="button"
          onClick={(e) => onDelete(e, item)}
        >
          X Delete Title
        </button>
      </>
    </li>
  ));

  const GeneralFields = fields.map((item) => (
    <InputField
      key={item.key}
      options={item}
      state={form[item.key]}
      onChange={onChange}
    />
  ));

  return (
    <form onSubmit={onSubmit} className="form-admin">
      <div className="selector">
        <h2>Selection : </h2>
        <Select hook={[item, setItem]} setFormVisibility={setFormVisibility} />
        {item.category !== "none" && <ul>{Items}</ul>}
      </div>

      {formVisibility && (
        <>
          <div className="general">
            <h2>General informations : </h2>
            <div className="main-bloc">{GeneralFields}</div>
          </div>
          {form.category === "serie" && (
            <EditSerie state={form} setForm={setForm} handleDelete={onDelete} />
          )}
          <p>{errorMessage}</p>
          <button className="btn btn-submit btn-orange">
            <h4>Submit</h4>
          </button>{" "}
        </>
      )}
    </form>
  );
}
