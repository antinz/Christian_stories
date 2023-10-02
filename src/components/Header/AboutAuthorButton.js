import React from "react";
import classes from "./AboutAuthorButton.module.css";

const AboutAuthorButton = ({ onAboutAuthorClick }) => {
  return (
    <button
      onClick={onAboutAuthorClick}
      className={classes["about-author-btn"]}
    >
      Об авторе
    </button>
  );
};

export default AboutAuthorButton;
