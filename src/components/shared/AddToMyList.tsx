// NPM packages
import { useState } from "react";

// Project files
import { useMyList } from "state/MyListProvider";
import iTitle from "types/iTitle";
import { updateDocument } from "scripts/firebase/fireStore";

interface iProps {
  item: iTitle;
}

export default function AddToMyList({ item }: iProps) {
  // Global state
  const { dispatch } = useMyList();

  //@ts-ignore
  const [toggler, setToggler] = useState(item.inMyList || false);

  // Methods
  async function addToList() {
    let newItem = { ...item };
    newItem.inMyList = true;

    dispatch({
      type: "ADD_TO_CART",
      item,
    });

    //@ts-ignore
    await updateDocument("demo_title", item.id, newItem);
    setToggler(true);
  }

  async function removeFromList() {
    let newItem = { ...item };
    newItem.inMyList = false;

    dispatch({
      type: "REMOVE_FROM_CART",
      item,
    });
    //@ts-ignore
    await updateDocument("demo_title", item.id, newItem);
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
