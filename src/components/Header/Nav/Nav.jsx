import React from 'react';
import { Link } from 'react-router-dom';

import NavCategories from './NavCategories/NavCategories';
import NavCart from './NavCart/NavCart'

import shoppingCart from './shoppingCart.png'

import './nav.scss'
import './NavCategories/navCategories.scss';


const NavItem = ({ children }) => {
	return (
		<li className='nav__ul--item menuItem'>
			{children}
		</li>
	);
}


const Nav = () => {

	return (
		<nav className='nav'>
			<ul className='nav__ul'>

				<NavItem>
					<Link to='/productos'>
						<label htmlFor='navCategories' className='showCatNav' /* onMouseEnter={dropdown} */>
							Categor&iacute;as
						</label>
					</Link>
					<NavCategories className='catNav' />
				</NavItem>

				<NavItem>
					<label htmlFor='searchInput' className='seachDesktop'>
						Buscar
					</label>
					<input id='searchInput' className="seachDesktop" type="text" placeholder='Categorias, Articulos ... ' />
					<input id='searchInputMobile' className="seachMobile" type="text" placeholder='Buscar...' />
				</NavItem>
				<NavItem>
					<img className='shoppingCart' src={shoppingCart} alt="Carrito" />
					<NavCart />
				</NavItem>

			</ul>
		</nav>
	)
}


export default Nav;