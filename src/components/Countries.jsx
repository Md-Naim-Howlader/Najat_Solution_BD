import React, { useState } from "react";
import { useCountries } from "../hooks/useCountries";
import Select from "react-select"; // Correct path

const Countries = () => {
  const { countries, countryLoading } = useCountries();
  // Default selections
  const [selectedCountry, setSelectedCountry] = useState({
    value: "BD",
    label: (
      <div>
        <img
          src="https://flagcdn.com/w320/bd.png"
          alt="Bangladesh"
          style={{ width: "20px", marginRight: "10px" }}
        />
        Bangladesh
      </div>
    ),
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
    <div>
      {countryLoading && <img className="loader" src={"images/loader.gif"} />}

      <Select
        value={selectedCountry}
        onChange={setSelectedCountry}
        options={countries}
        styles={customStyles}
      />
    </div>
  );
};

export default Countries;
