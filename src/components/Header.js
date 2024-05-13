import styles from "./Header.module.css";
import React from "react";
import { useBooks } from "./contexts/BooksContext";

export default function Header({ children }) {
  const { isDarkMode } = useBooks();
  const headerStyles = {
    backgroundColor: isDarkMode ? "var(--bg-color)" : "var(--black-color)",
    color: isDarkMode ? "var(--black-color)" : "#fff",
  };
  return (
    <header className={styles.header} style={headerStyles}>
      <h1>Книги Михаила Нагирняка</h1>
      {children}
    </header>
  );
}
