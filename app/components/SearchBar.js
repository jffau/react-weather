import React, { useState, useContext } from "react";
import { LocationContext } from "../contexts/locations";
const SearchBar = () => {
  const [input, setInput] = useState("");
  const { addLocation } = useContext(LocationContext);
  const handleSubmit = () => {
    addLocation(input);
    setInput("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="input location"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}> submit </button>
    </div>
  );
};

export default SearchBar;
