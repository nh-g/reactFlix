// NPM packages
import { FC } from "react";

//Local Files
import SortButton from "pages/admin/SortButton";

interface iProps {
  hook: any[];
}
const Sorter: FC<iProps> = ({ hook }) => {
  return (
    <section className="sorter">
      <SortButton target="create" hook={hook}>
        Create Title
      </SortButton>

      <SortButton target="edit" hook={hook}>
        Edit Title
      </SortButton>
    </section>
  );
};
export default Sorter;
