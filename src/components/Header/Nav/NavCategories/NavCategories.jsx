import React from 'react'
import './navCategories.scss';

const NavCategories = () => {
    return (
        <div id='navCategories' className='catNav'>

            <div className="container">
                <div className="cat1 categoriaMenu">Builds</div>
                <div className="cat2 categoriaMenu">Marcas</div>
                <div className="cat3 categoriaMenu">Perifericos</div>
                <div className="opc1 categoriaOpcion">
                    <p>Build 1</p>
                    <p>Build 2</p>
                    <p>Build 3</p>
                </div>
                <div className="opc2 categoriaOpcion">
                    <p>Marca 1</p>
                    <p>Marca 2</p>
                    <p>Marca 3</p>
                    <p>Marca 4</p>
                </div>
                <div className="opc3 categoriaOpcion">
                    <p>perifericos 1</p>
                    <p>perifericos 2</p>
                    <p>perifericos 3</p>
                    <p>perifericos 4</p>
                    <p>perifericos 5</p>
                    <p>perifericos 6</p>
                    <p>perifericos 7</p>
                    <p>perifericos 8</p>
                    <p>perifericos 9</p>
                    <p>perifericos 10</p>
                </div>
            </div>

        </div>
    );
};


export default NavCategories;