import React, { Component } from "react";
import ContextConsumer from "../../containers/Contexts/UserContexts";
class Terms extends Component {
  render() {
    return (
      <ContextConsumer>
        {context => (
          <React.Fragment>
            <p>{context.terminologies.name}</p>
          </React.Fragment>
        )}
      </ContextConsumer>
    );
  }
}

export default Terms;
