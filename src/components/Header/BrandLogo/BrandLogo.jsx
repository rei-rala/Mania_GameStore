import React from 'react'
import logo from './joystick.png';

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

export default BrandLogo;