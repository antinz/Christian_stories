import React from "react";
import { FaBars } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import Header from "./Header";
import BurgerMenu from "./BurgerMenu";
import BookCategoryList from "./BookCategoryList";
import AboutAuthorButton from "./AboutAuthorButton";
import Main from "./Main";
import ContainerWrapper from "./ContainerWrapper";
import AboutAuthor from "./AboutAuthor";
import MainContent from "./MainContent";
import SymbolModal from "./SymbolModal";
import BackToTopButton from "./BackToTopButton";
import { useBooks } from "./contexts/BooksContext";
import SidebarBtn from "./SidebarBtn";
import Sidebar from "./Sidebar";

export default function App() {
  const {
    showAboutAuthor,
    handleBurgerMenu,
    isDarkMode,
    handleToggleDarkMode,
    isBurgerMenu,
    showModal,
    isSidebarOpen,
  } = useBooks();

  if (isSidebarOpen && window.innerWidth <= 800) {
    return (
      <>
        <Header>
          <button className="mode-toggle-btn" onClick={handleToggleDarkMode}>
            {isDarkMode ? <FaSun style={{ color: "#333" }} /> : <FaMoon />}
          </button>
        </Header>
        <Main isDarkMode={isDarkMode}>
          <Sidebar />
        </Main>
      </>
    );
  }

  if (showAboutAuthor) {
    return (
      <>
        <Header>
          <button className="mode-toggle-btn" onClick={handleToggleDarkMode}>
            {isDarkMode ? <FaSun style={{ color: "#333" }} /> : <FaMoon />}
          </button>
        </Header>
        <Main isDarkMode={isDarkMode}>
          <AboutAuthor />
        </Main>
      </>
    );
  }

  return (
    <>
      <Header>
        {!showAboutAuthor && (
          <button
            className="nav-btn"
            onClick={handleBurgerMenu}
            style={isDarkMode ? { color: "#333" } : {}}
          >
            <FaBars />
          </button>
        )}
        <button className="mode-toggle-btn" onClick={handleToggleDarkMode}>
          {isDarkMode ? <FaSun style={{ color: "#333" }} /> : <FaMoon />}
        </button>
        {isBurgerMenu && (
          <BurgerMenu>
            <BookCategoryList />
            <AboutAuthorButton />
          </BurgerMenu>
        )}
      </Header>
      <Main isDarkMode={isDarkMode}>
        {isSidebarOpen && <Sidebar />}
        {!showAboutAuthor && !isSidebarOpen && !showModal && <SidebarBtn />}
        <ContainerWrapper>
          <MainContent />
          {showModal && <SymbolModal />}
          <BackToTopButton />
        </ContainerWrapper>
      </Main>
    </>
  );
}
