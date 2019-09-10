import React from "react";
import "./App.scss";
import UseContext from "./containers/UseContext/UseContext";

import Terms from "./components/Terms/Terms";

function App() {
  return (
    <UseContext>
      <Terms />
    </UseContext>
  );
}

export default App;
