//NPM Packages
import { useState, FC } from "react";

//Local imports
import Sorter from "pages/admin/Sorter";
import CreateForm from "./forms/CreateForm";
import EditForm from "./forms/EditForm";
import { useTitles } from "state/TitlesProvider";
import { BoxError, Spinner } from "components/shared/FetchItems";
import useFetch from "hooks/useFetch";
import Footer from "components/shared/Footer";

const Admin: FC = () => {
  // Global state
  //@ts-ignore
  const { dispatch } = useTitles();
  const titles = useFetch("title_test", dispatch);

  //Local states
  const [selection, setSelection] = useState("edit");

  return (
    <>
      {titles.loading === true && <Spinner />}
      {titles.error !== null && <BoxError />}

      {(!titles.loading && titles.error) === null && (
        <main className="page-admin">
          <Sorter hook={[selection, setSelection]} />
          {selection === "create" && <CreateForm />}
          {selection === "edit" && <EditForm data={titles.data} />}
        </main>
      )}
      <Footer />
    </>
  );
};
export default Admin;
