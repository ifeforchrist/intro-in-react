import React, { useState } from 'react'

const State = () => {
  const[Count, setCount] = useState(0)
  const increaseCount = ()=>{
    setCount(Count + 1)
  }

  const decreaseCount = ()=>{
    setCount(Count - 1)
  }
  return (
    <div>
      <button>Count: {Count}</button>
      <button onClick={increaseCount}> add volumne</button>
      <button onClick={decreaseCount}> reduce volumne</button>
    </div>
  )
}

export default State