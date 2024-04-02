import styles from './AboutAuthorButton.module.css';
import React from 'react';
import { useBooks } from './contexts/BooksContext';

export default function AboutAuthorButton() {
	const {handleAboutAuthorClick} = useBooks();
	return (
	  <div onClick={handleAboutAuthorClick} className={styles["about-author-btn"]}>
		 Об авторе
	  </div>
	);
 }