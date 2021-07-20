import React, {useState} from 'react'
import QuestionBlock from "./QuestionBlock"

const TEST = ({children}) => {
	const [display, setDisplay] = useState(false);
  const manageDisplay = () => setDisplay(!display)

  return (
    <>
      <button className='qBtn' onClick={manageDisplay}> {children} </button>
      {display ? <QuestionBlock/>: null}
    </>
  )
}

export default TEST;