import React from 'react'
import "./carouselItem.scss";

const CarouselItem = ({className, children}) =>  {

    const checkMoreClasses = ()=> {
        let itemClasses = 'carItem '
        if (className !== undefined) {
            itemClasses += className
        } 
        return itemClasses
    }
    return (
        <div className={checkMoreClasses()} >
            {children}
        </div>
    )
}


export default CarouselItem;