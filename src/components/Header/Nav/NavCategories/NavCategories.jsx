import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

import './navCategories.scss';

import { categories } from '../../../../data/categories.json'


const NavCategories = () => {

	const [categoriesList, setCategoriesList] = useState()
	const manageCategoriesList = categories => setCategoriesList(categories.map(cat => <NavLink key={cat.id} className="categoriaMenu" to={`/categorias/${cat.category}`} activeClassName="currentPage"> {cat.category} </NavLink>))

	useEffect(() => {
		console.info('Fetch de categorias')
		new Promise((resolve, reject) => {
			resolve(categories)
		})
			.then(manageCategoriesList)
	}, [])



	return (
		<div id='navCategories' className='catNav'>
			{
				categoriesList
					? <div className="container"> {categoriesList} </div>
					: 'Aguarde un momento'
			}
		</div >
	);
};


export default NavCategories;