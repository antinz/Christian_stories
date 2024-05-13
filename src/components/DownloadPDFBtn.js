import styles from "./DownloadPDFBtn.module.css";
import React from "react";
import { useBooks } from "./contexts/BooksContext";
export default function DownloadPDFBtn({ url, download, onDownload }) {
  const { isDarkMode } = useBooks();
  const downloadBtnStyles = {
    backgroundColor: isDarkMode ? "var(--bg-color)" : "var(--black-color)",
    color: isDarkMode ? "var(--black-color)" : "#fff",
  };

  return (
    <button
      className={styles.download}
      style={downloadBtnStyles}
      onClick={() => onDownload(url, download)}
    >
      PDF
    </button>
  );
}
