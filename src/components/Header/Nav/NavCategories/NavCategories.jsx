import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

import './navCategories.scss';

import { database } from '../../../../firebase/firebase';

const NavCategories = () => {


	const [categoriesList, setCategoriesList] = useState([])
	const manageCategoriesList = categories => setCategoriesList(categories);

	useEffect(() => {
		console.info('Fetch de categorias')
		const categoriesF = database.collection('categories');

		categoriesF.get().then(query =>
			query.docs.map(doc => {
				return { ...doc.data(), id: doc.id }
			}))
			.then(r => manageCategoriesList([...r]))
			.catch(console.error)
	}, [])



	return (
		<div id='navCategories' className='catNav'>
			<div className="container">
				{
					categoriesList.length
						? <>
							<NavLink to='/promociones' className="categoriaMenu" activeClassName="currentPage"> Promos </NavLink>
							{categoriesList.map(cat => <NavLink key={cat.id} className="categoriaMenu" to={`/categorias/${cat.category}`} activeClassName="currentPage"> {cat.category} </NavLink>)}
						</>

						: <p className="categoriaMenu">	Aguarde un momento</p>
				}
			</div>
		</div >
	);
};


export default NavCategories;