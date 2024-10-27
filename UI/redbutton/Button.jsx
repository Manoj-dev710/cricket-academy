import React from "react";
import classes from "./button.module.css";
const Button = ({ children, color, ...props }) => {
  return (
    <button
      {...props}
      className={`${classes.red_button} ${color === "blue" ? "bg1" : "bg2"}`}
    >
      {children}
    </button>
  );
};

export default Button;
