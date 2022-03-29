import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import { useContext } from "react";
import { DataContext } from "../../contexts/ContextProvider";

const Header = () => {
  const context = useContext(DataContext);
  const { darkTheme, toggle, isOpen, handleSort, handleTheme, handleModal } =
    context;

  return (
    <header className={`App-header ${darkTheme ? "app-header-dark" : ""}`}>
      <h1>My contacts book</h1>
      <div className="button-group">
        <Button
          buttonLabel={darkTheme ? "Light" : "Dark"}
          handleClick={handleTheme}
        />
        <Button
          buttonLabel={toggle ? "Sort A-Z" : "Randomise"}
          handleClick={handleSort}
        />
      </div>
    </header>
  );
};

export default Header;
