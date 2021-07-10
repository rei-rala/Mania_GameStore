import React, { useState } from 'react'

import './itemCount.scss'

const ItemCount = ({ initial, stock, children }) => {
  initial = parseInt(initial);
  stock = parseInt(stock);

  let [inputValue, otherBtn] = [null, null];

  let [count, setCount] = useState(initial);

  const manageQuantity = (e) => {
    const btnTarget = e.target;

    if (btnTarget.innerText === '+') {
      inputValue = btnTarget.previousElementSibling;
      otherBtn = inputValue.previousElementSibling;
      otherBtn.classList.remove('toppedQuantity')
      addOne()

    }
    else {
      inputValue = btnTarget.nextElementSibling;
      otherBtn = inputValue.nextElementSibling;
      otherBtn.classList.remove('toppedQuantity')
      subsOne()
    };

    function addOne() {
      if (count >= stock) {
        btnTarget.classList.add('toppedQuantity')
        console.info(`No puedes comprar mas que el stock de ${stock}`)
        return
      }
      setCount(count + 1)
    }

    function subsOne() {
      if (!count || count === 0) {
        btnTarget.classList.add('toppedQuantity')
        console.info('No puedes comprar menos que 0')
        return
      }
      setCount(count - 1)
    }
  }

  let stockClass = 'itemStock'
  if (stock === 0) {
    stockClass += ' noStock'
  }


  return (
    <div className="product card">
      <span className={stockClass}>{stock === 0 ? 'Sin stock' : `Stock ${stock}`}</span>
      {children}

      <div className='itemCountContainer'>
        <button className='editQuantity' onClick={manageQuantity}>-</button>
        <input type="text" className='prodQuantity' value={count} readOnly />
        <button className='editQuantity' onClick={manageQuantity}>+</button>
      </div>
    </div >
  )
}

export default ItemCount;