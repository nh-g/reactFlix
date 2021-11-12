import { useEffect, useState } from "react";
import { firestoreInstance } from "scripts/firebase";
import { getCollection } from "scripts/fireStore";
import { Firestore } from "@firebase/firestore/dist/lite";

export default function useFetch(collection: string, dispatch: any) {
  // STATES
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Methods
  async function fetchData(someDatabase: Firestore, someCollection: string) {
    try {
      const response = await getCollection(someDatabase, someCollection);
      dispatch({ type: "SET_DATA", payload: someCollection });
      //@ts-ignore
      setData(response);
    } catch (e) {
      //@ts-ignore
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  //hook
  useEffect(() => {
    fetchData(firestoreInstance, collection);
  }, []);

  return { data, error, loading, setData };
}
