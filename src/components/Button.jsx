import React from 'react'

const Button = (props) => {
  const {name, handlerFunction, isActive = false} = props;
  return (
    <button className='bg-gray-300 text-gray-500 font-bold px-3 py-2 rounded-md hover:bg-gray-950 hover:text-white' 
    style={isActive ? {
      backgroundColor: '#030712',
      color: '#ffffff'
    } : {}}
    onClick={() => handlerFunction(name)}>{name}</button>
  )
}

export default Button