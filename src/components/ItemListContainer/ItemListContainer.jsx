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
        resolve(products)
      }, 1000);
      setTimeout(() => {
        reject('Error al cargar los resultados')
      }, 10000);
    })
      .then(selectCategory)
      .catch(err => {
        handleDisplay(err)
        console.error(`Error: \n${err}`)
      })
      .finally(console.log('Renderizado: ItemListContainer'))
  }, [category])



  return (
    <>
      <h2 className='categoryTitle'>{category ? category.toUpperCase() : 'Todos los productos'}</h2>
      <hr />
      <div className="ItemListContainer">
        {displayProducts ? displayProducts : <Loading sectionName={category || 'productos'} />}
      </div>
    </>
  )
}

export default ItemListContainer;