import React from "react";
import { Consumer } from "../../containers/Contexts/Contexts";
const Terms = () => (
  <Consumer>
    {context => (
      <p>
        {context.state.terminologies.map(term => (
          <div>
            <h3>{term.title}</h3>
            <div>{term.definition}</div>
          </div>
        ))}
      </p>
    )}
  </Consumer>
);

export default Terms;
