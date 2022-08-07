import React from 'react'

import { TextInput, Button } from '../../atoms'

const PersonForm = ( {value, setValue, handleClick} ) => {

  const handlePersonDetails = () => {
    handleClick(value)
    setValue("")
  }


  return (
    <>
    <h3> Form </h3>
    <TextInput value={value} setValue={setValue} label="Person Name" />
    <Button text= "Submit" handleClick={handlePersonDetails}/>
    </>
  )
}

export default PersonForm