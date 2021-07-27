import React, { useState } from 'react';
import questionBlock from './questionBlock.png'
import questionBlockUsed from './questionBlockUsed.png';
import './questionBlock.scss'

const QuestionBlock = () => {
  const [hits, setHits] = useState(0);
  const [used, setUsed] = useState(false);

  const manageUsed = (bool) => setUsed(bool)

  const addHit = () => {
    setHits(hits + 1)
    if (hits >= 5) { manageUsed(true) }
  }

  return (
    used
      ? <img className='questionBlockUsed' src={questionBlockUsed} alt="Bloque sorpresa" />
      : <img className='questionBlock' src={questionBlock} alt="Bloque sorpresa" onClick={addHit} />
  )
}

export default QuestionBlock;