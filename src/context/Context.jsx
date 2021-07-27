import React, { createContext, useState } from 'react';

export const Context = createContext();


export const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = id => cart.filter(obj => obj.itemCart['id'] === id).length !== 0;

  const addToCart = (item, count) => {

    console.warn(`Esta en carrito? ${isInCart(item['id'])}`)

    if (isInCart(item['id'])) {
      alert(`${item.name} ya se encuentra en el carrito!`)
    } else {
      setCart([...cart, { itemCart: item, quantity: count }])
    }
  }

  const removeItem = item => {
    if (isInCart(item['id'])) {
      alert(`Intento de eliminar ${item['name']} - id de producto: ${item['id']}`)

      const filtered = cart.filter(obj => obj.itemCart['id'] !== item.id)

      setCart(filtered)
    }
    else {
      alert(`No hay id: ${item['id']}`)
    }
  }

  return <Context.Provider value={{ cart, addToCart, removeItem }}> {children} </Context.Provider>;
}