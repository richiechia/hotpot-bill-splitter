import React from 'react'

import { Button, TextInput } from '../../atoms'

const ItemForm = ({value, setValue, priceValue, setPriceValue, handleClick}) => {

  const handleItemForm = () => {
    handleClick(value, priceValue)
  }

  return ( 
    <>
    <h3> Item Form </h3>
    <div>
    <TextInput value={value} setValue={setValue} label="Item"/>
    <TextInput value={priceValue} setValue={setPriceValue} label= "Price"/>
    </div>
    <div>
    <Button text="Submit" handleClick= {handleItemForm}/>
    </div>
    </>
  )
}

export default ItemForm