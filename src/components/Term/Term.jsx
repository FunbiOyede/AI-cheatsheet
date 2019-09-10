import React from "react";
import "./Term.scss";

const Term = props => (
  <div className="Term">
    <h3
      style={{
        textAlign: "center",
        fontSize: "24px"
      }}
    >
      {props.title}
    </h3>
    <div>{props.definition}</div>
  </div>
);

export default Term;
