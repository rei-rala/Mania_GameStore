import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import './navCategories.scss';

import { products } from '../../../../test.json'


const NavCategories = () => {

    const [productList, setProductList] = useState({})

    useEffect(() => {
        new Promise((resolve, reject) => {
            resolve(products)
        })
            .then(setProductList)
    }, [setProductList])



    return (
        <div id='navCategories' className='catNav'>

            {productList
                ? <>
                    <div className="container">

                        <Link className="cat1 categoriaMenu" to='/categorias/notebooks'> Notebooks </Link>
                        <Link className="cat2 categoriaMenu" to='/categorias/perifericos'> Perifericos </Link>
                        <Link className="cat3 categoriaMenu" to='/categorias/misc'>Misc</Link>

                        {/*
                        <div className="opc1 categoriaOpcion">
                                <p>Note 1</p>
                            </div>
                            <div className="opc2 categoriaOpcion">
                                <p>periferico 1</p>

                            </div>
                            <div className="opc3 categoriaOpcion">
                                <p>marca 1</p>
                            </div>
                        */}
                    </div>
                </>
                : {}}

        </div >
    );
};


export default NavCategories;