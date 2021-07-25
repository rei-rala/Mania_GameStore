import React from 'react'
import { Link } from 'react-router-dom'

import './ItemList.scss'
import '../../_General/button.scss'

const ItemList = ({ id, name, image, stock, price, promoted }) => {
  stock = parseInt(stock);

  //console.warn(promoted)

  return (

    <Link to={`/productos/${id}`} className='productCard' draggable>
      <span className={stock ? 'itemStock' : 'itemStock noStock'}>{stock ? `Stock ${stock}` : 'Sin stock'}</span>
      <div className="productInfo">
        <img src={image} alt={name} draggable='false' />
        <span>{name} <br /> {!promoted
          ? `$${price}`
          : <>
            <p className='lastPrice'>${price}</p>

            <p className='promoPrice'>Oferta! ${price * .85} </p>
          </>
        }</span>
      </div>

      <button className='yellowBtn'>Mas informacion</button>
    </Link>
  )
}

export default ItemList;