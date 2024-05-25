import React, { useState } from "react";
import styles from "./AboutAuthor.module.css";
import { aboutAuthor } from "../articles";
import { useBooks } from "./contexts/BooksContext";
import authorImage from "../assets/author.jpg";

export default function AboutAuthor() {
  const { showAboutAuthor, handleExitClick, isDarkMode } = useBooks();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const backBtnStyles = {
    backgroundColor: isDarkMode ? "var(--bg-color)" : "var(--black-color)",
    color: isDarkMode ? "var(--black-color)" : "#fff",
  };

  if (!showAboutAuthor) return null;

  return (
    <div className={styles["about-author"]}>
      <div className={styles["about-author__center"]}>
        <div className={styles["about-author__image"]}>
          <img
            src={authorImage}
            alt="Author"
            loading="lazy"
            onLoad={handleImageLoad}
            className={imageLoaded ? styles.loaded : styles.loading}
          />
        </div>
        <div className={styles["about-author-desc"]}>
          {aboutAuthor.map((about) => {
            const { title, content, chapterId } = about;
            return (
              <div key={title}>
                <h1 id={chapterId}>{title}</h1>
                {content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles["about-author-back"]}>
        <button onClick={handleExitClick} style={backBtnStyles}>
          Назад
        </button>
      </div>
    </div>
  );
}
