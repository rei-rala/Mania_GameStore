import React from 'react'
import { ItemCountContainerStyle } from './ItemCountContainerStyle';

const ItemCountContainer = ({ count, stock, setCount }) => {


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

  console.log('Renderizado: ItemCountContainer')


  return (
    /* actual es una propiedad para determinar el estado del button  */
    <ItemCountContainerStyle actual={count} top={stock}>
      <button className='editQuantity' onClick={manageQuantity}>-</button>
      <span className='prodQuantity'> {count}</span>
      <button className='editQuantity' onClick={manageQuantity}>+</button>
    </ItemCountContainerStyle>
  )
}


export default ItemCountContainer;