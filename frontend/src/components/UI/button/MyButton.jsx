import React from "react";

const MyButton = ({ children, className, ...props }) => {
  return (
    <button className={`button ${className}`} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
