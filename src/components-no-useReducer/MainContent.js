import styles from './MainContent.module.css';
import React, {Fragment} from 'react';
import DownloadPDFBtn from '../components/DownloadPDFBtn'

export default function MainContent({ selectedBook, books, onSymbolClick, isDarkMode }) {
	const handleDownload = (url, download) => {
	  const anchor = document.createElement("a");
	  anchor.href = url;
	  anchor.download = download;
	  anchor.target = "_blank";
	  anchor.click();
	};
 
	return (
	  <div className={styles.content}>
		 <h3 className={styles.author}>Михаил Нагирняк</h3>
		 {books.map((book) => {
			const {
			  id,
			  bookTitle,
			  bookSubtitle,
			  description,
			  content,
			  url,
			  download,
			  bookTags,
			} = book;
			if (selectedBook && selectedBook.id === id) {
			  return (
				 <div key={id} className={styles.book}>
					<h1>{bookTitle}</h1>
					<h4>{bookSubtitle}</h4>
					{description.map((desc, index) => (
					  <p className={styles.description} key={index}>
						 {desc}
					  </p>
					))}
					<DownloadPDFBtn isDarkMode={isDarkMode} onDownload={handleDownload} url={url} download={download}/>
					{content.map((chapter, chapterIndex) => {
					  const { title, text, chapterId } = chapter;
 
					  return (
						 <div
							className={styles["book-content"]}
							key={chapterIndex}
							id={chapterId}
						 >
							<h2>{title}</h2>
							{Array.isArray(text) ? (
							  text.map((paragraph, paragraphIndex) => {
								 const hasSymbol =
									typeof paragraph === "string" &&
									paragraph.includes("💡");
								 return (
									<p key={paragraphIndex}>
									  {hasSymbol
										 ? paragraph.split("💡").map((tag, index) => {
											  const localTag = bookTags.find(
												 (el) => el.contentId === chapterIndex
											  );
											  return (
												 <Fragment key={index}>
													{index > 0 && (
													  <span
														 aria-label="bulb"
														 role="img"
														 className={styles.symbol}
														 onClick={() =>
															onSymbolClick(localTag.text)
														 }
													  >
														 💡
													  </span>
													)}
													{tag}
												 </Fragment>
											  );
											})
										 : paragraph}
									</p>
								 );
							  })
							) : (
							  <p key={chapterIndex}>{text}</p>
							)}
						 </div>
					  );
					})}
				 </div>
			  );
			}
			return null;
		 })}
	  </div>
	);
 }