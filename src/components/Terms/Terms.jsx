import React from "react";
import { Consumer } from "../../containers/Contexts/Contexts";
import Term from "../Term/Term";
import "./Terms.scss";
const Terms = props => (
  <Consumer>
    {context => (
      <div className="Terms">
        {context.state.terminologies.map(term => (
          <div key={term.id}>
            <Term title={term.title} definition={term.definition} />
          </div>
        ))}
      </div>
    )}
  </Consumer>
);

export default Terms;
