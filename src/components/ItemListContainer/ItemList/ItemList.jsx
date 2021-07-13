import React, { useState } from 'react'

import Item from '../Item/Item'
import './itemList.scss'
import '../../_General/button.scss'

const ItemList = ({ id, name, description, image, stock, price }) => {
  stock = parseInt(stock);
  const [viewInfo, setViewInfo] = useState(false)

  const viewProductInfo = () => setViewInfo(!viewInfo)

  return (
    <>
      <div className="product card">
        <span className={stock ? 'itemStock' : 'itemStock noStock'}>{stock ? `Stock ${stock}` : 'Sin stock'}</span>
        <div className="productInfo">
          <img src={image} alt={name} />
          <span>{name} <br /> $ {price}</span>
        </div>
        <button className='yellowBtn' onClick={viewProductInfo}>Informacion</button>
      </div >

      {viewInfo ? <Item id={id} name={name} image={image} description={description} stock={stock} price={price} /> : null}
    </>)
}

export default ItemList;