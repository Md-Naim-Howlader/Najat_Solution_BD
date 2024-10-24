import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

const DropDown = ({ data }) => {
  // for header top dropdown
  const [selectedCountry, setSelectedCountry] = useState(data[0]?.name.common);

  const handleSelect = (country) => {
    setSelectedCountry(country.name.common);
  };
  return (
    <Dropdown className="lang-select h-" title="Country">
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        {selectedCountry}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {data.map((country) => (
          <Dropdown.Item
            key={country.name.common}
            onClick={() => handleSelect(country)}
            className="d-flex align-items-center"
          >
            <img
              src={country.flags.png} // Assuming the flag URL is in country.flags.png
              alt={country.name.common}
              style={{ width: "20px", marginRight: "8px" }}
            />
            {country.name.common}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;
