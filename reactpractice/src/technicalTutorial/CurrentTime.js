import React from 'react'

const CurrentTime = () => {

    let name = 'Saeed'
    let currentDate = new Date().toLocaleDateString()
    let currentTime = new Date().toLocaleTimeString()



  return (
    <>
    <h1 contentEditable= 'true'>My name is {name}</h1>
    <p>Date is : {currentDate}</p>
    <p>Time is : {currentTime}</p>

    </>
  )
}

export default CurrentTime