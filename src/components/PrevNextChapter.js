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
  } = useBooks();
  return (
    <div className={styles.pagination}>
      {currentChapterIndex > 0 && (
        <button onClick={handlePreviousChapter}>
          <FaArrowLeft />
          Предыдущая
        </button>
      )}
      {currentChapterIndex < selectedBook.content.length - 1 && (
        <button onClick={handleNextChapter}>
          Следующая
          <FaArrowRight />
        </button>
      )}
    </div>
  );
}

export default PrevNextChapter;
