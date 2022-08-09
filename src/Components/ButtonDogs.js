import React from "react";



const ButtonDogs = ({onClick, text, icon, style}) =>{

    return (
        <button
            style={{
                borderRadius: '8px',
                padding: '1em',
                border: 'none',
                ...style
            }}
            onClick={onClick}
        >
            {icon}
            
            {text}
            </button>
    )
}

export default ButtonDogs