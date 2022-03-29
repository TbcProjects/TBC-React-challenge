import React from "react";
import "./Button.css";
import { useContext } from "react";
import { DataContext } from "../../contexts/ContextProvider";

const Button = ({ buttonLabel, handleClick }) => {
  const context = useContext(DataContext);
  const { darkTheme } = context;

  return (
    <button
      className={`button ${darkTheme ? "button-dark" : ""}`}
      onClick={handleClick}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
