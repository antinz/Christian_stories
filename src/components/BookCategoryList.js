import styles from "./BookCategoryList.module.css";
import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useBooks } from "./contexts/BooksContext";
export default function BookCategoryList() {
  const {
    books,
    selectedCategory,
    handleCategoryClick,
    handleSelectBook,
    selectedBook,
    handleCloseBurgerMenu,
  } = useBooks();
  const categories = [...new Set(books.map((book) => book.category))];

  return (
    <div className={styles["category-box"]}>
      <ul className={styles["category-list"]}>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={styles["outer-li"]}
          >
            <span
              className={
                selectedCategory === category
                  ? `${styles["category-list-item"]} ${styles["selected-category"]}`
                  : `${styles["category-list-item"]}`
              }
            >
              {category}
              <span className={styles["angle-icon"]}>
                {selectedCategory === category ? (
                  <FaAngleUp />
                ) : (
                  <FaAngleDown />
                )}
              </span>
            </span>

            {selectedCategory === category && (
              <ul className={styles["book-list"]}>
                {books
                  .filter((book) => book.category === selectedCategory)
                  .map((book) => (
                    <li
                      key={book.id}
                      onClick={() => {
                        handleSelectBook(book);
                        handleCloseBurgerMenu();
                      }}
                      className={styles["inner-li"]}
                    >
                      <span
                        className={
                          selectedBook && selectedBook.id === book.id
                            ? `${styles["book-list-item"]} ${styles["selected-book"]}`
                            : `${styles["book-list-item"]}`
                        }
                      >
                        {book.bookTitle}
                      </span>
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
