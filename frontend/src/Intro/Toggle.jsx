import React, { useState } from 'react'

const Toggle = () => {
  const[isOn, setIsOn] = useState(false)

  return (
   <button onClick={() => setIsOn((prev)=> !prev )}>
    {isOn ? ("NO")  : ("OFF")}

   </button>
  )
}

export default Toggle