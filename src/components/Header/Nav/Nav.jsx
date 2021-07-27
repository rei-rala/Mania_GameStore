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


const NavItem = ({ children }) => {
	return (
		<li className='nav__ul--item menuItem'>
			{children}
		</li>
	);
}


const Nav = () => {

	const { cart } = useContext(Context)

	const [mobileMenu, setMobileMenu] = useState(false);
	const [mobileSearch, setMobileSearch] = useState(false);

	const manageMobileMenu = () => {
		setMobileMenu(!mobileMenu);
		setMobileSearch(false);
	}

	const manageMobileSearch = () => {
		setMobileSearch(!mobileSearch);
		setMobileMenu(false);
	}

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
					<label className={mobileSearch ? 'searchImg mobileSearchActive' : 'searchImg'} htmlFor="searchInputMobile" onClick={manageMobileSearch}>
						<img src={searchImg} alt="Busqueda" />
					</label>
				</NavItem>
				<NavItem>
					<NavLink to='/cart' activeClassName='cartActive'>
						<img className={cart.length === 0 ? 'shoppingCart' : 'shoppingCart cartWithOrder'} src={shoppingCart} alt="Carrito" />
					</NavLink>
				</NavItem>
				<NavItem>
					<div onClick={manageMobileMenu}>
						<NavMenuMobileButton className={mobileMenu ? 'menuMobile menuBtnContainerActive' : 'menuMobile'} />
					</div>
				</NavItem>

				{mobileSearch ? <NavSearch /> : null}
				{mobileMenu ? <NavMenuMobile manageMobileMenu={manageMobileMenu} /> : null}

			</ul>
		</nav>

	)
}


export default Nav;