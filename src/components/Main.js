import React from "react";
import { useBooks } from "./contexts/BooksContext";

export default function Main({ children }) {
  const { isDarkMode } = useBooks();
  const mainStyles = {
    backgroundColor: isDarkMode ? "var(--black-color)" : "var(--bg-color)",
    color: isDarkMode ? "#fff" : "var(--black-color)",
  };
  return <main style={mainStyles}>{children}</main>;
}
