import React from "react";
import "./App.scss";
import UseContext from "./containers/UseContext/UseContext";
import Terms from "./components/Terms/Terms";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div>
      <SearchBar />
      <UseContext>
        <Terms />
      </UseContext>
    </div>
  );
}

export default App;
