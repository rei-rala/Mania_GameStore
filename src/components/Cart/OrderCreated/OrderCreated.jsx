import React from 'react'
import './orderCreated.scss'

import { Link } from 'react-router-dom'

const OrderCreated = ({ orderId, manageOrderCreated }) => {
  return (<div className="orderContainer">
    <h2>Gracias por su compra</h2>
    <hr />
    <p>Este es su ID de orden: <strong>{orderId}</strong></p>
    <div className="orderOptions">
      <button onClick={() => { alert(`Copiado ${orderId} !\n(mentira, todavia no le encontre manera, por favor copielo usted a mano.)`) }}>Copiar al portapapeles</button>
      <Link to='ordenes'><button>Consultar Ordenes</button></Link>
      <button onClick={() => { manageOrderCreated(null) }}>Cerrar</button>
    </div>
  </div>
  )
}

export default OrderCreated