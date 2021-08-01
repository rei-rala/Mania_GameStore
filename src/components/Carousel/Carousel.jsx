import React, { useEffect, useState } from 'react';
import CarouselItem from './CarouselItems/CarouselItem';
import './carousel.scss'

import { Link } from 'react-router-dom';

const Carousel = () => {
	const [display, setDisplay] = useState(null)

	const manageDisplay = setDisplay;

	useEffect(() => {
		const CarouselItems = [
			{

				id: 5,
				title: "Nostalgia",
				text: 'Visita nuestra seccion de nostalgia, en la que tendremos consolas y accesorios para tu consola',
				imgSrc: 'https://firebasestorage.googleapis.com/v0/b/mania-gamestore.appspot.com/o/oldDoom.png?alt=media&token=a0b8b9ba-8939-46d7-a918-d05da1b126f7',
				link: '/'
			},
			{
				id: 6,
				title: "Segundo Destacado",
				text: 'Visita nuestra seccion',
				imgSrc: 'https://picsum.photos/id/200/800/600',
				link: '/'
			},
			{
				id: 7,
				title: "Destacado 3",
				text: 'Visita nuestra seccion',
				imgSrc: 'https://picsum.photos/id/300/800/600',
				link: '/'
			},
			{
				id: 8,
				title: "Ultimo",
				text: 'Visita nuestra seccion',
				imgSrc: 'https://picsum.photos/id/400/800/600',
				link: '/'
			},

		]
		manageDisplay(CarouselItems)
	}, [manageDisplay])

	return (<>
		{
			!display
				? 'Cargando...'
				: <>
					<section className='carousel'>
						<div className="carouselHint">
						</div>
						<div className="carouselContainer">
							{
								display.map(i => <CarouselItem key={i.id}>
									{i.title ? <h3 className='titleBanner'><span>{i.title}</span></h3> : null}
									{i.text ? <p className='textBanner'><span>{i.text}</span></p> : null}
									<img src={(i.imgSrc).charAt(0) === '/' ? (process.env.PUBLIC_URL + i.imgSrc) : i.imgSrc} loading='lazy' width='800px' height='600px' alt='Producto X' />
									{i.link ? <Link to='/' className='linkBanner'><button> Ir a {i.title}</button></Link> : null}
								</CarouselItem>)
							}
						</div>
					</section>
				</>

		}
	</>
	)
}

export default Carousel;