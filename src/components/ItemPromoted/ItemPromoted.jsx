import React, { useEffect, useState } from 'react';

import './itemPromoted.scss'
import { products } from '../../data/products.json'
import { Link } from 'react-router-dom';



const ItemPromoted = () => {

  const [showPromo, setShowPromo] = useState({})
  const { id, name, category, image, price, stock } = showPromo;

  useEffect(() => {
    new Promise(res => {
      setTimeout(() => { res(products) }, 500)
    })
      .then(resp => resp.filter(item => item.promoted))
      .then(promotedItem => {
        // POR AHORA, solo voy a utilizar el primer elemento (traigo un elemento unico de promocion)
        setShowPromo(promotedItem[0])
      })
  }, [])


  return (
    <section className='promotedSection'>
      <div className="itemPromotedOffer">
        <h2>Promocion!</h2>
        {!showPromo.name
          ? 'CARGANDO...'
          : <>
            <div className="boxItemPromoted">
              <img className='imgItemPromoted' src={process.env.PUBLIC_URL + image} alt={name} />
              <div className="infoItemPromoted">
                <h3>{name}</h3>
                <p>Promo en <Link to={`categorias/${category}`}>{category}</Link></p>
                <hr />
                <p> <span className='lastPrice'>${price}</span> <span className='promoPrice'>${Math.round(price * .85)}</span></p>
                <p>Se agotan! stock: {stock}</p>
                <Link to={`/productos/${id}`}>
                  <button>Mas informacion</button>
                </Link>
              </div>
            </div>
          </>
        }
      </div>
    </section>
  )
}

export default ItemPromoted;