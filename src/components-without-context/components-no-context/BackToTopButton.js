import { useState, useEffect } from 'react';
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

import styles from './BackToTopButton.module.css'
export default function BackToTopButton({isDarkMode}) {
	const [isVisible, setIsVisible] = useState(false);
 
 
	useEffect(() => {
	  const handleScroll = () => {
		 if (
			window.pageYOffset > 800 ||
			document.documentElement.scrollTop > 800
		 ) {
			setIsVisible(true);
		 } else {
			setIsVisible(false);
		 }
	  };
 
	  window.addEventListener("scroll", handleScroll);
 
	  return () => {
		 window.removeEventListener("scroll", handleScroll);
	  };
	}, []);
 
	const scrollToTop = () => {
	  window.scrollTo({
		 top: 0,
		 behavior: "smooth",
	  });
	};
 
	const backToTopStyles = {
	 backgroundColor: isDarkMode ? "#f9f5c8" : "#333",
	}
	return (
	  <div
		 className={`${styles.backToTop} ${isVisible ? styles.visible : ""}`}
		 style={backToTopStyles}
		 onClick={scrollToTop}
	  >
		 <FaArrowUp />
	  </div>
	);
 }