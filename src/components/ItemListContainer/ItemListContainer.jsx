import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import Loading from "../Loading/Loading";
import ItemList from './ItemList/ItemList'
import "./itemListContainer.scss";

import { products } from '../../data/products.json'
import { categories } from '../../data/categories.json'

const ItemListContainer = () => {
  const { categoryName } = useParams();
  const [displayProducts, setDisplayProducts] = useState(null);


  useEffect(() => {
    console.info('Renderizado: Productos segun seccion')

    const handleDisplay = setDisplayProducts;
    const selectCategory = db => categoryName ? handleDisplay(db.filter(prods => prods.category === categoryName)) : handleDisplay(db);

    // Si no se resuelve en 10 segundos se rechaza, al resolverse se crean las cards de los productos mediante la funcion mappingProducts
    new Promise((resolve, reject) => {
      handleDisplay(null)

      if (!(categories.map(c => c.category)).includes(categoryName) && categoryName) { reject('Categoria no encontrada') };

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
  }, [categoryName])



  return (
    <>
      <h2 className='categoryTitle'>{categoryName ? categoryName.toUpperCase() : 'Todos los productos'}</h2>
      <hr />
      <div className="ItemListContainer">
        {displayProducts
          ? <>
            {displayProducts.map(prod => <ItemList key={prod.id} id={prod.id} name={prod.name} stock={prod.stock} image={process.env.PUBLIC_URL + prod.image} price={prod.price} promoted={prod.promoted} />)}
          </>
          : <Loading sectionName={categoryName || 'productos'} />}
      </div >
    </>
  )
}

export default ItemListContainer;