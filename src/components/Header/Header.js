import React from "react";
import classes from "./Header.module.css";
import SelectorForm from "./SelectorForm";

const Header = ({
  handleSelectChange,
  onAboutAuthorClick,
  showAboutAuthor,
}) => {
  return (
    <header className={classes.header}>
      <h1>Христианские рассказы</h1>
      <nav className={classes["header-menu"]}>
        {!showAboutAuthor && (
          <SelectorForm handleSelectChange={handleSelectChange} />
        )}

        {!showAboutAuthor && (
          <button onClick={onAboutAuthorClick}>Об авторе</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
