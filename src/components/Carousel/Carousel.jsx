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
				text: "Primer destacado",
				imgSrc: 'https://picsum.photos/id/100/800/600',
				link: '/'
			},
			{
				id: 6,
				text: "Segundo destacado",
				imgSrc: 'https://picsum.photos/id/200/800/600',
				link: '/'
			},
			{
				id: 7,
				text: "Tercer destacado",
				imgSrc: 'https://picsum.photos/id/300/800/600',
				link: '/'
			},
			{
				id: 8,
				text: "Cuarto destacado",
				imgSrc: 'https://picsum.photos/id/400/800/600',
				link: '/'
			},

		]
		manageDisplay(CarouselItems)
	}, [manageDisplay])

	return (<>
		{
			!display
				? null
				: <>
					<section className='carousel'>
						<div className="carouselHint">
						</div>
						<div className="carouselContainer">
							{
								display.map(i => <CarouselItem key={i.id}>
									{i.text ? <h3 className='titleBanner'><span>{i.text}</span></h3> : null}
									<img src={i.imgSrc} loading='lazy' width='800px' height='600px' alt='Producto X' />
									{i.link ? <Link to='/' className='linkBanner'><button> Ir a {i.text}</button></Link> : null}
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