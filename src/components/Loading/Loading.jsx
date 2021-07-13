/* Credits: https://codepen.io/timothyguo/pen/KdzJrY */

import React from 'react'

import './loading.scss'

const Loading = ({ seccion }) => {
  return (
    <div className='loadingContainer' draggable>
      <h6 className="loadingTitle">Cargando {seccion}</h6>
      <div className='pacman'>
        <div> </div>
        <div> </div>
        <div> </div>
        <div> </div>
        <div> </div>
      </div>
    </div>
  )
}

export default Loading;