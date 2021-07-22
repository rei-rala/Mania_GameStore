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


      <Switch>
        <Route exact path='/'>
          <Redirect to='/Mania_' />
        </Route>
        <Route exact path='/Mania_'>
          <ItemListContainer />
          <TEST >Clickeame!</TEST>
        </Route>
        <Route path='/categorias/:category'>
          <ItemListContainer />
        </Route>



        <Route path='/productos/:id'>
          <ItemDetailContainer />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
