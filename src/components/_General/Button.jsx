import React from 'react';
import './button.scss';
 
function nullText(text){
    if (text === undefined) {
        text = '*NO TEXT*'
    } 
    return text
}

const Button = ({btnClass, children}) => {  
        return (
            <button className={btnClass}>
                <span>
                    {children}
                </span>
            </button>
        )
    }


export default Button;