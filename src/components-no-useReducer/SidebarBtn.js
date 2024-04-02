import styles from './SidebarBtn.module.css'
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
export default function SidebarBtn({ onSidebar }) {
	return (
	  <button className={styles["sidebar-button"]} onClick={onSidebar}>
		 <FaAngleRight className="icon-angle" />
	  </button>
	);
 }