import styles from './Sidebar.module.css';
import React from 'react';
import { FaTimes } from 'react-icons/fa';

export default function Sidebar({ selectedBook, onCloseSidebar }) {
	const bookChapters = selectedBook;
	const { content } = bookChapters;
	return (
	  <div className={styles.sidebar}>
		 <h2>Главы</h2>
		 <button onClick={() => onCloseSidebar(false)}>
			<FaTimes />
		 </button>
		 <ul>
			{content.map((chapterTitle, index) => {
			  const { title, chapterId } = chapterTitle;
			  const anchorLink = `#${chapterId}`;
			  return (
				 <li key={index}>
					<a href={anchorLink} onClick={() => onCloseSidebar(false)}>
					  {title}
					</a>
				 </li>
			  );
			})}
		 </ul>
	  </div>
	);
 }