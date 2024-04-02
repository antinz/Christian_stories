import styles from './SymbolModal.module.css'
import React from 'react';
import { FaTimes} from 'react-icons/fa';
export default function SymbolModal({ onClose, content, isDarkMode }) {
	const modalStyles = {
	  backgroundColor: isDarkMode ? "#333" : "#fff",
	  color: isDarkMode ? "#333" : "#333",
	};
	return (
	  <div className={styles.modal} onClick={onClose}>
		 <div
			className={styles["modal-content"]}
			onClick={(e) => e.stopPropagation()}
			style={modalStyles}
		 >
			<button onClick={onClose}>
			  <FaTimes />
			</button>
			<div>
			  <p>{content}</p>
			</div>
		 </div>
	  </div>
	);
 }