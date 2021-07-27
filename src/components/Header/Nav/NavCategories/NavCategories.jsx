import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

import './navCategories.scss';

import { categories } from '../../../../data/categories.json'


const NavCategories = () => {

	const [categoriesList, setCategoriesList] = useState()
	const manageCategoriesList = categories => setCategoriesList(categories);

	useEffect(() => {
		console.info('Fetch de categorias')
		new Promise((resolve, reject) => {
			resolve(categories)

			setTimeout(() => reject('Timed out'), 10000)
		})
			.then(manageCategoriesList)
			.catch(console.error)
	}, [categoriesList])



	return (
		<div id='navCategories' className='catNav'>
			{
				categoriesList
					? <div className="container"> {
						<>
							<NavLink to='/promociones' className="categoriaMenu" activeClassName="currentPage"> Promos </NavLink>
							{categoriesList.map(cat => <NavLink key={cat.id} className="categoriaMenu" to={`/categorias/${cat.category}`} activeClassName="currentPage"> {cat.category} </NavLink>)}
						</>
					} </div>
					: 'Aguarde un momento'
			}
		</div >
	);
};


export default NavCategories;