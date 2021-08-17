import React from 'react'
import './orderCreated.scss'

import { Link } from 'react-router-dom'

const OrderCreated = ({ orderId, manageOrderCreated }) => {
  return (<div className="orderContainer">
    <h2>Gracias por su compra</h2>
    <hr />
    <p>Este es su ID de orden: <strong>{orderId}</strong><br />Copielo y utilicelo para consultar la orden.</p>
    <div className="orderOptions">
      <Link to='ordenes'><button>Consultar Ordenes</button></Link>
      <button onClick={() => { manageOrderCreated(null) }}>Cerrar</button>
    </div>
  </div>
  )
}

export default OrderCreated