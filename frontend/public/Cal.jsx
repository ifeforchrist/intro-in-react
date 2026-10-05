import React, { useState } from 'react'
import "./Calculator.css"

const Calculator = () => {
    const [input, setInput] = useState("")
    const [result, setResult] = useState(0) // change true to 0
    const [operator, setOperator] = useState(null)

    const handleNumber = (num) =>{ // just rename Number to handleNumber
      setInput(input + num)
    }

    const handleOperator = (op) =>{ // rename Operator to handleOperator
      setOperator(op)
      setResult(Number(input)) // FIX 1: save first number to result
      setInput("") // FIX 2: was empty, now "" 
    }

    const calculate = () =>{
      const secondNum = Number(input)
      let final = 0
     
      switch(operator){ // FIX 3: was switch(Operator) now switch(operator) and INSIDE calculate
        case "plus":
          final = result + secondNum
          break // FIX 4: add break
        case "mins":
          final = result - secondNum
          break
        case "divide":
          final = result / secondNum
          break
        case "multiply":
          final = result * secondNum
          break
        default:
          final = secondNum
      }

      setResult(final)
      setInput(final.toString())
    }

  return (
    <div className='cal-container'>
      <input placeholder='Enter a number'
      value={input} 
      onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={() => handleOperator("plus")}>+</button>
      <button onClick={() => handleOperator("mins")}>-</button>
      <button onClick={() => handleOperator("multiply")}>*</button>
      <button onClick={() => handleOperator("divide")}>/</button>
      <button onClick={calculate}>=</button>
      <button onClick={() => handleNumber("7")}>7</button>

      <h3>Result:{result}</h3>
    </div>
  )
}

export default Calculator