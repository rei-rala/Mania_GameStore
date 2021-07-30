import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import SortMenuSelect from "../SortMenu/SortMenuSelect/SortMenuSelect";
import Loading from "../Loading/Loading";
import ItemList from './ItemList/ItemList'
import "./itemListContainer.scss";

import { database } from '../../firebase/firebase';

const ItemListContainer = () => {
  const { categoryName } = useParams() || null;
  const [displayProducts, setDisplayProducts] = useState(null);
  const [errorState, setErrorState] = useState(false);
  const [finishOk, setFinishOK] = useState(false);

  const [listChangeToggle, setListChangeToggle] = useState(false)
  const toggleListChange = () => setListChangeToggle(!listChangeToggle)

  const createError = err => setErrorState(err);

  useEffect(() => {

    const handleDisplay = setDisplayProducts;

    handleDisplay(null)

    const categoriesF = database.collection('categories');


    try {
      setTimeout(() => {
        createError('Se acabo el tiempo de espera, intente nuevamente')
        if (!finishOk) {
          setFinishOK(false)
        }
      }, 500)


      categoriesF.get().then(query => {
        return query.docs.map(doc => {
          return { ...doc.data() }
        })
      })
        .catch(error => { console.warn(error); throw error })
        .then(catFirebase => catFirebase.map(item => item.category))
        .then(r => {
          if (categoryName) {
            if (r.includes(categoryName)) {
              return r
            }
            else {
              createError('No hay articulos con esta categoria');
            }
          }
          else {
            return r
          }
        })
        .catch(createError)
        .then(() => {
          const productsF = database
            .collection('products')
            .where(
              'category',
              (categoryName && categoryName !== 'productos' ? '==' : '!='),
              (categoryName ? categoryName : 'None')
            );

          productsF.get()
            .then(r => {
              return r
            })
            .then(query => query.docs.map(doc => {
              return { ...doc.data(), id: doc.id }
            }))
            .then(handleDisplay)
            .then(r => setFinishOK(true))
        })
    }
    catch (err) {
      createError(err)
      setFinishOK(false)
    }

    console.info('Renderizado: Productos segun seccion')
  }, [categoryName, finishOk, setFinishOK])

  useEffect(() => {
    setDisplayProducts(displayProducts)
    console.log(listChangeToggle)
  }, [displayProducts, listChangeToggle])


  return (
    <>
      <h2 className='categoryTitle'>{categoryName ? categoryName.toUpperCase() : 'Todos los productos'}</h2>
      <hr />
      <SortMenuSelect displayFunction={setDisplayProducts} toSort={displayProducts} arraySortingTerms={['price', 'name']} varUseEffect={toggleListChange} />
      <div className="ItemListContainer">
        {
          !displayProducts
            ? <Loading sectionName={categoryName || 'productos'} />
            : errorState && !finishOk
              ? <div className="errorScreen"> <p>Error: <br />{errorState}</p> <Link to='/productos'><button>Ver productos</button></Link> </div>
              : displayProducts.map(prod => <ItemList key={prod.id} id={prod.id} name={prod.name} stock={prod.stock} image={process.env.PUBLIC_URL + prod.image} price={prod.price} promoted={prod.promoted} />)
        }
      </div >
    </>
  )
}

export default ItemListContainer;