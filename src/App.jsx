import React from "react";
import "./styles/App.scss";

import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";

import TEST from "./components/QuestionBlock/TEST";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Header />

      <Carousel />
      <ItemListContainer />

      <TEST >Clickeame!</TEST>
    </>
  );
}

export default App;
