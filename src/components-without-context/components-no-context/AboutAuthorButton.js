import styles from './AboutAuthorButton.module.css';
import React from 'react';

export default function AboutAuthorButton({ onAboutAuthorClick }) {
	return (
	  <div onClick={onAboutAuthorClick} className={styles["about-author-btn"]}>
		 Об авторе
	  </div>
	);
 }