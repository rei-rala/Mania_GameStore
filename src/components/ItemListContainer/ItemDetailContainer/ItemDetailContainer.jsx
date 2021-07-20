import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { products } from '../../../test.json'
import ItemCountContainer from "./ItemCountContainer/ItemCountContainer";
import Loading from "../../Loading/Loading";

import './itemDetailContainer.scss'

const ItemDetailContainer = () => {

  const [viewItemNo, setViewItemNo] = useState(null);
  const [viewItemName, setViewItemName] = useState(null);
  const id = useParams();

  const manageItem = item => {
    setViewItemNo(item);
    setViewItemName(item.name);
  }


  useEffect(() => {
    console.info('Informacion de producto renderizada')

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
              <button>Agregar al carrito</button>

              <Link to='/'>
                <button>Volver</button>
              </Link>
            </div>
          </div>
        </>
      )
    }

    // Si no se resuelve en 10 segundos se rechaza
    new Promise((resolve, reject) => {
      const selectedItem = products[id.id]
      setViewItemName(`${selectedItem.name} - id 000${selectedItem.id}`)

      setTimeout(() => {
        resolve(itemDetailerGen(selectedItem))
      }, 1000);
      setTimeout(() => {
        reject('Timed out')
      }, 10000);
    })
      .then(itemGenerated => manageItem(itemGenerated))
      .catch(err => {
        setViewItemNo(`Error:\n${err}`)
        console.error(`Error:\n${err}`)
      })


  }, [id])



  return (
    <div className="productInformation">
      {!viewItemNo ? <Loading className='loadScreen' sectionName={viewItemName} /> : viewItemNo}
    </div>
  );
}

export default ItemDetailContainer;