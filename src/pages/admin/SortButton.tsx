// NPM packages
import { FC } from "react";
interface iProps {
  children: string;
  target: string;
  hook: any[];
}
const SortButton: FC<iProps> = ({ children, target, hook }) => {
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
export default SortButton;
