import styles from './BurgerMenu.module.css'
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useBooks } from './contexts/BooksContext';

export default function BurgerMenu({ children }) {
	const {handleCloseBurgerMenu} = useBooks();
	return (
	  <div className={styles["burger-menu"]}>
		 <button className={styles["nav-btn-close"]} onClick={handleCloseBurgerMenu}>
			<FaTimes />
		 </button>
		 <div className={styles["burger-menu-content"]}>
			<h2>Меню</h2>
			{children}
		 </div>
	  </div>
	);
 }