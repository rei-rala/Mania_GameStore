import React, { useEffect, useState } from "react";

import Loading from "../Loading/Loading";
import ItemList from './ItemList/ItemList'
import { ItemListContainerStyle } from "./ItemListContainerStyle";


const ItemListContainer = () => {

  const [displayProducts, setDisplayProducts] = useState(null);

  const handleDisplay = setDisplayProducts;


  useEffect(
    () => {

      // De cierta forma, este dato importa solo porque realizaremos el fetch, de paso evito que se cree la variable con cada render
      const products = [
        {
          id: 1,
          name: 'Teclado',
          description: 'Esta es la descripcion del producto UNO y tiene varias caracteristicas, de entre ellas Lorem Ipsum',
          image: '/img/joystick.png',
          price: 10_000,
          stock: 5,
        },
        {
          id: 2,
          name: 'Mouse',
          description: 'Esta es la descripcion del producto DOS y tiene varias caracteristicas, de entre ellas Lorem Ipsum',
          image: '/img/joystick.png',
          price: 4_000,
          stock: 9999,
        },
        {
          id: 3,
          name: 'Monitor',
          description: 'Esta es la descripcion del producto TRES y tiene varias caracteristicas, de entre ellas Lorem Ipsum',
          image: '/img/joystick.png',
          price: 30_000,
          stock: 0,
        },
        {
          id: 4,
          name: 'Gabinete',
          description: 'Esta es la descripcion del producto CUATRO y tiene varias caracteristicas, de entre ellas Lorem Ipsum',
          image: '/img/joystick.png',
          price: 20_000,
          stock: 2,
        },
        {
          id: 5,
          name: 'Notebook HP i3',
          description: 'Esta es la descripcion del producto CINCO y tiene varias caracteristicas, de entre ellas Lorem Ipsum',
          image: '/img/joystick.png',
          price: 90_000,
          stock: 0,
        },
        {
          id: 6,
          name: 'Notebook Asus i7',
          description: 'Esta es la descripcion del producto SEIS y tiene varias caracteristicas, de entre ellas Lorem Ipsum',
          image: '/img/joystick.png',
          price: 160_000,
          stock: 1,
        },
      ];

      const mappingProducts = db => {
        return db.map(prod => <ItemList key={prod.id} id={prod.id} name={prod.name} stock={prod.stock} image={process.env.PUBLIC_URL + prod.image} price={prod.price} />)
      }


      // Si no se resuelve en 10 segundos se rechaza
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
          handleDisplay(`Error:\n${err}`)
          console.error(`Error:\n${err}`)
        })


    }, [handleDisplay])



  return (
    <ItemListContainerStyle>
      {displayProducts ? displayProducts : <Loading sectionName='productos' />}
    </ItemListContainerStyle>
  )
}

export default ItemListContainer;