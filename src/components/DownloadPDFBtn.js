import styles from "./DownloadPDFBtn.module.css";
import React from "react";
import { useBooks } from "./contexts/BooksContext";
export default function DownloadPDFBtn({ url, download, onDownload }) {
  const { isDarkMode } = useBooks();
  const downloadBtnStyles = {
    backgroundColor: isDarkMode ? "#f7f3d6" : "#333",
    color: isDarkMode ? "#333" : "#fff",
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
