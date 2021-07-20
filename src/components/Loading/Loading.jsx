/* Credits: https://codepen.io/timothyguo/pen/KdzJrY */

import React from 'react'

import './loading.scss'


const Loading = ({ sectionName }) => {
  return (
    <>
      <div className="loadingContainer" draggable>
        <div className='pacman'>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
        </div>
      </ div>
      <h6 className="loadingTitle">Cargando {sectionName}</h6>
    </>
  )
}

export default Loading;