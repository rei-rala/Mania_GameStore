import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import SortMenuSelect from "../SortMenu/SortMenuSelect/SortMenuSelect";
import Loading from "../Loading/Loading";
import ItemList from './ItemList/ItemList'
import "./itemListContainer.scss";

import { database } from '../../firebase/firebase';
import { Categories } from "../../context/CategoriesContext";

const ItemListContainer = () => {
  const { categoriesFirebase } = useContext(Categories)

  const { categoryName } = useParams() || null;
  const [displayProducts, setDisplayProducts] = useState(null);

  const [errorState, setErrorState] = useState(false);

  // ? todo lo relacionado a productImgPreview esta en fase experimental
  //const [productImgPreview, setProductImgPreview] = useState(null);

  const [listChangeToggle, setListChangeToggle] = useState(false)
  const toggleListChange = () => setListChangeToggle(!listChangeToggle)
  /* const manageProductImgPreview = e => {
    console.info('Renderizado preview')
    e.type === 'mouseenter' ? setProductImgPreview({ src: e.target.src, alt: e.target.alt }) : setProductImgPreview(null);
    console.info(e)
    e.preventDefault()
  }; */

  const createError = err => setErrorState(err);

  useEffect(() => {

    const handleDisplay = setDisplayProducts;
    handleDisplay(null)

    try {
      console.warn(categoryName)
      if (categoryName && categoriesFirebase) {
        const allCategories = categoriesFirebase.map(obj => obj.category)

        if (!allCategories.includes(categoryName)) {
          createError('No hay articulos con esta categoria');
          return console.warn('No hay errores con esta categoria')
        }
      }

      database
        .collection('products')
        .where(
          'category',
          (categoryName ? '==' : '!='),
          (categoryName ? categoryName : 'None')
        )
        .get()
        .then(query => {
          return query.docs.map(doc => {
            return { ...doc.data(), id: doc.id }
          })
        })
        .then(handleDisplay)
    }
    catch (err) {
      createError(err)
    }

    console.info('Renderizado: Productos segun seccion')
  }, [categoriesFirebase, categoryName])

  useEffect(() => {
    setDisplayProducts(displayProducts)
    //console.log(listChangeToggle)
  }, [displayProducts, listChangeToggle])


  return (
    <>
      <h2 className='categoryTitle'>{categoryName ? categoryName.toUpperCase() : 'Todos los productos'}</h2>
      <hr />
      <SortMenuSelect displayFunction={setDisplayProducts} toSort={displayProducts} arraySortingTerms={['price', 'name', 'stock']} varUseEffect={toggleListChange} />
      <div className="ItemListContainer">
        {
          !displayProducts
            ? <Loading sectionName={categoryName || 'productos'} />
            : errorState
              ? <div className="errorScreen"> <p>Error: <br />{errorState}</p> <Link to='/productos'><button>Ver productos</button></Link> </div>
              : displayProducts.map(prod => <ItemList key={prod.id} id={prod.id} name={prod.name} stock={prod.stock} image={(prod.image).charAt(0) === '/' ? process.env.PUBLIC_URL + prod.image : prod.image} price={prod.price} promoted={prod.promoted} /* preview={manageProductImgPreview} */ />)
        }
      </div >

{/*       {
        !productImgPreview
          ? null
          : <div className="previewFromHover">
            <img onMouseEnter={manageProductImgPreview} onMouseLeave={manageProductImgPreview} src={productImgPreview.src} alt={productImgPreview.alt} />
          </div>
      } */}
    </>
  )
}

export default ItemListContainer;