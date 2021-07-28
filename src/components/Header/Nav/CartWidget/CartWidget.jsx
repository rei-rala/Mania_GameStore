import React, { useContext } from 'react';
import { Context } from '../../../../context/Context';
import './cartWidget.scss';


const CartWidget = () => {

  const { cartSize } = useContext(Context)

  return (
    <span className='cartWidget'>
      {cartSize}
    </span>
  )
}

export default CartWidget;