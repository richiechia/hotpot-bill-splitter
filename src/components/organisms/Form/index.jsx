import React, {useState} from 'react';

import { PersonForm, ItemForm } from '../../molecules'

const Form = ( {handleItemFormDetails, handlePersonFormDetails }) => {
  // Item Form
  const [itemName, setItemName] = useState("")
  const [price, setPrice] = useState(0)
  // Form
  const [name, setName] = useState("");

  
  return (
    <>
    <ItemForm value={itemName} setValue={setItemName} priceValue= {price} setPriceValue = {setPrice} handleClick={handleItemFormDetails}/>
    <PersonForm value={name} setValue={setName} handleClick={handlePersonFormDetails}/>
    </>
  )
}

export default Form