import React, { useState } from 'react';

import { Title } from '../../atoms'

import { Form, Bill } from '../../organisms'

const Hotpot = () => {

  const [itemFormDetails, setItemFormDetails] = useState({itemInput: "", priceInput: 0})
  const [personFormDetails, setPersonFormDetails] = useState(["Select"])
  
  
  const handleItemFormDetails = (item, price) => {
    setItemFormDetails({itemInput: item, priceInput: price})
  }
  
  const handlePersonFormDetails = (person) => {
    setPersonFormDetails([...personFormDetails, person])
  }



  console.log(itemFormDetails)
  console.log(personFormDetails)


  return <>
    <Title text= "Create Bill"/>
    <Form handleItemFormDetails={handleItemFormDetails} handlePersonFormDetails = {handlePersonFormDetails} />
    <Bill itemDetails={itemFormDetails} personDetails={personFormDetails} />
  </>


}

export default Hotpot