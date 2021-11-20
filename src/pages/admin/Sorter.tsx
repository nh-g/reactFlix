// Project files
import SortButton from "pages/admin/SortButton";

interface iProps {
  hook: any[];
}
export default function  Sorter({ hook }: iProps){
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
;
