import React, { useEffect, useState } from "react";


import { ItemDetailContainerStyled } from "./ItemDetailContainerStyled";
import './itemDetailContainerMediaQ.scss'

import ItemCountContainer from "./ItemCountContainer/ItemCountContainer";
import Loading from "../../Loading/Loading";

const ItemDetailContainer = props => {

  const [viewItemNo, setViewItemNo] = useState(null);
  const [viewItemName, setViewItemName] = useState(null);

  const manageItem = item => {
    setViewItemNo(item);
    setViewItemName(item.name);
  }


  useEffect(() => {
    console.info('Informacion de producto renderizada')

    const products = [
      {
        id: 0,
        name: 'Dummy(?',
        description: 'Esta es la descripcion del producto CERO y tiene varias caracteristicas, de entre ellas Lorem Ipsum',
        image: '/img/joystick.png',
        price: 1_000_000_000,
        stock: 1,
      },
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


    const itemDetailerGen = (item) => {
      return (
        <>
          <div className='productInformationBody'>
            <h1>{item.name}</h1>
            <p>Codigo Producto 000{item.id}</p>
            <img src={process.env.PUBLIC_URL + item.image} alt={item.name} />
            <p>{item.description}</p>
          </div>

          <div className='productInformationFooter'>
            <h1> </h1>
            <h4>
              {
                item.stock
                  ? `Seleccione cantidad - Max: ${item.stock}`
                  : 'Estamos reingresando el producto, disculpe las molestias'
              }
            </h4>
            <h4>Precio por unidad  <i>${item.price}</i></h4>
            <ItemCountContainer stock={item.stock} />
            <div className="commands">
              <button>Agregar al carrito</button> <button onClick={null}>Volver</button>
            </div>
          </div>
        </>
      )
    }

    // Si no se resuelve en 10 segundos se rechaza
    new Promise((resolve, reject) => {
      const selectedItem = products.find(item => item.id === props.id)
      setViewItemName(selectedItem.name)

      setTimeout(() => {
        resolve(selectedItem)
      }, 2000);
      setTimeout(() => {
        reject('Timed out')
      }, 10000);
    })
      .then(itemDetailerGen)
      .then(manageItem)
      .catch(err => {
        setViewItemNo(`Error:\n${err}`)
        console.error(`Error:\n${err}`)
      })


  }, [props.id])



  return (
    <ItemDetailContainerStyled className="productInformation">
      {!viewItemNo ? <Loading className='loadScreen' sectionName={viewItemName} /> : viewItemNo}
    </ItemDetailContainerStyled>
  );
}

export default ItemDetailContainer;