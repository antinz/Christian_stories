import styles from './Sidebar.module.css';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useBooks } from './contexts/BooksContext';

export default function Sidebar() {
	const { selectedBook, handleCloseSidebar }= useBooks();
	const bookChapters = selectedBook;
	const { content } = bookChapters;
	return (
	  <div className={styles.sidebar}>
		 <h2>Главы</h2>
		 <button onClick={() => handleCloseSidebar(false)}>
			<FaTimes />
		 </button>
		 <ul>
			{content.map((chapterTitle, index) => {
			  const { title, chapterId } = chapterTitle;
			  const anchorLink = `#${chapterId}`;
			  return (
				 <li key={index}>
					<a href={anchorLink} onClick={() => handleCloseSidebar(false)}>
					  {title}
					</a>
				 </li>
			  );
			})}
		 </ul>
	  </div>
	);
 }