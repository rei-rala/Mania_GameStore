import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { CartContext } from "./context/Context";

import "./styles/App.scss";

import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";

import ExhibitParallax from "./components/ExhibitParallax/ExhibitParallax";

import Cart from "./components/Cart/Cart";
import ItemPromotedPage from "./components/ItemPromotedPage/ItemPromotedPage";
import ItemPromoted from "./components/ItemPromotedPage/ItemPromoted/ItemPromoted";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer/ItemDetailContainer";
import Footer from './components/Footer/Footer';
import { CategoriesContext } from "./context/CategoriesContext";


function App() {

  return (
    <BrowserRouter>
      <CategoriesContext>
        <CartContext>
          <Header />

          <Switch>
            <Route path='/Mania_'>
              <Carousel />
              <ItemPromoted random={true} />
              <ExhibitParallax />
            </Route>
            <Route exact path='/'>
              <Redirect to='/Mania_' />
            </Route>


            <Route exact path='/productos'>
              <ItemListContainer />
            </Route>
            <Route path='/productos/:id'>
              <ItemDetailContainer />
            </Route>

            <Route path='/categorias/:categoryName'>
              <ItemListContainer />
            </Route>

            <Route exact path='/cart'>
              <Cart />
            </Route>

            <Route path='/promociones'>
              <ItemPromotedPage />
            </Route>
            <Route path='/promocion'>
              <Redirect to='./promociones' />
            </Route>
            <Route path='/oferta'>
              <Redirect to='./promociones' />
            </Route>
            <Route path='/ofertas'>
              <Redirect to='./promociones' />
            </Route>

          </Switch>



        </CartContext>
      </CategoriesContext>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
