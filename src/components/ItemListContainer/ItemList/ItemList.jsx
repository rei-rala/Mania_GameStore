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
      <div className="productoInfoContainer">
        <div className="productInfo">
          <img src={image} alt={name} draggable='false' />
          <span>{name}</span>
          {
            !promoted
              ? <p className='normalPrice'>{`$${price}`}</p>
              : <>
                <p className='lastPrice'>${price}</p>

                <p className='promoPrice'>Oferta! ${price * .85} </p>
              </>
          }
        </div>

        <button className='yellowBtn'>Mas informacion</button>
      </div>
    </Link>
  )
}

export default ItemList;