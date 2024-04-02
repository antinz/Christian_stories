import styles from './Header.module.css'
import React from 'react';

export default function Header({ children, isDarkMode }) {
	const headerStyles = {
	  backgroundColor: isDarkMode ? "#f9f5c8" : "#333",
	  color: isDarkMode ? "#333" : "#fff",
	};
	return (
	  <header className={styles.header} style={headerStyles}>
		 <h1>Книги Михаила Нагирняка</h1>
		 {children}
	  </header>
	);
 }