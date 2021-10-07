import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDigimonThunk } from "../../store/modules/digimons/thunks";

const Search = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSearch = (name) => {
    setError(false);
    dispatch(addDigimonThunk(name, setError));
    setInput("");
  };

  return (
    <div>
      <h2>Procure pelo seu Digimon!</h2>
      <div>
        <input
          placeholder="Procure seu Digimon"
          value={input}
          onChange={(event) => handleInputChange(event)}
        />

        <button onClick={() => handleSearch(input)}>Pesquisar</button>
      </div>
      <div>{error && <p>Digimon não localizado.</p>}</div>
    </div>
  );
};

export default Search;
