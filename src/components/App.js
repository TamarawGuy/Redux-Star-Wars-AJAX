import React from "react";
import Characters from "./Characters";
import FetchCharacters from "./FetchCharacters";

const App = () => {
  return (
    <div className="Application">
      <h1>Star Wars Characters</h1>
      <FetchCharacters />
      <Characters />
    </div>
  );
};

export default App;
