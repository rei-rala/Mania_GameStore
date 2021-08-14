import React from 'react'
import './orderCreated.scss'

const OrderCreated = ({ orderId, manageOrderCreated }) => {
  return (<div className="orderContainer">
    <h2>Gracias por su compra</h2>
    <hr />
    <p>Este es su ID de orden: <strong>{orderId}</strong></p>
    <div className="orderOptions">
      <button onClick={() => { alert(`Copiado ${orderId} !\n(mentira, todavia no le encontre manera)`) }}>Copiar al portapapeles</button>
      <button onClick={() => { manageOrderCreated(null) }}>Cerrar</button>
    </div>
  </div>
  )
}

export default OrderCreated