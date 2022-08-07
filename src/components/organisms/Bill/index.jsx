import React, { useState } from 'react';

import { ItemList, PersonList } from '../../molecules'

const Bill = ( { itemDetails, personDetails } ) => {
  const [personListDetails, setPersonListDetails] = useState([])
  const [accountOwed, setAccountOwed] = useState([])

  const handlePersonListDetails = (person) => {
    setPersonListDetails([...personListDetails, person])
  }


  return (
    <>
    <ItemList itemDetails={itemDetails} personList= {personDetails} handlePersonListDetail={handlePersonListDetails} personListDetails={personListDetails} accountOwed = {accountOwed} setAccountOwed= {setAccountOwed} />
    <PersonList accountOwed={accountOwed}  />
    </>
  )
}

export default Bill