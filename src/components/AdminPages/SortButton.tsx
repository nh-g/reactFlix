//NPM Packages
import { FC } from "react";
interface IProps {
  children: string;
  target: string;
  hook: any[];
}
const SortButton: FC<IProps> = ({ children, target, hook }) => {
  const [selection, setSelection] = hook;

  return (
    <button
      className={
        selection === target
          ? "btn btn-orange btn-active "
          : "btn btn-orange btn-inactive"
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
