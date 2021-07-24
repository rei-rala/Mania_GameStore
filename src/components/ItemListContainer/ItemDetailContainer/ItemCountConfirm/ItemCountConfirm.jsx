import React from 'react';
import './itemCountConfirm.scss'

const ItemCountConfirm = ({ count, price }) => {
  return <div className='countConfirm'>
    <h4> Confimar seleccion? </h4>
    <span> ${price} x {count} {count > 1 ? 'unidades' : 'unidad'} = ${price * count} </span>
  </div>
}

export default ItemCountConfirm;