import React from 'react'

import './clientForm.scss'

const ClientForm = ({ manageFinishBuy, cartTotal, cart, removeFromCart }) => {

  const confirmarCompra = (ev) => {
    ev.preventDefault();
  }

  return (
    <section className='finish'>
      <div className="cartTitleSection">
        <h2 className='cartTitle'>Confirmar compra</h2>
        <p className='cartHint'>Ingrese sus datos en el siguiente formulario y luego <strong>confirme</strong> su compra o <strong>canc&eacute;lela</strong> para añadir mas productos </p>
      </div>
      <hr />
      <form onSubmit={confirmarCompra}>
        <h3>Datos de comprador</h3>
        <div className="groupForm">
          <input type="text" id='nameForm' placeholder='Nombre' required />
          <label className='labelForm' htmlFor="nameForm">Nombre</label>
        </div>

        <div className="groupForm">
          <input type="tel" id='telForm' placeholder='Tel&eacute;fono' required />
          <label className='labelForm' htmlFor="telForm">Tel&eacute;fono</label>
        </div>

        <div className="groupForm">
          <input type="email" id='emailForm' placeholder='Correo Electr&oacute;nico' required />
          <label className='labelForm' htmlFor="emailForm" >Correo Electr&oacute;nico</label>
        </div>


        <div className="separator"></div>

        <div className="groupFormX">
          <p>Productos</p>
          <div className="productsForm">
            {cart.map((i, index) => <div key={index} className='prodForm'>
              <span>
                {`${i.quantity}x ${(i.itemCart.name).length > 10 ? `${(i.itemCart.name).substr(0, 10)}...` : i.itemCart.name} = $${i.quantity * (i.itemCart.promoted ? i.itemCart.price * .85 : i.itemCart.price)}`}
              </span>
              <button className='removeItemForm' onClick={() => removeFromCart(i.itemCart['id'])} title={`Click para quitar ${i.itemCart.name}`}>
                <div></div>
                <div></div>
              </button>
            </div>
            )}
          </div>
        </div>
        <div className="separator subSeparator"></div>
        <p> Total <strong>${cartTotal} </strong></p>
        <div className="separator"></div>

        <div className="formActions">
          <button >Finalizar compra</button>
          <button onClick={() => manageFinishBuy(false)}>Volver atras</button>
        </div>
      </form>
    </section>
  )
}

export default ClientForm