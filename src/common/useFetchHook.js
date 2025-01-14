import { useEffect, useState } from "react";

const useFetch = (url, dispatch, actionType) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const getData = async () => {
      setLoading(true);
      try {
        const result = await fetch(url);
        if (!result.ok) {
          throw new Error(`HTTP error! status: ${result.status}`);
        }
        const data = await result.json();
        if (isMounted && dispatch && actionType) {
          dispatch({ type: actionType, payload: data?.record });
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    getData();

    return () => {
      isMounted = false;
    };
  }, [actionType, dispatch, url]);
  return { loading, error };
};
export default useFetch;
