import React, { useState } from "react";


const Item = ({ id, name, image, description, stock, price }) => {

  let [inputValue, otherBtn] = [null, null];

  const [count, setCount] = useState(0);

  const [viewInfo, setViewInfo] = useState(true)
  const viewProductInfo = () => setViewInfo(!viewInfo)

  const manageQuantity = (e) => {
    const btnTarget = e.target;

    if (btnTarget.innerText === '+') {
      inputValue = btnTarget.previousElementSibling;
      otherBtn = inputValue.previousElementSibling;
      otherBtn.classList.remove('toppedQuantity')
      addOne()

    }
    else {
      inputValue = btnTarget.nextElementSibling;
      otherBtn = inputValue.nextElementSibling;
      otherBtn.classList.remove('toppedQuantity')
      subsOne()
    };

    function addOne() {
      if (count >= stock) {
        btnTarget.classList.add('toppedQuantity')
        console.info(`No puedes comprar mas que el stock de ${stock}`)
        return
      }
      setCount(count + 1)
    }

    function subsOne() {
      if (!count || count === 0) {
        btnTarget.classList.add('toppedQuantity')
        console.info('No puedes comprar menos que 0')
        return
      }
      setCount(count - 1)
    }
  }

  // No funciona del todo bien, pero cuando vea las proximas clases seguro habra manera de realizarlo
  if (!viewInfo) return null

  return (
    <>
      <div className="productInformation">
        <div className='productInformationBody'>
          <h1>{name}</h1>
          <p>Codigo Producto 000{id}</p>
          <img src={image} alt={name} />
          <p>{description}</p>
        </div>

        <div className='productInformationFooter'>
          <h3>Seleccione cantidad - Nuestro stock es de {stock}</h3>
          <h4>Precio por unidad  <i>${price}</i></h4>
          <div className='itemCountContainer' >
            <button className='editQuantity' onClick={manageQuantity}>-</button>
            <input type="text" className='prodQuantity' value={count} readOnly />
            <button className='editQuantity' onClick={manageQuantity}>+</button>
          </div>
          <div className="commands">
            <button>Agregar al carrito</button> <button onClick={viewProductInfo}>Volver</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item