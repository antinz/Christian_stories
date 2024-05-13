import styles from "./SidebarBtn.module.css";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { useBooks } from "./contexts/BooksContext";
export default function SidebarBtn() {
  const { handleOpenSidebar, isDarkMode } = useBooks();
  const sidebarBtnStyles = {
    backgroundColor: isDarkMode ? "var(--bg-color)" : "var(--black-color)",
    color: isDarkMode ? "var(--black-color)" : "#fff",
  };
  return (
    <button
      className={styles["sidebar-button"]}
      onClick={handleOpenSidebar}
      style={sidebarBtnStyles}
    >
      <FaAngleRight className={styles["icon-angle"]} />
    </button>
  );
}
