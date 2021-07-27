import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './navMenuMobile.scss';

import { categories } from '../../../../data/categories.json'

const NavMenuMobile = ({ manageMobileMenu }) => {

  const [catItems, setCatItems] = useState(null);
  console.info('Renderizado: NavMenuMobile')

  useEffect(() => {
    const mapCategories = list => setCatItems(<>
      <NavLink to='/promociones' onClick={manageMobileMenu} className='promoNavMobile'> 🔥 Promos 🔥</NavLink>
      {list.map(c => <NavLink key={c.id} to={'/categorias/' + c.category} onClick={manageMobileMenu} activeClassName="currentPage"> {c.category} </ NavLink>)}
    </>)
    console.info('Cargado: Categorias en NavMenuMobile')
    new Promise((resolve, reject) => {
      resolve(categories)

    })
      .then(mapCategories)

    return function cleanup() { }
  }, [manageMobileMenu])

  return (
    <div className="mobileMenuActive">
      <h2 className='menuTitle'>Menu</h2>
      <NavLink className='mainLink' onClick={manageMobileMenu} to='/Mania_' activeClassName="currentPage"> Home</NavLink>
      <NavLink className='mainLink' onClick={manageMobileMenu} to='/productos' activeClassName="currentPage"> Todos los Productos</NavLink>
      <NavLink className='mainLink' onClick={manageMobileMenu} to='/cart' activeClassName="currentPage"> Mi carrito</NavLink>
      <hr />
      <h3 className='menuSubTitle'>Categorias</h3>

      <div className="catContainer">
        {
          catItems
            ? catItems
            : 'Aguarde un momento'
        }
      </div>

    </div>
  )
}

export default NavMenuMobile;