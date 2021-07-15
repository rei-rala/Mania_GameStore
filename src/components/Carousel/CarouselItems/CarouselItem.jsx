import React from 'react'
import { CarouselItemStyled } from './CarouselItemStyle';

const CarouselItem = ({ className, children }) => {
    className = className || '';

    return (
        <CarouselItemStyled className={className += ' carItem'}>
            {children}
        </CarouselItemStyled>
    )
}


export default CarouselItem;