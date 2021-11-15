import React from "react";

export default function Select({ hook, setFormVisibility }) {
  const [item, setItem] = hook;
  return (
    <label>
      Select a category :
      <select
        onChange={(e) => {
          setItem({ ...item, category: e.target.value });
          setFormVisibility(false);
        }}
      >
        <option value="none">-</option>
        <option value="serie">Serie</option>
        <option value="film">Film</option>
        <option value="documentary">Documentary</option>
        <option value="all">Show All</option>
      </select>
    </label>
  );
}
