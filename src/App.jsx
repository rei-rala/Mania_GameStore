import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./styles/App.scss";

import Header from "./components/Header/Header";
//import Carousel from "./components/Carousel/Carousel";

import TEST from "./components/QuestionBlock/TEST";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer/ItemDetailContainer";
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />

      {/* <Carousel />*/}

      <TEST >Clickeame!</TEST>

      <Switch>
        <Route exact path='/'>
          <ItemListContainer />
        </Route>
        <Route path='/Mania_'>
          <Redirect to='/' />
        </Route>


        <Route exact path='/productos'>
          <ItemListContainer />
        </Route>
        <Route path='/productos/:id'>
          <ItemDetailContainer />
        </Route>

        <Route path='/categorias/:category'>
          <ItemListContainer />
        </Route>

      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
