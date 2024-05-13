import { useState, useEffect } from "react";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

import styles from "./BackToTopButton.module.css";
import { useBooks } from "./contexts/BooksContext";
export default function BackToTopButton() {
  const { isDarkMode } = useBooks();
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
    backgroundColor: isDarkMode ? "var(--bg-color)" : "var(--black-color)",
    color: isDarkMode && "var(--black-color)",
  };
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
