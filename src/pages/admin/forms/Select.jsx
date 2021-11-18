export default function Select({ hook, setFormVisibility }) {
  const [item, setItem] = hook;
  return (
    <label>
      <h2> Select genre</h2>
      <select
        onChange={(e) => {
          setItem({ ...item, category: e.target.value });
          setFormVisibility(false);
        }}
      >
        <option value="all">Show All</option>
        <option value="serie">Serie</option>
        <option value="film">Film</option>
        <option value="documentary">Documentary</option>
      </select>
    </label>
  );
}
