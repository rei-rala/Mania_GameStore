import React from 'react';
import CarouselItem from './CarouselItems/CarouselItem';
import './carousel.scss'


function Car(e) {
    /*    
    Esta funcion obtiene:
    -El parentNode y su valor 'Active'
    -El valor carvalue del boton (-1 o 1)
     */
    const carousel = e.target.parentNode
    const carouselActual = parseInt(carousel.dataset.active)
    const elementosCarousel = carousel.childElementCount
    let pressed = parseInt(e.target.dataset.carvalue)


    /* 
    Con los valores obtenidos,
    remuevo la clase active para darsela al nuevo elemento del carousel
     */
    carousel.children[carouselActual].classList.remove('active')
    let newValue = 0;

    /* 
    Estos 2 condicionales responden a cuando nos excedemos por encima y por debajo
    de los valores iterables del carousel (respectivamente)
    */
    if (carouselActual + pressed === elementosCarousel - 1) {
        newValue = 1;
    }
    else if (carouselActual + pressed === 0) {
        newValue = elementosCarousel - 2;
    }
    else {
        newValue = carouselActual + pressed
    }
    carousel.children[newValue].classList.add('active')

    // Le doy el nuevo valor al elemento contenedor para la proxima ejecucion
    carousel.dataset.active = newValue.toString();
}



const Carousel = () => {
    /* EL PRIMER ITEM DEL CAROUSEL DEBE LLEVAR LA CLASE ACTIVE */
    return (<>
        <div className="carouselHint">
            <i >Por ahora, el carousel tiene imagenes stock</i>
        </div>
        <section className='carousel' data-active='1'>
            <button className='carBtn cbBack' data-carvalue='-1' onClick={Car} title='Anterior'>&lt;</button>

            <CarouselItem className='active'>  <img src='https://picsum.photos/800/600' alt='Producto X' /> </CarouselItem>
            <CarouselItem>  <img src='https://picsum.photos/801/600' alt='Producto X' /> </CarouselItem>
            <CarouselItem>  <img src='https://picsum.photos/802/600' alt='Producto X' /> </CarouselItem>
            <CarouselItem>  <img src='https://picsum.photos/803/600' alt='Producto X' /> </CarouselItem>
            <CarouselItem>  <img src='https://picsum.photos/804/600' alt='Producto X' /> </CarouselItem>

            <button className='carBtn cbNext' data-carvalue='1' onClick={Car} title='Siguiente'>&gt;</button>
        </section>
    </>
    )
}

export default Carousel;