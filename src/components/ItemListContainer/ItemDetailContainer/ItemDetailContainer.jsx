import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../context/Context";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import './itemDetailContainer.scss'

import ItemCountContainer from "./ItemCountContainer/ItemCountContainer";
import ItemCountConfirm from "./ItemCountConfirm/ItemCountConfirm";
import Loading from "../../Loading/Loading";

import { database } from '../../../firebase/firebase'


const ItemDetailContainer = () => {
  const { cart, addToCart, removeFromCart, isInCart } = useContext(Context)
  const { id } = useParams();

  const [viewItem, setViewItem] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const [count, setCount] = useState(0);
  const [buyState, setBuyState] = useState(false);

  const manageItem = item => setViewItem(item);
  const handleBuyState = e => {
    if (buyState) {
      removeFromCart(e.target.attributes['itemvalue'].value)
    }
    setBuyState(!buyState)
  };


  useEffect(() => {
    try {
      database.collection('products').doc(id).get()
        .then(product => {
          if (Array.from({ ...product.data() }).length === 0) {
            const productSelected = { ...product.data(), id: product.id }
            manageItem(productSelected)
            setIsSuccess(true)
          }
        })
        .catch(err => { throw new Error(err) })
    }
    catch (error) {
      manageItem(`Error: ${error}`)
    }
    return function cleanup() { /* WHATEVER */ }
  }, [id])



  return (
    <div className="productInformation">

      {!viewItem.name && !isSuccess
        ? <Loading className='loadScreen' />
        : !viewItem.name
          ? <> No se encontraron productos que cumplan las condiciones indicadas <Link to='/' className="commands"> <button>Volver a home</button> </Link></>
          : <>
            <div className='productInformationBody'>
              <h1>{viewItem.name}</h1>
              <p>Codigo Producto 000{viewItem.id}</p>
              <img src={process.env.PUBLIC_URL + viewItem.image} alt={viewItem.name} />
              <p>{viewItem.description}</p>
            </div>

            <div className='productInformationFooter'>
              <h1> </h1>
              <h4>
                {
                  viewItem.stock
                    ? `Seleccione cantidad - Max: ${viewItem.stock}`
                    : 'Estamos reingresando el producto, disculpe las molestias'
                }
              </h4>
              <h4>Precio por unidad  ${
                viewItem.promoted === true
                  ? <> {viewItem.price * 0.85} <i className='discount'> 15% OFF!</i> </>
                  : viewItem.price}
              </h4>
              {
                viewItem.stock
                  ? buyState || isInCart(viewItem.id)
                    ? <>
                      <ItemCountConfirm count={count || (isInCart(viewItem.id) ? cart.map(i => {return { id: i['itemCart'].id, q: i['quantity'] }}).find(e => e['id'] === viewItem.id)['q'] : 0)}
                      price={viewItem.promoted === true
                          ? (viewItem.price * 0.85)
                          : viewItem.price
                      } />
                      {isInCart(viewItem.id)
                        ? <Link to='/cart'> <button className='goToCart'> Ir a carrito </button> </Link >
                        : <button onClick={() => { addToCart(viewItem, count) }}> Confirmar </button>}
                      <button onClick={handleBuyState} itemvalue={viewItem.id}> Modificar </button>
                    </>
                    : <>
                      <ItemCountContainer count={count} setCount={setCount} stock={viewItem.stock} />
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