import React from "react";
import "./styles/App.scss";

import Button from "./components/_General/Button";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <>
      <Header />
      <br />  <br />  <br />  <br />  <br /><br />  <br />  <br />  <br />  <br />
      <Carousel />
      <br />
      <div>testeos randoms</div>
      <Button btnClass="greenBtn"> Click Me </Button>  <br />
      <Button btnClass="yellowBtn"> Click Me </Button>  <br />
      <button>Boton Comun</button>
      <br />
      <br />
      <Button btnClass="redBtn"> Click Me </Button>  <br />
      <Button btnClass="lightBtn"> Clickeame </Button>   <br />
      <Button>  </Button> <br />
      {/* CONSIGNA DESAFIO CLASE 5 */}

      <ItemListContainer>
        <ItemCount initial='0' stock='3'>
          <img src="https://picsum.photos/200/200" alt="randomProduct1" />
        </ItemCount>

        <ItemCount initial='0' stock='0'>
          <img src="https://picsum.photos/200/201" alt="randomProduct2" />
        </ItemCount>

        <ItemCount initial='0' stock='10'>
          <img src="https://picsum.photos/200/202" alt="randomProduct3" />
        </ItemCount>

        <ItemCount initial='0' stock='3'>
          <img src="https://picsum.photos/200/203" alt="randomProduct2" />
        </ItemCount>

        <ItemCount initial='0' stock='5'>
          <img src="https://picsum.photos/200/204" alt="randomProduct3" />
        </ItemCount>
      </ItemListContainer>
    </>
  );
}

export default App;
