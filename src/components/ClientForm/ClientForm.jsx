import React, { useContext, useState } from 'react'

import firebase from 'firebase';
import { database } from '../../firebase/firebase';
import { Context } from '../../context/Context';


import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'
import './clientForm.scss'


const ClientForm = ({ manageFinishBuy, manageOrderCreated }) => {


  const { cartTotal, cart, removeFromCart, clearCart } = useContext(Context)


  const [busy, setBusy] = useState(false)
  const manageBusyState = (bool) => setBusy(bool);

  const confirmarCompra = async (ev) => {
    ev.preventDefault();

    const orderItems = cart.map(i => ({ id: i.itemCart.id, name: i.itemCart.name, price: (i.itemCart.promoted ? i.itemCart.price * 0.85 : i.itemCart.price), quantity: i.quantity }));

    const newOrder = {
      buyer: {
        name: ev.target.buyerName.value,
        tel: ev.target.buyerTel.value,
        email: ev.target.buyerEmail.value
      },
      date: new Date().toString(),
      items: orderItems,
      total: cartTotal
    }


    manageBusyState(true)
    const itemsToUpdate = database.collection('products')
      .where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(i => i.itemCart.id))

    const stockInsuficiente = []
    const query = await itemsToUpdate.get()
    const batch = database.batch()

    query.docs.forEach((doc, index) => {
      if (doc.data().stock >= cart[index].quantity) {
        batch.update(doc.ref, {
          stock: doc.data().stock - cart[index].quantity
        })
      }
      else {
        stockInsuficiente.push({ ...doc.data(), id: doc.id })
      }
    })

    const fin = async () => {
      return new Promise(async (res, rej) => {
        if (!stockInsuficiente.length) {
          const commit = await batch.commit()
          res(commit)
        }
        else {
          rej(`Stock insuficiente para los siguientes productos\n${stockInsuficiente.map(i => i.name)}`)
        }
      })
    }

    fin()
      .then(() => database.collection('orders').add(newOrder))
      .then(order => {
        manageOrderCreated(order.id)
      })
      .catch(err => console.info(`Se producto el siguiente error:\n${err}`))
      .finally(() => {
        manageBusyState(false)
        clearCart()
      })
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
          <input type="text" id='nameForm' name='buyerName' placeholder='Nombre' required />
          <label className='labelForm' htmlFor="nameForm">Nombre</label>
        </div>

        <div className="groupForm">
          <input type="tel" id='telForm' name='buyerTel' placeholder='Tel&eacute;fono' required />
          <label className='labelForm' htmlFor="telForm">Tel&eacute;fono</label>
        </div>

        <div className="groupForm">
          <input type="email" id='emailForm' name='buyerEmail' placeholder='Correo Electr&oacute;nico' required />
          <label className='labelForm' htmlFor="emailForm" >Correo Electr&oacute;nico</label>
        </div>


        <div className="separator"></div>

        <div className="groupFormX">
          <p>Productos</p>
          <div className="productsForm">
            {cart.map((i, index) => <div key={index} className='prodForm'>
              <Link to={`productos/${i.itemCart.id}`} title={`Ver item ${i.itemCart.name}`}>
                {`${i.quantity}x ${(i.itemCart.name).length > 10 ? `${(i.itemCart.name).substr(0, 10)}...` : i.itemCart.name} = $${i.quantity * (i.itemCart.promoted ? i.itemCart.price * .85 : i.itemCart.price)}`}
              </Link>
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

      {
        busy
          ? <div className='loadingContainer'>
            <div className="customCont"></div>
            <Loading />
          </div>
          : null
      }
    </section >

  )
}

export default ClientForm