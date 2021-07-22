import React from 'react'
import { Link } from 'react-router-dom';

import './navCategories.scss';

const NavCategories = () => {
    return (
        <div id='navCategories' className='catNav'>

            <div className="container">
                <Link className="cat1 categoriaMenu" to='/categorias/notebooks'> Notebooks </Link>
                <Link className="cat2 categoriaMenu" to='/categorias/perifericos'> Perifericos </Link>
                <div className="cat3 categoriaMenu">Marcas</div>

                <div className="opc1 categoriaOpcion">
                    <p>Notebooks 1</p>
                    <p>Notebooks 2</p>
                    <p>Notebooks 3</p>
                </div>
                <div className="opc2 categoriaOpcion">
                    <p>periferico 1</p>
                    <p>periferico 2</p>
                    <p>periferico 3</p>
                    <p>periferico 4</p>
                    <p>periferico 5</p>
                </div>
                <div className="opc3 categoriaOpcion">
                    <p>marca 1</p>
                    <p>marca 2</p>
                    <p>marca 3</p>
                    <p>marca 4</p>
                    <p>marca 5</p>
                </div>
            </div>

        </div>
    );
};


export default NavCategories;