import React, { createContext, useEffect, useState } from 'react';

export const Context = createContext();


export const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [firstExecution, setFirstExecution] = useState(true);
  const [cartSize, setCartSize] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);


  const manageCart = whatever => {
    setCart(whatever)

    try {
      localStorage.setItem('Mania_cart', JSON.stringify(whatever))
      if (JSON.parse(localStorage.getItem('Mania_cart')).length !== 0) {
        const localManiaCart = JSON.parse(localStorage.getItem('Mania_cart'))

        localStorage.setItem('Mania_cartSize', localManiaCart.reduce((totalQuantity, { quantity }) => {
          return totalQuantity + quantity
        }, 0));

        localStorage.setItem('Mania_cartTotal', localManiaCart.reduce((totalBill, { quantity, itemCart }) => {
          return totalBill + quantity * (itemCart.promoted ? itemCart.price * 0.85 : itemCart.price)
        }, 0))


        setCartSize(localStorage.getItem('Mania_cartSize'))
        setCartTotal(localStorage.getItem('Mania_cartTotal'))
      }
      else {
        localStorage.setItem('Mania_cartSize', '0');
        setCartSize(localStorage.getItem('Mania_cartSize'))
      }
    }
    catch (err) {
      clearCart()
    }
  };

  const firstExec = () => setFirstExecution(false);


  const isInCart = id => cart.filter(obj => obj.itemCart['id'] === id).length !== 0;

  const addToCart = (item, count) => {
    try {
      if (isInCart(item['id'])) {
        alert(`${item.name} ya se encuentra en el carrito!`)
      } else {
        manageCart([...cart, { itemCart: item, quantity: count }])
      }
    }
    catch (err) {
      clearCart()
    }
  }

  const removeFromCart = id => {
    try {
      if (isInCart(id)) {
        //alert(`Intento de eliminar ${item['name']} - id de producto: ${item['id']}`)
        const filtered = cart.filter(obj => obj.itemCart['id'] !== id)
        manageCart(filtered);
      }
      else {
      }
    }
    catch (err) {
      clearCart()
    }
  }

  const clearCart = () => {
    manageCart([])
    localStorage.clear()
  }

  useEffect(() => {
    try {
      if (firstExecution) {
        if (cart.length) { localStorage.setItem('Mania_cart', JSON.stringify(cart)) }
        else if (localStorage.getItem('Mania_cart')) {
          manageCart(JSON.parse(localStorage.getItem('Mania_cart')))
        }
      }
      firstExec()
    }
    catch (err) {
      clearCart()
    }
  })



  return <Context.Provider value={{ cart, isInCart, addToCart, removeFromCart, clearCart, cartSize, cartTotal }}> {children} </Context.Provider>;
}






