import React from "react";
import "./Term.scss";
import PropType from "prop-types";
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

Term.propType = {
  title: PropType.string,
  definition: PropType.string
};
export default Term;
