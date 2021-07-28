import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../context/Context';
import './cart.scss'

const Cart = () => {
  const {cartTotal, cart, removeFromCart, clearCart } = useContext(Context)

  return (
    cart.length
      ? <>
        <div className="itemsInCart">
          <div className="cartTitleSection">
            <h2 className='cartTitle'>Mi carrito</h2>
            <i className='cartHint'>Click en imagen de producto o categoria para ir a la determinada seccion</i>
            <p>Para vaciar el carrito, clickea <span className='clearCart' onClick={clearCart}>aqui</span></p>
          </div>
          <hr />
          {cart.map(ci => <div key={ci.itemCart['id']} className='itemCart'>
            <Link to={`productos/${ci.itemCart['id']}`}>
              <img src={process.env.PUBLIC_URL + ci.itemCart['image']} alt={ci.itemCart['name']} />
            </Link>
            <div className="bodyCartItem">
              <h3>{ci.itemCart['name']}</h3>
              <Link to={`categorias/${ci.itemCart['category']}`}> <h6>{ci.itemCart['category']}</h6></Link>
              <div className="priceInfoCart">
                <span className='priceInfoBox'>
                  {
                    ci.itemCart['promoted']
                      ? <>  <span className='normalPriceCart beforePromoPrice'>${ci.itemCart['price']}</span><span className='promoPriceCart'> ${ci.itemCart['price'] * .85} </span> <p className='discountInfo'>15% OFF!</p></>
                      : <span className='normalPriceCart'> ${ci.itemCart['price']}</span>
                  }
                </span>
              </div>
              <div className="normalPrice">
                <span>
                  {`x${ci.quantity} ${ci.quantity > 1 ? 'unidades' : 'unidad'} = $${ci.itemCart['promoted'] ? `${ci.itemCart['price'] * ci.quantity * 0.85}` : `${ci.itemCart['price'] * ci.quantity}`}`}
                </span>
              </div>
            </div>
            <button className='removeCartBtn' onClick={() => removeFromCart(ci.itemCart)}>Quitar</button>
          </div>
          )}
        </div>
        <div className="totalCartBar">
          <div className="finish">
            <span>Total compra: $ {cartTotal}</span>
            <div className="optionFinish">
              <button>Terminar compra</button>
              <Link to='/productos'> <button className='cartBtn'> Mas productos</button> </Link>
            </div>
          </div>
        </div>
      </>
      : <div className="noItems">
        <h4>Todavia no hay items en tu carrito!</h4>
        <p>Puedes ver nuestros productos a traves de las siguientes opciones</p>
        <div className="offer">
          <Link to='/productos'> <button className='cartBtn'>✨Productos✨</button> </Link>
          <Link to='/ofertas'> <button className='cartBtn ofertasBtn' >Ofertas 🔥</button> </Link>
        </div>
      </div>

  )
}

export default Cart;