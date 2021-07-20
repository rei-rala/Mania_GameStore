import React from 'react';
import { Link } from 'react-router-dom';


import logo from './joystick.png';

const BrandLogo = () => {
  return (
    <div className='logoSection' draggable>
      <Link to='/' className='Mania_'>
        <img className='LOGO' src={logo} alt='Mania_ Logo' />
        <span>mAn&iacute;A_</span>
      </Link>
    </div>
  )
}

export default BrandLogo;