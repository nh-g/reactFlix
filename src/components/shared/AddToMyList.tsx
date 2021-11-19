// NPM packages
import { useState } from "react";

// Project files
import { useTitles } from "state/TitlesProvider";
import iTitle from "types/iTitle";
import { updateDocument } from "scripts/firebase/fireStore";

interface iProps {
  item: iTitle;
}

export default function AddToMyList({ item }: iProps) {
  // Global state
  const { dispatch } = useTitles();

  //@ts-ignore
  const [toggler, setToggler] = useState(item.inMyList || false);

  // Methods
  async function addToList() {
    let newItem = { ...item };
    newItem.inMyList = true;

    //@ts-ignore
    await updateDocument("demo_title", item.id, newItem);
    dispatch({ type: "UPDATE_TITLE", payload: newItem });

    setToggler(true);
  }

  async function removeFromList() {
    let newItem = { ...item };
    newItem.inMyList = false;

    //@ts-ignore
    await updateDocument("demo_title", item.id, newItem);
    dispatch({ type: "UPDATE_TITLE", payload: newItem });

    setToggler(false);
  }

  return (
    <>
      {!toggler && (
        <button className="btn-add" onClick={addToList}>
          +
        </button>
      )}
      {toggler && (
        <button className="btn-add" onClick={removeFromList}>
          -
        </button>
      )}
    </>
  );
}
