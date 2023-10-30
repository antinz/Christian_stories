import React from "react";
import classes from "./MainContent.module.css";

const MainContent = ({ selectedBook, books }) => {
  const handleDownload = (url, download) => {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = download;
    anchor.target = "_blank";
    anchor.click();
  };

  return (
    <div className={classes.content}>
      <h3 className={classes.author}>Михаил Нагирняк</h3>
      {books.map((book) => {
        const {
          id,
          bookTitle,
          bookSubtitle,
          description,
          content,
          url,
          download,
        } = book;
        return (
          <div key={id}>
            {selectedBook === bookTitle && (
              <div className={classes.book}>
                <button
                  className={classes.download}
                  onClick={() => handleDownload(url, download)}
                >
                  Скачать книгу
                </button>
                <h1>{bookTitle}</h1>
                <h4>{bookSubtitle}</h4>
                {description.map((desc, index) => {
                  return (
                    <p className={classes.description} key={index}>
                      {desc}
                    </p>
                  );
                })}
                {content.map((chapter, chapterIndex) => {
                  const { title, text } = chapter;
                  return (
                    <div className={classes["book-content"]} key={chapterIndex}>
                      <h2>{title}</h2>
                      {text.map((paragraph, paragraphIndex) => {
                        return <p key={paragraphIndex}>{paragraph}</p>;
                      })}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MainContent;
