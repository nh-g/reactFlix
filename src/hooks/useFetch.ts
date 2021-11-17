// NPM packages
import { useEffect, useState, useCallback } from "react";
import { Firestore } from "@firebase/firestore/dist/lite";

// Project files
import { firestoreInstance } from "scripts/firebase";
import { getCollection } from "scripts/fireStore";

export default function useFetch(collection: string, dispatch: any) {
  
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(
    async (database: Firestore, collection: string, dispatch: Function) => {
      try {
        const response = await getCollection(database, collection);
        dispatch({ type: "SET_DATA", payload: collection });
        //@ts-ignore
        setData(response);
      } catch (error) {
        //@ts-ignore
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  //hook
  useEffect(() => {
    fetchData(firestoreInstance, collection, dispatch);
  }, [fetchData, collection, dispatch]);

  return { data, error, loading, setData };
}
