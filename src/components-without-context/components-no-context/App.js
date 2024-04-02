import React, {useEffect, Fragment, useReducer } from "react";
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

const initialState = {
	showAboutAuthor: false,
	isBurgerMenu: false,
	showModal: false,
	modalContent: [0],
	isSidebarOpen: false,
	selectedCategory: null,
	isDarkMode: localStorage.getItem("darkMode") === "true",
 }

 function reducer(state, action) {
	switch (action.type) {
		case "showAboutAuthor":
			return {
				...state, showAboutAuthor: true
			};
		case "closeAboutAuthor":
			return {
				...state, showAboutAuthor: false
			};
		case "openBurgerMenu":
			return {
				...state, isBurgerMenu: true
			};
		case "closeBurgerMenu":
			return {
				...state, isBurgerMenu: false
			};
		case "openModalScreen":
			return {
				...state, showModal: true
			};
		case "closeModalScreen":
			return {
				...state, showModal: false
			};
		case "showModalContent":
			return {
				...state, modalContent: action.payload
			};
		case "openSidebar":
			return {
				...state, isSidebarOpen: true
			};
		case "closeSidebar":
			return {
				...state, isSidebarOpen: false
			};
		case "categorySelected":
			return {
				...state, selectedCategory: state.selectedCategory === action.payload ? null : action.payload
			};
		case "darkModeToggle":
			return {
				...state, isDarkMode: action.payload 
			};
	
		default: throw new Error("Unknown error")
	}
 }


export default function App() {
	const [{showAboutAuthor, isBurgerMenu, showModal, modalContent, isSidebarOpen, selectedCategory, isDarkMode}, dispatch] = useReducer(reducer, initialState)

  const [selectedBook, setSelectedBook] = useLocalStorage([],"lastOpenedBook")

//   const [showAboutAuthor, setShowAboutAuthor] = useState(false);
//   const [isBurgerMenu, setIsBurgerMenu] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [modalContent, setModalContent] = useState([0]);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [isDarkMode, setIsDarkMode] = useState(
//     localStorage.getItem("darkMode") === "true"
//   );

  const handleCategoryClick = (category) => {
    dispatch({type: "categorySelected", payload: category})
  };

  const handleBurgerMenu = () => {
    dispatch({type: "openBurgerMenu", payload: prevIsBurgerMenu => !prevIsBurgerMenu});
  };

  const handleCloseBurgerMenu = () => {
    dispatch({type: "closeBurgerMenu"});
  };

  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  const handleOpenSidebar = () => {
	dispatch({type: "openSidebar"});
  };
  const handleCloseSidebar = () => {
	dispatch({type: "closeSidebar"});
  };

  const handleModal = () => {
	dispatch({type: "openModalScreen"});
  };
  const handleCloseModal = () => {
	dispatch({type: "closeModalScreen"});
  };

  const handleSymbolClick = (content) => {
    dispatch({type: "showModalContent", payload: content});
    dispatch({type: "closeModalScreen"});
  };
  const handleAboutAuthorClick = () => {
    dispatch({type: "showAboutAuthor"});
    handleCloseBurgerMenu();
  };

  const handleExitClick = () => {
    dispatch({type: "closeAboutAuthor"});
  };
  const handleToggleDarkMode = () => {
    const newMode = !isDarkMode;
    dispatch({type: "darkModeToggle", payload:newMode });
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



