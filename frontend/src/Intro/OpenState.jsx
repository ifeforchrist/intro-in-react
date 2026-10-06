import React, { useState } from 'react'

const OpenState = () => {
    const[isOpen, setIsOpen] = useState(false)
    if(isOpen){
        <h1>Welcome to our Mart</h1>
    }else{
        <h1>Closed</h1>
    }
  return (
    <div>
      <button onClick={isOpen ?"Open" : "Close"}></button>
      
    </div>
  )
}

export default OpenState