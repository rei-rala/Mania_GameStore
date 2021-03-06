import React, { useEffect, useState } from 'react'
import './orders.scss'

import { database } from '../../firebase/firebase';
import { Link, useHistory } from 'react-router-dom';
import Loading from '../Loading/Loading'
import { useParams } from "react-router"

const Orders = () => {
  const history = useHistory();
  const { orderId } = useParams();

  const [order, setOrder] = useState(null)
  const manageOrder = order => setOrder(order)

  const [orderInput, setOrderInput] = useState(null);
  const manageOrderInput = (value) => setOrderInput(value)

  const [busyState, setBusyState] = useState(false)
  const manageBusyState = bool => setBusyState(bool)

  const reTest = (msg) => {
    const re = new RegExp(/[a-zA-Z0-9]{20}/gm)
    if (re.test(msg)) {
      manageOrderInput(msg)
    }
    else {
      manageOrderInput('404')
    }
  }

  const checkOrder = (ev) => {
    const orderInput = ev.target.inputOrder.value
    ev.preventDefault();

    reTest(orderInput)
  }

  const checkOrderByPath = () => {
    const orderInput = orderId
    reTest(orderInput)
  }


  useEffect(() => {
    if (orderId) {
      checkOrderByPath(orderId)
    }
  })

  useEffect(() => {
    const fetchOrder = async (order) => {
      manageBusyState(true)
      const orderF = database.collection('orders').doc(order)

      orderF
        .get()
        .then(doc => {
          if (doc.exists) {
            manageOrder({ o: doc.data(), id: doc.id })
          }
          else {
            manageOrder(404)
          }
        })
        .finally(() => manageBusyState(false))
    }
    if (orderInput) { fetchOrder(orderInput) }
  }, [orderInput])

  return (
    < section className='ordersSection' >
      {
        busyState
          ? <Loading />
          : null
      }
      {
        order
          ? order === 404
            ? <div className="order404">
              <h3>No existe la orden ingresada</h3>
              <Link to='/ordenes'>
                <button onClick={() => {
                  manageOrder(null)
                  manageOrderInput(null)
                }}>Nueva consulta</button>
              </Link>
            </div>

            : <div className="orderFound">
              <h3>Orden {order.id}</h3>
              <p>Creada el
                {
                  `
                  ${new Date(order.o.date).toLocaleDateString('es-AR')}
                  a las
                  ${new Date(order.o.date).getHours() < 10
                    ? '0' + new Date(order.o.date).getHours()
                    : new Date(order.o.date).getHours()
                  }
                  :
                  ${new Date(order.o.date).getMinutes() < 10
                    ? '0' + new Date(order.o.date).getMinutes()
                    : new Date(order.o.date).getMinutes()
                  }
                  
                  a nombre de `}
                <strong>{order.o.buyer.name}</strong>
              </p>
              <div className="itemListOrder">
                <table className='orderTable'>
                  <thead>
                    <tr>
                      <th scope='col'>Producto</th>
                      <th scope='col'>Cantidad</th>
                      <th scope='col'>Precio Unitario</th>
                      <th scope='col'>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      order.o.items.map(o => (
                        <tr key={o.id} className="orderItem">
                          <td>
                            {o.name.length > 25 ? o.name.substr(0, 25) + '...' : o.name}
                          </td>
                          <td>
                            {o.quantity}
                          </td>

                          <td>
                            ${o.price}
                          </td>

                          <td>
                            ${o.price * o.quantity}
                          </td>
                        </tr>))
                    }

                  </tbody>
                </table>
              </div>

              <span>Total orden: ${order.o.total}</span>

              <div className="getNewOrder">

                <Link to='/ordenes'>
                  <button onClick={() => {
                    manageOrder(null)
                    manageOrderInput(null)
                  }}>Nueva consulta</button>
                </Link>

                <Link to='/'>
                  <button>Ir a Home</button>
                </Link>
              </div>
            </div>
          : <>
            <div className="cartTitleSection">
              <h2 className='cartTitle'>Ordenes</h2>
              <p className='cartHint'>Ingrese debajo el codigo o ID de orden para consultar el estado de su pedido</p>
              <i>El codigo es de 20 caracteres de longitud</i>
            </div>
            <hr />
            <form onSubmit={checkOrder} className='orderForm'>
              <div className="groupForm">
                <input type="text" id='orderForm' name='inputOrder' placeholder='Ingrese Cod o ID' minLength='20' maxLength='20' required />
                <label className='labelForm' htmlFor="orderForm">Codigo o ID</label>
              </div>
              <div className="orderOptions">
                <button >Consultar</button>
                <button type='reset' onClick={() => history.goBack()}>Volver atras</button>
              </div>
            </form>
          </>
      }
    </section >
  )

}

export default Orders
