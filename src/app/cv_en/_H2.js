import React from "react";

const H2 = ({ children, addClassName = "" }) => {
  return <h2 className={`text-lg font-semibold${addClassName}`}>{children}</h2>;
};

export default H2;
