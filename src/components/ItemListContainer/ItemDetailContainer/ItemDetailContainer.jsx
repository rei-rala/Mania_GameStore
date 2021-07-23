import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { products } from '../../../test.json'
import ItemCountContainer from "./ItemCountContainer/ItemCountContainer";
import Loading from "../../Loading/Loading";

import './itemDetailContainer.scss'

const ItemDetailContainer = () => {

  const [viewItemNo, setViewItemNo] = useState();
  const [viewItemName, setViewItemName] = useState();
  const { id } = useParams();

  const manageItem = item => setViewItemNo(item);



  useEffect(() => {
    console.info('Informacion de producto renderizada')

    // Si no se resuelve en 10 segundos se rechaza
    new Promise((resolve, reject) => {
      const selectedItem = products[id]
      setViewItemName(`${selectedItem.name} - id 000${selectedItem.id}`)

      setTimeout(() => {
        resolve(selectedItem)
      }, 1000);
      setTimeout(() => {
        reject('Timed out')
      }, 10000);
    })
      .then(manageItem)
      .catch(err => {
        setViewItemNo(`Error:\n${err}`)
        console.error(`Error:\n${err}`)
      })
  })



  return (

    <div className="productInformation">

      {!viewItemNo
        ? <Loading className='loadScreen' sectionName={viewItemName} />
        : <>
          <div className='productInformationBody'>
            <h1>{viewItemNo.name}</h1>
            <p>Codigo Producto 000{viewItemNo.id}</p>
            <img src={process.env.PUBLIC_URL + viewItemNo.image} alt={viewItemNo.name} />
            <p>{viewItemNo.description}</p>
          </div>

          <div className='productInformationFooter'>
            <h1> </h1>
            <h4>
              {
                viewItemNo.stock
                  ? `Seleccione cantidad - Max: ${viewItemNo.stock}`
                  : 'Estamos reingresando el producto, disculpe las molestias'
              }
            </h4>
            <h4>Precio por unidad  <i>${viewItemNo.price}</i></h4>
            <ItemCountContainer stock={viewItemNo.stock} />
            <div className="commands">
              <button>Agregar al carrito</button>

              <Link to='/'>
                <button>Volver</button>
              </Link>
            </div>
          </div>
        </>
      }

    </div>

  );
}

export default ItemDetailContainer;