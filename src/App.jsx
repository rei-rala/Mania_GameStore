import React from "react";
import "./styles/App.scss";

import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";

import TEST from "./components/QuestionBlock/TEST";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <Header />

      <Carousel />

      <ItemDetailContainer id={5} /> *
      <ItemListContainer />

      <TEST >Clickeame!</TEST>
    </>
  );
}

export default App;
