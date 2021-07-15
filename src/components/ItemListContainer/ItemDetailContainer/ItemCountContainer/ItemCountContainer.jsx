import React, { useState } from 'react'
import { ItemCountContainerStyle } from './ItemCountContainerStyle';

const ItemCountContainer = ({ stock }) => {

  const [count, setCount] = useState(0);

  const manageQuantity = (e) => {
    if (e.target.innerText === '+') {
      count >= stock
        ? console.info(`No puedes comprar mas que el stock de ${stock}`)
        : setCount(count + 1);
    }
    else if (e.target.innerText === '-') {
      !count || count === 0
        ? console.info('No puedes comprar menos que 0')
        : setCount(count - 1)
    };
  }

  console.info('Cantidad de producto renderizada')


  return (
    <ItemCountContainerStyle actual={count} top={stock}>
      <button className='editQuantity' onClick={manageQuantity}>-</button>
      <input type="text" className='prodQuantity' value={count} readOnly />
      <button className='editQuantity' onClick={manageQuantity}>+</button>
    </ItemCountContainerStyle>
  )
}


export default ItemCountContainer;