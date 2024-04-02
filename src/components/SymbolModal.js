import styles from "./SymbolModal.module.css";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { useBooks } from "./contexts/BooksContext";
export default function SymbolModal() {
  const { handleCloseModal, modalContent, isDarkMode } = useBooks();
  const modalStyles = {
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#333" : "#333",
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
