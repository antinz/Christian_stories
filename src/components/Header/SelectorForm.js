import React from "react";
import classes from "./SelectorForm.module.css";

const SelectorForm = () => {
  return (
    <select id="book-selector" className={classes["book-selector"]}>
      <option value="book1">Book 1</option>
      <option value="book2">Book 2</option>
      <option value="book3">Book 3</option>
    </select>
  );
};

export default SelectorForm;
