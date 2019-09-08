import React from "react";
import "./App.scss";
import UserContexts from "./containers/Contexts/UserContexts";

import Terms from "./components/Terms/Terms";

function App() {
  return (
    <UserContexts>
      <Terms />
    </UserContexts>
  );
}

export default App;
