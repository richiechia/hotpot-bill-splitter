import React, { useState } from 'react';

import { Button, Dropdown } from '../../atoms'

const ItemList = ( {itemDetails, personList, handlePersonListDetail, personListDetails, accountOwed, setAccountOwed} ) => {

  const [personSelect, setPersonSelect] = useState("")

  const handleDropdown = (event) => {
    setPersonSelect(event.target.value)
  }

  const handleSubmitPersonList = () => {
    // handlePersonSelected(personSelect)
    handlePersonListDetail(`${personSelect},`)

    const object = {};
    object.name = personSelect
    object.item = itemDetails.itemInput
    object.price = itemDetails.priceInput

    setAccountOwed([...accountOwed, object])
  }

  return (
    <>
    <h3> Item List </h3>
    <div className="item-wrapper">
      <div className="itemName-price-wrapper">
        <div style = {{padding: '20px'}}>
          <h4> Item name: </h4> {itemDetails.itemInput !=='' ? <p>{itemDetails.itemInput}</p> : <p>-</p>}
        </div>
        <div style = {{padding: '20px'}}>
          <h4> Price: </h4> {itemDetails.priceInput !==0 ? <p>{itemDetails.priceInput}</p> : <p>-</p>}
        </div>
      </div>

      <div className= "">
        <Dropdown options={personList} handleChange={handleDropdown} />
        <Button text="Add Person" handleClick={handleSubmitPersonList}/>
      </div>
      <div>
        {personListDetails}
      </div>
        
    </div>
    </>
  )
}

export default ItemList