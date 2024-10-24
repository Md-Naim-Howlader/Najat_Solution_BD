import axios from "axios";
import { useEffect, useState } from "react";

const useLanguages = (url) => {
  const [languages, setLanguages] = useState([]);
  const [langLoading, setLangLoading] = useState(true);
  const [langerror, setLangError] = useState(null);

  const getAllData = async (URL) => {
    try {
      const res = await axios.get(URL);
      setLangLoading(false);

      const languageOptions = res.data.map((lang) => ({
        value: lang.code,
        label: lang.name,
      }));
      setLanguages(languageOptions);
      setLangError(null);
    } catch (err) {
      setLangLoading(false);
      setLangError(err.message);
      setLanguages([]);
    }
  };
  useEffect(() => {
    getAllData(url);
  }, [url]);
  return { languages, langLoading, langerror };
};

export default useLanguages;
