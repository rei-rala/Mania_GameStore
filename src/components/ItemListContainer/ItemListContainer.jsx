import React from "react";
import './itemListContainer.scss'

const ItemListContainer = ({ children }) => {
  return (
    <div className="itemListContainer">
      {children}
    </div>
  )
}

export default ItemListContainer;