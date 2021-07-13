import React, { useState } from "react";

import Loading from "../Loading/Loading";
import ItemList from './ItemList/ItemList'
import './itemListContainer.scss'


const ItemListContainer = () => {

  const [productsDisplay, setProductsDisplay] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Teclado',
      description: 'Esta es la descripcion del producto UNO y tiene varias caracteristicas, de entre ellas Lorem Ipsum',
      image: null,
      price: 10_000,
      stock: 5,
    },
    {
      id: 2,
      name: 'Mouse',
      description: 'Esta es la descripcion del producto DOS y tiene varias caracteristicas, de entre ellas Lorem Ipsum',
      image: null,
      price: 4_000,
      stock: 3,
    },
    {
      id: 3,
      name: 'Monitor',
      description: 'Esta es la descripcion del producto TRES y tiene varias caracteristicas, de entre ellas Lorem Ipsum',
      image: null,
      price: 30_000,
      stock: 0,
    },
    {
      id: 4,
      name: 'Gabinete',
      description: 'Esta es la descripcion del producto CUATRO y tiene varias caracteristicas, de entre ellas Lorem Ipsum',
      image: null,
      price: 20_000,
      stock: 2,
    },
    {
      id: 5,
      name: 'Notebook',
      description: 'Esta es la descripcion del producto CINCO y tiene varias caracteristicas, de entre ellas Lorem Ipsum',
      image: null,
      price: 120_000,
      stock: 0,
    }
  ];

  function mappingProducts(db) {
    function cardComponentCreate(prod) {
      return <ItemList key={prod.id} id={prod.id} name={prod.name} description={prod.description} stock={prod.stock} image="https://picsum.photos/200/200" price={prod.price} />
    }
    return db.map(prod => cardComponentCreate(prod))
  }


  // dejo la variable por si la utilizo luego
  const productItems = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products)
    }, 2000);
  })
    .then(resp => {
      setProductsDisplay(mappingProducts(resp))
    })


  return (
    <div className="itemListContainer">
      {productsDisplay ? productsDisplay : <Loading seccion='productos' />}
    </div>
  )
}

export default ItemListContainer;