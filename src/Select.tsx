import React from 'react'

const Select = ({setColor}) => {
    const changeColor = (selected) => {
        const {value} = selected.target
        setColor(value)
    }
    
  return (
    <select onChange={changeColor}>
        <option> green</option>
        <option> red</option>
        <option> blue</option>
    </select>
  )
}

export default Select