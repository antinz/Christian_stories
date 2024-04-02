import styles from './DownloadPDFBtn.module.css';
import React from 'react';
export default function DownloadPDFBtn({isDarkMode, onDownload, url, download}) {
	const downloadBtnStyles = {
		backgroundColor: isDarkMode ? "#f9f5c8" : "#333",
		color: isDarkMode ? "#333" : "#fff"
	}

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
