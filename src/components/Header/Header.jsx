import React from 'react'

import Nav from './Nav/Nav';
import RedesItem from './RedesItem/RedesItem';

import logo from './joystick.png';

import './header.scss';


const BrandLogo = () => {
    return (
        <div className='logoSection'>
            <a className='Mania_' href='../../index.js#'>
                <img className='LOGO' src={logo} alt='Mania_ Logo' />
                <span>mAn&iacute;A_</span>
            </a>
        </div>
    )
}



const Header = () => {
    return (
        <header className='header'>
            {/* Reemplazar luego por logos */}
            <div className='header__top redes'>
                <RedesItem />
            </div>
            <div className='header__bottom'>
                <BrandLogo />
                <Nav />
            </div>
        </header>
    )
}

export default Header;