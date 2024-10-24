import { useState } from "react";
import useLanguages from "../hooks/useLanguages";
import Select from "react-select"; // Correct path

const Languages = () => {
  const { languages, langLoading } = useLanguages(
    "https://libretranslate.com/languages"
  );
  const [selectedLanguage, setSelectedLanguage] = useState({
    value: "en",
    label: "English",
  });

  return (
    <div className="ms-3">
      {langLoading && <img className="loader" src={"images/loader.gif"} />}

      <Select
        value={selectedLanguage}
        onChange={setSelectedLanguage}
        options={languages}
      />
    </div>
  );
};

export default Languages;
