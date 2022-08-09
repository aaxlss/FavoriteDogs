import React from "react";

const ButtonDogs = ({onClick, text}) =>{

    return (
        <button
            onClick={onClick}
        >{text}</button>
    )
}

export default ButtonDogs