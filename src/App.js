import React, { useState, useEffect, Fragment } from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import { books } from "./articles";
import ContainerWrapper from "./components/ContainerWrapper";
import AboutAuthor from "./components/AboutAuthor/AboutAuthor";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";

function App() {
  const [selectedBook, setSelectedBook] = useState("");
  const [showAboutAuthor, setShowAboutAuthor] = useState(false);

  const handleAboutAuthorClick = () => {
    setShowAboutAuthor(true);
  };

  const handleSelectChange = (event) => {
    setSelectedBook(event.target.value);
  };

  const handleExitClick = () => {
    setShowAboutAuthor(false);
  };

  useEffect(() => {
    setSelectedBook(books[0]?.bookTitle || "");
  }, []);

  return (
    <Fragment>
      <Header
        handleSelectChange={handleSelectChange}
        onAboutAuthorClick={handleAboutAuthorClick}
        showAboutAuthor={showAboutAuthor}
      />
      <ContainerWrapper>
        {showAboutAuthor && (
          <AboutAuthor
            showAboutAuthor={showAboutAuthor}
            onExitClick={handleExitClick}
          />
        )}
        {!showAboutAuthor && (
          <MainContent selectedBook={selectedBook} books={books} />
        )}
      </ContainerWrapper>
      <BackToTopButton />
    </Fragment>
  );
}

export default App;
