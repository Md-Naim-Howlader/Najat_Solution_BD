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
  const customStyles = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",

      borderRight: "none",
      "&:hover": {
        border: 0,
      },
    }),
    dropdownIndicator: (base) => ({
      ...base,

      border: "none",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    valueContainer: (base) => ({
      ...base,
    }),
    input: (base) => ({
      ...base,
    }),
  };
  return (
    <div className="ms-3">
      {langLoading && <img className="loader" src={"images/loader.gif"} />}

      <Select
        value={selectedLanguage}
        onChange={setSelectedLanguage}
        options={languages}
        styles={customStyles}
      />
    </div>
  );
};

export default Languages;
