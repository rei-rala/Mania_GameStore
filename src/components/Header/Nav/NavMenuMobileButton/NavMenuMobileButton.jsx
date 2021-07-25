import React from 'react';
import './navMenuMobileButton.scss'

const NavMenuMobileButton = ({ className }) => {
  const aditionalClass = className || '';

  return (
    <div className={'menuBtnContainer ' + aditionalClass}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default NavMenuMobileButton;