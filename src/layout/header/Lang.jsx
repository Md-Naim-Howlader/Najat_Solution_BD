import { Form } from "react-bootstrap";
import { useFetch } from "../../hooks/useFetch";

const Lang = () => {
  const { isLoading, data } = useFetch("https://libretranslate.com/languages");
  return (
    <>
      {isLoading && (
        <img className="loader" src={"../../../public/images/loader.gif"} />
      )}
      <Form.Select className="border-0 lang-select">
        {data &&
          data.map((lang) => (
            <option key={lang.code} value={lang.name}>
              {lang.name}
            </option>
          ))}
      </Form.Select>
    </>
  );
};

export default Lang;
