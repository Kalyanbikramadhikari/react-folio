import React from 'react'

const Button = ({text, icon}) => {
    // console.log(icon, text)
    return (
        <button className="bg-white border-red-800 border-solid  text-blue-500 hover:bg-blue-400 font-bold py-2  mr-2 rounded-3xl h-14 px-6">
            <span>{text}</span>
            {icon && <i className={icon}></i>}
        </button>
    )
}

export default Button