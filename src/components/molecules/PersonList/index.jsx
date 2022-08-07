import React from 'react'


const PersonList = ({ accountOwed }) => {
  console.log('***************', accountOwed)
  return (
    <div>
    <h4> Amount Owed Person List </h4>
    {accountOwed.map((account,index) => (
      <p key={index}>
        {account.name} | ${account.price}
      </p>
    ))}
    </div>
  )
}

export default PersonList