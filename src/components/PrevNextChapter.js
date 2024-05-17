import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useBooks } from "./contexts/BooksContext";
import styles from "./PrevNextChapter.module.css";
import React from "react";
function PrevNextChapter() {
  const {
    handleNextChapter,
    handlePreviousChapter,
    selectedBook,
    currentChapterIndex,
    isDarkMode,
  } = useBooks();

  const prevNextChapterStyles = {
    backgroundColor: isDarkMode ? "var(--bg-color)" : "var(--black-color)",
    color: isDarkMode ? "var(--black-color)" : "#fff",
  };
  return (
    <div className={styles.pagination}>
      {currentChapterIndex > 0 && (
        <button onClick={handlePreviousChapter} style={prevNextChapterStyles}>
          <FaArrowLeft />
          Предыдущая
        </button>
      )}
      {currentChapterIndex < selectedBook.content.length - 1 && (
        <button onClick={handleNextChapter} style={prevNextChapterStyles}>
          Следующая
          <FaArrowRight />
        </button>
      )}
    </div>
  );
}

export default PrevNextChapter;
