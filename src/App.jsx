import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./styles/App.scss";

import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";

//import TEST from "./components/QuestionBlock/TEST";

import ItemPromoted from "./components/ItemPromoted/ItemPromoted";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer/ItemDetailContainer";
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />


      <Switch>
        <Route exact path='/Mania_'>
          <Carousel />
          <ItemPromoted />
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
          {/* IGNORAR ESTILOS EN LINEA  */}
          <div className="soyUnPlaceholder" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <h2> Por ahora, yo soy un Cart</h2>
          </div>
        </Route>

      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
