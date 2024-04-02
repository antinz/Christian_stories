import React, { useState, useEffect, Fragment } from "react";
import { books } from "../articles";
import { FaBars } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useLocalStorage } from "../useLocalStorage";
import Header from './Header';
import BurgerMenu from './BurgerMenu';
import BookCategoryList from './BookCategoryList';
import AboutAuthorButton from './AboutAuthorButton';
import Main from './Main';
import Sidebar from './Sidebar';
import SidebarBtn from './SidebarBtn';
import ContainerWrapper from './ContainerWrapper';
import AboutAuthor from './AboutAuthor';
import MainContent from './MainContent';
import SymbolModal from './SymbolModal';
import BackToTopButton from './BackToTopButton';



export default function App() {

  const [selectedBook, setSelectedBook] = useLocalStorage([],"lastOpenedBook")

  const [showAboutAuthor, setShowAboutAuthor] = useState(false);
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState([0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  const handleBurgerMenu = () => {
    setIsBurgerMenu((prevIsBurgerMenu) => !prevIsBurgerMenu);
  };

  const handleCloseBurgerMenu = () => {
    setIsBurgerMenu(false);
  };

  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSymbolClick = (content) => {
    setModalContent(content);
    setShowModal(true);
  };
  const handleAboutAuthorClick = () => {
    setShowAboutAuthor(true);
    setIsBurgerMenu(false);
  };

  const handleExitClick = () => {
    setShowAboutAuthor(false);
  };
  const handleToggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [showModal]);

  return (
    <Fragment>
      <Header
        onAboutAuthorClick={handleAboutAuthorClick}
        showAboutAuthor={showAboutAuthor}
        isDarkMode={isDarkMode}
      >
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
          <BurgerMenu
            showAboutAuthor={showAboutAuthor}
            books={books}
            onCloseBurgerMenu={handleCloseBurgerMenu}
          >
            <BookCategoryList
              books={books}
              selectedCategory={selectedCategory}
              onCategoryClick={handleCategoryClick}
              onSelectBook={handleSelectBook}
              selectedBook={selectedBook}
              onCloseBurgerMenu={handleCloseBurgerMenu}
            />
            <AboutAuthorButton
              showAboutAuthor={showAboutAuthor}
              onAboutAuthorClick={handleAboutAuthorClick}
            />
          </BurgerMenu>
        )}
      </Header>
      <Main isDarkMode={isDarkMode}>
        {isSidebarOpen && (
          <Sidebar
            books={books}
            selectedBook={selectedBook}
            onCloseSidebar={handleCloseSidebar}
          />
        )}
        {!showAboutAuthor && !isSidebarOpen && (
          <SidebarBtn onSidebar={handleOpenSidebar} />
        )}
        <ContainerWrapper
          onCloseSidebar={handleCloseSidebar}
          onCloseBurgerMenu={handleCloseBurgerMenu}
        >
          {showAboutAuthor ? (
            <AboutAuthor
              showAboutAuthor={showAboutAuthor}
              onExitClick={handleExitClick}
				  isDarkMode={isDarkMode}
            />
          ) : (
            <MainContent
              selectedBook={selectedBook}
              books={books}
              onShowModal={handleModal}
              onSymbolClick={handleSymbolClick}
				  isDarkMode={isDarkMode}
            />
          )}
          {showModal && (
            <SymbolModal onClose={handleCloseModal} content={modalContent} />
          )}
          <BackToTopButton isDarkMode={isDarkMode}/>
        </ContainerWrapper>
      </Main>
    </Fragment>
  );
}



