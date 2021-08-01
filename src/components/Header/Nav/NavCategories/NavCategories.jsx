import React, { useState, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom';

import './navCategories.scss';

import { Categories } from '../../../../context/CategoriesContext';

const NavCategories = () => {

	const { categoriesData } = useContext(Categories)

	const [categoriesList, setCategoriesList] = useState([])
	const manageCategoriesList = categories => setCategoriesList(categories);


	useEffect(() => {
		console.info('Fetch de categorias')

		if (categoriesData) {
			// Bueno, pronto lo hago funcionar al ordenamiento alfabetico de las categorias
			manageCategoriesList(categoriesData.sort((a, b) => a.category > b.category ? 1 : -1))
			localStorage.setItem('Mania_categories', JSON.stringify(categoriesData))
		}

	}, [categoriesData])



	return (
		<div id='navCategories' className='catNav'>
			<div className="container">
				{
					categoriesList.length
						? <>
							<NavLink to='/promociones' className="categoriaMenu" activeClassName="currentPage"> 🔥 Promos 🔥 </NavLink>
							{categoriesList.map(cat => <NavLink key={cat.id} className="categoriaMenu" to={`/categorias/${cat.category}`} activeClassName="currentPage"> {cat.category} </NavLink>)}
						</>

						: <p className="categoriaMenu">	Aguarde un momento</p>
				}
			</div>
		</div >
	);
};


export default NavCategories;