import React, { useEffect, useState } from 'react';

import './itemPromoted.scss'
import { ItemPromotedStyled } from './ItemPromotedStyled';
import Loading from '../../Loading/Loading'

import { products } from '../../../data/products.json'
import { Link } from 'react-router-dom';



const ItemPromoted = ({ random }) => {

  const [showPromo, setShowPromo] = useState(null)
  const manageShowPromo = arrayItems => setShowPromo(arrayItems)

  useEffect(() => {
    new Promise(res => {
      setTimeout(() => { res(products) }, 500)
    })
      .then(resp => resp.filter(item => item.promoted))

      .then(promotedItems => {

        if (random) {
          // Si se recibe el prop random=true, se generara un item al azar en promocion, se envia a la funcion como array
          const randomIndex = Math.floor(Math.random() * promotedItems.length);
          manageShowPromo([promotedItems[randomIndex]])
        } else { manageShowPromo(promotedItems) }
      })
  }, [random])


  return (
    <section className='promotedSection'>

      {
        !showPromo
          ? <Loading />
          : <>
            <h2> 🔥 {
              showPromo
                ? showPromo.length === 1 ? 'Promo!' : 'Promociones'
                : null
            } 🔥 </h2>
            {
              showPromo.map(item => <ItemPromotedStyled styledPropStock={item.stock} className="itemPromotedOffer" key={item.id}>
                <div className="boxItemPromoted">
                  <img className='imgItemPromoted' src={process.env.PUBLIC_URL + item.image} alt={item.name} />
                  <div className="infoItemPromoted">
                    <h3>{item.name}</h3>
                    <p>Promo en <Link to={`categorias/${item.category}`}>{item.category}</Link></p>
                    <hr />
                    <p> <span className='lastPrice'>${item.price}</span> <span className='promoPrice'>${Math.round(item.price * .85)}</span></p>
                    <p>{item.stock ? `Se agotan! stock:${item.stock}` : `Agotado ${String.fromCodePoint(0x1F613)}`} </p>
                    <Link to={`/productos/${item.id}`}>
                      <button>Ver {item.name}</button>
                    </Link>
                    {showPromo.length === 1 ? <Link to={`/ofertas`}><button>Otras promos</button></Link> : null}
                  </div>
                </div>
              </ItemPromotedStyled>
              )}
          </>
      }
    </section >
  )
}

export default ItemPromoted;