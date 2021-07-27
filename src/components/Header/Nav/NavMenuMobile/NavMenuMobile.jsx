import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './navMenuMobile.scss';

import { categories } from '../../../../data/categories.json'

const NavMenuMobile = ({ manageMobileMenu }) => {

  const [catItems, setCatItems] = useState(null);
  const manageCategories = list => setCatItems(list)

  const closeMobileMenu = () => manageMobileMenu()
  console.info('Renderizado: NavMenuMobile')

  useEffect(() => {
    console.info('Cargado: Categorias en NavMenuMobile')
    new Promise((resolve, reject) => {
      resolve(categories)

    })
      .then(manageCategories)

    return function cleanup() { }
  }, [manageMobileMenu])

  return (
    <div className="mobileMenuActive">
      <h2 className='menuTitle'>Menu</h2>
      <NavLink className='mainLink' onClick={closeMobileMenu} to='/Mania_' activeClassName="currentPage"> Home</NavLink>
      <NavLink className='mainLink' onClick={closeMobileMenu} to='/productos' activeClassName="currentPage"> Todos los Productos</NavLink>
      <NavLink className='mainLink' onClick={closeMobileMenu} to='/cart' activeClassName="currentPage"> Mi carrito</NavLink>
      <hr />
      <h3 className='menuSubTitle'>Categorias</h3>

      <div className="catContainer">
        {
          catItems
            ? <>
              <NavLink to='/promociones' onClick={manageMobileMenu} className='promoNavMobile'> 🔥 Promos 🔥</NavLink>
              {catItems.map(c => <NavLink key={c.id} to={'/categorias/' + c.category} onClick={closeMobileMenu} activeClassName="currentPage"> {c.category} </ NavLink>)}
            </>
            : 'Aguarde un momento'
        }
      </div>

    </div>
  )
}

export default NavMenuMobile;