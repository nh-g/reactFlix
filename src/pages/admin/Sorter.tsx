//NPM Packages
import { FC } from "react";

//Local Files
import SortButton from "pages/admin/SortButton";

interface IProps {
  hook: any[];
}
const Sorter: FC<IProps> = ({ hook }) => {
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
