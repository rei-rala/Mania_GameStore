import React, { useState } from 'react'

import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import { ItemListStyle } from './ItemListStyle'
import './ItemListMediaQ.scss'

import '../../_General/button.scss'

const ItemList = ({ id, name, image, stock, price }) => {
  stock = parseInt(stock);
  const [viewInfo, setViewInfo] = useState(false)

  const viewProductInfo = () => setViewInfo(!viewInfo)

  return (
    <>
      <ItemListStyle className='productCard' draggable>
        <span className={stock ? 'itemStock' : 'itemStock noStock'}>{stock ? `Stock ${stock}` : 'Sin stock'}</span>
        <div className="productInfo">
          <img src={image} alt={name} draggable='false' />
          <span>{name} <br /> $ {price}</span>
        </div>
        <button className='yellowBtn' onClick={viewProductInfo}>Comprar</button>
      </ItemListStyle>

      {viewInfo ? <ItemDetailContainer id={id} /> : null}
    </>)
}

export default ItemList;