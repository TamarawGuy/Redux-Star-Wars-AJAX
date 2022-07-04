import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCharactersFromAPI } from "../store/charactersSlice";

const FetchCharacters = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchCharactersFromAPI(value));
    setValue("");
  };

  return (
    <form className="FetchCharacters" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        placeholder="Search Here"
        type="search"
        value={value}
      />
      <input type="submit" disabled={!value} />
    </form>
  );
};

export default FetchCharacters;
