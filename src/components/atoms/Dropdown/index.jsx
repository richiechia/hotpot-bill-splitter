import React from 'react';


const Dropdown = ( {options, handleChange}) => {

  return (
  <>
  <select onChange= {handleChange}>
    {options.map((option) => (
      <option key={option} value={option.value}> {option}</option>
    ))
    }
  </select>
  </>
  )
}

export default Dropdown