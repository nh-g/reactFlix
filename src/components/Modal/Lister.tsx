import { FC } from "react";

interface IProps {
  data: string[];
  children: string;
}

const Lister: FC<IProps> = ({ data, children }) => {
  const list = data.toString();

  return (
    <div className={children}>
      <p>
        <em>{children !== "tags" ? children : "this programme is"}:</em>
        {list}
      </p>
    </div>
  );
};
export default Lister;
