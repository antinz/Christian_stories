import styles from "./SymbolModal.module.css";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { useBooks } from "./contexts/BooksContext";
export default function SymbolModal() {
  const { handleCloseModal, modalContent, isDarkMode } = useBooks();
  const modalStyles = {
    backgroundColor: isDarkMode ? "var(--black-color)" : "#fff",
    color: isDarkMode ? "var(--black-color)" : "var(--black-color)",
  };
  return (
    <div className={styles.modal} onClick={handleCloseModal}>
      <div
        className={styles["modal-content"]}
        onClick={(e) => e.stopPropagation()}
        style={modalStyles}
      >
        <button onClick={handleCloseModal}>
          <FaTimes />
        </button>
        <div>
          <p>{modalContent}</p>
        </div>
      </div>
    </div>
  );
}
