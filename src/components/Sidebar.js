import styles from "./Sidebar.module.css";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { useBooks } from "./contexts/BooksContext";

export default function Sidebar() {
  const {
    selectedBook,
    handleCloseSidebar,
    currentChapterIndex,
    handleGoToChapter,
  } = useBooks();
  const bookChapters = selectedBook;
  const { content } = bookChapters;
  return (
    <div className={styles.sidebar}>
      <h2>Главы</h2>
      <button onClick={() => handleCloseSidebar(false)}>
        <FaTimes />
      </button>
      <ul>
        {content.map((chapterTitle, index) => {
          const { title } = chapterTitle;
          return (
            <li
              key={index}
              onClick={() => {
                handleGoToChapter(index);
                handleCloseSidebar(false);
              }}
              className={currentChapterIndex === index ? styles.active : ""}
            >
              {title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
