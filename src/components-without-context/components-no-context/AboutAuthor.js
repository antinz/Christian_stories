import styles from './AboutAuthor.module.css';
import React from 'react';
import authorImage from "../assets/author.jpg";
import { aboutAuthor } from "../articles";
export default function AboutAuthor({ showAboutAuthor, onExitClick, isDarkMode }) {
	const backBtnStyles = {
		backgroundColor: isDarkMode ? "#f9f5c8" : "#333",
		color: isDarkMode ? "#333" : "#fff",
	}
  if (!showAboutAuthor) return null;
  return (
    <div className={styles["about-author"]}>
      <div className={styles["about-author__center"]}>
        <div className={styles["about-author__image"]}>
          <img src={authorImage} alt="Author" loading="lazy" />
        </div>
        <div className={styles["about-author-desc"]}>
          {aboutAuthor.map((about) => {
            const { title, content, chapterId } = about;
            return (
              <>
                <h1 id={chapterId}>{title}</h1>
                {content.map((paragraph, index) => {
                  return <p key={index}>{paragraph}</p>;
                })}
              </>
            );
          })}
        </div>
      </div>
      <div className={styles["about-author-back"]}>
        <button onClick={onExitClick} style={backBtnStyles}>Назад</button>
      </div>
    </div>
  );
}