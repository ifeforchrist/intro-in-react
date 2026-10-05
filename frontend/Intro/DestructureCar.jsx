import React from 'react'

export const DestructureCar = (props) => {
    const {name, brand, model} = props
  return (
    <div>
        <h1>I love {name}, especially {brand} and this {model}  </h1>
    </div>
  )
}

export default DestructureCar


 