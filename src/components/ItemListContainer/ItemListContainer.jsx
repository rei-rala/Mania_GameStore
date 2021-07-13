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
      name: 'Notebook',
      description: 'Esta es la descripcion del producto TRES y tiene varias caracteristicas, de entre ellas Lorem Ipsum',
      image: null,
      price: 120_000,
      stock: 0,
    },
  ];

  function cardComponentCreate(prod) {
    return <ItemList key={prod.id} id={prod.id} name={prod.name} description={prod.description} stock={prod.stock} image="https://picsum.photos/200/200" price={prod.price} />
  }
  function mappingProducts(db) {
    return db.map(prod => cardComponentCreate(prod))
  }


  const productItems = function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 2000);
    })
  }
  productItems()
    .then(resp => {
      setProductsDisplay(mappingProducts(resp))
    })


  return (
    <div className="itemListContainer">
      {productsDisplay ? productsDisplay : <Loading seccion='productos' />}

      {/* {mappingProducts()} */}

    </div>
  )
}

export default ItemListContainer;