import axios from "axios";
import { useEffect, useState } from "react";

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [countryLoading, setCountryLoading] = useState(true);
  const [countryError, setCountryError] = useState(null);

  const getAllData = async (URL) => {
    try {
      const res = await axios.get(URL);
      setCountryLoading(false);
      const countryOptions = res.data.map((country) => ({
        value: country.cca2, // Country code (like BD)
        label: (
          <div>
            <img
              src={country.flags.svg} // Country flag
              alt={country.name.common}
              style={{ width: "20px", marginRight: "10px" }}
            />
            {country.name.common} {/* Country name */}
          </div>
        ),
      }));
      setCountries(countryOptions);
      setCountryError(null);
    } catch (err) {
      setCountryLoading(false);
      setCountryError(err.message);
      setCountries([]);
    }
  };
  useEffect(() => {
    getAllData("https://restcountries.com/v3.1/all");
  }, []);
  return { countries, countryLoading, countryError };
};
