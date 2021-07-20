import React from 'react';

import RedesItem from './RedesItem/RedesItem';
import Nav from './Nav/Nav';
import BrandLogo from './BrandLogo/BrandLogo';

import './header.scss';

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