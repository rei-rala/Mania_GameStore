import React, { useState, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom';

import './navCategories.scss';

import { Categories } from '../../../../context/CategoriesContext';

const NavCategories = () => {

	const { categoriesFirebase } = useContext(Categories)

	const [categoriesList, setCategoriesList] = useState([])
	const manageCategoriesList = categories => setCategoriesList(categories);


	useEffect(() => {

		if (categoriesFirebase) {
			// Bueno, pronto lo hago funcionar al ordenamiento alfabetico de las categorias
			manageCategoriesList(categoriesFirebase.sort((a, b) => a.category > b.category ? 1 : -1))
			localStorage.setItem('Mania_categories', JSON.stringify(categoriesFirebase))
		}

	}, [categoriesFirebase])



	return (
		<div id='navCategories' className='catNav'>
			<h3>Categorias</h3>
			<hr />
			<NavLink to='/productos' className="categoriaMenu" activeClassName="currentPage"> Todos los productos </NavLink>
			<NavLink to='/promociones' className="categoriaMenu" activeClassName="currentPage"> 🔥 Promos 🔥 </NavLink>
			<hr />
			<div className="container">
				{
					categoriesList.length
						? <>
							<div className="categoriesList">
								{categoriesList.map(cat => <NavLink key={cat.id} className="categoriaMenu" to={`/categorias/${cat.category}`} activeClassName="currentPage"> {cat.category} </NavLink>)}
							</div>
						</>

						: <p className="categoriaMenu">	Aguarde un momento</p>
				}
			</div>
		</div >
	);
};


export default NavCategories;