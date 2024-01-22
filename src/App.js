import React, { useState, useEffect, Fragment } from "react";
import { books } from "./articles";
import { aboutAuthor } from "./articles";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import authorImage from "./assets/author.jpg";

export default function App() {
  const [selectedBook, setSelectedBook] = useState(() => {
    const storedBook = localStorage.getItem("lastOpenedBook");
    return storedBook ? JSON.parse(storedBook) : books[0];
  });

  const [showAboutAuthor, setShowAboutAuthor] = useState(false);
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState([0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

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
    localStorage.setItem("lastOpenedBook", JSON.stringify(book));
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

  return (
    <Fragment>
      <Header
        onAboutAuthorClick={handleAboutAuthorClick}
        showAboutAuthor={showAboutAuthor}
      >
        {!showAboutAuthor && (
          <button className="nav-btn" onClick={handleBurgerMenu}>
            <FaBars />
          </button>
        )}
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
      <Main>
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
            />
          ) : (
            <MainContent
              selectedBook={selectedBook}
              books={books}
              onShowModal={handleModal}
              onSymbolClick={handleSymbolClick}
            />
          )}
          {showModal && (
            <SymbolModal onClose={handleCloseModal} content={modalContent} />
          )}
          <BackToTopButton />
        </ContainerWrapper>
      </Main>
    </Fragment>
  );
}

//Header
function Header({ children }) {
  return (
    <header className="header">
      <h1>Книги Михаила Нагирняка</h1>
      {children}
    </header>
  );
}

function BurgerMenu({ children, onCloseBurgerMenu }) {
  return (
    <div className="burger-menu">
      <button className="nav-btn-close" onClick={onCloseBurgerMenu}>
        <FaTimes />
      </button>
      <div className="burger-menu-content">
        <h2>Меню</h2>
        {children}
      </div>
    </div>
  );
}

//Sidebar
function Sidebar({ selectedBook, onCloseSidebar }) {
  const bookChapters = selectedBook;
  const { content } = bookChapters;
  return (
    <div className="sidebar">
      <h2>Главы</h2>
      <button onClick={() => onCloseSidebar(false)}>
        <FaTimes />
      </button>
      <ul>
        {content.map((chapterTitle, index) => {
          const { title, chapterId } = chapterTitle;
          const anchorLink = `#${chapterId}`;
          return (
            <li key={index}>
              <a href={anchorLink} onClick={() => onCloseSidebar(false)}>
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// Inside BookCategoryList component
function BookCategoryList({
  books,
  selectedCategory,
  onCategoryClick,
  onSelectBook,
  selectedBook,
  onCloseBurgerMenu,
}) {
  const categories = [...new Set(books.map((book) => book.category))];

  return (
    <div className="category-box">
      <ul className="category-list">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onCategoryClick(category)}
            className="outer-li"
          >
            <span
              className={
                selectedCategory === category
                  ? "category-list-item selected-category"
                  : "category-list-item"
              }
            >
              {category}
            </span>
            {selectedCategory === category && (
              <ul className="book-list">
                {books
                  .filter((book) => book.category === selectedCategory)
                  .map((book) => (
                    <li
                      key={book.id}
                      onClick={() => {
                        onSelectBook(book);
                        onCloseBurgerMenu();
                      }}
                      className="inner-li"
                    >
                      <span
                        className={
                          selectedBook && selectedBook.id === book.id
                            ? "book-list-item selected-book"
                            : "book-list-item"
                        }
                      >
                        {book.bookTitle}
                      </span>
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Main({ children }) {
  return <main>{children}</main>;
}

// ModalScreen
function SymbolModal({ onClose, content }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>
          <FaTimes />
        </button>
        <div className="symbol-explanation">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

// MainContent
function MainContent({ selectedBook, books, onSymbolClick }) {
  const handleDownload = (url, download) => {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = download;
    anchor.target = "_blank";
    anchor.click();
  };

  return (
    <div className="content">
      <h3 className="author">Михаил Нагирняк</h3>
      {books.map((book) => {
        const {
          id,
          bookTitle,
          bookSubtitle,
          description,
          content,
          url,
          download,
          bookTags,
        } = book;
        if (selectedBook && selectedBook.id === id) {
          return (
            <div key={id} className="book">
              <button
                className="download"
                onClick={() => handleDownload(url, download)}
              >
                PDF
              </button>
              <h1>{bookTitle}</h1>
              <h4>{bookSubtitle}</h4>
              {description.map((desc, index) => (
                <p className="description" key={index}>
                  {desc}
                </p>
              ))}
              {content.map((chapter, chapterIndex) => {
                const { title, text, chapterId } = chapter;

                return (
                  <div
                    className="book-content"
                    key={chapterIndex}
                    id={chapterId}
                  >
                    <h2>{title}</h2>
                    {Array.isArray(text) ? (
                      text.map((paragraph, paragraphIndex) => {
                        const hasSymbol =
                          typeof paragraph === "string" &&
                          paragraph.includes("💡");
                        return (
                          <p key={paragraphIndex}>
                            {hasSymbol
                              ? paragraph.split("💡").map((tag, index) => {
                                  const localTag = bookTags.find(
                                    (el) => el.contentId === chapterIndex
                                  );
                                  return (
                                    <Fragment key={index}>
                                      {index > 0 && (
                                        <span
                                          aria-label="bulb"
                                          role="img"
                                          className="symbol"
                                          onClick={() =>
                                            onSymbolClick(localTag.text)
                                          }
                                        >
                                          💡
                                        </span>
                                      )}
                                      {tag}
                                    </Fragment>
                                  );
                                })
                              : paragraph}
                          </p>
                        );
                      })
                    ) : (
                      <p key={chapterIndex}>{text}</p>
                    )}
                  </div>
                );
              })}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

//CustomTag component

// ContainerWrapper
function ContainerWrapper({ children, onCloseSidebar, onCloseBurgerMenu }) {
  return (
    <div
      className="container"
      onClick={() => {
        onCloseSidebar();
        onCloseBurgerMenu();
      }}
    >
      {children}
    </div>
  );
}

//AboutAuthorButton

function AboutAuthorButton({ onAboutAuthorClick }) {
  return (
    <div onClick={onAboutAuthorClick} className="about-author-btn">
      Об авторе
    </div>
  );
}

//Back to top button

function BackToTopButton() {
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

  return (
    <div
      className={`${"backToTop"} ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </div>
  );
}

//About Author

function AboutAuthor({ showAboutAuthor, onExitClick }) {
  if (!showAboutAuthor) return null;
  return (
    <div className="about-author">
      <div className="about-author__center">
        <div className="about-author__image">
          <img src={authorImage} alt="Author" loading="lazy" />
        </div>
        <div className="about-author-desc">
          {aboutAuthor.map((about) => {
            const { title, content, chapterId } = about;
            return (
              <>
                <h1 id={chapterId}>{title}</h1>
                {content.map((paragraph, index) => {
                  return <p key={index}>{paragraph}</p>;
                })}
              </>
            );
          })}
        </div>
      </div>
      <div className="about-author-back">
        <button onClick={onExitClick}>Назад</button>
      </div>
    </div>
  );
}

function SidebarBtn({ onSidebar }) {
  return (
    <button className="sidebar-button" onClick={onSidebar}>
      <FaAngleRight className="icon-angle" />
    </button>
  );
}
