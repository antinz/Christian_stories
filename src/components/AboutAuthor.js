import React, { useState, useEffect } from "react";
import styles from "./AboutAuthor.module.css";
import { aboutAuthor } from "../articles";
import { useBooks } from "./contexts/BooksContext";

export default function AboutAuthor() {
  const { showAboutAuthor, handleExitClick, isDarkMode } = useBooks();
  const [authorImage, setAuthorImage] = useState(null);

  useEffect(() => {
    const importImage = async () => {
      try {
        const { default: image } = await import("../assets/author.jpg");
        setAuthorImage(image);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    importImage();

    // Clean up function
    return () => {
      setAuthorImage(null);
    };
  }, []);

  const backBtnStyles = {
    backgroundColor: isDarkMode ? "var(--bg-color)" : "var(--black-color)",
    color: isDarkMode ? "var(--black-color)" : "#fff",
  };

  if (!showAboutAuthor) return null;

  return (
    <div className={styles["about-author"]}>
      <div className={styles["about-author__center"]}>
        <div className={styles["about-author__image"]}>
          {authorImage && <img src={authorImage} alt="Author" loading="lazy" />}
        </div>
        <div className={styles["about-author-desc"]}>
          {aboutAuthor.map((about) => {
            const { title, content, chapterId } = about;
            return (
              <div key={chapterId}>
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
