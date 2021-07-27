import React from 'react'
import './carouselItem.scss'


const CarouselItem = ({ className, children }) => {
    className = className || '';

    return (
        <div className={className += ' carItem'}>
            {children}
        </div>
    )
}


export default CarouselItem;