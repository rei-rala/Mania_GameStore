import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { Context } from "../../../context/Context";

import { products } from '../../../data/products.json'
import ItemCountContainer from "./ItemCountContainer/ItemCountContainer";
import Loading from "../../Loading/Loading";

import './itemDetailContainer.scss'
import ItemCountConfirm from "./ItemCountConfirm/ItemCountConfirm";

const ItemDetailContainer = () => {
  const { addToCart } = useContext(Context)

  const [count, setCount] = useState(0);
  const [buyState, setBuyState] = useState(false);

  // viewItemNo refiere al objeto que se recibira
  const [viewItemNo, setViewItemNo] = useState({});
  const [viewItemName, setViewItemName] = useState('');
  const { id } = useParams();

  const manageItem = item => setViewItemNo(item);
  const manageItemName = item => setViewItemName(item);
  const handleBuyState = () => setBuyState(!buyState);


  useEffect(() => {
    try {
      const selectedItem = products.find(p => p.id === parseInt(id));

      const getProducts = new Promise((resolve, reject) => {
        setViewItemNo(null)

        if (!selectedItem) {
          setTimeout(() => {
            reject('Producto no encontrado')
          }, 499)
        } else {
          setTimeout(() => {
            resolve(selectedItem)
          }, 500)
          setTimeout(() => {
            reject('Timed out')
          }, 10000)
        }
      })


      getProducts
        .then(manageItem)
        .catch(err => {
          manageItemName('Error')
          manageItem(`Error: ${err}`)
        })
        .finally(console.log('Renderizado: ItemDetailContainer'))
    }
    catch (error) {
      manageItemName('Error')
      manageItem(`Error: ${error}`)
    }
    return function cleanup() { }
  }, [id])



  return (

    <div className="productInformation">

      {!viewItemNo
        ? <Loading className='loadScreen' sectionName={viewItemName} />
        : viewItemName === 'Error'
          ? <> {viewItemNo} <Link to='/' className="commands"> <button>Volver a home</button> </Link></>
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
              <h4>Precio por unidad  ${
                viewItemNo.promoted === true
                  ? <> {viewItemNo.price * 0.85} <i className='discount'> 15% OFF!</i> </>
                  : viewItemNo.price}
              </h4>
              {
                viewItemNo.stock
                  ? buyState
                    ? <>
                      <ItemCountConfirm count={count} price={
                        viewItemNo.promoted === true
                          ? (viewItemNo.price * 0.85)
                          : viewItemNo.price
                      } />
                      <button onClick={() => { addToCart(viewItemNo, count) }}> Confirmar </button>
                      <button onClick={handleBuyState}> Modificar </button>
                    </>
                    : <>
                      <ItemCountContainer count={count} setCount={setCount} stock={viewItemNo.stock} />
                      <button onClick={handleBuyState} disabled={count ? false : true}>Agregar al carrito</button>
                      <Link to='/' className="commands"> <button>Volver</button> </Link>
                    </>

                  : <>
                    <p className='noStockMessage'>Por favor, consulte en otro momento</p>
                    <Link to='/' className="commands"> <button >Volver</button> </Link>
                  </>
              }

            </div>
          </>
      }

    </div >

  );
}

export default ItemDetailContainer;