import React, { createContext, useContext, useReducer, useEffect } from "react";
import { useLocalStorage } from "../../useLocalStorage";
import { books } from "../../articles";

const initialState = {
  showAboutAuthor: false,
  isBurgerMenu: false,
  showModal: false,
  modalContent: [0],
  isSidebarOpen: false,
  selectedCategory: null,
  isDarkMode: localStorage.getItem("darkMode") === "true",
};

function reducer(state, action) {
  switch (action.type) {
    case "showAboutAuthor":
      return {
        ...state,
        showAboutAuthor: true,
      };
    case "closeAboutAuthor":
      return {
        ...state,
        showAboutAuthor: false,
      };
    case "openBurgerMenu":
      return {
        ...state,
        isBurgerMenu: true,
      };
    case "closeBurgerMenu":
      return {
        ...state,
        isBurgerMenu: false,
      };
    case "openModalScreen":
      return {
        ...state,
        showModal: true,
      };
    case "closeModalScreen":
      return {
        ...state,
        showModal: false,
      };
    case "showModalContent":
      return {
        ...state,
        modalContent: action.payload,
      };
    case "openSidebar":
      return {
        ...state,
        isSidebarOpen: true,
      };
    case "closeSidebar":
      return {
        ...state,
        isSidebarOpen: false,
      };
    case "categorySelected":
      return {
        ...state,
        selectedCategory:
          state.selectedCategory === action.payload ? null : action.payload,
      };
    case "darkModeToggle":
      return {
        ...state,
        isDarkMode: action.payload,
      };

    default:
      throw new Error("Unknown error");
  }
}

const BooksContext = createContext();

function BooksProvider({ children }) {
  const [
    {
      showAboutAuthor,
      isBurgerMenu,
      showModal,
      modalContent,
      isSidebarOpen,
      selectedCategory,
      isDarkMode,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const [selectedBook, setSelectedBook] = useLocalStorage(
    null,
    "lastOpenedBook"
  );

  const handleCategoryClick = (category) => {
    dispatch({ type: "categorySelected", payload: category });
  };

  const handleBurgerMenu = () => {
    dispatch({
      type: "openBurgerMenu",
      payload: (prevIsBurgerMenu) => !prevIsBurgerMenu,
    });
  };

  const handleCloseBurgerMenu = () => {
    dispatch({ type: "closeBurgerMenu" });
  };

  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  const handleOpenSidebar = () => {
    dispatch({ type: "openSidebar" });
  };
  const handleCloseSidebar = () => {
    dispatch({ type: "closeSidebar" });
  };

  const handleOpenModal = (content) => {
    dispatch({ type: "openModalScreen" });
    dispatch({ type: "showModalContent", payload: content });
  };

  const handleCloseModal = () => {
    dispatch({ type: "closeModalScreen" });
  };

  const handleSymbolClick = () => {
    dispatch({ type: "closeModalScreen" });
  };
  const handleAboutAuthorClick = () => {
    dispatch({ type: "showAboutAuthor" });
    handleCloseBurgerMenu();
  };

  const handleExitClick = () => {
    dispatch({ type: "closeAboutAuthor" });
  };
  const handleToggleDarkMode = () => {
    const newMode = !isDarkMode;
    dispatch({ type: "darkModeToggle", payload: newMode });
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
    <BooksContext.Provider
      value={{
        showAboutAuthor,
        isBurgerMenu,
        showModal,
        modalContent,
        isSidebarOpen,
        selectedCategory,
        isDarkMode,
        handleCategoryClick,
        handleBurgerMenu,
        handleCloseBurgerMenu,
        handleSelectBook,
        handleOpenSidebar,
        handleCloseSidebar,
        handleOpenModal,
        handleCloseModal,
        handleSymbolClick,
        handleAboutAuthorClick,
        handleExitClick,
        handleToggleDarkMode,
        books,
        selectedBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

function useBooks() {
  const context = useContext(BooksContext);
  if (context === undefined)
    throw new Error("BooksContext was used out the BooksProvider");
  return context;
}

export { BooksProvider, useBooks };
