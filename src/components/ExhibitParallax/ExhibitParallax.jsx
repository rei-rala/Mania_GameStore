import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Categories } from '../../context/CategoriesContext';

import './exhibitParallax.scss'

const ExhibitParallax = () => {
  const { categoriesFirebase } = useContext(Categories)
  const [catParallaxItems, setCatParallaxItems] = useState(null)


  useEffect(() => {
    if (categoriesFirebase) {
      setCatParallaxItems(categoriesFirebase.sort((a, b) => a.category > b.category ? 1 : -1))
    }
  }, [categoriesFirebase])

  return (
    <div className="exhibitParallaxContainer">
      {
        !catParallaxItems
          ? 'Cargando'
          : catParallaxItems.map(cat => <Link key={cat.id} to={`/categorias/${cat.category}`} className="parallaxBox">
            <div className="catTitle">
              <h4>{cat.category}</h4>
            </div>
            <div className="imgContainer">
              <img src={process.env.PUBLIC_URL + cat.catImage} alt={`Categoria ${cat.category}`} />
            </div>
          </Link>
          )

      }
    </div>
  )
}

export default ExhibitParallax;