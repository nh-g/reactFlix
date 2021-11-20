interface iProps {
  children: string;
  target: string;
  hook: any[];
}
export default function SortButton({ children, target, hook }: iProps) {
  const [selection, setSelection] = hook;

  return (
    <button
      className={
        selection === target
          ? "btn btn-red btn-active "
          : "btn btn-red btn-inactive"
      }
      onClick={() => {
        setSelection(target);
      }}
    >
      <h4>{children}</h4>
    </button>
  );
};
