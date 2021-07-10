import React from 'react'

import "./navCart.scss";

const NavCart = () => {
    return (
        <div className='navCart'>
            <h3>MI carrito</h3>
            <hr />

            <ul>
                <li>articulo n1 <img src="./shoppingCart.png" alt='' /> </li>
                <li>articulo n2 <img src="./shoppingCart.png" alt='' /> </li>
                <li>articulo n3 <img src="./shoppingCart.png" alt='' /> </li>
                <li>articulo n4 <img src="./shoppingCart.png" alt='' /> </li>
            </ul>
        </div>
    )
}

export default NavCart;