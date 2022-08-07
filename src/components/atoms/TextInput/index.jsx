import React from 'react';



const TextInput = ({value, setValue, label}) => {

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  // console.log(value)

  return (
  <label>
    {label}: {" "}
    <input value = {value} onChange={handleChange}/>
  </label>
  )
}

export default TextInput


