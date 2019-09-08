import React, { Component } from "react";
import ContextConsumer from "../../containers/Contexts/UserContexts";
class Terms extends Component {
  render() {
    return (
      <ContextConsumer>
        {context => {
          return <p>{context.terminologies.name}</p>;
        }}
      </ContextConsumer>
    );
  }
}

export default Terms;
