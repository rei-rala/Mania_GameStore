/* Credits: https://codepen.io/timothyguo/pen/KdzJrY */

import React from 'react'

import './loading.scss'


const Loading = ({ sectionName }) => {
  return (
    <div className="loadingContainer" draggable>
      <h6 className="loadingTitle">Cargando {sectionName}</h6>
      <div className='pacman'>
        <div> </div>
        <div> </div>
        <div> </div>
        <div> </div>
        <div> </div>
      </div>
    </ div>
  )
}

export default Loading;