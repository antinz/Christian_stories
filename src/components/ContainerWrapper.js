import styles from './ContainerWrapper.module.css';
import React from 'react';
import { useBooks } from './contexts/BooksContext';
export default function ContainerWrapper({ children}) {
	const {handleCloseSidebar, handleCloseBurgerMenu} = useBooks();
	return (
	  <div
		 className={styles.container}
		 onClick={() => {
			handleCloseSidebar();
			handleCloseBurgerMenu();
		 }}
	  >
		 {children}
	  </div>
	);
 }