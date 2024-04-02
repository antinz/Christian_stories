import React from "react";

export default function Main({ children, isDarkMode }) {
	const mainStyles = {
	  backgroundColor: isDarkMode ? "#333" : "#f9f5c8",
	  color: isDarkMode ? "#fff" : "#333",
	};
	return <main style={mainStyles}>{children}</main>;
 }