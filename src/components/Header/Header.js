import React, { useState, useEffect, useRef } from "react";
import classes from "./Header.module.css";
import SelectorForm from "./SelectorForm";
import AboutAuthorButton from "./AboutAuthorButton";
import { FaBars, FaTimes } from "react-icons/fa";
const Header = ({
  handleSelectChange,
  onAboutAuthorClick,
  showAboutAuthor,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSelectorForm, setShowSelectorForm] = useState(true);
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle(classes["responsive-nav"]);
    setShowSelectorForm(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={classes.header}>
      <button onClick={showNavBar} className={classes["nav-btn"]}>
        <FaBars />
      </button>
      <h1>Христианские рассказы</h1>
      {!showAboutAuthor && (
        <SelectorForm handleSelectChange={handleSelectChange} />
      )}
      <nav ref={navRef} className={classes["header-menu"]}>
        <div className={classes["header-btn"]}>
          {!showAboutAuthor && (
            <AboutAuthorButton onAboutAuthorClick={onAboutAuthorClick} />
          )}
        </div>
        <button
          onClick={showNavBar}
          className={`${classes["nav-btn"]} ${classes["nav-close-btn"]}`}
        >
          <FaTimes />
        </button>
      </nav>
    </header>
  );
};

export default Header;
