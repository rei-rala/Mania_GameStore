import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import Loading from "../Loading/Loading";
import ItemList from './ItemList/ItemList'
import "./itemListContainer.scss";

import { products } from '../../test.json'

const ItemListContainer = () => {
  const { category } = useParams();
  const [displayProducts, setDisplayProducts] = useState(null);


  useEffect(() => {

    const handleDisplay = setDisplayProducts;

    const selectCategory = db => category ? mappingProducts(db.filter(prods => prods.category === category)) : mappingProducts(db);
    const mappingProducts = db => handleDisplay(db.map(prod => <ItemList key={prod.id} id={prod.id} name={prod.name} stock={prod.stock} image={process.env.PUBLIC_URL + prod.image} price={prod.price} />));


    // Si no se resuelve en 10 segundos se rechaza, al resolverse se crean las cards de los productos mediante la funcion mappingProducts
    new Promise((resolve, reject) => {
      handleDisplay(null)
      setTimeout(() => {
        console.log('hola')
        resolve(products)
      }, 1000);
      setTimeout(() => {
        reject('Timed out')
      }, 2000);
    })
      .then(selectCategory)
      .catch(err => {
        handleDisplay(`Error: \n${err}`)
        console.error(`Error: \n${err}`)
      })
  }, [category])



  return (
    <div className="ItemListContainer">
      {displayProducts ? displayProducts : <Loading sectionName={category || 'productos'} />}
    </div>
  )
}

export default ItemListContainer;