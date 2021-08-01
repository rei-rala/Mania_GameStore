import React from 'react'
import { Link } from 'react-router-dom'

import './ItemList.scss'
import '../../_General/button.scss'

const ItemList = ({ id, name, image, stock, price, promoted, preview }) => {
  stock = parseInt(stock);

  //console.warn(promoted)

  return (

    <div className='productCard' draggable>
      <span className={stock ? 'itemStock' : 'itemStock noStock'}>{stock ? `Stock ${stock}` : 'Sin stock'}</span>
      <div className="productoInfoContainer">
        <div className="productInfo">
          <img src={image} alt={name} draggable='false' onMouseEnter={preview} onMouseLeave={preview} />
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
        <Link to={`/productos/${id}`} >
          <button className='yellowBtn'>Mas informacion</button>
        </Link>
      </div>
    </div>
  )
}

export default ItemList;