import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import ContainerWrapper from "./components/ContainerWrapper";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <Fragment>
      <Header />
      <ContainerWrapper>
        <MainContent />
      </ContainerWrapper>
    </Fragment>
  );
}

export default App;
