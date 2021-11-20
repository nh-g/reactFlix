// NPM packages
import { useState } from "react";

// Project files
import Sorter from "pages/admin/Sorter";
import CreateForm from "./forms/CreateForm";
import EditForm from "./forms/EditForm";
import { useTitles } from "state/TitlesProvider";
import { BoxError, Spinner } from "components/shared/FetchItems";
import useFetch from "hooks/useFetch";
import Footer from "components/shared/Footer";

export default function AdminDashboard() {
  // Global state
  const { dispatch } = useTitles();
  const titles = useFetch("demo_title", dispatch);

  //Local states
  const [selection, setSelection] = useState("edit");

  return (
    <>
      {titles.loading === true && <Spinner />}
      {titles.error !== null && <BoxError />}

      {(!titles.loading && titles.error) === null && (
        <main className="page-admin">
          <h1>Admin Page</h1>

          <Sorter hook={[selection, setSelection]} />

          {selection === "create" && <CreateForm />}
          {selection === "edit" && <EditForm data={titles.data} />}
        </main>
      )}
      <Footer />
    </>
  );
}
