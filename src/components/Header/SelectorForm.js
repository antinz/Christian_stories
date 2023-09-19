import React from "react";
import classes from "./SelectorForm.module.css";
import { books } from "../../articles";

const SelectorForm = ({ handleSelectChange }) => {
  return (
    <form className={classes["form-center"]}>
      <label htmlFor="book-selector">Выберите книгу</label>
      <select id="book-selector" onChange={handleSelectChange}>
        {books.map((book) => {
          const { id, bookTitle } = book;
          return <option key={id}>{bookTitle}</option>;
        })}
      </select>
    </form>
  );
};

export default SelectorForm;
