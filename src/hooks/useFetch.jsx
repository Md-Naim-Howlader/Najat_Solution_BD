import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllData = async (URL) => {
    try {
      const res = await axios.get(URL);
      setIsLoading(false);
      setData(res.data);
      setError(null);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      setData([]);
    }
  };
  useEffect(() => {
    getAllData(url);
  }, [url]);
  return { data, isLoading, error };
};
