import styles from "./SidebarBtn.module.css";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { useBooks } from "./contexts/BooksContext";
export default function SidebarBtn() {
  const { handleOpenSidebar } = useBooks();
  return (
    <button className={styles["sidebar-button"]} onClick={handleOpenSidebar}>
      <FaAngleRight className="icon-angle" />
    </button>
  );
}
