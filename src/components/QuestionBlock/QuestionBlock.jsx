import React, { useState } from 'react';
import questionBlock from './questionBlock.png'
import questionBlockUsed from './questionBlockUsed.png';
import './questionBlock.scss'

const QuestionBlock = () => {
  const [hits, setHits] = useState(0);


  /*   const [display, setDisplay] = useState(false);
    const handleDisplay = () => setDisplay(!display) */

  return (
    <img
      className={hits <= 5 ? 'questionBlock' : 'questionBlockUsed'}
      onClick={() => { setHits(hits + 1) }}
      src={hits <= 5 ? questionBlock : questionBlockUsed}
      alt="Bloque sorpresa"
    />
  )
}

export default QuestionBlock;