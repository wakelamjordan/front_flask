import React from "react";

const TextContainer = ({ children, addClass = "" }) => {
  return (
    <div className={"px-5 rounded-box text-base-content" + addClass}>
      {children}
    </div>
  );
};

export default TextContainer;
