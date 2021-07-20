import React, { useEffect, useState } from "react";

import Loading from "../Loading/Loading";
import ItemList from './ItemList/ItemList'
import "./itemListContainer.scss";

import { products } from '../../test.json'

const ItemListContainer = () => {

  const [displayProducts, setDisplayProducts] = useState(null);

  const handleDisplay = setDisplayProducts;
  const mappingProducts = db => db.map(prod => <ItemList key={prod.id} id={prod.id} name={prod.name} stock={prod.stock} image={process.env.PUBLIC_URL + prod.image} price={prod.price} />)

  useEffect(
    () => {
      // Si no se resuelve en 10 segundos se rechaza, al resolverse se crean las cards de los productos mediante la funcion mappingProducts
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(products)
        }, 1000);
        setTimeout(() => {
          reject('Timed out')
        }, 10000);
      })
        .then(mappingProducts)
        .then(handleDisplay)
        .catch(err => {
          handleDisplay(`Error: \n${err}`)
          console.error(`Error: \n${err}`)
        })

      // ! React Hook useEffect has a missing dependency: 'handleDisplay'. Either include it or remove the dependency array
    }, [handleDisplay])



  return (
    <div className="ItemListContainer">
      {displayProducts ? displayProducts : <Loading sectionName='productos' />}
    </div>
  )
}

export default ItemListContainer;