import React from 'react'
import { ItemCountContainerStyle } from './ItemCountContainerStyle';

const ItemCountContainer = ({ count, stock, setCount }) => {


  const manageQuantity = (e) => {
    if (e.target.innerText === '↑') {
      if ((count >= stock) === false) { setCount(count + 1) };
    }
    else if (e.target.innerText === '↓') {
      if (count || count !== 0) { setCount(count - 1) }
    };
  }


  return (
    /* actual es una propiedad para determinar el estado del button  */
    <ItemCountContainerStyle actual={count} top={stock}>
      <button className='editQuantity' onClick={manageQuantity}>↓</button>
      <span className='prodQuantity'> {count}</span>
      <button className='editQuantity' onClick={manageQuantity}>↑</button>
    </ItemCountContainerStyle>
  )
}


export default ItemCountContainer;