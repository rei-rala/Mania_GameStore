import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import NavCategories from './NavCategories/NavCategories';
import NavMenuMobile from './NavMenuMobile/NavMenuMobile';
import NavMenuMobileButton from './NavMenuMobileButton/NavMenuMobileButton';
import NavSearch from './NavSearch/NavSearch';

import shoppingCart from './shoppingCart.png'
import searchImg from './search.png'

import './nav.scss'
import './NavCategories/navCategories.scss';
import { Context } from '../../../context/Context';
import CartWidget from './CartWidget/CartWidget';


const NavItem = ({ children }) => {
	return (
		<li className='nav__ul--item menuItem'>
			{children}
		</li>
	);
}


const Nav = () => {

	const { cart, cartSize } = useContext(Context)

	const [mobileMenu, setMobileMenu] = useState(false);
	const [mobileSearch, setMobileSearch] = useState(false);

	const manageMobileMenu = (bool) => setMobileMenu(bool);
	const manageMobileSearch = (bool) => setMobileSearch(bool);

	const toggleMobileMenu = () => {
		manageMobileMenu(!mobileMenu);
		manageMobileSearch(false);
	}

	const toggleMobileSearch = () => {
		manageMobileMenu(false);
		manageMobileSearch(!mobileSearch);
	}

	const closeAny = () => {
		manageMobileMenu(false);
		manageMobileSearch(false);
	}


	//console.warn(cartSize)

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
				</NavItem>
				<NavItem>
					<label className={mobileSearch ? 'searchImg mobileSearchActive' : 'searchImg'} htmlFor="searchInputMobile" onClick={toggleMobileSearch}>
						<img src={searchImg} alt="Busqueda" />
					</label>
				</NavItem>
				<NavItem>
					<NavLink to='/cart' activeClassName='cartActive'>
						<img className={cart.length === 0 ? 'shoppingCart' : 'shoppingCart cartWithOrder'} src={shoppingCart} onClick={closeAny} alt="Carrito" />
						{cartSize === '0' || !cartSize ? null : <CartWidget />}
					</NavLink>
				</NavItem>
				<NavItem>
					<div onClick={toggleMobileMenu}>
						<NavMenuMobileButton className={mobileMenu ? 'menuMobile menuBtnContainerActive' : 'menuMobile'} />
					</div>
				</NavItem>

				{mobileSearch ? <NavSearch /> : null}
				{mobileMenu ? <NavMenuMobile manageMobileMenu={toggleMobileMenu} className='mobileMenuActive' /> : <NavMenuMobile manageMobileMenu={toggleMobileMenu} className='hideMobileMenu' />}

			</ul>
		</nav>

	)
}


export default Nav;