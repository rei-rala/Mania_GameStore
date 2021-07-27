import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../context/Context';
import './cart.scss'

const Cart = () => {
  const { cart, removeItem } = useContext(Context)


  // ? Aca estaba probando guardar el cart en el localStorage asi no se pierde al salir de la pagina :)
  useEffect(() => {
    console.info('Test: Carrito actualizado')
    //console.warn(cart)
    //if (cart) { localStorage.setItem('Mania_cart', [...cart.toString()]) }
  }, [cart])

  useEffect(() => {
    //const ManiaLS = localStorage.getItem('Mania_cart')
    //if (ManiaLS) { addToCart(JSON.parse(ManiaLS)) }
    //if (ManiaLS !== '') console.log(JSON.parse(ManiaLS))
  })

  return (
    cart.length
      ? <div className="itemsInCart">
        <div className="cartTitleSection">
          <h2 className='cartTitle'>Mi carrito</h2>
          <i className='cartHint'>Click en imagen de producto o categoria para ir a la determinada seccion</i>
        </div>
        <hr />
        {cart.map(ci =>
          <div key={ci.itemCart['id']} className='itemCart'>
            <Link to={`productos/${ci.itemCart['id']}`}>
              <img src={process.env.PUBLIC_URL + ci.itemCart['image']} alt={ci.itemCart['name']} />
            </Link>
            <div className="bodyCartItem">
              <h3>{ci.itemCart['name']}</h3>
              <Link to={`categorias/${ci.itemCart['category']}`}> <h6>{ci.itemCart['category']}</h6></Link>
              <div className="priceInfoCart">
                <span className='priceInfoBox'> Precio:
                  {
                    ci.itemCart['promoted']
                      ? <>  <span className='normalPriceCart beforePromoPrice'>${ci.itemCart['price']}</span><span className='promoPriceCart'> ${ci.itemCart['price'] * .85} </span> <p className='discountInfo'>15% OFF!</p></>
                      : <span className='normalPriceCart'> ${ci.itemCart['price']}</span>
                  }
                </span>
              </div>
            </div>
            <button className='removeCartBtn' onClick={() => removeItem(ci.itemCart)}>Quitar</button>
          </div>
        )}
      </div>
      : <div className="noItems">
        <h4>Todavia no hay items en tu carrito!</h4>
        <p>Puedes ver nuestros productos a traves de las siguientes opciones</p>
        <div className="offer">
          <Link to='/productos'> <button className='cartBtn'>Ver ✨productos✨</button> </Link>
          <Link to='/ofertas'> <button className='cartBtn ofertasBtn' >Ofertas 🔥</button> </Link>
        </div>
      </div>

  )
}

export default Cart;