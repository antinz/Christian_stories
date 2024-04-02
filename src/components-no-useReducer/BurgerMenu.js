import styles from './BurgerMenu.module.css'
import React from 'react';
import { FaTimes } from 'react-icons/fa';

export default function BurgerMenu({ children, onCloseBurgerMenu }) {
	return (
	  <div className={styles["burger-menu"]}>
		 <button className={styles["nav-btn-close"]} onClick={onCloseBurgerMenu}>
			<FaTimes />
		 </button>
		 <div className={styles["burger-menu-content"]}>
			<h2>Меню</h2>
			{children}
		 </div>
	  </div>
	);
 }