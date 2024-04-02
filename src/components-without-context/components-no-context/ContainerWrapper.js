import styles from './ContainerWrapper.module.css';
import React from 'react';
export default function ContainerWrapper({ children, onCloseSidebar, onCloseBurgerMenu }) {
	return (
	  <div
		 className={styles.container}
		 onClick={() => {
			onCloseSidebar();
			onCloseBurgerMenu();
		 }}
	  >
		 {children}
	  </div>
	);
 }