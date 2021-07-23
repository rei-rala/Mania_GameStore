import React from 'react';
import './button.scss';

const Button = ({ btnClass, children }) => {
    return (
        <button className={btnClass}>
            {children ? children : 'Sin texto :('}
        </button>
    )
}


export default Button;