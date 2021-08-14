import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './navMenuMobile.scss';

import { Categories } from '../../../../context/CategoriesContext';

const NavMenuMobile = ({ manageMobileMenu, className }) => {
  const { categoriesFirebase } = useContext(Categories)

  const [catItems, setCatItems] = useState(null);
  const manageCategories = list => setCatItems(list)

  const closeMobileMenu = () => manageMobileMenu()

  useEffect(() => {

    if (categoriesFirebase) {
      manageCategories(categoriesFirebase.sort((a, b) => a.category > b.category ? 1 : -1))
    }

    return function cleanup() { }
  }, [categoriesFirebase])

  return (
    <div className={className}>
      <h2 className='menuTitle'>Menu</h2>
      <div className="topGroup">
        <NavLink className='mainLink' onClick={closeMobileMenu} to='/Mania_' activeClassName="currentPage"> Home</NavLink>
        <NavLink className='mainLink' onClick={closeMobileMenu} to='/productos' activeClassName="currentPage"> Todos los Productos</NavLink>
        <NavLink className='mainLink' onClick={closeMobileMenu} to='/cart' activeClassName="currentPage"> Mi carrito</NavLink>
        <NavLink className='mainLink' onClick={closeMobileMenu} to='/ordenes' activeClassName="currentPage"> Ordenes</NavLink>
      </div>
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