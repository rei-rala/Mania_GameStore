import React, { useEffect, useState } from 'react';

import './itemPromoted.scss'
import { ItemPromotedStyled } from './ItemPromotedStyled';
import Loading from '../../Loading/Loading'

import { database } from '../../../firebase/firebase';
import { Link } from 'react-router-dom';


const ItemPromoted = ({ random }) => {

  const [showPromo, setShowPromo] = useState(null)
  const manageShowPromo = arrayItems => setShowPromo(arrayItems)

  useEffect(() => {
    database
      .collection('products')
      .where(
        'promoted',
        '==',
        true
      ).get()
      .then(query => query.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      }))
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
            } 🔥
            </h2>
            <div className="listPromoItems">
              {
                showPromo.map(
                  item => <ItemPromotedStyled styledPropStock={item.stock} className="itemPromotedOffer" key={item.id}>
                    <div className="boxItemPromoted">
                      <img className='imgItemPromoted' src={process.env.PUBLIC_URL + item.image} alt={item.name} />
                      <div className="infoItemPromoted">
                        <h3>{item.name}</h3>
                        <p>Promo en <Link to={`categorias/${item.category}`}>{item.category}</Link></p>
                        <hr />
                        <p> <span className='lastPrice'>${item.price}</span> <span className='promoPrice'>${Math.round(item.price * .85)}</span></p>
                        <p>{item.stock ? `Se agotan! stock:${item.stock}` : `Agotado ${String.fromCodePoint(0x1F613)}`} </p>
                        <Link to={`/productos/${item.id}`}>
                          <button>Ver producto{/* {item.name} */}</button>
                        </Link>
                        {showPromo.length === 1 ? <Link to={`/ofertas`}><button>Otras promos</button></Link> : null}
                      </div>
                    </div>
                  </ItemPromotedStyled>
                )
              }
            </div>
          </>
      }
    </section >
  )
}

export default ItemPromoted;